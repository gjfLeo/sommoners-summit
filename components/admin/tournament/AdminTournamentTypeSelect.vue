<template>
  <NSelect
    v-model:value="tournamentType"
    :options="options"
    :loading="options.length === 0"
    :fallback-option="false"
    filterable
    :placeholder="t('main.tournament.type')"
    clearable
    v-bind="$attrs"
  />
</template>

<script lang="ts" setup>
const { tournamentTypeList } = useSharedData();
const { t } = useLocales();

const tournamentType = defineModel<string>("value");

const options = computed<SelectOption[]>(() => {
  return tournamentTypeList.value.map(v => ({
    label: v.value,
    value: v.value,
  }));
});
</script>
