<template>
  <div u-flex="inline justify-center">
    <NTooltip
      v-for="card in cards" :key="card"
      :delay="500"
    >
      <template #default>
        <span>{{ currentLocalized(characterCardById[card].name) }}</span>
      </template>
      <template #trigger>
        <CardAvatar
          :card="card"
          alt=""
          class="mr--1 h-8 border border-light-9 rd-50% last-mr-0"
        />
      </template>
    </NTooltip>
  </div>
</template>

<script lang="ts" setup>
import type { CardId, DeckTeamId } from "~/types";

const props = defineProps<{
  team: DeckTeamId | CardId[];
}>();

const { characterCardById } = useSharedData();
const { currentLocalized } = useLocales();

const cards = computed<CardId[]>(() => {
  if (typeof props.team === "string") {
    return getCharacterCardsByTeamId(props.team);
  }
  else {
    return props.team;
  }
});
</script>
