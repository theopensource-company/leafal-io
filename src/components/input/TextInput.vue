<script setup lang="ts">
    const props = defineProps(['fieldStyle', 'modelValue']);
    const emit = defineEmits<{
        (e: 'update:modelValue', value: string | number): void
    }>()
</script>

<template>
    <input 
        :class="[
            'default',
            'style-' + props.fieldStyle,
            !modelValue && 'empty'
        ]"
        v-bind="$attrs"
        :value="modelValue"
        @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)">
</template>

<style scoped lang="scss">
    .default {
        display: block;
        font-size: 1em;
        line-height: 1em;
        padding: .5em .75em;
        border-radius: .5em;
        transition: .2s ease;

        border: none;
        background-color: var(--light-frosted);
        backdrop-filter: blur(5px);
        color: var(--light1);
        outline: none;

        .empty { color: var(--light2); }

        &:hover, &:focus {
            color: var(--light1);
        }
    }
</style>