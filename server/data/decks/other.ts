import { buildDeck } from "../../utils/deck";

const otherDecks = {
  // 提2 星1仙1
  "水皇草-疯猫鸽鸽": buildDeck({
    team: ["纳西妲", "纯水精灵·洛蒂娅", "菲谢尔"],
    actions: {
      "赌徒的耳环": 2,
      "桓纳兰那": 2,
      "派蒙": 2,
      "提米": 2,
      "立本": 2,
      "最好的伙伴！": 2,
      "换班时间": 2,
      "一掷乾坤": 2,
      "运筹帷幄": 2,
      "本大爷还没有输！": 2,
      "交给我吧！": 2,
      "星天之兆": 1,
      "白垩之术": 2,
      "仙跳墙": 1,
      "莲花酥": 2,
      "蒙德土豆饼": 2,
    },
  }),
  // 提2 送1仙1
  "水皇草-魔法绵羊Tobby": buildDeck({
    team: ["纳西妲", "纯水精灵·洛蒂娅", "菲谢尔"],
    actions: {
      "赌徒的耳环": 2,
      "桓纳兰那": 2,
      "派蒙": 2,
      "提米": 2,
      "立本": 2,
      "最好的伙伴！": 2,
      "换班时间": 2,
      "一掷乾坤": 2,
      "运筹帷幄": 2,
      "本大爷还没有输！": 2,
      "交给我吧！": 2,
      "白垩之术": 2,
      "送你一程": 1,
      "仙跳墙": 1,
      "莲花酥": 2,
      "蒙德土豆饼": 2,
    },
  }),
  // 提2 一1 星1仙2
  "水皇草-音尘": buildDeck({
    team: ["纯水精灵·洛蒂娅", "菲谢尔", "纳西妲"],
    actions: {
      "赌徒的耳环": 2,
      "桓纳兰那": 2,
      "派蒙": 2,
      "提米": 2,
      "立本": 2,
      "最好的伙伴！": 2,
      "换班时间": 2,
      "一掷乾坤": 1,
      "运筹帷幄": 2,
      "本大爷还没有输！": 2,
      "交给我吧！": 2,
      "星天之兆": 1,
      "白垩之术": 2,
      "仙跳墙": 2,
      "莲花酥": 2,
      "蒙德土豆饼": 2,
    },
  }),
  // 提0 星1送2仙1
  "水皇草-小床": buildDeck({
    team: ["纳西妲", "纯水精灵·洛蒂娅", "菲谢尔"],
    actions: {
      "赌徒的耳环": 2,
      "桓纳兰那": 2,
      "派蒙": 2,
      "立本": 2,
      "最好的伙伴！": 2,
      "换班时间": 2,
      "一掷乾坤": 2,
      "运筹帷幄": 2,
      "本大爷还没有输！": 2,
      "交给我吧！": 2,
      "星天之兆": 1,
      "白垩之术": 2,
      "送你一程": 2,
      "仙跳墙": 1,
      "莲花酥": 2,
      "蒙德土豆饼": 2,
    },
  }),
  // 一0运1送2仙2 披1
  "水皇草-八重妞妞": buildDeck({
    team: ["纯水精灵·洛蒂娅", "菲谢尔", "纳西妲"],
    actions: {
      "赌徒的耳环": 2,
      "桓纳兰那": 2,
      "派蒙": 2,
      "提米": 2,
      "立本": 2,
      "最好的伙伴！": 2,
      "换班时间": 2,
      "运筹帷幄": 1,
      "本大爷还没有输！": 2,
      "交给我吧！": 2,
      "白垩之术": 2,
      "送你一程": 2,
      "仙跳墙": 2,
      "莲花酥": 2,
      "蒙德土豆饼": 2,
      "烤蘑菇披萨": 1,
    },
  }),
  // 派0拉2 最1换1
  "水皇草-卡密sama": buildDeck({
    team: ["纯水精灵·洛蒂娅", "菲谢尔", "纳西妲"],
    actions: {
      "赌徒的耳环": 1,
      "桓纳兰那": 2,
      "提米": 2,
      "立本": 2,
      "拉娜": 2,
      "最好的伙伴！": 1,
      "换班时间": 1,
      "一掷乾坤": 2,
      "运筹帷幄": 2,
      "本大爷还没有输！": 2,
      "交给我吧！": 2,
      "星天之兆": 1,
      "白垩之术": 2,
      "送你一程": 2,
      "仙跳墙": 2,
      "莲花酥": 2,
      "蒙德土豆饼": 2,
    },
  }),
  "水可草-企鹅带带北极熊": buildDeck({
    team: ["可莉", "纯水精灵·洛蒂娅", "纳西妲"],
    actions: {
      "砰砰礼物": 2,
      "千夜浮梦": 2,
      "赌徒的耳环": 2,

      "桓纳兰那": 2,
      "立本": 2,

      "最好的伙伴！": 2,
      "换班时间": 2,
      "一掷乾坤": 2,
      "运筹帷幄": 2,
      "本大爷还没有输！": 2,
      "交给我吧！": 2,
      "温妮莎传奇": 2,

      "莲花酥": 2,
      "蒙德土豆饼": 2,
      "唐杜尔烤鸭": 2,
    },
  }),
  "莫温雷-老伯": buildDeck({
    team: ["无相之雷", "莫娜", "温迪"],
    actions: {
      "赌徒的耳环": 2,
      "桓纳兰那": 1,
      "提米": 2,
      "立本": 2,
      "拉娜": 2,
      "寻宝仙灵": 2,
      "风与自由": 1,
      "最好的伙伴！": 2,
      "换班时间": 2,
      "一掷乾坤": 2,
      "运筹帷幄": 2,
      "本大爷还没有输！": 2,
      "交给我吧！": 2,
      "重攻击": 1,
      "仙跳墙": 1,
      "莲花酥": 2,
      "蒙德土豆饼": 2,
    },
  }),
  "班尼特雷神绫华-兔娘": buildDeck({
    team: ["班尼特", "雷电将军", "神里绫华"],
    actions: {
      "冒险憧憬": 2,
      "风鹰剑": 1,
      "冒险家头带": 2,
      "璃月港口": 1,
      "西风大教堂": 1,
      "桓纳兰那": 2,
      "立本": 2,
      "刘苏": 2,
      "寻宝仙灵": 2,
      "雷与永恒": 2,
      "最好的伙伴！": 2,
      "运筹帷幄": 2,
      "本大爷还没有输！": 2,
      "交给我吧！": 2,
      "护法之誓": 1,
      "莲花酥": 2,
      "蒙德土豆饼": 2,
    },
  }),
  "水债八-老伯": buildDeck({
    team: ["纯水精灵·洛蒂娅", "八重神子", "愚人众·火之债务处理人"],
    actions: {
      "神篱之御荫": 1,
      "悉数讨回": 1,
      "千岩牢固": 2,
      "璃月港口": 2,
      "天守阁": 2,
      "须弥城": 2,
      "阿圆": 2,
      "立本": 2,
      "运筹帷幄": 2,
      "本大爷还没有输！": 2,
      "交给我吧！": 1,
      "白垩之术": 2,
      "送你一程": 1,
      "仙跳墙": 2,
      "莲花酥": 2,
      "蒙德土豆饼": 2,
      "烤蘑菇披萨": 2,
    },
  }),
};

export default otherDecks;
