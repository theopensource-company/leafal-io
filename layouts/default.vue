<script setup lang="ts">
    import Logo from '~/components/brand/Logo.vue';
</script>

<template>
    <div class="overlay">
        <div class="ribbon">
            <NavLink path="/" class="logo">
                <Logo />
            </NavLink>
            <div class="account">
                test
            </div>
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
</style>