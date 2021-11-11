import { useReducer, useEffect, useState } from 'react';
import { projectFirestore, timestamp } from 'firebase/config';
import {
  addDoc,
  collection,
  doc,
  deleteDoc,
  updateDoc,
} from '@firebase/firestore';

const initialState = {
  document: null,
  isPending: false,
  error: null,
  success: null,
};

const firestoreReducer = (state, action) => {
  switch (action.type) {
    case 'IS_PENDING':
      return { ...state, isPending: true, success: false };
    case 'ADDED_DOCUMENT':
      return { ...state, document: action.payload, success: true };
    case 'DELETED_DOCUMENT':
      return { ...state, success: true };
    case 'UPDATED_DOCUMENT':
      return { ...state, isPending: true, success: true };
    case 'ERROR':
      return {
        ...state,
        success: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const useFirestore = (collectionName) => {
  const [response, dispatch] = useReducer(firestoreReducer, initialState);
  const [isCancelled, setIsCancelled] = useState(false);

  // collection ref
  const collRef = collection(projectFirestore, collectionName);

  // only dispatch is not cancelled
  const dispatchIfNotCancelled = (action) => {
    if (!isCancelled) {
      dispatch(action);
    }
  };

  // add a document
  const addDocument = async (doc) => {
    dispatch({ type: 'IS_PENDING' });

    try {
      const createdAt = timestamp.fromDate(new Date());
      const addedDocument = await addDoc(collRef, { ...doc, createdAt });
      dispatchIfNotCancelled({
        type: 'ADDED_DOCUMENT',
        payload: addedDocument,
      });
    } catch (err) {
      dispatchIfNotCancelled({ type: 'ERROR', payload: err.message });
    }
  };

  // delete a document
  const deleteDocument = async (id) => {
    dispatch({ type: 'IS_PENDING' });

    try {
      const docRef = doc(projectFirestore, collectionName, id);
      await deleteDoc(docRef);
      dispatchIfNotCancelled({ type: 'DELETED_DOCUMENT' });
    } catch (err) {
      dispatchIfNotCancelled({ type: 'ERROR', payload: 'could not delete' });
    }
  };

  // update a document
  const updateDocument = async (id, updates) => {
    dispatch({ type: 'IS_PENDING' });

    try {
      const docRef = doc(projectFirestore, collectionName, id);

      const updatedDocument = await updateDoc(docRef, updates);

      dispatchIfNotCancelled({
        type: 'UPDATED_DOCUMENT',
        payload: updatedDocument,
      });
    } catch (err) {
      dispatchIfNotCancelled({ type: 'ERROR', payload: 'could not update' });
    }
  };

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { addDocument, deleteDocument, updateDocument, response };
};
