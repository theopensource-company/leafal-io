import { useAuthenticatedUser, useSignUp } from "@/app/hooks/Queries/Auth";
import { FormEvent, useEffect, useRef } from "react";

export default function SignInForm() {
    const username = useRef<HTMLInputElement>(null);
    const firstname = useRef<HTMLInputElement>(null);
    const lastname = useRef<HTMLInputElement>(null);
    const email = useRef<HTMLInputElement>(null);
    const password = useRef<HTMLInputElement>(null);

    const { data: authenticatedUser, refetch: refetchAuthenticatedUser } = useAuthenticatedUser();
    const { mutate: signUp, data: signUpSuccess } = useSignUp();

    const submit = (e: FormEvent) => {
        e.preventDefault();

        signUp({
            username: username.current?.value ?? "",
            firstname: firstname.current?.value ?? "",
            lastname: lastname.current?.value ?? "",
            email: email.current?.value ?? "",
            password: password.current?.value ?? ""
        });
    }

    useEffect(() => {
        refetchAuthenticatedUser();
    }, [signUpSuccess, refetchAuthenticatedUser]);

    return <form onSubmit={submit}>
        <h1>Sign Up</h1>
        <input ref={username} type="text" placeholder="Username..." />
        <input ref={firstname} type="text" placeholder="First name..." />
        <input ref={lastname} type="text" placeholder="Last name..." />
        <input ref={email} type="text" placeholder="Email..." />
        <input ref={password} type="password" placeholder="Password..." />
        <button type="submit">Sign up</button>
    </form>;
}