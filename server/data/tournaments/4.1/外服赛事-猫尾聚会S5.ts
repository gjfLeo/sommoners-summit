import { defineActions, defineTournament } from "~/utils/types";

export default defineTournament({
  name: "Cat's Tail Gathering S5",
  type: "外服赛事",
  gameVersion: "4.1",
  stages: [
    {
      name: "亚服 Asia",
      rules: {
        numDecks: 3,
        numGames: 3,
        mode: "Duel",
      },
      parts: [
        {
          name: "季军赛",
          date: "2023-11-05",
          matches: [
            {
              playerA: "icedtea",
              playerB: "硝子",
              video: "https://www.youtube.com/watch?v=o5BYlSEjD-4",
              games: [
                {
                  playerACharacters: ["北斗", "重云", "雷泽"],
                  playerAActions: defineActions({
                    "赌徒的耳环": 2,
                    "派蒙": 2,
                    "卯师傅": 2,
                    "常九爷": 2,
                    "迪娜泽黛": 2,
                    "参量质变仪": 2,
                    "寻宝仙灵": 2,
                    "磐岩盟契": 1,
                    "元素共鸣：交织之雷": 2,
                    "元素共鸣：强能之雷": 1,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 1,
                    "重攻击": 1,
                    "温妮莎传奇": 2,
                    "莲花酥": 2,
                    "北地烟熏鸡": 2,
                    "兽肉薄荷卷": 2,
                  }),
                  playerBCharacters: ["纯水精灵·洛蒂娅", "菲谢尔", "纳西妲"],
                  playerBActions: defineActions({
                    "赌徒的耳环": 1,
                    "桓纳兰那": 1,
                    "派蒙": 2,
                    "卯师傅": 2,
                    "立本": 2,
                    "迪娜泽黛": 2,
                    "便携营养袋": 1,
                    "自由的新风": 1,
                    "最好的伙伴！": 2,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 2,
                    "星天之兆": 1,
                    "送你一程": 2,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "甜甜花酿鸡": 1,
                    "蒙德土豆饼": 2,
                    "提瓦特煎蛋": 1,
                  }),
                  starter: "B",
                  winner: "B",
                  video: "https://www.youtube.com/watch?v=o5BYlSEjD-4",
                },
                {
                  playerACharacters: ["愚人众·火之债务处理人", "纯水精灵·洛蒂娅", "菲谢尔"],
                  playerAActions: defineActions({
                    "悉数讨回": 1,
                    "幸运儿银冠": 1,
                    "沉沦之心": 1,
                    "璃月港口": 2,
                    "西风大教堂": 2,
                    "天守阁": 1,
                    "须弥城": 2,
                    "阿圆": 2,
                    "立本": 2,
                    "自由的新风": 1,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 1,
                    "星天之兆": 1,
                    "送你一程": 2,
                    "仙跳墙": 2,
                    "莲花酥": 2,
                    "蒙德土豆饼": 1,
                    "烤蘑菇披萨": 2,
                  }),
                  playerBCharacters: ["诺艾尔", "迪希雅", "荒泷一斗"],
                  playerBActions: defineActions({
                    "钟剑": 2,
                    "千岩牢固": 2,
                    "派蒙": 2,
                    "卯师傅": 2,
                    "立本": 2,
                    "迪娜泽黛": 2,
                    "自由的新风": 1,
                    "元素共鸣：交织之岩": 2,
                    "元素共鸣：坚定之岩": 2,
                    "运筹帷幄": 1,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 1,
                    "送你一程": 2,
                    "重攻击": 1,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
                    "烤蘑菇披萨": 2,
                  }),
                  starter: "B",
                  winner: "A",
                  video: "https://www.youtube.com/watch?v=o5BYlSEjD-4",
                },
                {
                  playerACharacters: ["诺艾尔", "迪希雅", "荒泷一斗"],
                  playerAActions: defineActions({
                    "钟剑": 2,
                    "千岩牢固": 2,
                    "璃月港口": 2,
                    "西风大教堂": 2,
                    "须弥城": 2,
                    "桓纳兰那": 1,
                    "阿圆": 2,
                    "立本": 2,
                    "磐岩盟契": 1,
                    "元素共鸣：交织之岩": 2,
                    "元素共鸣：坚定之岩": 2,
                    "运筹帷幄": 2,
                    "交给我吧！": 1,
                    "送你一程": 2,
                    "莲花酥": 2,
                    "蒙德土豆饼": 1,
                    "烤蘑菇披萨": 2,
                  }),
                  playerBCharacters: ["北斗", "重云", "雷泽"],
                  playerBActions: defineActions({
                    "赌徒的耳环": 2,
                    "派蒙": 2,
                    "卯师傅": 2,
                    "立本": 2,
                    "常九爷": 2,
                    "迪娜泽黛": 2,
                    "寻宝仙灵": 1,
                    "磐岩盟契": 1,
                    "元素共鸣：交织之雷": 2,
                    "元素共鸣：强能之雷": 2,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 1,
                    "重攻击": 1,
                    "温妮莎传奇": 2,
                    "莲花酥": 1,
                    "北地烟熏鸡": 2,
                    "甜甜花酿鸡": 1,
                    "兽肉薄荷卷": 2,
                  }),
                  starter: "B",
                  winner: "B",
                  video: "https://www.youtube.com/watch?v=o5BYlSEjD-4",
                },
              ],
            },
          ],
        },
        {
          name: "决赛",
          date: "2023-11-05",
          matches: [
            {
              playerA: "皮皮喵",
              playerB: "きりさ",
              video: "https://www.youtube.com/watch?v=o5BYlSEjD-4",
              games: [
                {
                  playerACharacters: ["可莉", "刻晴", "班尼特"],
                  playerAActions: defineActions({
                    "冒险憧憬": 2,
                    "祭礼剑": 2,
                    "赌徒的耳环": 2,
                    "炽烈的炎之魔女": 2,
                    "须弥城": 2,
                    "立本": 2,
                    "拉娜": 2,
                    "磐岩盟契": 1,
                    "元素共鸣：交织之火": 2,
                    "元素共鸣：热诚之火": 2,
                    "最好的伙伴！": 1,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 2,
                    "莲花酥": 2,
                    "提瓦特煎蛋": 1,
                    "唐杜尔烤鸡": 1,
                  }),
                  playerBCharacters: ["纯水精灵·洛蒂娅", "菲谢尔", "愚人众·火之债务处理人"],
                  playerBActions: defineActions({
                    "悉数讨回": 1,
                    "幸运儿银冠": 1,
                    "绝缘之旗印": 1,
                    "璃月港口": 2,
                    "西风大教堂": 2,
                    "珊瑚宫": 1,
                    "须弥城": 2,
                    "阿圆": 2,
                    "立本": 1,
                    "自由的新风": 1,
                    "运筹帷幄": 1,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 2,
                    "星天之兆": 2,
                    "送你一程": 2,
                    "重攻击": 1,
                    "仙跳墙": 2,
                    "莲花酥": 2,
                    "蒙德土豆饼": 1,
                    "烤蘑菇披萨": 2,
                  }),
                  starter: "B",
                  winner: "B",
                  video: "https://www.youtube.com/watch?v=o5BYlSEjD-4",
                },
                {
                  playerACharacters: ["纯水精灵·洛蒂娅", "菲谢尔", "愚人众·火之债务处理人"],
                  playerAActions: defineActions({
                    "悉数讨回": 1,
                    "幸运儿银冠": 1,
                    "绝缘之旗印": 1,
                    "派蒙": 2,
                    "卯师傅": 2,
                    "立本": 2,
                    "迪娜泽黛": 2,
                    "拉娜": 1,
                    "自由的新风": 1,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 1,
                    "星天之兆": 2,
                    "送你一程": 2,
                    "仙跳墙": 2,
                    "莲花酥": 2,
                    "甜甜花酿鸡": 1,
                    "蒙德土豆饼": 1,
                    "烤蘑菇披萨": 2,
                  }),
                  playerBCharacters: ["岩盔丘丘王", "荒泷一斗", "迪希雅"],
                  playerBActions: defineActions({
                    "钟剑": 2,
                    "千岩牢固": 2,
                    "璃月港口": 2,
                    "须弥城": 2,
                    "立本": 2,
                    "便携营养袋": 1,
                    "自由的新风": 1,
                    "元素共鸣：交织之岩": 2,
                    "元素共鸣：坚定之岩": 2,
                    "运筹帷幄": 1,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 2,
                    "送你一程": 1,
                    "重攻击": 2,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
                    "烤蘑菇披萨": 2,
                  }),
                  starter: "B",
                  winner: "B",
                  video: "https://www.youtube.com/watch?v=o5BYlSEjD-4",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "欧服 Europe",
      rules: {
        numDecks: 3,
        numGames: 3,
        mode: "Duel",
      },
      parts: [
        {
          name: "季军赛",
          date: "2023-11-06",
          matches: [
            {
              playerA: "maya",
              playerB: "ayokonakoji",
              video: "https://www.youtube.com/watch?v=TTFtC289Ko4&t=3924s",
              games: [
                {
                  playerACharacters: ["迪奥娜", "行秋", "芭芭拉"],
                  playerAActions: defineActions({
                    "猫爪冰摇": 2,
                    "祭礼弓": 2,
                    "风鹰剑": 1,
                    "千岩牢固": 2,
                    "璃月港口": 2,
                    "天守阁": 1,
                    "须弥城": 2,
                    "桓纳兰那": 1,
                    "立本": 2,
                    "旧时庭园": 1,
                    "元素共鸣：交织之水": 2,
                    "元素共鸣：愈疗之水": 2,
                    "运筹帷幄": 2,
                    "交给我吧！": 2,
                    "送你一程": 2,
                    "莲花酥": 2,
                    "烤蘑菇披萨": 2,
                  }),
                  playerBCharacters: ["可莉", "达达利亚", "愚人众·火之债务处理人"],
                  playerBActions: defineActions({
                    "盈满之实": 1,
                    "王下近侍": 2,
                    "赌徒的耳环": 2,
                    "派蒙": 2,
                    "立本": 2,
                    "自由的新风": 1,
                    "元素共鸣：交织之火": 2,
                    "元素共鸣：热诚之火": 2,
                    "最好的伙伴！": 1,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 1,
                    "愚人众的阴谋": 2,
                    "重攻击": 2,
                    "莲花酥": 2,
                    "北地烟熏鸡": 2,
                    "蒙德土豆饼": 2,
                  }),
                  starter: "A",
                  winner: "A",
                  video: "https://www.youtube.com/watch?v=TTFtC289Ko4&t=3924s",
                },
                {
                  playerACharacters: ["迪希雅", "诺艾尔", "荒泷一斗"],
                  playerAActions: defineActions({
                    "钟剑": 2,
                    "千岩牢固": 2,
                    "璃月港口": 2,
                    "须弥城": 2,
                    "桓纳兰那": 1,
                    "立本": 2,
                    "磐岩盟契": 1,
                    "元素共鸣：交织之岩": 2,
                    "元素共鸣：坚定之岩": 2,
                    "运筹帷幄": 2,
                    "交给我吧！": 1,
                    "送你一程": 2,
                    "护法之誓": 1,
                    "重攻击": 2,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
                    "烤蘑菇披萨": 2,
                  }),
                  playerBCharacters: ["雷电将军", "申鹤", "重云"],
                  playerBActions: defineActions({
                    "贯月矢": 1,
                    "赌徒的耳环": 2,
                    "派蒙": 2,
                    "立本": 2,
                    "刘苏": 2,
                    "自由的新风": 1,
                    "元素共鸣：交织之冰": 2,
                    "元素共鸣：粉碎之冰": 2,
                    "最好的伙伴！": 2,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 1,
                    "星天之兆": 1,
                    "送你一程": 2,
                    "仙跳墙": 2,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
                  }),
                  starter: "B",
                  winner: "B",
                  video: "https://www.youtube.com/watch?v=TTFtC289Ko4&t=3924s",
                },
                {
                  playerACharacters: ["纯水精灵·洛蒂娅", "菲谢尔", "纳西妲"],
                  playerAActions: defineActions({
                    "赌徒的耳环": 1,
                    "桓纳兰那": 1,
                    "派蒙": 2,
                    "卯师傅": 2,
                    "立本": 2,
                    "迪娜泽黛": 2,
                    "拉娜": 2,
                    "便携营养袋": 1,
                    "磐岩盟契": 1,
                    "最好的伙伴！": 2,
                    "换班时间": 1,
                    "一掷乾坤": 1,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 1,
                    "白垩之术": 1,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "甜甜花酿鸡": 2,
                    "蒙德土豆饼": 2,
                    "提瓦特煎蛋": 1,
                  }),
                  playerBCharacters: ["优菈", "莫娜", "流浪者"],
                  playerBActions: defineActions({
                    "赌徒的耳环": 2,
                    "教官的帽子": 2,
                    "桓纳兰那": 1,
                    "派蒙": 2,
                    "立本": 2,
                    "参量质变仪": 2,
                    "寻宝仙灵": 1,
                    "自由的新风": 1,
                    "最好的伙伴！": 2,
                    "换班时间": 1,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 1,
                    "送你一程": 2,
                    "重攻击": 1,
                    "莲花酥": 2,
                    "北地烟熏鸡": 2,
                    "蒙德土豆饼": 2,
                  }),
                  starter: "A",
                  winner: "A",
                  video: "https://www.youtube.com/watch?v=TTFtC289Ko4&t=3924s",
                },
              ],
            },
          ],
        },
        {
          name: "决赛",
          date: "2023-11-06",
          matches: [
            {
              playerA: "KevinZ",
              playerB: "ΚΥΡΑΝΟΣ",
              video: "https://www.youtube.com/watch?v=TTFtC289Ko4&t=3924s",
              games: [
                {
                  playerACharacters: ["雷电将军", "坎蒂丝", "雷泽"],
                  playerAActions: defineActions({
                    "赌徒的耳环": 2,
                    "桓纳兰那": 2,
                    "立本": 2,
                    "参量质变仪": 2,
                    "寻宝仙灵": 2,
                    "磐岩盟契": 1,
                    "元素共鸣：交织之雷": 2,
                    "换班时间": 2,
                    "一掷乾坤": 1,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 2,
                    "重攻击": 2,
                    "温妮莎传奇": 2,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "兽肉薄荷卷": 2,
                  }),
                  playerBCharacters: ["芭芭拉", "行秋", "迪奥娜"],
                  playerBActions: defineActions({
                    "猫爪冰摇": 1,
                    "祭礼弓": 1,
                    "风鹰剑": 1,
                    "将帅兜鍪": 1,
                    "千岩牢固": 2,
                    "璃月港口": 2,
                    "天守阁": 2,
                    "须弥城": 1,
                    "桓纳兰那": 2,
                    "立本": 2,
                    "元素共鸣：交织之水": 2,
                    "元素共鸣：愈疗之水": 2,
                    "运筹帷幄": 2,
                    "交给我吧！": 2,
                    "送你一程": 1,
                    "重攻击": 1,
                    "莲花酥": 2,
                    "烤蘑菇披萨": 2,
                    "提瓦特煎蛋": 1,
                  }),
                  starter: "A",
                  winner: "A",
                  video: "https://www.youtube.com/watch?v=TTFtC289Ko4&t=3924s",
                },
                {
                  playerACharacters: ["迪希雅", "荒泷一斗", "诺艾尔"],
                  playerAActions: defineActions({
                    "钟剑": 2,
                    "千岩牢固": 2,
                    "璃月港口": 2,
                    "须弥城": 2,
                    "桓纳兰那": 1,
                    "立本": 2,
                    "磐岩盟契": 1,
                    "元素共鸣：交织之岩": 2,
                    "元素共鸣：坚定之岩": 2,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 1,
                    "送你一程": 2,
                    "重攻击": 2,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
                    "烤蘑菇披萨": 2,
                  }),
                  playerBCharacters: ["迪希雅", "荒泷一斗", "诺艾尔"],
                  playerBActions: defineActions({
                    "钟剑": 2,
                    "千岩牢固": 2,
                    "璃月港口": 1,
                    "天守阁": 1,
                    "须弥城": 2,
                    "桓纳兰那": 1,
                    "立本": 2,
                    "磐岩盟契": 1,
                    "元素共鸣：交织之岩": 2,
                    "元素共鸣：坚定之岩": 2,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 1,
                    "送你一程": 1,
                    "重攻击": 2,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
                    "烤蘑菇披萨": 2,
                  }),
                  starter: "B",
                  winner: "B",
                  video: "https://www.youtube.com/watch?v=TTFtC289Ko4&t=3924s",
                },
                {
                  playerACharacters: ["流浪者", "申鹤", "魈"],
                  playerAActions: defineActions({
                    "千夜浮梦": 1,
                    "贯月矢": 2,
                    "赌徒的耳环": 2,
                    "须弥城": 2,
                    "立本": 2,
                    "寻宝仙灵": 2,
                    "自由的新风": 1,
                    "元素共鸣：交织之风": 2,
                    "元素共鸣：迅捷之风": 2,
                    "岩与契约": 1,
                    "最好的伙伴！": 2,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 2,
                    "重攻击": 2,
                    "温妮莎传奇": 2,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                  }),
                  playerBCharacters: ["北斗", "重云", "雷泽"],
                  playerBActions: defineActions({
                    "赌徒的耳环": 2,
                    "派蒙": 1,
                    "卯师傅": 2,
                    "立本": 2,
                    "常九爷": 2,
                    "迪娜泽黛": 2,
                    "寻宝仙灵": 1,
                    "磐岩盟契": 1,
                    "元素共鸣：交织之雷": 2,
                    "元素共鸣：强能之雷": 1,
                    "一掷乾坤": 1,
                    "运筹帷幄": 1,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 1,
                    "重攻击": 1,
                    "温妮莎传奇": 2,
                    "莲花酥": 2,
                    "北地烟熏鸡": 1,
                    "甜甜花酿鸡": 1,
                    "兽肉薄荷卷": 2,
                  }),
                  starter: "A",
                  winner: "A",
                  video: "https://www.youtube.com/watch?v=TTFtC289Ko4&t=3924s",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "美服 America",
      rules: {
        numDecks: 3,
        numGames: 3,
        mode: "Duel",
      },
      parts: [
        {
          name: "季军赛",
          date: "2023-11-06",
          matches: [
            {
              playerA: "RobotWizard",
              playerB: "Proxy",
              video: "https://www.youtube.com/watch?v=KVtgGvlQf6I&t=4062s",
              games: [
                {
                  playerACharacters: ["重云", "雷电将军", "申鹤"],
                  playerAActions: defineActions({
                    "贯月矢": 2,
                    "赌徒的耳环": 2,
                    "桓纳兰那": 1,
                    "派蒙": 2,
                    "立本": 2,
                    "刘苏": 2,
                    "自由的新风": 1,
                    "元素共鸣：交织之冰": 2,
                    "元素共鸣：粉碎之冰": 2,
                    "最好的伙伴！": 2,
                    "换班时间": 1,
                    "运筹帷幄": 1,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 2,
                    "星天之兆": 1,
                    "仙跳墙": 2,
                    "莲花酥": 2,
                    "蒙德土豆饼": 1,
                  }),
                  playerBCharacters: ["九条裟罗", "莫娜", "枫原万叶"],
                  playerBActions: defineActions({
                    "风物之诗咏": 2,
                    "赌徒的耳环": 2,
                    "无常之面": 2,
                    "酒渍船帽": 2,
                    "唤雷的头冠": 2,
                    "翠绿的猎人之冠": 2,
                    "旧时庭园": 1,
                    "雷与永恒": 2,
                    "换班时间": 2,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 1,
                    "温妮莎传奇": 1,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
                    "唐杜尔烤鸡": 2,
                  }),
                  starter: "A",
                  winner: "B",
                  video: "https://www.youtube.com/watch?v=KVtgGvlQf6I&t=4062s",
                },
                {
                  playerACharacters: ["可莉", "刻晴", "班尼特"],
                  playerAActions: defineActions({
                    "冒险憧憬": 2,
                    "祭礼剑": 2,
                    "赌徒的耳环": 2,
                    "须弥城": 2,
                    "派蒙": 1,
                    "立本": 2,
                    "磐岩盟契": 1,
                    "元素共鸣：交织之火": 2,
                    "元素共鸣：热诚之火": 2,
                    "最好的伙伴！": 2,
                    "一掷乾坤": 1,
                    "运筹帷幄": 1,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 2,
                    "护法之誓": 1,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
                    "唐杜尔烤鸡": 1,
                  }),
                  playerBCharacters: ["流浪者", "申鹤", "魈"],
                  playerBActions: defineActions({
                    "千夜浮梦": 1,
                    "贯月矢": 2,
                    "赌徒的耳环": 2,
                    "须弥城": 2,
                    "立本": 2,
                    "寻宝仙灵": 2,
                    "自由的新风": 1,
                    "元素共鸣：交织之风": 2,
                    "元素共鸣：迅捷之风": 2,
                    "岩与契约": 1,
                    "最好的伙伴！": 2,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 2,
                    "重攻击": 2,
                    "温妮莎传奇": 2,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                  }),
                  starter: "A",
                  winner: "A",
                  video: "https://www.youtube.com/watch?v=KVtgGvlQf6I&t=4062s",
                },
                {
                  playerACharacters: ["纳西妲", "菲谢尔", "纯水精灵·洛蒂娅"],
                  playerAActions: defineActions({
                    "赌徒的耳环": 1,
                    "桓纳兰那": 1,
                    "派蒙": 2,
                    "卯师傅": 2,
                    "立本": 2,
                    "迪娜泽黛": 2,
                    "拉娜": 2,
                    "便携营养袋": 1,
                    "磐岩盟契": 1,
                    "最好的伙伴！": 2,
                    "换班时间": 1,
                    "一掷乾坤": 1,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 1,
                    "星天之兆": 1,
                    "白垩之术": 1,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
                    "烤蘑菇披萨": 2,
                  }),
                  playerBCharacters: ["雷电将军", "坎蒂丝", "雷泽"],
                  playerBActions: defineActions({
                    "赌徒的耳环": 2,
                    "桓纳兰那": 2,
                    "立本": 2,
                    "参量质变仪": 2,
                    "寻宝仙灵": 2,
                    "磐岩盟契": 1,
                    "元素共鸣：交织之雷": 2,
                    "换班时间": 2,
                    "一掷乾坤": 1,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 2,
                    "重攻击": 1,
                    "温妮莎传奇": 2,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
                    "兽肉薄荷卷": 2,
                  }),
                  starter: "B",
                  winner: "B",
                  video: "https://www.youtube.com/watch?v=KVtgGvlQf6I&t=4062s",
                },
              ],
            },
          ],
        },
        {
          name: "决赛",
          date: "2023-11-06",
          matches: [
            {
              playerA: "kamisama",
              playerB: "quijano",
              video: "https://www.youtube.com/watch?v=KVtgGvlQf6I&t=4062s",
              games: [
                {
                  playerACharacters: ["纯水精灵·洛蒂娅", "菲谢尔", "愚人众·火之债务处理人"],
                  playerAActions: defineActions({
                    "悉数讨回": 1,
                    "绝缘之旗印": 1,
                    "璃月港口": 2,
                    "西风大教堂": 2,
                    "天守阁": 1,
                    "须弥城": 2,
                    "阿圆": 2,
                    "立本": 2,
                    "自由的新风": 1,
                    "运筹帷幄": 1,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 1,
                    "星天之兆": 2,
                    "送你一程": 2,
                    "重攻击": 1,
                    "仙跳墙": 2,
                    "莲花酥": 2,
                    "蒙德土豆饼": 1,
                    "烤蘑菇披萨": 2,
                  }),
                  playerBCharacters: ["雷电将军", "申鹤", "重云"],
                  playerBActions: defineActions({
                    "贯月矢": 2,
                    "赌徒的耳环": 2,
                    "桓纳兰那": 1,
                    "派蒙": 1,
                    "提米": 1,
                    "立本": 2,
                    "刘苏": 1,
                    "寻宝仙灵": 1,
                    "磐岩盟契": 1,
                    "元素共鸣：交织之冰": 2,
                    "元素共鸣：粉碎之冰": 2,
                    "最好的伙伴！": 2,
                    "换班时间": 1,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 1,
                    "仙跳墙": 2,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
                  }),
                  starter: "A",
                  winner: "A",
                  video: "https://www.youtube.com/watch?v=KVtgGvlQf6I&t=4062s",
                },
                {
                  playerACharacters: ["北斗", "重云", "雷泽"],
                  playerAActions: defineActions({
                    "赌徒的耳环": 2,
                    "派蒙": 2,
                    "卯师傅": 2,
                    "立本": 2,
                    "常九爷": 2,
                    "迪娜泽黛": 2,
                    "寻宝仙灵": 1,
                    "磐岩盟契": 1,
                    "元素共鸣：交织之雷": 2,
                    "元素共鸣：强能之雷": 1,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 2,
                    "重攻击": 1,
                    "温妮莎传奇": 2,
                    "北地烟熏鸡": 2,
                    "甜甜花酿鸡": 1,
                    "蒙德土豆饼": 1,
                    "兽肉薄荷卷": 2,
                  }),
                  playerBCharacters: ["迪希雅", "荒泷一斗", "诺艾尔"],
                  playerBActions: defineActions({
                    "钟剑": 2,
                    "千岩牢固": 2,
                    "璃月港口": 1,
                    "天守阁": 1,
                    "须弥城": 2,
                    "桓纳兰那": 1,
                    "立本": 2,
                    "磐岩盟契": 1,
                    "元素共鸣：交织之岩": 2,
                    "元素共鸣：坚定之岩": 2,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 1,
                    "送你一程": 1,
                    "重攻击": 2,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "蒙德土豆饼": 2,
                    "烤蘑菇披萨": 2,
                  }),
                  starter: "A",
                  winner: "A",
                  video: "https://www.youtube.com/watch?v=KVtgGvlQf6I&t=4062s",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
});
