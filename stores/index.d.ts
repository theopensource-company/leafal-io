import type { Surreal } from "surrealdb.js"

declare module '#app' {
    interface NuxtApp {
        $surreal: Surreal
    }
}

declare module 'vue' {
    interface ComponentCustomProperties {
        $surreal: Surreal
    }
}

export { }