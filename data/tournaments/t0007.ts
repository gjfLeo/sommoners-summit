import { defineActions } from "../shared/utils/decks";
import { AratakiItto, Barbara, Bennett, Chongyun, Collei, FatuiPyroAgent, Fischl, HuTao, Keqing, Klee, Mona, Nahida, Ningguang, Noelle, RaidenShogun, RhodeiaOfLoch, Shenhe, Tartaglia, Tighnari, Venti, YaeMiko, Zhongli } from "../shared/character-cards";
import { defineTournament } from "../shared/utils/tournaments";

const actions = {
  "卡密sama42-双冰": defineActions({
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
    "重攻击": 1,
    "仙跳墙": 2,
    "莲花酥": 2,
    "蒙德土豆饼": 1,
  }),
  "卡密sama42-水皇草": defineActions({
    "赌徒的耳环": 1,
    "桓纳兰那": 2,
    "提米": 2,
    "立本": 2,
    "拉娜": 2,
    "最好的伙伴！": 2,
    "换班时间": 2,
    "运筹帷幄": 2,
    "本大爷还没有输！": 2,
    "交给我吧！": 2,
    "星天之兆": 1,
    "白垩之术": 2,
    "送你一程": 2,
    "仙跳墙": 2,
    "莲花酥": 2,
    "蒙德土豆饼": 2,
  }),
  "卡密sama42-双岩": defineActions({
    "钟剑": 2,
    "千岩牢固": 2,
    "璃月港口": 2,
    "天守阁": 2,
    "珊瑚宫": 1,
    "须弥城": 1,
    "桓纳兰那": 1,
    "立本": 2,
    "元素共鸣：交织之岩": 2,
    "元素共鸣：坚定之岩": 2,
    "风与自由": 2,
    "运筹帷幄": 1,
    "交给我吧！": 1,
    "白垩之术": 1,
    "送你一程": 1,
    "护法之誓": 1,
    "重攻击": 2,
    "莲花酥": 2,
    "烤蘑菇披萨": 2,
  }),

  "原皮鸭-水皇草": defineActions({
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
    "交给我吧！": 2,
    "星天之兆": 1,
    "白垩之术": 2,
    "送你一程": 1,
    "仙跳墙": 1,
    "莲花酥": 2,
    "蒙德土豆饼": 2,
  }),
  "原皮鸭-双岩": defineActions({
    "钟剑": 2,
    "千岩牢固": 2,
    "天守阁": 2,
    "桓纳兰那": 1,
    "立本": 2,
    "寻宝仙灵": 2,
    "元素共鸣：交织之岩": 2,
    "元素共鸣：坚定之岩": 2,
    "风与自由": 1,
    "一掷乾坤": 1,
    "交给我吧！": 1,
    "送你一程": 2,
    "重攻击": 2,
    "温妮莎传奇": 2,
    "莲花酥": 2,
    "蒙德土豆饼": 2,
    "烤蘑菇披萨": 2,
  }),
  "原皮鸭-双冰": defineActions({
    "赌徒的耳环": 2,
    "桓纳兰那": 2,
    "立本": 2,
    "寻宝仙灵": 1,
    "元素共鸣：交织之冰": 2,
    "元素共鸣：粉碎之冰": 2,
    "岩与契约": 1,
    "最好的伙伴！": 1,
    "换班时间": 2,
    "一掷乾坤": 2,
    "运筹帷幄": 1,
    "本大爷还没有输！": 2,
    "交给我吧！": 2,
    "星天之兆": 1,
    "送你一程": 2,
    "仙跳墙": 1,
    "莲花酥": 2,
    "蒙德土豆饼": 2,
  }),

  "卡牌狂魔张老伯-水债皇": defineActions({
    "血之灶火": 2,
    "幸运儿银冠": 1,
    "赌徒的耳环": 1,
    "璃月港口": 1,
    "天守阁": 1,
    "桓纳兰那": 1,
    "派蒙": 2,
    "提米": 1,
    "立本": 2,
    "最好的伙伴！": 2,
    "换班时间": 1,
    "本大爷还没有输！": 2,
    "交给我吧！": 2,
    "星天之兆": 2,
    "送你一程": 2,
    "仙跳墙": 2,
    "莲花酥": 2,
    "蒙德土豆饼": 1,
    "烤蘑菇披萨": 2,
  }),
  "卡牌狂魔张老伯-火云鹤": defineActions({
    "冒险憧憬": 2,
    "祭礼剑": 2,
    "赌徒的耳环": 2,
    "璃月港口": 2,
    "桓纳兰那": 1,
    "派蒙": 2,
    "提米": 2,
    "立本": 2,
    "元素共鸣：交织之冰": 2,
    "元素共鸣：粉碎之冰": 2,
    "最好的伙伴！": 2,
    "本大爷还没有输！": 2,
    "交给我吧！": 1,
    "莲花酥": 2,
    "北地烟熏鸡": 2,
    "蒙德土豆饼": 2,
  }),
  "卡牌狂魔张老伯-莫温刻": defineActions({
    "祭礼剑": 2,
    "赌徒的耳环": 2,
    "桓纳兰那": 2,
    "提米": 2,
    "鲸井小弟": 2,
    "寻宝仙灵": 2,
    "风与自由": 2,
    "最好的伙伴！": 1,
    "换班时间": 2,
    "一掷乾坤": 1,
    "运筹帷幄": 2,
    "本大爷还没有输！": 2,
    "交给我吧！": 1,
    "白垩之术": 2,
    "仙跳墙": 1,
    "莲花酥": 2,
    "唐杜尔烤鸭": 2,
  }),

  "回忆往昔的遗憾-双冰": defineActions({
    "赌徒的耳环": 2,
    "桓纳兰那": 2,
    "提米": 2,
    "立本": 2,
    "元素共鸣：交织之冰": 2,
    "元素共鸣：粉碎之冰": 2,
    "岩与契约": 1,
    "最好的伙伴！": 2,
    "换班时间": 2,
    "一掷乾坤": 1,
    "运筹帷幄": 2,
    "本大爷还没有输！": 2,
    "交给我吧！": 1,
    "星天之兆": 1,
    "送你一程": 2,
    "重攻击": 1,
    "仙跳墙": 1,
    "莲花酥": 2,
  }),
  "回忆往昔的遗憾-火刻": defineActions({
    "冒险憧憬": 2,
    "祭礼剑": 1,
    "赌徒的耳环": 2,
    "璃月港口": 2,
    "须弥城": 2,
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
    "唐杜尔烤鸭": 1,
  }),

};

