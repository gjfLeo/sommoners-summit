<template>
  <div v-if="false" />
</template>

<script lang="ts" setup>
const loadingBar = useLoadingBar();
const { beforeEach, afterEach } = useRouter();
beforeEach(() => loadingBar.start());
afterEach(() => loadingBar.finish());
</script>
