<script setup lang="ts">
    import Avatar from '#/components/user/Avatar.vue';
    import { useAuthStore } from '#/stores/Auth.store';

    const auth = useAuthStore();

    console.log(auth.currentUser);    
</script>

<template>
    <div class="account" v-if="auth.currentUser">
        <Avatar class="avatar" />
        <span class="name">User</span>
    </div>
</template>

<style scoped lang="scss">
    .account {
        max-width: max-content;

        display: flex;
        justify-self: end;
        flex-direction: row;

        align-items: center;
        gap: 1em;
    }

    .avatar {
        width: 3em;
        height: 3em;
    }
</style>