export default defineTournament({
  id: "0007",
  name: "哔哩哔哩主播资格赛",
  tag: "主播资格赛",
  gameVersion: "3.7",
  image: "https://webstatic.mihoyo.com/upload/op-public/2023/06/26/3fe7c0e4365537d4654825abc224681e_1222276889799397404.jpg",
  stages: [
    {
      name: "小组赛",
      parts: [
        {
          name: "DAY1",
          date: "2023-06-27",
          matches: [
            {
              playerA: "水瓶子",
              playerB: "卡密sama42",
              winner: "B",
              video: "https://www.bilibili.com/video/BV1pu411h7Hg",
              games: [
                {
                  playerACharacters: [Bennett, Keqing, FatuiPyroAgent],
                  // TODO 缺卡组
                  playerBCharacters: [Chongyun, RaidenShogun, Shenhe],
                  playerBActions: actions["卡密sama42-双冰"],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: [YaeMiko, Tighnari, Collei],
                  playerAActions: defineActions({
                    "赌徒的耳环": 2,
                    "提米": 2,
                    "立本": 2,
                    "刘苏": 1,
                    "寻宝仙灵": 1,
                    "元素共鸣：交织之草": 2,
                    "元素共鸣：蔓生之草": 2,
                    "草与智慧": 2,
                    "最好的伙伴！": 2,
                    "换班时间": 2,
                    "一掷乾坤": 1,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 2,
                    "快快缝补术": 1,
                    "重攻击": 2,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "唐杜尔烤鸭": 1,
                  }),
                  playerBCharacters: [RhodeiaOfLoch, Fischl, Nahida],
                  playerBActions: actions["卡密sama42-水皇草"],
                  starter: "A",
                  winner: "B",
                },
              ],
            },
            {
              playerA: "企鹅带带北极熊",
              playerB: "卡牌狂魔张老伯",
              winner: "B",
              video: "https://www.bilibili.com/video/BV1pu411h7Hg?p=2",
              games: [
                {
                  playerACharacters: [Chongyun, HuTao, Shenhe],
                  // TODO 缺卡组
                  playerBCharacters: [RhodeiaOfLoch, Fischl, FatuiPyroAgent],
                  playerBActions: actions["卡牌狂魔张老伯-水债皇"],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: [Klee, RhodeiaOfLoch, Nahida],
                  playerAActions: defineActions({
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
                  }),
                  playerBCharacters: [Bennett, Chongyun, Shenhe],
                  playerBActions: actions["卡牌狂魔张老伯-火云鹤"],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: [Tartaglia, Bennett, FatuiPyroAgent],
                  playerAActions: defineActions({
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
                  }),
                  playerBCharacters: [Keqing, Mona, Venti],
                  playerBActions: actions["卡牌狂魔张老伯-莫温刻"],
                  starter: "B",
                  winner: "B",
                },
              ],
            },
            {
              playerA: "原皮鸭",
              playerB: "BattleSpt",
              winner: "A",
              video: "https://www.bilibili.com/video/BV1pu411h7Hg?p=3",
              games: [
                {
                  playerACharacters: [RhodeiaOfLoch, Fischl, Nahida],
                  playerAActions: actions["原皮鸭-双岩"],
                  playerBCharacters: [Ningguang, YaeMiko, Zhongli],
                  playerBActions: defineActions({
                    "贯虹之槊": 2,
                    "千岩牢固": 2,
                    "璃月港口": 2,
                    "西风大教堂": 2,
                    "珊瑚宫": 2,
                    "须弥城": 2,
                    "阿圆": 2,
                    "立本": 2,
                    "元素共鸣：交织之岩": 2,
                    "元素共鸣：坚定之岩": 2,
                    "本大爷还没有输！": 1,
                    "送你一程": 2,
                    "重攻击": 1,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
                    "烤蘑菇披萨": 2,
                  }),
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: [Chongyun, RaidenShogun, Shenhe],
                  playerAActions: actions["原皮鸭-双冰"],
                  playerBCharacters: [RhodeiaOfLoch, Fischl, Nahida],
                  playerBActions: defineActions({
                    "赌徒的耳环": 2,
                    "桓纳兰那": 2,
                    "派蒙": 2,
                    "提米": 2,
                    "立本": 2,
                    "拉娜": 2,
                    "最好的伙伴！": 2,
                    "一掷乾坤": 2,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 1,
                    "星天之兆": 1,
                    "白垩之术": 2,
                    "送你一程": 2,
                    "仙跳墙": 2,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
                  }),
                  starter: "B",
                  winner: "A",
                },
              ],
            },
            {
              playerA: "回忆往昔的遗憾",
              playerB: "九方羽幻",
              winner: "A",
              video: "https://www.bilibili.com/video/BV1pu411h7Hg?p=4",
              games: [
                {
                  playerACharacters: [Fischl, RhodeiaOfLoch, Nahida],
                  // TODO 缺卡组
                  // playerBActions: actions["回忆往昔的遗憾-水皇草"],
                  playerBCharacters: [Chongyun, RaidenShogun, Shenhe],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: [Chongyun, RaidenShogun, Shenhe],
                  playerAActions: actions["回忆往昔的遗憾-双冰"],
                  playerBCharacters: [RhodeiaOfLoch, Fischl, Nahida],
                  playerBActions: defineActions({
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
                    "交给我吧！": 1,
                    "星天之兆": 1,
                    "白垩之术": 2,
                    "送你一程": 1,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
                    "提瓦特煎蛋": 1,
                  }),
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: [Bennett, Klee, Keqing],
                  playerAActions: actions["回忆往昔的遗憾-火刻"],
                  playerBCharacters: [Barbara, AratakiItto, Noelle],
                  playerBActions: defineActions({
                    "钟剑": 2,
                    "千岩牢固": 2,
                    "天守阁": 2,
                    "桓纳兰那": 1,
                    "立本": 2,
                    "寻宝仙灵": 2,
                    "元素共鸣：交织之岩": 2,
                    "元素共鸣：坚定之岩": 2,
                    "风与自由": 1,
                    "最好的伙伴！": 1,
                    "交给我吧！": 1,
                    "送你一程": 2,
                    "重攻击": 2,
                    "温妮莎传奇": 2,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
                    "烤蘑菇披萨": 2,
                  }),
                  starter: "B",
                  winner: "A",
                },
              ],
            },
            {
              playerA: "卡密sama42",
              playerB: "卡牌狂魔张老伯",
              winner: "A",
              video: "https://www.bilibili.com/video/BV1pu411h7Hg?p=5",
              games: [
                {
                  playerACharacters: [Noelle, Barbara, AratakiItto],
                  playerAActions: actions["卡密sama42-双岩"],
                  playerBCharacters: [Keqing, Mona, Venti],
                  playerBActions: actions["卡牌狂魔张老伯-莫温刻"],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: [RhodeiaOfLoch, Fischl, Nahida],
                  playerAActions: actions["卡密sama42-水皇草"],
                  playerBCharacters: [RhodeiaOfLoch, Fischl, FatuiPyroAgent],
                  playerBActions: actions["卡牌狂魔张老伯-水债皇"],
                  starter: "B",
                  winner: "A",
                },
              ],
            },
            {
              playerA: "原皮鸭",
              playerB: "回忆往昔的遗憾",
              winner: "A",
              video: "https://www.bilibili.com/video/BV1pu411h7Hg?p=6",
              games: [
                {
                  playerACharacters: [RhodeiaOfLoch, Fischl, Nahida],
                  playerAActions: actions["原皮鸭-水皇草"],
                  playerBCharacters: [Fischl, RhodeiaOfLoch, Nahida],
                  // TODO 缺卡组
                  // playerBActions: actions["回忆往昔的遗憾-水皇草"],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: [Chongyun, RaidenShogun, Shenhe],
                  playerAActions: actions["原皮鸭-双冰"],
                  playerBCharacters: [Chongyun, RaidenShogun, Shenhe],
                  playerBActions: actions["回忆往昔的遗憾-双冰"],
                  starter: "B",
                  winner: "A",
                },
              ],
            },
            {
              playerA: "原皮鸭",
              playerB: "卡密sama42",
              winner: "B",
              video: "https://www.bilibili.com/video/BV1pu411h7Hg?p=7",
              games: [
                {
                  playerACharacters: [RhodeiaOfLoch, Fischl, Nahida],
                  playerAActions: actions["原皮鸭-水皇草"],
                  playerBCharacters: [Chongyun, RaidenShogun, Shenhe],
                  playerBActions: actions["卡密sama42-双冰"],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: [Barbara, AratakiItto, Noelle],
                  playerAActions: actions["原皮鸭-双岩"],
                  playerBCharacters: [RhodeiaOfLoch, Fischl, Nahida],
                  playerBActions: actions["卡密sama42-水皇草"],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: [Chongyun, RaidenShogun, Shenhe],
                  playerAActions: actions["原皮鸭-双冰"],
                  playerBCharacters: [Noelle, Barbara, AratakiItto],
                  playerBActions: actions["卡密sama42-双岩"],
                  starter: "B",
                  winner: "B",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
});
