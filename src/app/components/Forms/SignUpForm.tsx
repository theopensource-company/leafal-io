'use client';
import * as React from 'react';

import { useAuthenticatedUser, useSignUp } from '@/app/hooks/Queries/Auth';
import { FormEvent, useEffect, useRef } from 'react';
import { Button } from '../Common/Input/Button';
import { TextInput } from '../Common/Input/TextInput';

export default function SignUpForm() {
    const username = useRef<HTMLInputElement>(null);
    const firstname = useRef<HTMLInputElement>(null);
    const lastname = useRef<HTMLInputElement>(null);
    const email = useRef<HTMLInputElement>(null);
    const password = useRef<HTMLInputElement>(null);

    const { refetch: refetchAuthenticatedUser } = useAuthenticatedUser();
    const { mutate: signUp, data: signUpSuccess } = useSignUp();

    const submit = (e: FormEvent) => {
        e.preventDefault();

        signUp({
            username: username.current?.value ?? '',
            firstname: firstname.current?.value ?? '',
            lastname: lastname.current?.value ?? '',
            email: email.current?.value ?? '',
            password: password.current?.value ?? '',
        });
    };

    useEffect(() => {
        refetchAuthenticatedUser();
    }, [signUpSuccess, refetchAuthenticatedUser]);

    return (
        <form onSubmit={submit}>
            <TextInput
                reference={username}
                type="text"
                placeholder="Username..."
            />
            <TextInput
                reference={firstname}
                type="text"
                placeholder="First name..."
            />
            <TextInput
                reference={lastname}
                type="text"
                placeholder="Last name..."
            />
            <TextInput reference={email} type="text" placeholder="Email..." />
            <TextInput
                reference={password}
                type="password"
                placeholder="Password..."
            />
            <Button type="submit">Sign up</Button>
        </form>
    );
}
