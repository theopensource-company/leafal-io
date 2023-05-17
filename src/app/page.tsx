'use client';
import { useEffect, useState } from 'react';
import { useAuthenticatedUser, useSignIn, useSignOut, useSignUp } from './hooks/Queries/Auth';
import SignInForm from './components/Forms/SignInForm';

export default function Home() {
  const { refetch: refetchAuthenticatedUser } = useAuthenticatedUser();
  const { mutate: signOut, data: signOutSuccess } = useSignOut();

  // Effect to refetch on success of any of them.
  useEffect(() => {
    refetchAuthenticatedUser();
  }, [signOutSuccess, refetchAuthenticatedUser]);

  return (
    <main>
      <SignInForm />

      <button onClick={() => signOut()}>Sign out</button>

      <form onSubmit={(e) => e.preventDefault()}>
        
      </form>
    </main>
  )
}
