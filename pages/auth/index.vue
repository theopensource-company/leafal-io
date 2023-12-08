<script setup lang="ts">
    const auth = useAuthStore()

    const registerInfo = ref({
        username: "",
        email: "",
        password: ""
    })
    
    const loginInfo = ref({
        identifier: "",
        password: ""
    })

    const login = async () => {
        const { identifier, password } = loginInfo.value
        auth.signIn(identifier, password)
    }

    const register = async () => {
        const { username, email, password } = registerInfo.value
        auth.signUp(username, email, password)
    }
</script>

<template>
    <h1>Login</h1>
    <form @submit.prevent="login">
        <input type="text" placeholder="Username or e-mail..." v-model="loginInfo.identifier">
        <input type="password" placeholder="Password..." v-model="loginInfo.password">
        <button type="submit">Submit</button>
    </form>
    <h1>Register</h1>
    <form @submit.prevent="register">
        <input type="text" placeholder="Username..." v-model="registerInfo.username">
        <input type="text" placeholder="E-mail..." v-model="registerInfo.email">
        <input type="password" placeholder="Password..." v-model="registerInfo.password">
        <button type="submit">Submit</button>
    </form>
    <button @click.prevent="auth.signOut">Sign out</button>
</template>

<style scoped lang="scss">
    form {
        display: flex;
        flex-direction: column;
        max-width: 30em;
    }
</style>