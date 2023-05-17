'use client';
import { useEffect } from 'react';
import { useAuthenticatedUser, useSignIn, useSignOut, useSignUp } from './hooks/Queries/Auth';
import SignInForm from './components/Forms/SignInForm';
import SignUpForm from './components/Forms/SignUpForm';

export default function Home() {

  return (
    <main>      
      <SignInForm />
      <SignUpForm />
    </main>
  )
}
