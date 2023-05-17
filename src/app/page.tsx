'use client';
import { useEffect, useState } from 'react';
import { useAuthenticatedUser, useSignIn, useSignOut, useSignUp } from './hooks/Queries/Auth';
import SignInForm from './components/Forms/SignInForm';
import SignUpForm from './components/Forms/SignUpForm';

export default function Home() {
  const { data: authenticatedUser, refetch: refetchAuthenticatedUser } = useAuthenticatedUser();
  const { mutate: signOut, data: signOutSuccess } = useSignOut();

  // Effect to refetch on success of any of them.
  useEffect(() => {
    refetchAuthenticatedUser();
  }, [signOutSuccess, refetchAuthenticatedUser]);

  return (
    <main>
      {authenticatedUser && <button onClick={() => signOut()}>Sign out</button>}
      
      <SignInForm />
      <SignUpForm />
    </main>
  )
}