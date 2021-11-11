import { useEffect, useState, useRef } from 'react';
import { projectFirestore } from 'firebase/config';
import {
  collection,
  onSnapshot,
  query,
  where,
  orderBy,
} from 'firebase/firestore';

export const useCollection = (collectionName, _query, _orderBy) => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);

  const queryRef = useRef(_query).current;
  const orderByRef = useRef(_orderBy).current;

  useEffect(() => {
    let collRef = collection(projectFirestore, collectionName);

    if (queryRef) {
      collRef = query(collRef, where(...queryRef));
    }
    if (orderByRef) {
      collRef = query(collRef, orderBy(orderByRef));
    }

    const unsub = onSnapshot(
      collRef,
      (snapshot) => {
        let results = [];
        snapshot.docs.forEach((doc) => {
          results.push({ ...doc.data(), id: doc.id });
        });

        setDocuments(results);
        setError(null);
      },
      (error) => {
        console.log(error);
        setError('could not fetch the data');
      }
    );

    return () => unsub();
  }, [collectionName, queryRef, orderByRef]);

  return { documents, error };
};
