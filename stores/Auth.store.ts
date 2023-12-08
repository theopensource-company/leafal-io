import { Surreal } from "surrealdb.js"
import { useSurreal } from "~/composables/useSurreal"
import type { User } from "~/constants/types/User.types"

export type AuthState = {
    token?: string,
    user?: User
}

export const useAuthStore = defineStore('auth', {
    state: () => ({ token: undefined, user: undefined } as AuthState),
    actions: {
        async fetch() {
            const results = await useSurreal().query<[User[]]>("SELECT * FROM user WHERE id = $auth.id")
            console.log(results);
                      
            this.user = results[0][0]
        },
        async signUp(username: string, email: string, password: string) {
            const token = await useSurreal().signup({
                scope: 'user',
                namespace: import.meta.env.VITE_SURREAL_NAMESPACE,
                database: import.meta.env.VITE_SURREAL_DATABASE,
                username,
                email,
                password,
            })
            await this.authenticate(token)
        },
        async signIn(identifier: string, password: string) {
            const token = await useSurreal().signin({
                scope: 'user',
                namespace: import.meta.env.VITE_SURREAL_NAMESPACE,
                database: import.meta.env.VITE_SURREAL_DATABASE,
                identifier,
                password,
            })
            await this.authenticate(token)
        },
        async authenticate(token: string) {
            if (await useSurreal().authenticate(token)) localStorage.setItem('lflsess', token)
            this.fetch()
        },
        async signOut() {
            await useSurreal().invalidate()
            localStorage.removeItem('lflsess')
            this.fetch()
        }
    }
})