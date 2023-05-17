'use client';
import { useEffect, useState } from 'react';
import { useAuthenticatedUser, useSignIn, useSignOut, useSignUp } from './hooks/Queries/Auth';

// KNOWN BUGS:
// - Auto-fill will ruin states of identifiers and passwords, making them empty. We should useRef for this.

export default function Home() {
  const [ identifier, setIdentifier ] = useState<string>("");
  const [ password, setPassword ] = useState<string>("");

  const { data: authenticatedUser, refetch: refetchAuthenticatedUser } = useAuthenticatedUser();
  const { mutate: signIn, data: signInSuccess, isLoading } = useSignIn();
  const { mutate: signOut, data: signOutSuccess } = useSignOut();
  const { mutate: signUp, data: signUpSuccess } = useSignUp();
  
  const doSignIn = () => {
    signIn({ identifier: identifier, password: password });
  }

  const [ username, setUsername ] = useState<string>("");
  const [ firstName, setFirstName ] = useState<string>("");
  const [ lastName, setLastName ] = useState<string>("");
  const [ email, setEmail ] = useState<string>("");
  const [ signUpPassword, setSignupPassword ] = useState<string>("");
  
  const doSignUp = () => {
    signUp({ username: username, firstname: firstName, lastname: lastName, email, password: signUpPassword });
  }

  // Effect to refetch on success of any of them.
  useEffect(() => {
      refetchAuthenticatedUser();
  }, [signInSuccess, signOutSuccess, signUpSuccess, refetchAuthenticatedUser]);

  return (
    <main>
      <form onSubmit={(e) => e.preventDefault()}>
        <h1>Sign In</h1>
        <input type="text" placeholder="Identifier..." onChange={(e) => setIdentifier(e.currentTarget.value)} />
        <input type="password" placeholder="Password..." onChange={(e) => setPassword(e.currentTarget.value)} />
        <button type="submit" onClick={doSignIn}>Sign in</button>
      </form>

      <button onClick={() => signOut()}>Sign out</button>

      <form onSubmit={(e) => e.preventDefault()}>
        <h1>Sign Up</h1>
        <input type="text" placeholder="Username..." onChange={(e) => setUsername(e.currentTarget.value)} />
        <input type="text" placeholder="First name..." onChange={(e) => setFirstName(e.currentTarget.value)} />
        <input type="text" placeholder="Last name..." onChange={(e) => setLastName(e.currentTarget.value)} />
        <input type="text" placeholder="Email..." onChange={(e) => setEmail(e.currentTarget.value)} />
        <input type="password" placeholder="Password..." onChange={(e) => setSignupPassword(e.currentTarget.value)} />
        <button type="submit" onClick={doSignUp}>Sign up</button>
      </form>
    </main>
  )
}
