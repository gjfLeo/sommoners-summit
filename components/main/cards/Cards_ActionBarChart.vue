<template>
  <div un-flex="~ col" class="h-[calc(100vh-16rem)] min-h-30rem">
    <NText :depth="3" class="text-sm">{{ t('main.cards.actionBarChart.summary', [numGameDecks]) }}</NText>
    <div
      ref="chart"
      class="mt flex-1"
    >
      <VChart
        v-if="chartHeight > 0"
        :option="option" autoresize
      />
    </div>
    <div un-flex="~ col" class="mt">
      <NText :depth="3" class="text-sm">{{ t('main.cards.actionBarChart.averageNumUsagesDescription') }}</NText>
      <NText :depth="3" class="text-sm">{{ t('main.cards.actionBarChart.averageInWinDescription') }}</NText>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { divide, format } from "mathjs/number";
import type { ActionCardStats } from "~/types";

const props = defineProps<{
  actionCardStats: ActionCardStats[];
  numGameDecks: number;
}>();

const { t } = useLocales();
const { actionCardById } = await useAsyncSharedData();
const themeVars = useThemeVars();
const chart = ref<ComponentPublicInstance>();
const { height: chartHeight, width: chartWidth } = useElementSize(chart);
const barNum = computed(() => Math.floor((chartWidth.value - remToPx(3)) / remToPx(3)));

const data = computed(() => {
  return props.actionCardStats
    .map(item => ({
      cardId: item.cardId,
      image: actionCardById.value[item.cardId].image,
      averageNumUsages: item.numUsages / props.numGameDecks,
      averageInWin: divide(item.numUsagesWin, item.numGameDecksWin),
    }))
    .sort(sorter("averageNumUsages"))
    .reverse();
});

const option = computed<ECOption>(() => {
  return {
    grid: [
      {
        top: remToPx(3),
        left: remToPx(3),
        right: remToPx(0),
        bottom: chartHeight.value * 0.5,
        containLabel: false,
      },
      {
        top: chartHeight.value * 0.5 + remToPx(1 + 1.5 * (12 / 7)),
        left: remToPx(3),
        right: remToPx(0),
        bottom: remToPx(3),
        containLabel: false,
      },
    ],
    dataZoom: [
      {
        type: "inside",
        xAxisIndex: [0, 1],
        filterMode: "filter",
        start: 0,
        maxValueSpan: barNum.value,
        minValueSpan: barNum.value,
        zoomLock: true,
        zoomOnMouseWheel: false,
        moveOnMouseMove: true,
        moveOnMouseWheel: true,
      },
      {
        type: "slider",
        xAxisIndex: [0, 1],
        showDetail: false,
        handleSize: 0,
        brushSelect: false,
        height: remToPx(1),
        bottom: 0,
      },
    ],
    xAxis: [
      {
        gridIndex: 0,
        type: "category",
        data: data.value.map(card => card.cardId),
        axisLabel: {
          interval: 0,
          formatter: (value) => {
            return `{${value}| }`;
          },
          color: themeVars.value.textColor2,
          margin: remToPx(0.5),
          rich: {
            ...Object.fromEntries(
              data.value.map((item) => {
                return [item.cardId, {
                  height: remToPx(1.5 * (12 / 7)),
                  width: remToPx(1.5),
                  backgroundColor: {
                    image: item.image,
                  },
                }];
              }),
            ),
          },
        },
      },
      {
        gridIndex: 1,
        type: "category",
        data: data.value.map(card => card.cardId),
        position: "top",
        axisLabel: {
          show: false,
          interval: 0,
        },
      },
    ],
    yAxis: [
      {
        gridIndex: 0,
        type: "value",
        name: t("main.cards.actionBarChart.averageNumUsages"),
        max: 2,
        nameTextStyle: {
          align: "left",
        },
      },
      {
        gridIndex: 1,
        type: "value",
        name: t("main.cards.actionBarChart.averageInWin"),
        scale: true,
        inverse: true,
        nameTextStyle: {
          align: "left",
        },
      },
    ],
    series: [
      {
        name: "averageNumUsages",
        type: "bar",
        data: data.value.map(item => item.averageNumUsages),
        emphasis: {
          focus: "self",
          label: {
            show: true,
            position: "top",
          },
        },
        barWidth: remToPx(1.5),
        animationDelay: i => i * 1000 / barNum.value,
      },
      {
        name: "averageInWin",
        type: "bar",
        data: data.value.map(item => item.averageInWin),
        emphasis: {
          focus: "self",
          label: {
            show: true,
            position: "bottom",
            formatter: (params) => {
              if (typeof params.value === "number") {
                return `${format(params.value, { precision: 4 })}`;
              }
              return "";
            },
          },
        },
        barWidth: remToPx(1.5),
        xAxisIndex: 1,
        yAxisIndex: 1,
        animationDelay: i => i * 1000 / barNum.value,
      },
    ],
  } satisfies ECOption;
});
</script>
