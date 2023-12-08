<script setup lang="ts">
    import Logo from '~/components/brand/Logo.vue'

    const auth = useAuthStore()

    if (process.client)
        auth.authenticate(localStorage.getItem('lflsess') ?? '')
</script>

<template>
    <div class="overlay">
        <div class="ribbon">
            <NavLink path="/" class="logo">
                <Logo />
            </NavLink>
            <div class="account" v-if="auth.user">
                <span class="name" >{{ auth.user.profile.displayname ?? auth.user.username }}</span>
                <img :src="auth.user.avatar" :alt="auth.user.username" v-if="auth.user">
            </div>
            <a href="/auth" v-else>Log in</a>
        </div>
    </div>
    <div class="content">
        <slot />
    </div>
</template>

<style scoped lang="scss">
.overlay {
    width: 100vw;

    position: fixed;
    top: 0;
    z-index: 1001;
}

.ribbon {
    backdrop-filter: blur(16px) brightness(30%);
    background-color: var(--light-frosted);
    border-bottom: 1px solid var(--dark2);

    display: flex;
    max-height: 3rem;
    padding: 1.5rem;
    flex-direction: row;
    align-items: center;
}

.content {
    margin-top: 6rem;
    overflow: hidden;
}

.logo {
    font-size: 3rem;
    margin-right: auto;
}

.account {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    max-height: 3rem;

    gap: 1em;

    img {
        width: 3rem;
        height: 3rem;
        object-fit: cover;
        border-radius: 50%;
    }
}
</style>