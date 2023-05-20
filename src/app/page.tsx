'use client';

import * as React from 'react';

import SignInForm from './components/Forms/SignInForm';
import SignUpForm from './components/Forms/SignUpForm';

export default function Home() {
    return (
        <main>
            <SignInForm />
            <SignUpForm />
        </main>
    );
}
