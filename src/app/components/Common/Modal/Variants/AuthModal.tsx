import * as React from 'react';

import styles from './AuthModal.module.scss';

import SignInForm from '@/app/components/Forms/SignInForm';
import SignUpForm from '@/app/components/Forms/SignUpForm';
import { useAuthenticatedUser } from '@/app/hooks/Queries/Auth';
import { useEffect, useState } from 'react';
import { Modal, ModalProps } from '../Modal';

export function AuthModal(props: Omit<ModalProps, 'title'>) {
    const [showingSignUp, setShowingSignUp] = useState<boolean>(false);
    const { data: authenticatedUser } = useAuthenticatedUser();

    useEffect(() => {
        if (authenticatedUser) props.setOpen(false);
    }, [authenticatedUser, props]);

    useEffect(() => setShowingSignUp(false), [setShowingSignUp, props.open]);

    return (
        <Modal
            {...props}
            title={`${
                showingSignUp ? 'Create' : 'Sign in to'
            } leafal.io account`}
        >
            <div className={styles.authModal}>
                {showingSignUp ? <SignUpForm /> : <SignInForm />}
                <a
                    className={styles.switch}
                    onClick={() => setShowingSignUp(!showingSignUp)}
                >
                    {showingSignUp
                        ? `Already have an account?`
                        : `Don't have an account yet?`}
                </a>
            </div>
        </Modal>
    );
}
