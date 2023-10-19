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
    display: flex;
    flex-direction: row-reverse;
    justify-self: flex-end;
    align-self: center;

    align-items: center;
    gap: 1em;
}

.avatar {
    width: 3em;
    height: 3em;
}
</style>
