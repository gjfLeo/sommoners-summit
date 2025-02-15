<template>
  <NH2 id="title" un-flex="~ gap-4">
    <span>{{ t('admin.tournament.title') }}</span>
    <div class="ml-auto">
      <template v-if="!editing">
        <CommonIconButton icon="i-mingcute:edit-line" @click="editing = true">{{ t('admin.action.edit') }}</CommonIconButton>
      </template>
      <template v-else>
        <CommonIconButton icon="i-mingcute:save-2-line" @click="save">{{ t('admin.action.save') }}</CommonIconButton>
      </template>
    </div>
  </NH2>

  <CommonTransition>
    <NForm v-if="editing" ref="formRef" :rules="rules" :model="tournament">
      <NGrid class="gap-2!">
        <NFormItemGi :span="24" :label="t('main.tournament.name')" path="name">
          <NInputLocale v-model:value="tournament.name" />
        </NFormItemGi>
        <NFormItemGi :span="6" :label="t('terms.gameVersion')" path="gameVersion">
          <GameVersionSelect v-model:value="tournament.gameVersion" />
        </NFormItemGi>
        <NFormItemGi :span="6" :label="t('terms.region')" path="region">
          <FormRegionSelect v-model:value="tournament.region" />
        </NFormItemGi>
        <NFormItemGi :span="6" :label="t('main.tournament.type')" path="type">
          <AdminTournamentTypeSelect v-model:value="tournament.type" />
        </NFormItemGi>
      </NGrid>
    </NForm>
    <NDescriptions v-else label-placement="left" :column="3" separator="&emsp;">
      <NDescriptionsItem :label="t('main.tournament.name')" :span="3">{{ currentLocalized(tournament.name) }}</NDescriptionsItem>
      <NDescriptionsItem :label="t('terms.gameVersion')">{{ tournament.gameVersion }}</NDescriptionsItem>
      <NDescriptionsItem :label="t('terms.region')">{{ currentLocalized(regionByKey[tournament.region]?.name) }}</NDescriptionsItem>
      <NDescriptionsItem :label="t('main.tournament.type')">{{ tournament.type }}</NDescriptionsItem>
    </NDescriptions>
  </CommonTransition>

  <TransitionGroup name="common-transition-group">
    <template v-for="(stage, stageIndex) in tournament.stages" :key="stage._key">
      <AdminTournamentStageForm
        ref="stageFormRefs"
        v-model="tournament.stages[stageIndex]"
        :editing="editing"
        :stage-index="stageIndex"
        @delete="tournament.stages.splice(stageIndex, 1)"
      />
    </template>

    <NButton
      v-if="editing" :key="-1"
      class="mt w-full" dashed
      @click="addStage"
    >
      <template #icon><div class="i-mingcute:add-line" /></template>
      <template #default>{{ t('admin.tournament.addStage') }}</template>
    </NButton>
  </TransitionGroup>

  <NFloatButton
    v-if="!editing"
    type="primary"
    right="2rem" bottom="2rem"
    @click="editing = true"
  >
    <div class="i-mingcute:edit-line" />
  </NFloatButton>
  <NFloatButton
    v-if="editing"
    type="primary"
    right="2rem" bottom="2rem"
    @click="save"
  >
    <div class="i-mingcute:save-2-line" />
  </NFloatButton>
  <AdminTournamentMatchEditor ref="matchEditor" :tournament-id="tournament.id" @done="emit('save', tournament.id)" />
</template>

<script lang="ts" setup>
import AdminTournamentMatchEditor from "./match/MatchEditor.vue";
import { AdminTournamentStageForm, NForm } from "#components";
import type { CardId, Tournament, TournamentId } from "~/types/data";

const emit = defineEmits<{
  (e: "save", tournamentId: TournamentId): void;
}>();

const tournament = defineModel<Tournament>({ required: true });

const { t, currentLocalized } = useLocales();
const message = useMessage();
const { regionByKey } = useSharedData();

const formRef = ref<InstanceType<typeof NForm>>();
const stageFormRefs = ref<InstanceType<typeof AdminTournamentStageForm>[]>([]);

const editing = ref(!tournament.value.id);

const rules: FormRules = {
  name: {
    trigger: "blur",
    validator: async () => {
      if (!currentLocalized(tournament.value.name)) {
        throw new Error(t("admin.validate.pleaseInput", [t("main.tournament.name")]));
      }
    },
  },
  region: {
    trigger: "change",
    validator: async () => {
      if (!tournament.value.region) {
        throw new Error(t("admin.validate.pleaseSelect", [t("terms.region")]));
      }
    },
  },
  gameVersion: {
    trigger: "change",
    validator: async () => {
      if (!tournament.value.gameVersion) {
        throw new Error(t("admin.validate.pleaseSelect", [t("terms.gameVersion")]));
      }
    },
  },
  type: {
    trigger: "change",
    validator: async () => {
      if (!tournament.value.type) {
        throw new Error(t("admin.validate.pleaseSelect", [t("main.tournament.type")]));
      }
    },
  },
};

async function save() {
  const results = await Promise.allSettled([
    validateForm(formRef),
    ...stageFormRefs.value.map(stageForm => stageForm.validate()),
  ]);
  const messages = results
    .flatMap<string>(result => result.status === "rejected"
      ? result.reason
      : []);
  messages.forEach(m => message.error(m));
  if (messages.length) return;

  const res = await $fetch("/api/v3/tournaments/save", {
    method: "POST",
    body: tournament.value,
  });
  if (res.success) {
    message.success(t("admin.message.SUCCESS"));
    editing.value = false;
    emit("save", res.id);
  }
}

let key = tournament.value.stages.length;
function addStage() {
  tournament.value.stages.push({
    _key: key++,
    name: {},
    parts: [{
      _key: 0,
      name: {},
      date: dayjs().subtract(20, "hours").format("YYYY-MM-DD"),
      matchIds: [],
    }],
    rules: undefined,
  });
}

const matchEditor = ref<InstanceType<typeof AdminTournamentMatchEditor>>();
provideLocal("matchEditor", matchEditor);

const { gameVersionLatest } = useSharedData();
const preferredGameVersion = computed(() => {
  return tournament.value.gameVersion || gameVersionLatest.value || undefined;
});

const actionCardNumUsages = ref<Record<CardId, number>>({});
provide("actionCardNumUsages", actionCardNumUsages);
watch(preferredGameVersion, async () => {
  const res = await $fetch("/api/v3/cards/getActionCardStats", {
    params: preferredGameVersion.value ? { preferredGameVersion: preferredGameVersion.value } : undefined,
  });
  if (res.success) {
    actionCardNumUsages.value = Object.fromEntries(
      res.actionCardStats.map(item => [
        item.cardId,
        item.numUsages,
      ]),
    );
  }
}, { immediate: true });

const characterCardNumUsages = ref<Record<CardId, number>>({});
provide("characterCardNumUsages", characterCardNumUsages);
watch(preferredGameVersion, async () => {
  const res = await $fetch("/api/v3/cards/getCharacterCardStats", {
    params: preferredGameVersion.value ? { preferredGameVersion: preferredGameVersion.value } : undefined,
  });
  if (res.success) {
    characterCardNumUsages.value = Object.fromEntries(
      res.characterCardStats.map(item => [
        item.cardId,
        item.numGames + item.numBanned,
      ]),
    );
  }
}, { immediate: true });
</script>
