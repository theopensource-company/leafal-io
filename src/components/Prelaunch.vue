<script setup lang="ts"></script>

<template>
  <div class="base">
    <img class="logo" src="/logo.svg">
  </div>
</template>

<style scoped lang="scss">
  .base {
    margin: 0 auto;
    display: grid;
    place-items: center;
    width: 100%;
    min-height: 100vh;
    min-height: 100svh;

    background: radial-gradient(circle at 50%, var(--dark2), var(--dark) 150%);
  }

  .logo {
    max-width: 10em;
    filter: none;
    transition: filter .2s ease;
    &:hover { filter: drop-shadow(0 0 .5em #3dad2caa); }
  }
</style>
