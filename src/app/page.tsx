'use client';
import { useEffect, useState } from 'react';
import { useAuthenticatedUser, useSignIn } from './hooks/Queries/Auth';

export default function Home() {
  const [ identifier, setIdentifier ] = useState<string>("");
  const [ password, setPassword ] = useState<string>("");

  const { mutate: signIn, data: success, isLoading } = useSignIn();
  const { data: authenticatedUser, refetch: refetchAuthenticatedUser } = useAuthenticatedUser();
  
  const doSignIn = () => {
    signIn({ identifier: identifier, password: password });
  }

  useEffect(() => {
    console.log(authenticatedUser);
  }, [authenticatedUser]);

  useEffect(() => {
    refetchAuthenticatedUser();
  }, [success, refetchAuthenticatedUser]);

  return (
    <main>
      <h1>Username: {authenticatedUser?.username}</h1>

      <div>
        <input type="text" placeholder="Identifier..." onChange={(e) => setIdentifier(e.currentTarget.value)} />
        <input type="password" placeholder="Password..." onChange={(e) => setPassword(e.currentTarget.value)} />
        <button type="submit" onClick={doSignIn}>Sign in</button>
      </div>
    </main>
  )
}
