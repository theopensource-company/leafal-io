'use client';
import * as React from 'react';

import { useAuthenticatedUser, useSignIn } from '@/app/hooks/Queries/Auth';
import { TActionSignInUser } from '@/constants/types/User.types';
import { useEffect } from 'react';
import { FieldErrors, useForm } from 'react-hook-form';
import { Button } from '../Common/Input/Button';
import { TextInput } from '../Common/Input/TextInput';

export default function SignInForm() {
    const { refetch: refetchAuthenticatedUser } = useAuthenticatedUser();
    const { mutate: signIn, data: signInSuccess } = useSignIn();
    const { register, handleSubmit } = useForm<TActionSignInUser>();

    const onFailure = async (faulty: FieldErrors<TActionSignInUser>) => {
        console.log(faulty);
    };

    useEffect(() => {
        refetchAuthenticatedUser();
    }, [signInSuccess, refetchAuthenticatedUser]);

    return (
        <form onSubmit={handleSubmit((v) => signIn(v), onFailure)}>
            <TextInput
                {...register('identifier', {
                    validate: (v) => v && v !== '',
                })}
                placeholder="Identifier..."
            />
            <TextInput
                {...register('password', {
                    validate: (v) => v && v !== '',
                })}
                type={'password'}
                placeholder="Password..."
            />
            <Button type="submit">Sign in</Button>
        </form>
    );
}
