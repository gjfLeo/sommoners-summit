<template>
  <NPopconfirm
    :positive-button-props="{ size: 'tiny', type: 'error' }"
    :negative-button-props="{ size: 'tiny' }"
    @positive-click="$emit('confirm')"
  >
    <template #trigger>
      <NElement>
        <NButton
          text
          style="
            --n-text-color-hover: var(--error-color-hover);
            --n-text-color-pressed: var(--error-color-pressed);
            --n-text-color-focus: var(--error-color-focus);
          "
        >
          <div class="i-mingcute:delete-2-line" />
        </NButton>
      </NElement>
    </template>
    <template #default>
      <slot />
    </template>
  </NPopconfirm>
</template>

<script lang="ts" setup>
defineEmits<{
  (e: "confirm"): void;
}>();
</script>
