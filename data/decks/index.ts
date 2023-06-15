import { actionCardSorter, hashDeck } from "../shared/utils";
import type { ActionCard, CharacterCard, Deck } from "~/utils/types";

const deckIdSet = new Set<string>();
const deckList = new Array<Deck>();

interface RegisterDeckParam {
  team: [CharacterCard, CharacterCard, CharacterCard];
  actions: Partial<Record<ActionCard, 1 | 2>>;
}

function registerDeck({ team, actions }: RegisterDeckParam): string {
  const actionCards: Deck["actionCards"] = {};
  const actionCardNames = (Object.keys(actions) as ActionCard[]).sort(actionCardSorter);
  actionCardNames.forEach((card) => {
    actionCards[card] = actions[card];
  });
  const actionCardCounts = Object.values(actionCards).reduce((a, b) => a + b, 0);
  if (actionCardCounts !== 30) {
    console.warn(`卡组行动牌张数为${actionCardCounts}`);
    console.warn({ team, actions });
  }
  if (JSON.stringify(actionCards) !== JSON.stringify(actions)) {
    console.warn("卡组行动牌顺序不对");
    console.warn({ team, actions });
    console.warn(`正确的顺序为：${actionCardNames.join(",")}`);
  }
  const deck: Omit<Deck, "id"> = {
    characterCards: {
      [team[0]]: 1,
      [team[1]]: 2,
      [team[2]]: 3,
    },
    actionCards,
  };
  const hash = hashDeck(deck);
  if (deckIdSet.has(hash)) {
    console.warn("卡组重复");
    console.warn({ team, actions });
  }
  else {
    deckIdSet.add(hash);
  }
  deckList.push({
    id: hash,
    ...deck,
  });
  return hash;
}

