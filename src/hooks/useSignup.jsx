import { useState, useEffect } from 'react';
import { useAuthContext } from './useAuthContext';
import { projectAuth, projectStorage, projectFirestore } from 'firebase/config';
import { createUserWithEmailAndPassword, updateProfile } from '@firebase/auth';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { doc, setDoc } from '@firebase/firestore';

export const useSignup = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const signup = async (email, password, displayName, thumbnail) => {
    setError(null);
    setIsPending(true);

    try {
      const res = await createUserWithEmailAndPassword(
        projectAuth,
        email,
        password
      );

      if (!res) {
        throw new Error('Could not complete signup');
      }

      const uploadPath = `thumbnails/${res.user.uid}/${thumbnail.name}`;

      const uploadRef = ref(projectStorage, uploadPath);

      await uploadBytes(uploadRef, thumbnail);

      const imgUrl = await getDownloadURL(uploadRef);

      await updateProfile(res.user, { displayName, photoURL: imgUrl });

      const userRef = doc(projectFirestore, 'users', res.user.uid);

      await setDoc(userRef, {
        online: true,
        displayName,
        photoURL: imgUrl,
      });

      dispatch({ type: 'LOGIN', payload: res.user });

      if (!isCancelled) {
        setIsPending(false);
        setError(null);
      }
    } catch (err) {
      if (!isCancelled) {
        setError(err.message);
        setIsPending(false);
      }
    }
  };

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { signup, error, isPending };
};
