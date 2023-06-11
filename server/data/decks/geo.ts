import { buildDeck } from "../../utils/deck";

const elementCards = {
  "元素共鸣：交织之岩": 2,
  "元素共鸣：坚定之岩": 2,
} as const;

const geoDecks = {
  "一斗双岩-八重妞妞": buildDeck({
    team: ["芭芭拉", "荒泷一斗", "诺艾尔"],
    actions: {
      "钟剑": 2,
      "千岩牢固": 2,
      "璃月港口": 2,
      "天守阁": 2,
      "桓纳兰那": 1,
      "立本": 2,
      "元素共鸣：交织之岩": 2,
      "元素共鸣：坚定之岩": 2,
      "风与自由": 1,
      "本大爷还没有输！": 1,
      "交给我吧！": 1,
      "送你一程": 2,
      "重攻击": 2,
      "温妮莎传奇": 2,
      "莲花酥": 2,
      "蒙德土豆饼": 2,
      "烤蘑菇披萨": 2,
    },
  }),
  "一斗双岩-Sherry": buildDeck({
    team: ["诺艾尔", "芭芭拉", "荒泷一斗"],
    actions: {
      "钟剑": 2,
      "千岩牢固": 2,
      "璃月港口": 2,
      "天守阁": 2,
      "桓纳兰那": 2,
      "立本": 2,
      "元素共鸣：交织之岩": 2,
      "元素共鸣：坚定之岩": 2,
      "风与自由": 2,
      "本大爷还没有输！": 1,
      "交给我吧！": 1,
      "送你一程": 2,
      "重攻击": 2,
      "莲花酥": 2,
      "蒙德土豆饼": 2,
      "烤蘑菇披萨": 2,
    },
  }),
  "女仆双岩-狗神儿": buildDeck({
    team: ["芭芭拉", "凝光", "诺艾尔"],
    actions: {
      "狼的末路": 1,
      "赌徒的耳环": 1,
      "将帅兜鍪": 2,
      "千岩牢固": 2,
      "璃月港口": 2,
      "天守阁": 2,
      "珊瑚宫": 2,
      "桓纳兰那": 1,
      "派蒙": 1,
      "立本": 2,
      "元素共鸣：交织之岩": 2,
      "元素共鸣：坚定之岩": 2,
      "运筹帷幄": 2,
      "送你一程": 2,
      "莲花酥": 2,
      "蒙德土豆饼": 2,
      "烤蘑菇披萨": 1,
      "黄油蟹蟹": 1,
    },
  }),
  "钟离双岩-狗神儿": buildDeck({
    team: ["钟离", "岩盔丘丘王", "珊瑚宫心海"],
    actions: {
      贯虹之槊: 2,
      将帅兜鍪: 2,
      千岩牢固: 2,
      璃月港口: 2,
      天守阁: 2,
      珊瑚宫: 2,
      桓纳兰那: 1,
      派蒙: 1,
      立本: 2,
      ...elementCards,
      运筹帷幄: 2,
      送你一程: 2,
      莲花酥: 2,
      蒙德土豆饼: 2,
      烤蘑菇披萨: 1,
      黄油蟹蟹: 1,
    },
  }),
  "雷钟凝-鸭鸭": buildDeck({
    team: ["钟离", "雷电将军", "凝光"],
    actions: {
      "贯虹之槊": 2,
      "千岩牢固": 2,
      "璃月港口": 2,
      "天守阁": 2,
      "桓纳兰那": 1,
      "派蒙": 2,
      "立本": 2,
      ...elementCards,
      "岩与契约": 2,
      "最好的伙伴！": 1,
      "本大爷还没有输！": 2,
      "交给我吧！": 1,
      "重攻击": 1,
      "仙跳墙": 1,
      "莲花酥": 2,
      "蒙德土豆饼": 1,
      "烤蘑菇披萨": 2,
    },
  }),
};

export default geoDecks;