const deckIdCollectors = {
  cryo: {
    // 1：桓纳兰那 岩与契约 换班时间 星天之兆
    "雷申重-今天不想吃苹果": registerDeck({
      team: ["重云", "雷电将军", "申鹤"],
      actions: {
        "赌徒的耳环": 2,
        "桓纳兰那": 1,
        "提米": 2,
        "立本": 2,
        "元素共鸣：交织之冰": 2,
        "元素共鸣：粉碎之冰": 2,
        "岩与契约": 1,
        "最好的伙伴！": 2,
        "换班时间": 1,
        "运筹帷幄": 2,
        "本大爷还没有输！": 2,
        "交给我吧！": 2,
        "星天之兆": 1,
        "送你一程": 2,
        "仙跳墙": 2,
        "莲花酥": 2,
        "蒙德土豆饼": 2,
      },
    }),
    // 1：岩与契约 星天之兆 重攻击 仙跳墙
    "雷申重-皮皮猪": registerDeck({
      team: ["重云", "雷电将军", "申鹤"],
      actions: {
        "赌徒的耳环": 2,
        "桓纳兰那": 2,
        "提米": 2,
        "立本": 2,
        "元素共鸣：交织之冰": 2,
        "元素共鸣：粉碎之冰": 2,
        "岩与契约": 1,
        "最好的伙伴！": 2,
        "换班时间": 2,
        "运筹帷幄": 2,
        "本大爷还没有输！": 2,
        "交给我吧！": 2,
        "星天之兆": 1,
        "重攻击": 1,
        "仙跳墙": 1,
        "莲花酥": 2,
        "蒙德土豆饼": 2,
      },
    }),
    // 1：岩与契约 星天之兆
    "雷申重-Sherry": registerDeck({
      team: ["重云", "雷电将军", "申鹤"],
      actions: {
        "赌徒的耳环": 2,
        "桓纳兰那": 2,
        "提米": 2,
        "立本": 2,
        "元素共鸣：交织之冰": 2,
        "元素共鸣：粉碎之冰": 2,
        "岩与契约": 1,
        "最好的伙伴！": 2,
        "运筹帷幄": 2,
        "本大爷还没有输！": 2,
        "交给我吧！": 2,
        "星天之兆": 1,
        "送你一程": 2,
        "仙跳墙": 2,
        "莲花酥": 2,
        "蒙德土豆饼": 2,
      },
    }),
    // 1：岩与契约 重攻击 仙跳墙 莲花酥
    "雷申重-毕游侠": registerDeck({
      team: ["申鹤", "雷电将军", "重云"],
      actions: {
        "赌徒的耳环": 2,
        "桓纳兰那": 2,
        "派蒙": 2,
        "提米": 2,
        "立本": 2,
        "刘苏": 2,
        "寻宝仙灵": 2,
        "元素共鸣：交织之冰": 2,
        "元素共鸣：粉碎之冰": 2,
        "岩与契约": 1,
        "最好的伙伴！": 2,
        "本大爷还没有输！": 2,
        "送你一程": 2,
        "重攻击": 1,
        "仙跳墙": 1,
        "莲花酥": 1,
        "蒙德土豆饼": 2,
      },
    }),
    // 1：换班时间 星天之兆 重攻击 仙跳墙
    "雷申重-男总": registerDeck({
      team: ["重云", "雷电将军", "申鹤"],
      actions: {
        "赌徒的耳环": 2,
        "桓纳兰那": 2,
        "提米": 2,
        "立本": 2,
        "元素共鸣：交织之冰": 2,
        "元素共鸣：粉碎之冰": 2,
        "岩与契约": 2,
        "最好的伙伴！": 2,
        "换班时间": 1,
        "运筹帷幄": 2,
        "本大爷还没有输！": 2,
        "交给我吧！": 2,
        "星天之兆": 1,
        "重攻击": 1,
        "仙跳墙": 1,
        "莲花酥": 2,
        "蒙德土豆饼": 2,
      },
    }),
    // 1：换班时间 交给我吧 星天之兆 重攻击 仙跳墙 蒙德土豆饼
    "雷申重-柠柠七喵": registerDeck({
      team: ["重云", "雷电将军", "申鹤"],
      actions: {
        "赌徒的耳环": 2,
        "桓纳兰那": 2,
        "提米": 2,
        "立本": 2,
        "元素共鸣：交织之冰": 2,
        "元素共鸣：粉碎之冰": 2,
        "岩与契约": 2,
        "最好的伙伴！": 2,
        "换班时间": 1,
        "运筹帷幄": 2,
        "本大爷还没有输！": 2,
        "交给我吧！": 1,
        "星天之兆": 1,
        "送你一程": 2,
        "重攻击": 1,
        "仙跳墙": 1,
        "莲花酥": 2,
        "蒙德土豆饼": 1,
      },
    }),
    // 1：星天之兆 送你一程 重攻击 仙跳墙
    "雷申重-音尘": registerDeck({
      team: ["雷电将军", "申鹤", "重云"],
      actions: {
        "赌徒的耳环": 2,
        "璃月港口": 2,
        "桓纳兰那": 2,
        "提米": 2,
        "立本": 2,
        "元素共鸣：交织之冰": 2,
        "元素共鸣：粉碎之冰": 2,
        "岩与契约": 2,
        "最好的伙伴！": 2,
        "本大爷还没有输！": 2,
        "交给我吧！": 2,
        "星天之兆": 1,
        "送你一程": 1,
        "重攻击": 1,
        "仙跳墙": 1,
        "莲花酥": 2,
        "蒙德土豆饼": 2,
      },
    }),
    // 1：送你一程 仙跳墙
    "雷申重-周正福": registerDeck({
      team: ["重云", "雷电将军", "申鹤"],
      actions: {
        "赌徒的耳环": 2,
        "桓纳兰那": 2,
        "提米": 2,
        "立本": 2,
        "元素共鸣：交织之冰": 2,
        "元素共鸣：粉碎之冰": 2,
        "岩与契约": 2,
        "最好的伙伴！": 2,
        "换班时间": 2,
        "运筹帷幄": 2,
        "本大爷还没有输！": 2,
        "交给我吧！": 2,
        "送你一程": 1,
        "仙跳墙": 1,
        "莲花酥": 2,
        "蒙德土豆饼": 2,
      },
    }),
    // 1：交给我吧 送你一程 仙跳墙 北地烟熏鸡
    "雷申重-齿轮": registerDeck({
      team: ["重云", "雷电将军", "申鹤"],
      actions: {
        "赌徒的耳环": 2,
        "桓纳兰那": 2,
        "提米": 2,
        "立本": 2,
        "元素共鸣：交织之冰": 2,
        "元素共鸣：粉碎之冰": 2,
        "岩与契约": 2,
        "一掷乾坤": 2,
        "运筹帷幄": 2,
        "本大爷还没有输！": 2,
        "交给我吧！": 1,
        "送你一程": 1,
        "重攻击": 2,
        "仙跳墙": 1,
        "莲花酥": 2,
        "北地烟熏鸡": 1,
        "蒙德土豆饼": 2,
      },
    }),
    // 1：寻宝仙灵 岩与契约 换班时间 交给我吧 星天之兆 送你一程 重攻击 蒙德土豆饼
    "雷申重-唐傀": registerDeck({
      team: ["重云", "雷电将军", "申鹤"],
      actions: {
        "赌徒的耳环": 2,
        "桓纳兰那": 2,
        "提米": 2,
        "立本": 2,
        "寻宝仙灵": 1,
        "元素共鸣：交织之冰": 2,
        "元素共鸣：粉碎之冰": 2,
        "岩与契约": 1,
        "最好的伙伴！": 2,
        "换班时间": 1,
        "运筹帷幄": 2,
        "本大爷还没有输！": 2,
        "交给我吧！": 1,
        "星天之兆": 1,
        "送你一程": 1,
        "重攻击": 1,
        "仙跳墙": 2,
        "莲花酥": 2,
        "蒙德土豆饼": 1,
      },
    }),

    "雷申优-企鹅带带北极熊": registerDeck({
      team: ["优菈", "雷电将军", "申鹤"],
      actions: {
        "狼的末路": 1,
        "赌徒的耳环": 2,
        "桓纳兰那": 2,
        "提米": 2,
        "立本": 2,
        "元素共鸣：交织之冰": 2,
        "元素共鸣：粉碎之冰": 2,
        "最好的伙伴！": 2,
        "换班时间": 2,
        "运筹帷幄": 2,
        "本大爷还没有输！": 2,
        "交给我吧！": 2,
        "星天之兆": 1,
        "重攻击": 1,
        "仙跳墙": 1,
        "莲花酥": 2,
        "蒙德土豆饼": 2,
      },
    }),

    "砂糖申重-啊乔巴": registerDeck({
      team: ["申鹤", "重云", "砂糖"],
      actions: {
        "混元熵增论": 2,
        "赌徒的耳环": 2,
        "凯瑟琳": 2,
        "立本": 1,
        "刘苏": 2,
        "寻宝仙灵": 2,
        "元素共鸣：交织之冰": 2,
        "元素共鸣：粉碎之冰": 2,
        "岩与契约": 2,
        "最好的伙伴！": 2,
        "换班时间": 2,
        "本大爷还没有输！": 2,
        "交给我吧！": 2,
        "快快缝补术": 2,
        "送你一程": 1,
        "莲花酥": 2,
      },
    }),
  },
  hydro: {
    "双水凝光-老伯": registerDeck({
      team: ["芭芭拉", "凝光", "珊瑚宫心海"],
      actions: {
        "祭礼残章": 2,
        "千岩牢固": 2,
        "璃月港口": 2,
        "天守阁": 2,
        "须弥城": 2,
        "阿圆": 1,
        "立本": 2,
        "元素共鸣：交织之水": 2,
        "元素共鸣：疗愈之水": 2,
        "运筹帷幄": 2,
        "本大爷还没有输！": 1,
        "交给我吧！": 1,
        "白垩之术": 1,
        "送你一程": 1,
        "护法之誓": 1,
        "仙跳墙": 1,
        "莲花酥": 2,
        "蒙德土豆饼": 2,
        "烤蘑菇披萨": 1,
      },
    }),
    "双水凝光-古明地觉": registerDeck({
      team: ["珊瑚宫心海", "凝光", "芭芭拉"],
      actions: {
        "储之千日，用之一刻": 1,
        "祭礼残章": 2,
        "千岩牢固": 2,
        "璃月港口": 2,
        "天守阁": 2,
        "桓纳兰那": 1,
        "立本": 2,
        "元素共鸣：交织之水": 2,
        "元素共鸣：疗愈之水": 2,
        "运筹帷幄": 1,
        "本大爷还没有输！": 1,
        "交给我吧！": 1,
        "白垩之术": 1,
        "送你一程": 2,
        "护法之誓": 2,
        "仙跳墙": 1,
        "莲花酥": 2,
        "蒙德土豆饼": 2,
        "烤蘑菇披萨": 1,
      },
    }),
    "双水凝光-卡密sama": registerDeck({
      team: ["珊瑚宫心海", "凝光", "芭芭拉"],
      actions: {
        "储之千日，用之一刻": 1,
        "祭礼残章": 2,
        "千岩牢固": 2,
        "璃月港口": 1,
        "天守阁": 2,
        "须弥城": 1,
        "桓纳兰那": 1,
        "立本": 2,
        "元素共鸣：交织之水": 2,
        "元素共鸣：疗愈之水": 2,
        "运筹帷幄": 2,
        "本大爷还没有输！": 1,
        "交给我吧！": 1,
        "白垩之术": 1,
        "送你一程": 1,
        "护法之誓": 1,
        "仙跳墙": 1,
        "莲花酥": 2,
        "蒙德土豆饼": 1,
        "烤蘑菇披萨": 2,
        "黄油蟹蟹": 1,
      },
    }),
    "双水凝光-雪国Ink": registerDeck({
      team: ["珊瑚宫心海", "凝光", "芭芭拉"],
      actions: {
        "储之千日，用之一刻": 1,
        "祭礼残章": 2,
        "将帅兜鍪": 1,
        "千岩牢固": 2,
        "璃月港口": 2,
        "天守阁": 2,
        "须弥城": 1,
        "桓纳兰那": 1,
        "立本": 2,
        "元素共鸣：交织之水": 2,
        "元素共鸣：疗愈之水": 2,
        "运筹帷幄": 1,
        "交给我吧！": 1,
        "星天之兆": 1,
        "白垩之术": 1,
        "送你一程": 1,
        "护法之誓": 1,
        "仙跳墙": 1,
        "莲花酥": 2,
        "蒙德土豆饼": 2,
        "烤蘑菇披萨": 1,
      },
    }),

    // 阿圆+一堆场地回血
    "双水凝光-多肉": registerDeck({
      team: ["珊瑚宫心海", "凝光", "芭芭拉"],
      actions: {
        "储之千日，用之一刻": 1,
        "祭礼残章": 2,
        "将帅兜鍪": 1,
        "千岩牢固": 2,
        "璃月港口": 2,
        "晨曦酒庄": 1,
        "望舒客栈": 2,
        "西风大教堂": 2,
        "珊瑚宫": 2,
        "须弥城": 2,
        "阿圆": 2,
        "立本": 2,
        "元素共鸣：交织之水": 2,
        "元素共鸣：疗愈之水": 2,
        "交给我吧！": 1,
        "送你一程": 1,
        "莲花酥": 2,
        "提瓦特煎蛋": 1,
      },
    }),

    "双水莫娜凝光-阿阮": registerDeck({
      team: ["莫娜", "凝光", "芭芭拉"],
      actions: {
        "储之千日，用之一刻": 2,
        "祭礼残章": 2,
        "将帅兜鍪": 2,
        "派蒙": 2,
        "提米": 2,
        "立本": 2,
        "元素共鸣：交织之水": 2,
        "元素共鸣：疗愈之水": 2,
        "最好的伙伴！": 2,
        "本大爷还没有输！": 2,
        "仙跳墙": 2,
        "莲花酥": 2,
        "甜甜花酿鸡": 2,
        "蒙德土豆饼": 2,
        "烤蘑菇披萨": 2,
      },
    }),
  },
  pyro: {
    // 璃1派2提2立2拉2
    "火刻-疯猫鸽鸽": registerDeck({
      team: ["班尼特", "可莉", "刻晴"],
      actions: {
        "冒险憧憬": 2,
        "祭礼剑": 1,
        "赌徒的耳环": 2,

        "璃月港口": 1,
        "派蒙": 2,
        "提米": 2,
        "立本": 2,
        "拉娜": 2,
        "元素共鸣：交织之火": 2,
        "元素共鸣：热诚之火": 2,
        "风与自由": 2,
        "最好的伙伴！": 2,
        "运筹帷幄": 1,
        "本大爷还没有输！": 2,
        "交给我吧！": 2,
        "莲花酥": 2,
        "唐杜尔烤鸭": 1,
      },
    }),
    // 璃1桓2派2提2拉2寻1
    "火刻-毕游侠": registerDeck({
      team: ["班尼特", "可莉", "刻晴"],
      actions: {
        "冒险憧憬": 2,
        "祭礼剑": 1,
        "赌徒的耳环": 2,

        "璃月港口": 1,
        "桓纳兰那": 2,
        "派蒙": 2,
        "提米": 2,
        "拉娜": 2,
        "寻宝仙灵": 1,
        "元素共鸣：交织之火": 2,
        "元素共鸣：热诚之火": 2,
        "风与自由": 1,
        "最好的伙伴！": 2,
        "运筹帷幄": 1,
        "本大爷还没有输！": 2,
        "交给我吧！": 2,
        "莲花酥": 2,
        "唐杜尔烤鸭": 1,
      },
    }),
    "火刻-月话音月": registerDeck({
      team: ["班尼特", "可莉", "刻晴"],
      actions: {
        "冒险憧憬": 2,
        "祭礼剑": 1,
        "赌徒的耳环": 2,
        "璃月港口": 1,
        "派蒙": 1,
        "提米": 2,
        "立本": 2,
        "拉娜": 2,
        "元素共鸣：交织之火": 2,
        "元素共鸣：热诚之火": 2,
        "风与自由": 2,
        "最好的伙伴！": 2,
        "运筹帷幄": 1,
        "本大爷还没有输！": 2,
        "交给我吧！": 2,
        "送你一程": 1,
        "莲花酥": 2,
        "唐杜尔烤鸭": 1,
      },
    }),
    // 璃2派2立2 风2 最2 送2 莲2土2 唐1
    "火刻-小床": registerDeck({
      team: ["班尼特", "可莉", "刻晴"],
      actions: {
        "冒险憧憬": 2,
        "祭礼剑": 1,
        "赌徒的耳环": 2,
        "璃月港口": 2,
        "派蒙": 2,
        "立本": 2,
        "元素共鸣：交织之火": 2,
        "元素共鸣：热诚之火": 2,
        "风与自由": 2,
        "最好的伙伴！": 2,
        "本大爷还没有输！": 2,
        "交给我吧！": 2,
        "送你一程": 2,
        "莲花酥": 2,
        "蒙德土豆饼": 2,
        "唐杜尔烤鸭": 1,
      },
    }),
    // 璃1派2提2立2
    "火刻-古明地觉": registerDeck({
      team: ["班尼特", "可莉", "刻晴"],
      actions: {
        "冒险憧憬": 2,
        "祭礼剑": 1,
        "赌徒的耳环": 2,
        "璃月港口": 1,
        "派蒙": 2,
        "提米": 2,
        "立本": 2,
        "元素共鸣：交织之火": 2,
        "元素共鸣：热诚之火": 2,
        "风与自由": 2,
        "最好的伙伴！": 2,
        "运筹帷幄": 1,
        "本大爷还没有输！": 2,
        "交给我吧！": 2,
        "送你一程": 2,
        "莲花酥": 2,
        "唐杜尔烤鸭": 1,
      },
    }),
    // 璃1派2提2立2
    "火刻-吴意": registerDeck({
      team: ["班尼特", "可莉", "刻晴"],
      actions: {
        "冒险憧憬": 2,
        "祭礼剑": 1,
        "赌徒的耳环": 2,
        "璃月港口": 1,
        "派蒙": 2,
        "提米": 2,
        "立本": 2,
        "元素共鸣：交织之火": 2,
        "元素共鸣：热诚之火": 2,
        "风与自由": 2,
        "最好的伙伴！": 2,
        "运筹帷幄": 2,
        "本大爷还没有输！": 2,
        "交给我吧！": 2,
        "送你一程": 1,
        "莲花酥": 2,
        "唐杜尔烤鸭": 1,
      },
    }),
    // 璃2派2提2立2拉1 风1 最2运1 送1 莲2 唐1
    "火刻-魔法绵阳Tobby": registerDeck({
      team: ["刻晴", "班尼特", "可莉"],
      actions: {
        "冒险憧憬": 2,
        "祭礼剑": 1,
        "赌徒的耳环": 2,
        "璃月港口": 2,
        "派蒙": 2,
        "提米": 2,
        "立本": 2,
        "拉娜": 1,
        "元素共鸣：交织之火": 2,
        "元素共鸣：热诚之火": 2,
        "风与自由": 1,
        "最好的伙伴！": 2,
        "运筹帷幄": 1,
        "本大爷还没有输！": 2,
        "交给我吧！": 2,
        "送你一程": 1,
        "莲花酥": 2,
        "唐杜尔烤鸭": 1,
      },
    }),
    // 璃2派2提2立2
    "火刻-卡密sama": registerDeck({
      team: ["可莉", "刻晴", "班尼特"],
      actions: {
        "冒险憧憬": 2,
        "祭礼剑": 1,
        "赌徒的耳环": 2,

        "璃月港口": 2,
        "派蒙": 2,
        "提米": 2,
        "立本": 2,

        "元素共鸣：交织之火": 2,
        "元素共鸣：热诚之火": 2,
        "风与自由": 2,
        "最好的伙伴！": 2,
        "本大爷还没有输！": 2,
        "交给我吧！": 2,
        "送你一程": 2,
        "莲花酥": 2,
        "蒙德土豆饼": 1,
      },
    }),

    "火刻-鸭鸭": registerDeck({
      team: ["班尼特", "可莉", "刻晴"],
      actions: {
        "冒险憧憬": 1,
        "赌徒的耳环": 2,
        "璃月港口": 1,
        "桓纳兰那": 1,
        "派蒙": 2,
        "立本": 2,
        "拉娜": 2,
        "元素共鸣：交织之火": 2,
        "元素共鸣：热诚之火": 2,
        "风与自由": 2,
        "最好的伙伴！": 2,
        "运筹帷幄": 2,
        "本大爷还没有输！": 2,
        "交给我吧！": 2,
        "送你一程": 1,
        "莲花酥": 2,
        "唐杜尔烤鸭": 2,
      },
    }),

    "火刻-雪国Ink": registerDeck({
      team: ["班尼特", "刻晴", "可莉"],
      actions: {
        "冒险憧憬": 2,
        "祭礼剑": 2,
        "赌徒的耳环": 2,
        "璃月港口": 2,
        "派蒙": 2,
        "提米": 2,
        "立本": 2,
        "元素共鸣：交织之火": 2,
        "元素共鸣：热诚之火": 2,
        "风与自由": 2,
        "最好的伙伴！": 2,
        "本大爷还没有输！": 2,
        "交给我吧！": 2,
        "莲花酥": 2,
        "蒙德土豆饼": 1,
        "唐杜尔烤鸭": 1,
      },
    }),

    "公子-企鹅带带北极熊": registerDeck({
      team: ["达达利亚", "班尼特", "愚人众·火之债务处理人"],
      actions: {
        "冒险憧憬": 2,
        "赌徒的耳环": 2,
        "璃月港口": 1,
        "派蒙": 2,
        "提米": 2,
        "立本": 2,
        "拉娜": 2,
        "元素共鸣：交织之火": 2,
        "元素共鸣：热诚之火": 2,
        "最好的伙伴！": 2,
        "运筹帷幄": 1,
        "本大爷还没有输！": 2,
        "交给我吧！": 2,
        "愚人众的阴谋": 2,
        "莲花酥": 2,
        "蒙德土豆饼": 1,
        "唐杜尔烤鸭": 1,
      },
    }),
    "胡桃愚人众-阿阮": registerDeck({
      team: ["胡桃", "愚人众·冰萤术士", "愚人众·火之债务处理人"],
      actions: {
        "悉数讨回": 2,
        "赌徒的耳环": 2,
        "派蒙": 2,
        "立本": 2,
        "元素共鸣：交织之火": 2,
        "元素共鸣：热诚之火": 2,
        "最好的伙伴！": 2,
        "换班时间": 2,
        "本大爷还没有输！": 2,
        "交给我吧！": 2,
        "愚人众的阴谋": 2,
        "重攻击": 2,
        "仙跳墙": 2,
        "莲花酥": 2,
        "蒙德土豆饼": 2,
      },
    }),
  },
  electro: {
    "水皇赛-齿轮": registerDeck({
      team: ["纯水精灵·洛蒂娅", "菲谢尔", "赛诺"],
      actions: {
        "幸运儿银冠": 1,
        "璃月港口": 2,
        "派蒙": 2,
        "提米": 2,
        "立本": 2,
        "元素共鸣：交织之雷": 2,
        "元素共鸣：强能之雷": 2,
        "最好的伙伴！": 2,
        "换班时间": 2,
        "本大爷还没有输！": 2,
        "交给我吧！": 2,
        "白垩之术": 1,
        "送你一程": 2,
        "仙跳墙": 2,
        "莲花酥": 1,
        "蒙德土豆饼": 2,
        "烤蘑菇披萨": 1,
      },
    }),
    "长安大魔王-雷神雷泽重云": registerDeck({
      team: ["雷电将军", "重云", "雷泽"],
      actions: {
        "吐纳真定": 2,
        "赌徒的耳环": 2,
        "桓纳兰那": 2,
        "提米": 2,
        "立本": 2,
        "元素共鸣：交织之雷": 2,
        "元素共鸣：强能之雷": 2,
        "最好的伙伴！": 2,
        "运筹帷幄": 2,
        "本大爷还没有输！": 2,
        "交给我吧！": 2,
        "星天之兆": 1,
        "送你一程": 2,
        "莲花酥": 2,
        "蒙德土豆饼": 2,
        "兽肉薄荷卷": 1,
      },
    }),
  },
  anemo: {
    "莫温魈-莲花": registerDeck({
      team: ["莫娜", "温迪", "魈"],
      actions: {
        "绪风之拥": 2,
        "派蒙": 2,
        "立本": 2,
        "拉娜": 2,
        "寻宝仙灵": 2,
        "元素共鸣：交织之风": 2,
        "元素共鸣：迅捷之风": 2,
        "风与自由": 1,
        "最好的伙伴！": 2,
        "本大爷还没有输！": 2,
        "交给我吧！": 2,
        "鹤归之时": 2,
        "送你一程": 1,
        "下落斩": 1,
        "仙跳墙": 1,
        "莲花酥": 2,
        "蒙德土豆饼": 2,
      },
    }),
  },
  geo: {
    "一斗双岩-八重妞妞": registerDeck({
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
    "一斗双岩-Sherry": registerDeck({
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
    "一斗双岩-周正福": registerDeck({
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
        "风与自由": 1,
        "运筹帷幄": 1,
        "本大爷还没有输！": 1,
        "交给我吧！": 1,
        "送你一程": 2,
        "护法之誓": 1,
        "重攻击": 1,
        "莲花酥": 2,
        "蒙德土豆饼": 2,
        "烤蘑菇披萨": 2,
      },
    }),
    "女仆双岩-狗神儿": registerDeck({
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
    "钟离双岩-狗神儿": registerDeck({
      team: ["钟离", "岩盔丘丘王", "珊瑚宫心海"],
      actions: {
        "贯虹之槊": 2,
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
    "钟离魔物双岩-Soul": registerDeck({
      team: ["钟离", "纯水精灵·洛蒂娅", "岩盔丘丘王"],
      actions: {
        "贯虹之槊": 2,
        "千岩牢固": 2,
        "璃月港口": 1,
        "天守阁": 2,
        "桓纳兰那": 2,
        "立本": 2,
        "寻宝仙灵": 2,
        "元素共鸣：交织之岩": 2,
        "元素共鸣：坚定之岩": 2,
        "最好的伙伴！": 1,
        "一掷乾坤": 1,
        "本大爷还没有输！": 2,
        "送你一程": 2,
        "深渊的呼唤": 2,
        "仙跳墙": 1,
        "莲花酥": 2,
        "蒙德土豆饼": 2,
      },
    }),
    "雷钟凝-鸭鸭": registerDeck({
      team: ["钟离", "雷电将军", "凝光"],
      actions: {
        "贯虹之槊": 2,
        "千岩牢固": 2,
        "璃月港口": 2,
        "天守阁": 2,
        "桓纳兰那": 1,
        "派蒙": 2,
        "立本": 2,
        "元素共鸣：交织之岩": 2,
        "元素共鸣：坚定之岩": 2,
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
    "雷钟凝-莉莉芭": registerDeck({
      team: ["凝光", "雷电将军", "钟离"],
      actions: {
        "贯虹之槊": 2,
        "千岩牢固": 2,
        "璃月港口": 2,
        "天守阁": 2,
        "桓纳兰那": 2,
        "立本": 2,
        "元素共鸣：交织之岩": 2,
        "元素共鸣：坚定之岩": 2,
        "岩与契约": 2,
        "运筹帷幄": 2,
        "交给我吧！": 1,
        "星天之兆": 1,
        "送你一程": 1,
        "护法之誓": 1,
        "重攻击": 1,
        "仙跳墙": 1,
        "莲花酥": 2,
        "蒙德土豆饼": 2,
      },
    }),
    "雷钟凝-啊乔巴": registerDeck({
      team: ["钟离", "雷电将军", "凝光"],
      actions: {
        "贯虹之槊": 2,
        "千岩牢固": 2,
        "璃月港口": 2,
        "天守阁": 2,
        "桓纳兰那": 2,
        "元素共鸣：交织之岩": 2,
        "元素共鸣：坚定之岩": 2,
        "岩与契约": 2,
        "最好的伙伴！": 2,
        "运筹帷幄": 2,
        "本大爷还没有输！": 1,
        "星天之兆": 1,
        "重攻击": 1,
        "仙跳墙": 1,
        "莲花酥": 2,
        "蒙德土豆饼": 2,
        "烤蘑菇披萨": 2,
      },
    }),
    "雷钟一斗-多肉": registerDeck({
      team: ["钟离", "雷电将军", "荒泷一斗"],
      actions: {
        "贯虹之槊": 2,
        "千岩牢固": 2,
        "璃月港口": 2,
        "西风大教堂": 2,
        "天守阁": 2,
        "珊瑚宫": 2,
        "须弥城": 2,
        "阿圆": 2,
        "立本": 2,
        "元素共鸣：交织之岩": 2,
        "元素共鸣：坚定之岩": 2,
        "送你一程": 2,
        "重攻击": 1,
        "莲花酥": 2,
        "蒙德土豆饼": 2,
        "烤蘑菇披萨": 1,
      },
    }),
  },
  dendro: {
    // 桓2提2立2 最2换2交2 快1送1 重1仙1 莲2土1
    "提八激化-毕游侠": registerDeck({
      team: ["提纳里", "八重神子", "柯莱"],
      actions: {
        "赌徒的耳环": 2,
        "桓纳兰那": 2,
        "提米": 2,
        "立本": 2,
        "元素共鸣：交织之草": 2,
        "元素共鸣：蔓生之草": 2,
        "草与智慧": 2,
        "最好的伙伴！": 2,
        "换班时间": 2,
        "本大爷还没有输！": 2,
        "交给我吧！": 2,
        "快快缝补术": 1,
        "送你一程": 1,
        "重攻击": 1,
        "仙跳墙": 1,
        "莲花酥": 2,
        "蒙德土豆饼": 2,
      },
    }),
    // 桓2寻2 最2换2交2 重2仙2 莲2烟2土2
    "提八激化-兔娘": registerDeck({
      team: ["提纳里", "八重神子", "柯莱"],
      actions: {
        "赌徒的耳环": 2,
        "桓纳兰那": 2,
        "寻宝仙灵": 2,
        "元素共鸣：交织之草": 2,
        "元素共鸣：蔓生之草": 2,
        "草与智慧": 2,
        "最好的伙伴！": 2,
        "换班时间": 2,
        "本大爷还没有输！": 2,
        "交给我吧！": 2,
        "重攻击": 2,
        "仙跳墙": 2,
        "莲花酥": 2,
        "北地烟熏鸡": 2,
        "蒙德土豆饼": 2,
      },
    }),
    // 提2立2寻2
    "提八激化-吴意": registerDeck({
      team: ["柯莱", "八重神子", "提纳里"],
      actions: {
        "赌徒的耳环": 2,
        "提米": 2,
        "立本": 2,
        "寻宝仙灵": 2,
        "元素共鸣：交织之草": 2,
        "元素共鸣：蔓生之草": 2,
        "草与智慧": 2,
        "最好的伙伴！": 2,
        "运筹帷幄": 2,
        "本大爷还没有输！": 2,
        "交给我吧！": 1,
        "星天之兆": 1,
        "送你一程": 2,
        "重攻击": 1,
        "仙跳墙": 1,
        "莲花酥": 2,
        "蒙德土豆饼": 2,
      },
    }),
    // 提2立2寻1 最2一1运2交1 星1 送2 重1仙2 莲2土1
    "提八激化-Sherry": registerDeck({
      team: ["八重神子", "提纳里", "柯莱"],
      actions: {
        "赌徒的耳环": 2,
        "提米": 2,
        "立本": 2,
        "寻宝仙灵": 1,
        "元素共鸣：交织之草": 2,
        "元素共鸣：蔓生之草": 2,
        "草与智慧": 2,
        "最好的伙伴！": 2,
        "一掷乾坤": 1,
        "运筹帷幄": 2,
        "本大爷还没有输！": 2,
        "交给我吧！": 1,
        "星天之兆": 1,
        "送你一程": 2,
        "重攻击": 1,
        "仙跳墙": 2,
        "莲花酥": 2,
        "蒙德土豆饼": 1,
      },
    }),
    // 立2 最2一2运2交2 快2送1 重2仙2 莲2土1
    "提八激化-疯猫鸽鸽": registerDeck({
      team: ["提纳里", "八重神子", "柯莱"],
      actions: {
        "赌徒的耳环": 2,
        "立本": 2,
        "元素共鸣：交织之草": 2,
        "元素共鸣：蔓生之草": 2,
        "草与智慧": 2,
        "最好的伙伴！": 2,
        "一掷乾坤": 2,
        "运筹帷幄": 2,
        "本大爷还没有输！": 2,
        "交给我吧！": 2,
        "快快缝补术": 2,
        "送你一程": 1,
        "重攻击": 2,
        "仙跳墙": 2,
        "莲花酥": 2,
        "蒙德土豆饼": 1,
      },
    }),

    // 弓1 提2立2寻1 最2运2交1 星1 送2 重1仙2 莲2土1
    "提八激化-古明地觉": registerDeck({
      team: ["八重神子", "提纳里", "柯莱"],
      actions: {
        "阿莫斯之弓": 1,
        "赌徒的耳环": 2,
        "提米": 2,
        "立本": 2,
        "寻宝仙灵": 1,
        "元素共鸣：交织之草": 2,
        "元素共鸣：蔓生之草": 2,
        "草与智慧": 2,
        "最好的伙伴！": 2,
        "运筹帷幄": 2,
        "本大爷还没有输！": 2,
        "交给我吧！": 1,
        "星天之兆": 1,
        "送你一程": 2,
        "重攻击": 1,
        "仙跳墙": 2,
        "莲花酥": 2,
        "蒙德土豆饼": 1,
      },
    }),
    // 弓1 提2立1寻2 最2交2 星1 送1 重1仙2 莲2土2唐1
    "提八激化-魔法绵阳Tobby": registerDeck({
      team: ["提纳里", "八重神子", "柯莱"],
      actions: {
        "阿莫斯之弓": 1,
        "赌徒的耳环": 2,
        "提米": 2,
        "立本": 1,
        "寻宝仙灵": 2,
        "元素共鸣：交织之草": 2,
        "元素共鸣：蔓生之草": 2,
        "草与智慧": 2,
        "最好的伙伴！": 2,
        "本大爷还没有输！": 2,
        "交给我吧！": 2,
        "星天之兆": 1,
        "送你一程": 1,
        "重攻击": 1,
        "仙跳墙": 2,
        "莲花酥": 2,
        "蒙德土豆饼": 2,
        "唐杜尔烤鸭": 1,
      },
    }),
    // 弓1 提2立1寻2 最2交2 星1 送1 重1仙2 莲2土2唐1
    "提八激化-长安大魔王": registerDeck({
      team: ["八重神子", "提纳里", "柯莱"],
      actions: {
        "阿莫斯之弓": 1,
        "赌徒的耳环": 2,
        "提米": 2,
        "立本": 1,
        "寻宝仙灵": 2,
        "元素共鸣：交织之草": 2,
        "元素共鸣：蔓生之草": 2,
        "草与智慧": 2,
        "最好的伙伴！": 2,
        "运筹帷幄": 2,
        "本大爷还没有输！": 2,
        "交给我吧！": 1,
        "星天之兆": 1,
        "快快缝补术": 1,
        "送你一程": 2,
        "重攻击": 1,
        "仙跳墙": 1,
        "莲花酥": 2,
        "蒙德土豆饼": 1,
      },
    }),
    // 弓1 提2立1寻2 最2换1运1交1 星1 送2 重1仙2 土1
    "提八激化-今天不想吃苹果": registerDeck({
      team: ["八重神子", "提纳里", "柯莱"],
      actions: {
        "阿莫斯之弓": 1,
        "赌徒的耳环": 2,
        "提米": 2,
        "立本": 1,
        "寻宝仙灵": 2,
        "元素共鸣：交织之草": 2,
        "元素共鸣：蔓生之草": 2,
        "草与智慧": 2,
        "最好的伙伴！": 2,
        "换班时间": 1,
        "运筹帷幄": 1,
        "本大爷还没有输！": 2,
        "交给我吧！": 1,
        "星天之兆": 1,
        "送你一程": 2,
        "重攻击": 1,
        "仙跳墙": 2,
        "莲花酥": 2,
        "蒙德土豆饼": 1,
      },
    }),
    // 弓1 提2立1寻1 最2换1运2交1 星1 送2 重1仙2 莲2土1
    "提八激化-卡密sama": registerDeck({
      team: ["提纳里", "八重神子", "柯莱"],
      actions: {
        "阿莫斯之弓": 1,
        "赌徒的耳环": 2,
        "提米": 2,
        "立本": 1,
        "寻宝仙灵": 1,
        "元素共鸣：交织之草": 2,
        "元素共鸣：蔓生之草": 2,
        "草与智慧": 2,
        "最好的伙伴！": 2,
        "换班时间": 1,
        "运筹帷幄": 2,
        "本大爷还没有输！": 2,
        "交给我吧！": 1,
        "星天之兆": 1,
        "送你一程": 2,
        "重攻击": 1,
        "仙跳墙": 2,
        "莲花酥": 2,
        "蒙德土豆饼": 1,
      },
    }),
    // 弓1 提2立1寻1 最2换1运2交1 星1 送2 重1仙2 莲2土1
    "提八激化-唐傀": registerDeck({
      team: ["八重神子", "柯莱", "提纳里"],
      actions: {
        "阿莫斯之弓": 1,
        "赌徒的耳环": 2,
        "提米": 2,
        "立本": 1,
        "寻宝仙灵": 1,
        "元素共鸣：交织之草": 2,
        "元素共鸣：蔓生之草": 2,
        "草与智慧": 2,
        "最好的伙伴！": 2,
        "换班时间": 1,
        "运筹帷幄": 2,
        "本大爷还没有输！": 2,
        "交给我吧！": 1,
        "星天之兆": 1,
        "送你一程": 2,
        "重攻击": 1,
        "仙跳墙": 2,
        "莲花酥": 2,
        "蒙德土豆饼": 1,
      },
    }),
    // 弓1 提1立2寻2 最2运1交2 星1 送2 仙2 莲2土2
    "提八激化-八重妞妞": registerDeck({
      team: ["柯莱", "八重神子", "提纳里"],
      actions: {
        "阿莫斯之弓": 1,
        "赌徒的耳环": 2,
        "提米": 1,
        "立本": 2,
        "寻宝仙灵": 2,
        "元素共鸣：交织之草": 2,
        "元素共鸣：蔓生之草": 2,
        "草与智慧": 2,
        "最好的伙伴！": 2,
        "运筹帷幄": 1,
        "本大爷还没有输！": 2,
        "交给我吧！": 2,
        "星天之兆": 1,
        "送你一程": 2,
        "仙跳墙": 2,
        "莲花酥": 2,
        "蒙德土豆饼": 2,
      },
    }),
    // 弓1 提2寻2
    "提八激化-皮皮猪": registerDeck({
      team: ["柯莱", "八重神子", "提纳里"],
      actions: {
        "阿莫斯之弓": 1,
        "赌徒的耳环": 2,
        "提米": 2,
        "寻宝仙灵": 2,
        "元素共鸣：交织之草": 2,
        "元素共鸣：蔓生之草": 2,
        "草与智慧": 2,
        "最好的伙伴！": 2,
        "换班时间": 2,
        "运筹帷幄": 1,
        "本大爷还没有输！": 2,
        "交给我吧！": 2,
        "星天之兆": 1,
        "快快缝补术": 1,
        "重攻击": 1,
        "仙跳墙": 1,
        "莲花酥": 2,
        "蒙德土豆饼": 2,
      },
    }),
    // 弓1 立2 最2换1运2交2 星1白1 快2送1 重1仙1 莲2土1
    "提八激化-莲花": registerDeck({
      team: ["八重神子", "提纳里", "柯莱"],
      actions: {
        "阿莫斯之弓": 1,
        "赌徒的耳环": 2,
        "立本": 2,
        "元素共鸣：交织之草": 2,
        "元素共鸣：蔓生之草": 2,
        "草与智慧": 2,
        "最好的伙伴！": 2,
        "换班时间": 1,
        "运筹帷幄": 2,
        "本大爷还没有输！": 2,
        "交给我吧！": 2,
        "星天之兆": 1,
        "白垩之术": 1,
        "快快缝补术": 2,
        "送你一程": 1,
        "重攻击": 1,
        "仙跳墙": 1,
        "莲花酥": 2,
        "蒙德土豆饼": 1,
      },
    }),

    // 神1 寻2 最2换1运2交2 星1白1 快2送1 重1仙1 莲2土1
    "提八激化-鸭鸭": registerDeck({
      team: ["提纳里", "八重神子", "柯莱"],
      actions: {
        "神篱之御荫": 1,
        "赌徒的耳环": 2,
        "寻宝仙灵": 2,
        "元素共鸣：交织之草": 2,
        "元素共鸣：蔓生之草": 2,
        "草与智慧": 2,
        "最好的伙伴！": 2,
        "换班时间": 1,
        "一掷乾坤": 2,
        "本大爷还没有输！": 2,
        "交给我吧！": 2,
        "快快缝补术": 2,
        "重攻击": 2,
        "仙跳墙": 2,
        "莲花酥": 2,
        "北地烟熏鸡": 2,
      },
    }),

    // 弓1 温妮莎传奇2
    "提八激化-月话音月": registerDeck({
      team: ["八重神子", "提纳里", "柯莱"],
      actions: {
        "阿莫斯之弓": 1,
        "赌徒的耳环": 2,
        "立本": 2,
        "寻宝仙灵": 2,
        "元素共鸣：交织之草": 2,
        "元素共鸣：蔓生之草": 2,
        "草与智慧": 2,
        "最好的伙伴！": 2,
        "运筹帷幄": 2,
        "本大爷还没有输！": 2,
        "交给我吧！": 1,
        "星天之兆": 1,
        "送你一程": 1,
        "重攻击": 1,
        "温妮莎传奇": 2,
        "仙跳墙": 2,
        "莲花酥": 2,
        "蒙德土豆饼": 1,
      },
    }),

    "提八草神-齿轮": registerDeck({
      team: ["八重神子", "提纳里", "纳西妲"],
      actions: {
        "赌徒的耳环": 2,
        "元素共鸣：交织之草": 2,
        "元素共鸣：蔓生之草": 2,
        "草与智慧": 2,
        "最好的伙伴！": 2,
        "换班时间": 2,
        "一掷乾坤": 1,
        "运筹帷幄": 2,
        "本大爷还没有输！": 2,
        "交给我吧！": 2,
        "快快缝补术": 2,
        "送你一程": 1,
        "重攻击": 2,
        "仙跳墙": 2,
        "莲花酥": 2,
        "蒙德土豆饼": 2,
      },
    }),
  },
  other: {
    // 提2 星1 仙1
    "水皇草-疯猫鸽鸽": registerDeck({
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
    // 提2 送1 仙1
    "水皇草-魔法绵羊Tobby": registerDeck({
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
    // 提2 运1 星1 送1 仙1
    "水皇草-吴意": registerDeck({
      team: ["纯水精灵·洛蒂娅", "纳西妲", "菲谢尔"],
      actions: {
        "赌徒的耳环": 2,
        "桓纳兰那": 2,
        "派蒙": 2,
        "提米": 2,
        "立本": 2,
        "最好的伙伴！": 2,
        "换班时间": 2,
        "一掷乾坤": 2,
        "运筹帷幄": 1,
        "本大爷还没有输！": 2,
        "交给我吧！": 2,
        "星天之兆": 1,
        "白垩之术": 2,
        "送你一程": 1,
        "仙跳墙": 1,
        "莲花酥": 2,
        "蒙德土豆饼": 2,
      },
    }),
    // 提2 一1 星1 仙2
    "水皇草-音尘": registerDeck({
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
    // 提2 星2 送1仙1
    "水皇草-皮皮猪": registerDeck({
      team: ["纳西妲", "纯水精灵·洛蒂娅", "菲谢尔"],
      actions: {
        "赌徒的耳环": 2,
        "桓纳兰那": 2,
        "派蒙": 2,
        "提米": 2,
        "立本": 2,
        "最好的伙伴！": 2,
        "换班时间": 2,
        "一掷乾坤": 1,
        "运筹帷幄": 1,
        "本大爷还没有输！": 2,
        "交给我吧！": 2,
        "星天之兆": 2,
        "白垩之术": 2,
        "送你一程": 1,
        "仙跳墙": 1,
        "莲花酥": 2,
        "蒙德土豆饼": 2,
      },
    }),
    // 提2 一0运1送2仙2 披1
    "水皇草-八重妞妞": registerDeck({
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
    // 提0 星1 送2 仙1
    "水皇草-小床": registerDeck({
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
    // 提2派0拉2 最1换1
    "水皇草-卡密sama": registerDeck({
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
    // 赌1 提2 星1送2 仙1
    "水皇草-唐傀": registerDeck({
      team: ["纳西妲", "纯水精灵·洛蒂娅", "菲谢尔"],
      actions: {
        "赌徒的耳环": 1,
        "桓纳兰那": 2,
        "派蒙": 2,
        "提米": 2,
        "立本": 2,
        "最好的伙伴！": 2,
        "换班时间": 2,
        "一掷乾坤": 2,
        "运筹帷幄": 2,
        "本大爷还没有输！": 2,
        "星天之兆": 1,
        "白垩之术": 2,
        "送你一程": 2,
        "重攻击": 1,
        "仙跳墙": 1,
        "莲花酥": 2,
        "蒙德土豆饼": 2,
      },
    }),
    // 赌1 提2 运1交2 星1送2 仙1
    "水皇草-莉莉芭": registerDeck({
      team: ["纳西妲", "纯水精灵·洛蒂娅", "菲谢尔"],
      actions: {
        "赌徒的耳环": 1,
        "桓纳兰那": 2,
        "派蒙": 2,
        "提米": 2,
        "立本": 2,
        "最好的伙伴！": 2,
        "换班时间": 2,
        "一掷乾坤": 2,
        "运筹帷幄": 1,
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
    "水皇草-今天不想吃苹果": registerDeck({
      team: ["纳西妲", "纯水精灵·洛蒂娅", "菲谢尔"],
      actions: {
        "赌徒的耳环": 1,
        "桓纳兰那": 1,
        "派蒙": 2,
        "提米": 2,
        "立本": 2,
        "最好的伙伴！": 2,
        "换班时间": 2,
        "一掷乾坤": 2,
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
    // 提2拉2 换1交0 星2仙2
    "水皇草-男总": registerDeck({
      team: ["纳西妲", "纯水精灵·洛蒂娅", "菲谢尔"],
      actions: {
        "赌徒的耳环": 2,
        "桓纳兰那": 2,
        "派蒙": 2,
        "提米": 2,
        "立本": 2,
        "拉娜": 2,
        "最好的伙伴！": 2,
        "换班时间": 1,
        "一掷乾坤": 2,
        "运筹帷幄": 1,
        "本大爷还没有输！": 2,
        "星天之兆": 2,
        "白垩之术": 2,
        "仙跳墙": 2,
        "莲花酥": 2,
        "蒙德土豆饼": 2,
      },
    }),
    // 不带派蒙
    "水皇草-周正福": registerDeck({
      team: ["菲谢尔", "纳西妲", "纯水精灵·洛蒂娅"],
      actions: {
        "赌徒的耳环": 1,
        "璃月港口": 1,
        "桓纳兰那": 2,
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
        "送你一程": 2,
        "仙跳墙": 1,
        "莲花酥": 2,
        "蒙德土豆饼": 2,
      },
    }),
    "水皇草-长安大魔王": registerDeck({
      team: ["纳西妲", "纯水精灵·洛蒂娅", "菲谢尔"],
      actions: {
        "赌徒的耳环": 2,
        "桓纳兰那": 2,
        "派蒙": 2,
        "提米": 2,
        "立本": 2,
        "最好的伙伴！": 2,
        "换班时间": 1,
        "一掷乾坤": 1,
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

    "水可草-企鹅带带北极熊": registerDeck({
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
    "莫皇草-Soul": registerDeck({
      team: ["纳西妲", "莫娜", "菲谢尔"],
      actions: {
        "赌徒的耳环": 2,
        "鸣神大社": 1,
        "桓纳兰那": 2,
        "提米": 2,
        "立本": 1,
        "旭东": 1,
        "寻宝仙灵": 2,
        "最好的伙伴！": 2,
        "换班时间": 2,
        "本大爷还没有输！": 2,
        "交给我吧！": 2,
        "白垩之术": 2,
        "送你一程": 2,
        "重攻击": 1,
        "仙跳墙": 1,
        "莲花酥": 2,
        "蒙德土豆饼": 1,
        "唐杜尔烤鸭": 2,
      },
    }),
    "莫温雷-老伯": registerDeck({
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
    "班尼特雷神绫华-兔娘": registerDeck({
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
    "水债八-老伯": registerDeck({
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
    "水债皇-雪国Ink": registerDeck({
      team: ["纯水精灵·洛蒂娅", "菲谢尔", "愚人众·火之债务处理人"],
      actions: {
        "悉数讨回": 2,
        "幸运儿银冠": 2,
        "璃月港口": 2,
        "天守阁": 1,
        "桓纳兰那": 1,
        "派蒙": 2,
        "提米": 1,
        "立本": 2,
        "最好的伙伴！": 2,
        "本大爷还没有输！": 2,
        "交给我吧！": 2,
        "星天之兆": 2,
        "送你一程": 2,
        "仙跳墙": 2,
        "莲花酥": 2,
        "蒙德土豆饼": 1,
        "烤蘑菇披萨": 2,
      },
    }),
    "水债皇-月话音月": registerDeck({
      team: ["菲谢尔", "愚人众·火之债务处理人", "纯水精灵·洛蒂娅"],
      actions: {
        "悉数讨回": 2,
        "幸运儿银冠": 2,
        "璃月港口": 2,
        "桓纳兰那": 1,
        "派蒙": 2,
        "立本": 2,
        "最好的伙伴！": 2,
        "换班时间": 2,
        "本大爷还没有输！": 2,
        "交给我吧！": 2,
        "星天之兆": 1,
        "白垩之术": 1,
        "送你一程": 2,
        "仙跳墙": 2,
        "莲花酥": 2,
        "蒙德土豆饼": 2,
        "烤蘑菇披萨": 1,
      },
    }),
  },
};

export { deckList, deckIdCollectors };

export function findDeck(id: string) {
  return deckList.find(deck => deck.id === id);
}

export function findDecksByTeam(teamId: string): Deck[] {
  return deckList.filter(deck => getTeamId(deck) === teamId);
}
