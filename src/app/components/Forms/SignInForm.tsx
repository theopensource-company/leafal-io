'use client';
import * as React from 'react';

import { useAuthenticatedUser, useSignIn } from '@/app/hooks/Queries/Auth';
import { FormEvent, useEffect, useRef } from 'react';

export default function SignInForm() {
    const identifier = useRef<HTMLInputElement>(null);
    const password = useRef<HTMLInputElement>(null);

    const { refetch: refetchAuthenticatedUser } = useAuthenticatedUser();
    const { mutate: signIn, data: signInSuccess } = useSignIn();

    const submit = (e: FormEvent) => {
        e.preventDefault();

        signIn({
            identifier: identifier.current?.value ?? '',
            password: password.current?.value ?? '',
        });
    };

    useEffect(() => {
        refetchAuthenticatedUser();
    }, [signInSuccess, refetchAuthenticatedUser]);

    return (
        <form onSubmit={submit}>
            <h1>Sign In</h1>
            <input ref={identifier} type="text" placeholder="Identifier..." />
            <input ref={password} type="password" placeholder="Password..." />
            <button type="submit" onClick={submit}>
                Sign in
            </button>
        </form>
    );
}
