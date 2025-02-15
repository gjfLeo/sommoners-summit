<template>
  <div>
    <NBreadcrumb>
      <NBreadcrumbItem :href="localePath('/admin/tournaments')">{{ t("site.titles.admin.tournaments") }}</NBreadcrumbItem>
      <NBreadcrumbItem>{{ t("site.titles.admin.tournament") }}</NBreadcrumbItem>
    </NBreadcrumb>

    <!-- <pre class="fixed z-1 w-16rem">{{ tournament }}</pre> -->
    <AdminTournamentForm v-model="tournament" @save="queryTournamentDetail" />

    <SitePageAnchors>
      <NAnchorLink
        :title="t('admin.tournament.title')"
        href="#title"
      >
        <NAnchorLink
          v-for="stage in tournament.stages"
          :key="stage._key"
          :title="currentLocalized(stage.name) ?? t('main.tournament.stage')"
          :href="`#S${stage._key}`"
        >
          <template v-if="stage.parts.length > 1">
            <NAnchorLink
              v-for="part in stage.parts"
              :key="part._key"
              :title="currentLocalized(part.name) ?? t('main.tournament.part')"
              :href="`#S${stage._key}P${part._key}`"
            />
          </template>
        </NAnchorLink>
      </NAnchorLink>
    </SitePageAnchors>
  </div>
</template>

<script lang="ts" setup>
import type { Game, GameId, Match, MatchId, Tournament, TournamentId } from "~/types";

const route = useRoute("admin-tournament-tournamentId___zh");
const id = route.params.tournamentId;

const { t, currentLocalized } = useLocales();
useHead({ title: t("site.titles.admin.tournament") });
const localePath = useLocalePath();

const { data, refresh } = await useFetch("/api/v3/tournaments/get", {
  query: { id: id as string },
  immediate: false,
});

const tournament = ref<Tournament>({
  id: "",
  name: {},
  gameVersion: "",
  region: "CN",
  type: "",
  stages: [],
});
const matches = ref<Record<MatchId, Match>>({});
const games = ref<Record<GameId, Game>>({});

async function queryTournamentDetail(tournamentId?: TournamentId) {
  if (tournamentId && tournamentId !== id) {
    await navigateTo({ name: route.name, params: { tournamentId } });
  }
  else {
    await refresh();
    if (!data.value) {
      await navigateTo({ name: route.name });
      return;
    }
    tournament.value = data.value.tournament;
    matches.value = data.value.matches;
    games.value = data.value.games;
  }
}

if (id) {
  await queryTournamentDetail();
}

provide("matches", matches);
provide("games", games);
</script>
