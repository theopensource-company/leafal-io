/*export const useSignin = async (identifier: string, password: string) => new Promise((resolve, reject) => {
    const database = useDatabase()
        .then(async c => 
            c.signin({
                identifier,
                password,
                scope: 'user',
                namespace: import.meta.env.VITE_SURREAL_NAMESPACE,
                database: import.meta.env.VITE_SURREAL_DATABASE,
            })
                .then(auth => resolve(auth))
                .catch(reject)
        )
        .catch(reject)
})

export const useSignup = async (username: string, email: string, password: string) => new Promise((resolve, reject) => {
    useDatabase()
        .then(async c => 
            c.signup({
                scope: 'user',
                namespace: import.meta.env.VITE_SURREAL_NAMESPACE,
                database: import.meta.env.VITE_SURREAL_DATABASE,
                username,
                email,
                password,
            })
                .then(auth => resolve(auth))
                .catch(reject)
        )
        .catch(reject)
})*/
