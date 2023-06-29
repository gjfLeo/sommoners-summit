import { Chongyun, Fischl, Mona, Nahida, RaidenShogun, RhodeiaOfLoch, Shenhe } from "../../shared/character-cards";
import { defineTournament } from "../../shared/utils/tournaments";
import { defineActions } from "../../shared/utils/decks";

const actions = {
  "全都是错误-莫皇草": defineActions({
    "赌徒的耳环": 2,
    "桓纳兰那": 2,
    "提米": 2,
    "鲸井小弟": 1,
    "拉娜": 2,
    "风与自由": 1,
    "最好的伙伴！": 2,
    "换班时间": 2,
    "一掷乾坤": 2,
    "运筹帷幄": 1,
    "本大爷还没有输！": 2,
    "星天之兆": 1,
    "白垩之术": 1,
    "送你一程": 2,
    "仙跳墙": 2,
    "莲花酥": 2,
    "蒙德土豆饼": 1,
    "唐杜尔烤鸭": 2,
  }),
  "全都是错误-双冰": defineActions({
    "赌徒的耳环": 2,
    "桓纳兰那": 2,
    "派蒙": 1,
    "立本": 1,
    "元素共鸣：交织之冰": 2,
    "元素共鸣：粉碎之冰": 2,
    "最好的伙伴！": 2,
    "换班时间": 2,
    "一掷乾坤": 2,
    "运筹帷幄": 1,
    "本大爷还没有输！": 2,
    "交给我吧！": 2,
    "星天之兆": 1,
    "送你一程": 2,
    "重攻击": 1,
    "仙跳墙": 1,
    "莲花酥": 2,
    "蒙德土豆饼": 2,
  }),
  "蒙德高达诺艾尔-水皇草": defineActions({
    "赌徒的耳环": 1,
    "璃月港口": 2,
    "桓纳兰那": 2,
    "提米": 2,
    "立本": 2,
    "拉娜": 2,
    "最好的伙伴！": 2,
    "换班时间": 2,
    "一掷乾坤": 2,
    "本大爷还没有输！": 2,
    "交给我吧！": 2,
    "星天之兆": 1,
    "白垩之术": 2,
    "送你一程": 2,
    "仙跳墙": 1,
    "莲花酥": 2,
    "蒙德土豆饼": 1,
  }),
  "蒙德高达诺艾尔-双冰": defineActions({
    "赌徒的耳环": 2,
    "桓纳兰那": 1,
    "提米": 2,
    "立本": 2,
    "寻宝仙灵": 2,
    "元素共鸣：交织之冰": 2,
    "元素共鸣：粉碎之冰": 2,
    "最好的伙伴！": 2,
    "换班时间": 2,
    "本大爷还没有输！": 2,
    "交给我吧！": 2,
    "送你一程": 2,
    "重攻击": 1,
    "仙跳墙": 1,
    "莲花酥": 2,
    "北地烟熏鸡": 2,
    "蒙德土豆饼": 1,
  }),
  "桔梗-双冰": defineActions({
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
    "运筹帷幄": 1,
    "本大爷还没有输！": 2,
    "交给我吧！": 1,
    "星天之兆": 1,
    "送你一程": 2,
    "重攻击": 1,
    "仙跳墙": 2,
    "莲花酥": 2,
    "蒙德土豆饼": 1,
  }),
  "桔梗-水皇草": defineActions({
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
    "星天之兆": 1,
    "白垩之术": 2,
    "送你一程": 2,
    "仙跳墙": 1,
    "莲花酥": 2,
    "蒙德土豆饼": 2,
  }),
  "Dr.666-莫皇草": defineActions({
    "赌徒的耳环": 2,
    "桓纳兰那": 2,
    "提米": 2,
    "拉娜": 2,
    "寻宝仙灵": 1,
    "风与自由": 1,
    "最好的伙伴！": 2,
    "换班时间": 2,
    "一掷乾坤": 1,
    "运筹帷幄": 2,
    "本大爷还没有输！": 2,
    "交给我吧！": 2,
    "星天之兆": 1,
    "白垩之术": 2,
    "送你一程": 1,
    "仙跳墙": 2,
    "莲花酥": 1,
    "蒙德土豆饼": 1,
    "唐杜尔烤鸭": 1,
  }),
};

export default defineTournament({
  name: "「燃斗无双」米游社",
  tag: "全民积分赛",
  gameVersion: "3.7",
  image: "https://webstatic.mihoyo.com/upload/op-public/2023/05/22/cc44733a7266dc48ddce010b81254813_1820244986244219714.jpg",
  stages: [
    {
      name: "8进4淘汰赛",
      rules: [
        "征服",
        "BO3",
        ["禁用阵容", "每名选手提交3套阵容，至少包含7张不同的角色牌，赛前禁用对手一套阵容"],
      ],
      parts: [
        {
          name: "DAY1",
          date: "2023-06-29",
          matches: [
            {
              playerA: "全都是错误",
              playerB: "蒙德高达诺艾尔",
              winner: "A",
              video: "",
              games: [
                {
                  playerACharacters: [Fischl, Mona, Nahida],
                  playerAActions: actions["全都是错误-莫皇草"],
                  playerBCharacters: [Nahida, RhodeiaOfLoch, Fischl],
                  playerBActions: actions["蒙德高达诺艾尔-水皇草"],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: [Chongyun, RaidenShogun, Shenhe],
                  playerAActions: actions["全都是错误-双冰"],
                  playerBCharacters: [Nahida, RhodeiaOfLoch, Fischl],
                  playerBActions: actions["蒙德高达诺艾尔-水皇草"],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: [Chongyun, RaidenShogun, Shenhe],
                  playerAActions: actions["全都是错误-双冰"],
                  playerBCharacters: [Chongyun, RaidenShogun, Shenhe],
                  playerBActions: actions["蒙德高达诺艾尔-双冰"],
                  starter: "A",
                  winner: "A",
                },
              ],
            },
            {
              playerA: "桔梗",
              playerB: "Dr.666",
              winner: "A",
              video: "",
              games: [
                {
                  playerACharacters: [Chongyun, RaidenShogun, Shenhe],
                  playerAActions: actions["桔梗-双冰"],
                  playerBCharacters: [Fischl, Nahida, Mona],
                  playerBActions: actions["Dr.666-莫皇草"],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: [Nahida, RhodeiaOfLoch, Fischl],
                  playerAActions: actions["桔梗-水皇草"],
                  playerBCharacters: [Fischl, Nahida, Mona],
                  playerBActions: actions["Dr.666-莫皇草"],
                  starter: "A",
                  winner: "A",
                },
              ],
            },
          ],
        },
        // {
        //   name: "DAY2",
        //   date: "2023-06-30",
        //   matches: [
        //     // {
        //     //   playerA: "唐傀",
        //     //   playerB: "昨夜风",
        //     // },
        //     // {
        //     //   playerA: "河道迅捷蟹",
        //     //   playerB: "岩van♂deep君",
        //     // }
        //   ],
        // },
      ],
    },
    // {
    //   name: "半决赛",
    //   parts: [
    //     {
    //       name: "",
    //       date: "2023-07-01",
    //       matches: [],
    //     },
    //   ],
    // },
    // {
    //   name: "决赛",
    //   parts: [
    //     {
    //       name: "",
    //       date: "2023-07-02",
    //       matches: [],
    //     },
    //   ],
    // },
  ],
});
