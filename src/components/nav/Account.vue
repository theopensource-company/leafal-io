<script setup lang="ts">
    import Avatar from '@/components/user/Avatar.vue';
</script>

<template>
    <div class="account">
        <Avatar class="avatar" />
        <span class="name">User</span>
    </div>
</template>

<style scoped lang="scss">
    .account {
        max-width: max-content;
        
        display: flex;
        justify-self: end;
        flex-direction: row-reverse;

        align-items: center;
        gap: 1em;
    }

    .avatar {
        width: 3em;
        height: 3em;
    }
</style>