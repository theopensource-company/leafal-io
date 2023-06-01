'use client';
import * as React from 'react';

import { useAuthenticatedUser, useSignUp } from '@/app/hooks/Queries/Auth';
import { TActionSignUpUser } from '@/constants/types/User.types';
import { useEffect } from 'react';
import { FieldErrors, useForm } from 'react-hook-form';
import { Button } from '../Common/Input/Button';
import { TextInput } from '../Common/Input/TextInput';

export default function SignUpForm() {
    const { refetch: refetchAuthenticatedUser } = useAuthenticatedUser();
    const { mutate: signUp, data: signUpSuccess } = useSignUp();
    const { register, handleSubmit } = useForm<TActionSignUpUser>();

    const onFailure = async (faulty: FieldErrors<TActionSignUpUser>) => {
        console.log(faulty);
    };

    useEffect(() => {
        refetchAuthenticatedUser();
    }, [signUpSuccess, refetchAuthenticatedUser]);

    return (
        <form onSubmit={handleSubmit((v) => signUp(v), onFailure)}>
            <TextInput
                {...register('username', {
                    validate: (v) => v && v !== '',
                })}
                type="text"
                placeholder="Username..."
            />
            <TextInput
                {...register('firstname', {
                    validate: (v) => v && v !== '',
                })}
                type="text"
                placeholder="First name..."
            />
            <TextInput
                {...register('lastname', {
                    validate: (v) => v && v !== '',
                })}
                type="text"
                placeholder="Last name..."
            />
            <TextInput
                {...register('email', {
                    validate: (v) => v && v !== '',
                })}
                type="text"
                placeholder="Email..."
            />
            <TextInput
                {...register('password', {
                    validate: (v) => v && v !== '',
                })}
                type="password"
                placeholder="Password..."
            />
            <Button type="submit">Sign up</Button>
        </form>
    );
}
