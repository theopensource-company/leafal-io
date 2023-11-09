<script setup lang="ts">
    import Prelaunch from '@/components/Prelaunch.vue';
    import { useFeatureFlags } from '@/library/featureFlags';
import { database } from '@/library/surreal';
    import { ref } from 'vue';
    const [flags] = useFeatureFlags();

    const submitLogin = () => {
        console.log("Logging in");
        
        database.signin({
            scope: 'user',
            identifier: loginIdentifier.value,
            password: loginPassword.value
        }).then((result) => alert(result)).catch((err) => alert("Error: " + err))
    }

    const submitRegister = () => {
        database.signup({
            scope: 'user',
            username: registerUsername.value,
            email: registerEmail.value,
            password: registerPassword.value
        }).then((result) => alert(result)).catch((err) => alert("Error: " + err))
    }

    const   loginIdentifier = ref(""), 
            loginPassword = ref(""),
            registerUsername = ref(""),
            registerEmail = ref(""),
            registerPassword = ref("");
</script>

<template>
    <Prelaunch v-if="flags.preLaunch" />
    <div v-else>
        <h1>Login</h1>
        <form @submit.prevent="submitLogin">
            <input v-model="loginIdentifier" type="text" placeholder="Username/email">
            <input v-model="loginPassword" type="password" placeholder="Password">
            <button type="submit">Submit</button>
        </form>

        <h1>Register</h1>
        <form @submit.prevent="submitRegister">
            <input v-model="registerUsername" type="text" placeholder="Username">
            <input v-model="registerEmail" type="text" placeholder="Email">
            <input v-model="registerPassword" type="text" placeholder="Password">
            <button type="submit">Submit</button>
        </form>
    </div>
</template>

<style scoped lang="scss"></style>
