<script setup lang="ts">
    const { fieldStyle, modelValue } = defineProps<{
        fieldStyle?: string;
        modelValue?: string;
    }>();
    const emit = defineEmits<{
        (e: 'update:modelValue', value: string | number): void;
    }>();
</script>

<template>
    <input
        :class="[
            'default',
            fieldStyle && 'style-' + fieldStyle,
            !modelValue && 'empty',
        ]"
        v-bind="$attrs"
        :value="modelValue"
        @input="
            emit('update:modelValue', ($event.target as HTMLInputElement).value)
        "
    />
</template>

<style scoped lang="scss">
    .default {
        display: block;
        font-size: 1em;
        line-height: 1em;
        padding: 0.5em 0.75em;
        border-radius: 0.5em;
        transition: 0.2s ease;

        border: none;
        background-color: var(--dark2);
        color: var(--light1);
        outline: none;

        .empty {
            color: var(--light2);
        }

        &:hover,
        &:focus {
            color: var(--light1);
        }
    }
</style>
