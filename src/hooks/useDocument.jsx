import { useEffect, useState } from 'react';
import { projectFirestore } from 'firebase/config';
import { doc, onSnapshot } from '@firebase/firestore';

export const useDocument = (collectionName, id) => {
  const [document, setDocument] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const docRef = doc(projectFirestore, collectionName, id);

    const unsubscribe = onSnapshot(
      docRef,
      (snapshot) => {
        if (snapshot.data()) {
          setDocument({ ...snapshot.data(), id: snapshot.id });
          setError(null);
        } else {
          setError('No such document exists');
        }
      },
      (err) => {
        console.log(err.message);
        setError('Failed to get document');
      }
    );

    return () => unsubscribe();
  }, [collectionName, id]);

  return { document, error };
};
