'use client';
import * as React from 'react';

import { useAuthenticatedUser, useSignIn } from '@/app/hooks/Queries/Auth';
import { FormEvent, useEffect, useRef } from 'react';
import { Button } from '../Common/Input/Button';
import { TextInput } from '../Common/Input/TextInput';

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
            <TextInput reference={identifier} placeholder="Identifier..." />
            <TextInput
                reference={password}
                type={'password'}
                placeholder="Password..."
            />
            <Button type="submit">Sign in</Button>
        </form>
    );
}
