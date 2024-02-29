import { defineActions, defineTournament } from "~/utils/types";

export default defineTournament({
  name: "微博杯七圣召唤平台资格赛",
  type: "主播资格赛",
  gameVersion: "4.4",
  stages: [
    {
      name: "小组赛",
      rules: {
        numDecks: 2,
        numGames: 3,
        mode: "Conquest",
      },
      parts: [
        {
          name: "A组",
          date: "2024-02-27",
          matches: [
            {
              playerA: "吴意",
              playerB: "二葉",
              video: "https://weibo.com/l/wblive/p/show/1022:2321325006014473961659?mark_id=999_reallog_mark_ad%3A999%7CWeiboADNatural",
              games: [
                {
                  playerACharacters: ["菲谢尔", "纳西妲", "林尼"],
                  playerAActions: defineActions({
                    "赌徒的耳环": 2,
                    "饰金之梦": 2,
                    "灵光明烁之心": 2,
                    "花海甘露之光": 2,
                    "欧庇克莱歌剧院": 2,
                    "弥生七月": 2,
                    "寻宝仙灵": 2,
                    "化种匣": 2,
                    "磐岩盟契": 1,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 2,
                    "琴音之诗": 2,
                    "野猪公主": 2,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "提瓦特煎蛋": 1,
                    "唐杜尔烤鸡": 1,
                  }),
                  playerBCharacters: ["雷电将军", "「女士」", "申鹤"],
                  playerBActions: defineActions({
                    "贯月矢": 1,
                    "赌徒的耳环": 2,
                    "沙王的投影": 1,
                    "卯师傅": 2,
                    "立本": 2,
                    "刘苏": 2,
                    "迪娜泽黛": 1,
                    "便携营养袋": 1,
                    "化种匣": 2,
                    "裁定之时": 1,
                    "元素共鸣：交织之冰": 2,
                    "元素共鸣：粉碎之冰": 2,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 2,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "北地烟熏鸡": 1,
                    "蒙德土豆饼": 1,
                    "提瓦特煎蛋": 1,
                  }),
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: ["夜兰", "雷音权现", "「女士」"],
                  playerAActions: defineActions({
                    "赌徒的耳环": 2,
                    "饰金之梦": 2,
                    "浮溯之珏": 2,
                    "卯师傅": 2,
                    "弥生七月": 2,
                    "便携营养袋": 1,
                    "寻宝仙灵": 2,
                    "化种匣": 2,
                    "愉舞欢游": 1,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 2,
                    "琴音之诗": 2,
                    "野猪公主": 1,
                    "莲花酥": 2,
                    "北地烟熏鸡": 2,
                    "兽肉薄荷卷": 2,
                    "提瓦特煎蛋": 1,
                  }),
                  playerBCharacters: ["雷电将军", "「女士」", "申鹤"],
                  playerBActions: defineActions({
                    "贯月矢": 1,
                    "赌徒的耳环": 2,
                    "沙王的投影": 1,
                    "卯师傅": 2,
                    "立本": 2,
                    "刘苏": 2,
                    "迪娜泽黛": 1,
                    "便携营养袋": 1,
                    "化种匣": 2,
                    "裁定之时": 1,
                    "元素共鸣：交织之冰": 2,
                    "元素共鸣：粉碎之冰": 2,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 2,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "北地烟熏鸡": 1,
                    "蒙德土豆饼": 1,
                    "提瓦特煎蛋": 1,
                  }),
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: ["夜兰", "雷音权现", "「女士」"],
                  playerAActions: defineActions({
                    "赌徒的耳环": 2,
                    "饰金之梦": 2,
                    "浮溯之珏": 2,
                    "卯师傅": 2,
                    "弥生七月": 2,
                    "便携营养袋": 1,
                    "寻宝仙灵": 2,
                    "化种匣": 2,
                    "愉舞欢游": 1,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 2,
                    "琴音之诗": 2,
                    "野猪公主": 1,
                    "莲花酥": 2,
                    "北地烟熏鸡": 2,
                    "兽肉薄荷卷": 2,
                    "提瓦特煎蛋": 1,
                  }),
                  playerBCharacters: ["班尼特", "雷音权现", "可莉"],
                  playerBActions: defineActions({
                    "冒险憧憬": 2,
                    "原木刀": 2,
                    "赌徒的耳环": 2,
                    "灵光明烁之心": 2,
                    "须弥城": 2,
                    "桓纳兰那": 2,
                    "湖中垂柳": 2,
                    "欧庇克莱歌剧院": 2,
                    "化种匣": 2,
                    "裁定之时": 1,
                    "元素共鸣：交织之火": 2,
                    "元素共鸣：热诚之火": 2,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 2,
                    "莲花酥": 2,
                    "提瓦特煎蛋": 1,
                    "唐杜尔烤鸡": 1,
                  }),
                  starter: "A",
                  winner: "A",
                },
              ],
            },
            {
              playerA: "亦然",
              playerB: "LL起翼夜鹰",
              video: "https://weibo.com/l/wblive/p/show/1022:2321325006014473961659?mark_id=999_reallog_mark_ad%3A999%7CWeiboADNatural",
              games: [
                {
                  playerACharacters: ["莫娜", "雷音权现", "「女士」"],
                  playerAActions: defineActions({
                    "悲号回唱": 2,
                    "赌徒的耳环": 2,
                    "饰金之梦": 2,
                    "灵光明烁之心": 2,
                    "卯师傅": 2,
                    "立本": 2,
                    "迪娜泽黛": 2,
                    "弥生七月": 2,
                    "化种匣": 1,
                    "自由的新风": 1,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 1,
                    "琴音之诗": 2,
                    "野猪公主": 2,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "甜甜花酿鸡": 1,
                    "蒙德土豆饼": 1,
                    "提瓦特煎蛋": 1,
                  }),
                  playerBCharacters: ["行秋", "重云", "雷泽"],
                  playerBActions: defineActions({
                    "赌徒的耳环": 1,
                    "饰金之梦": 2,
                    "浮溯之珏": 2,
                    "灵光明烁之心": 2,
                    "立本": 2,
                    "常九爷": 2,
                    "迪娜泽黛": 2,
                    "弥生七月": 2,
                    "婕德": 2,
                    "寻宝仙灵": 2,
                    "化种匣": 2,
                    "裁定之时": 1,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 1,
                    "琴音之诗": 2,
                    "野猪公主": 1,
                    "净觉花": 2,
                  }),
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: ["菲谢尔", "纳西妲", "林尼"],
                  playerAActions: defineActions({
                    "赌徒的耳环": 2,
                    "饰金之梦": 2,
                    "灵光明烁之心": 2,
                    "花海甘露之光": 2,
                    "卯师傅": 2,
                    "弥生七月": 2,
                    "寻宝仙灵": 1,
                    "化种匣": 1,
                    "磐岩盟契": 1,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 2,
                    "琴音之诗": 2,
                    "野猪公主": 2,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "甜甜花酿鸡": 2,
                    "提瓦特煎蛋": 1,
                    "唐杜尔烤鸡": 1,
                  }),
                  playerBCharacters: ["林尼", "千年珍珠骏麟", "若陀龙王"],
                  playerBActions: defineActions({
                    "晦朔千引": 1,
                    "赌徒的耳环": 2,
                    "饰金之梦": 2,
                    "灵光明烁之心": 2,
                    "立本": 2,
                    "常九爷": 2,
                    "迪娜泽黛": 2,
                    "弥生七月": 2,
                    "婕德": 2,
                    "寻宝仙灵": 2,
                    "化种匣": 2,
                    "磐岩盟契": 1,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 1,
                    "琴音之诗": 2,
                    "野猪公主": 1,
                    "净觉花": 2,
                  }),
                  starter: "A",
                  winner: "B",
                },
              ],
            },
            {
              playerA: "吴意",
              playerB: "LL起翼夜鹰",
              video: "https://weibo.com/l/wblive/p/show/1022:2321325006014473961659?mark_id=999_reallog_mark_ad%3A999%7CWeiboADNatural",
              games: [
                {
                  playerACharacters: ["夜兰", "雷音权现", "「女士」"],
                  playerAActions: defineActions({
                    "赌徒的耳环": 2,
                    "饰金之梦": 2,
                    "浮溯之珏": 2,
                    "卯师傅": 2,
                    "弥生七月": 2,
                    "便携营养袋": 1,
                    "寻宝仙灵": 2,
                    "化种匣": 2,
                    "愉舞欢游": 1,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 2,
                    "琴音之诗": 2,
                    "野猪公主": 1,
                    "莲花酥": 2,
                    "北地烟熏鸡": 2,
                    "兽肉薄荷卷": 2,
                    "提瓦特煎蛋": 1,
                  }),
                  playerBCharacters: ["行秋", "重云", "雷泽"],
                  playerBActions: defineActions({
                    "赌徒的耳环": 1,
                    "饰金之梦": 2,
                    "浮溯之珏": 2,
                    "灵光明烁之心": 2,
                    "立本": 2,
                    "常九爷": 2,
                    "迪娜泽黛": 2,
                    "弥生七月": 2,
                    "婕德": 2,
                    "寻宝仙灵": 2,
                    "化种匣": 2,
                    "裁定之时": 1,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 1,
                    "琴音之诗": 2,
                    "野猪公主": 1,
                    "净觉花": 2,
                  }),
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: ["夜兰", "雷音权现", "「女士」"],
                  playerAActions: defineActions({
                    "赌徒的耳环": 2,
                    "饰金之梦": 2,
                    "浮溯之珏": 2,
                    "卯师傅": 2,
                    "弥生七月": 2,
                    "便携营养袋": 1,
                    "寻宝仙灵": 2,
                    "化种匣": 2,
                    "愉舞欢游": 1,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 2,
                    "琴音之诗": 2,
                    "野猪公主": 1,
                    "莲花酥": 2,
                    "北地烟熏鸡": 2,
                    "兽肉薄荷卷": 2,
                    "提瓦特煎蛋": 1,
                  }),
                  playerBCharacters: ["林尼", "千年珍珠骏麟", "若陀龙王"],
                  playerBActions: defineActions({
                    "晦朔千引": 1,
                    "赌徒的耳环": 2,
                    "饰金之梦": 2,
                    "灵光明烁之心": 2,
                    "立本": 2,
                    "常九爷": 2,
                    "迪娜泽黛": 2,
                    "弥生七月": 2,
                    "婕德": 2,
                    "寻宝仙灵": 2,
                    "化种匣": 2,
                    "磐岩盟契": 1,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 1,
                    "琴音之诗": 2,
                    "野猪公主": 1,
                    "净觉花": 2,
                  }),
                  starter: "B",
                  winner: "B",
                },
              ],
            },
            {
              playerA: "二葉",
              playerB: "亦然",
              video: "https://weibo.com/l/wblive/p/show/1022:2321325006014473961659?mark_id=999_reallog_mark_ad%3A999%7CWeiboADNatural",
              games: [
                {
                  playerACharacters: ["芭芭拉", "凝光", "珊瑚宫心海"],
                  playerAActions: defineActions({
                    "光辉的季节": 1,
                    "祭礼残章": 1,
                    "将帅兜鍪": 2,
                    "千岩牢固": 2,
                    "老兵的容颜": 2,
                    "须弥城": 2,
                    "桓纳兰那": 2,
                    "欧庇克莱歌剧院": 2,
                    "蒂玛乌斯": 2,
                    "万家灶火": 1,
                    "元素共鸣：交织之水": 2,
                    "元素共鸣：愈疗之水": 2,
                    "交给我吧！": 1,
                    "白垩之术": 1,
                    "送你一程": 1,
                    "莲花酥": 1,
                    "烤蘑菇披萨": 2,
                    "提瓦特煎蛋": 1,
                    "松茸酿肉卷": 2,
                  }),
                  playerBCharacters: ["流浪者", "魔偶剑鬼", "多莉"],
                  playerBActions: defineActions({
                    "千夜浮梦": 2,
                    "赌徒的耳环": 2,
                    "沙王的投影": 2,
                    "西尔弗和迈勒斯": 2,
                    "寻宝仙灵": 2,
                    "化种匣": 2,
                    "自由的新风": 1,
                    "元素共鸣：交织之风": 2,
                    "元素共鸣：迅捷之风": 2,
                    "最好的伙伴！": 2,
                    "一掷乾坤": 2,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 1,
                    "白垩之术": 1,
                    "重攻击": 2,
                    "绝云锅巴": 1,
                    "莲花酥": 1,
                  }),
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: ["雷电将军", "「女士」", "申鹤"],
                  playerAActions: defineActions({
                    "贯月矢": 1,
                    "赌徒的耳环": 2,
                    "沙王的投影": 1,
                    "卯师傅": 2,
                    "立本": 2,
                    "刘苏": 2,
                    "迪娜泽黛": 1,
                    "便携营养袋": 1,
                    "化种匣": 2,
                    "裁定之时": 1,
                    "元素共鸣：交织之冰": 2,
                    "元素共鸣：粉碎之冰": 2,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 2,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "北地烟熏鸡": 1,
                    "蒙德土豆饼": 1,
                    "提瓦特煎蛋": 1,
                  }),
                  playerBCharacters: ["流浪者", "魔偶剑鬼", "多莉"],
                  playerBActions: defineActions({
                    "千夜浮梦": 2,
                    "赌徒的耳环": 2,
                    "沙王的投影": 2,
                    "西尔弗和迈勒斯": 2,
                    "寻宝仙灵": 2,
                    "化种匣": 2,
                    "自由的新风": 1,
                    "元素共鸣：交织之风": 2,
                    "元素共鸣：迅捷之风": 2,
                    "最好的伙伴！": 2,
                    "一掷乾坤": 2,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 1,
                    "白垩之术": 1,
                    "重攻击": 2,
                    "绝云锅巴": 1,
                    "莲花酥": 1,
                  }),
                  starter: "B",
                  winner: "A",
                },
              ],
            },
            {
              playerA: "二葉",
              playerB: "吴意",
              video: "https://weibo.com/l/wblive/p/show/1022:2321325006014473961659?mark_id=999_reallog_mark_ad%3A999%7CWeiboADNatural",
              games: [
                {
                  playerACharacters: ["班尼特", "雷音权现", "可莉"],
                  playerAActions: defineActions({
                    "冒险憧憬": 2,
                    "原木刀": 2,
                    "赌徒的耳环": 2,
                    "灵光明烁之心": 2,
                    "须弥城": 2,
                    "桓纳兰那": 2,
                    "湖中垂柳": 2,
                    "欧庇克莱歌剧院": 2,
                    "化种匣": 2,
                    "裁定之时": 1,
                    "元素共鸣：交织之火": 2,
                    "元素共鸣：热诚之火": 2,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 2,
                    "莲花酥": 2,
                    "提瓦特煎蛋": 1,
                    "唐杜尔烤鸡": 1,
                  }),
                  playerBCharacters: ["夜兰", "雷音权现", "「女士」"],
                  playerBActions: defineActions({
                    "赌徒的耳环": 2,
                    "饰金之梦": 2,
                    "浮溯之珏": 2,
                    "卯师傅": 2,
                    "弥生七月": 2,
                    "便携营养袋": 1,
                    "寻宝仙灵": 2,
                    "化种匣": 2,
                    "愉舞欢游": 1,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 2,
                    "琴音之诗": 2,
                    "野猪公主": 1,
                    "莲花酥": 2,
                    "北地烟熏鸡": 2,
                    "兽肉薄荷卷": 2,
                    "提瓦特煎蛋": 1,
                  }),
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: ["雷电将军", "「女士」", "申鹤"],
                  playerAActions: defineActions({
                    "贯月矢": 1,
                    "赌徒的耳环": 2,
                    "沙王的投影": 1,
                    "卯师傅": 2,
                    "立本": 2,
                    "刘苏": 2,
                    "迪娜泽黛": 1,
                    "便携营养袋": 1,
                    "化种匣": 2,
                    "裁定之时": 1,
                    "元素共鸣：交织之冰": 2,
                    "元素共鸣：粉碎之冰": 2,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 2,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "北地烟熏鸡": 1,
                    "蒙德土豆饼": 1,
                    "提瓦特煎蛋": 1,
                  }),
                  playerBCharacters: ["重云", "行秋", "雷泽"],
                  playerBActions: defineActions({
                    "赌徒的耳环": 2,
                    "饰金之梦": 2,
                    "灵光明烁之心": 2,
                    "立本": 2,
                    "常九爷": 2,
                    "迪娜泽黛": 2,
                    "弥生七月": 2,
                    "婕德": 2,
                    "寻宝仙灵": 2,
                    "化种匣": 2,
                    "磐岩盟契": 1,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 1,
                    "琴音之诗": 2,
                    "野猪公主": 1,
                    "净觉花": 2,
                  }),
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: ["雷电将军", "「女士」", "申鹤"],
                  playerAActions: defineActions({
                    "贯月矢": 1,
                    "赌徒的耳环": 2,
                    "沙王的投影": 1,
                    "卯师傅": 2,
                    "立本": 2,
                    "刘苏": 2,
                    "迪娜泽黛": 1,
                    "便携营养袋": 1,
                    "化种匣": 2,
                    "裁定之时": 1,
                    "元素共鸣：交织之冰": 2,
                    "元素共鸣：粉碎之冰": 2,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 2,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "北地烟熏鸡": 1,
                    "蒙德土豆饼": 1,
                    "提瓦特煎蛋": 1,
                  }),
                  playerBCharacters: ["夜兰", "雷音权现", "「女士」"],
                  playerBActions: defineActions({
                    "赌徒的耳环": 2,
                    "饰金之梦": 2,
                    "浮溯之珏": 2,
                    "卯师傅": 2,
                    "弥生七月": 2,
                    "便携营养袋": 1,
                    "寻宝仙灵": 2,
                    "化种匣": 2,
                    "愉舞欢游": 1,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 2,
                    "琴音之诗": 2,
                    "野猪公主": 1,
                    "莲花酥": 2,
                    "北地烟熏鸡": 2,
                    "兽肉薄荷卷": 2,
                    "提瓦特煎蛋": 1,
                  }),
                  starter: "B",
                  winner: "A",
                },
              ],
            },
          ],
        },
        {
          name: "B组",
          date: "2024-02-28",
          matches: [
            {
              playerA: "Dr.666",
              playerB: "丶响尾蛇丶",
              video: "https://weibo.com/l/wblive/p/show/1022:2321325006404200038475?mark_id=999_reallog_mark_ad%3A999%7CWeiboADNatural",
              games: [
                {
                  playerACharacters: ["夜兰", "「女士」", "雷音权现"],
                  playerAActions: defineActions({
                    "赌徒的耳环": 2,
                    "饰金之梦": 2,
                    "浮溯之珏": 2,
                    "灵光明烁之心": 2,
                    "卯师傅": 2,
                    "弥生七月": 2,
                    "寻宝仙灵": 2,
                    "化种匣": 2,
                    "愉舞欢游": 1,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 1,
                    "琴音之诗": 2,
                    "野猪公主": 2,
                    "莲花酥": 2,
                    "北地烟熏鸡": 2,
                    "兽肉薄荷卷": 2,
                    "提瓦特煎蛋": 1,
                  }),
                  playerBCharacters: ["莫娜", "千年珍珠骏麟", "无相之冰"],
                  playerBActions: defineActions({
                    "严霜棱晶": 1,
                    "赌徒的耳环": 2,
                    "沙王的投影": 1,
                    "饰金之梦": 2,
                    "灵光明烁之心": 1,
                    "花海甘露之光": 1,
                    "卯师傅": 2,
                    "立本": 2,
                    "迪娜泽黛": 2,
                    "弥生七月": 2,
                    "愉舞欢游": 1,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 1,
                    "琴音之诗": 2,
                    "野猪公主": 2,
                    "莲花酥": 2,
                    "甜甜花酿鸡": 1,
                    "蒙德土豆饼": 1,
                    "提瓦特煎蛋": 1,
                    "唐杜尔烤鸡": 2,
                  }),
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: ["行秋", "重云", "雷泽"],
                  playerAActions: defineActions({
                    "赌徒的耳环": 2,
                    "饰金之梦": 2,
                    "浮溯之珏": 1,
                    "灵光明烁之心": 2,
                    "立本": 2,
                    "常九爷": 2,
                    "迪娜泽黛": 2,
                    "弥生七月": 2,
                    "婕德": 2,
                    "寻宝仙灵": 2,
                    "化种匣": 1,
                    "裁定之时": 1,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 1,
                    "琴音之诗": 2,
                    "野猪公主": 1,
                    "净觉花": 2,
                  }),
                  playerBCharacters: ["莫娜", "千年珍珠骏麟", "无相之冰"],
                  playerBActions: defineActions({
                    "严霜棱晶": 1,
                    "赌徒的耳环": 2,
                    "沙王的投影": 1,
                    "饰金之梦": 2,
                    "灵光明烁之心": 1,
                    "花海甘露之光": 1,
                    "卯师傅": 2,
                    "立本": 2,
                    "迪娜泽黛": 2,
                    "弥生七月": 2,
                    "愉舞欢游": 1,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 1,
                    "琴音之诗": 2,
                    "野猪公主": 2,
                    "莲花酥": 2,
                    "甜甜花酿鸡": 1,
                    "蒙德土豆饼": 1,
                    "提瓦特煎蛋": 1,
                    "唐杜尔烤鸡": 2,
                  }),
                  starter: "B",
                  winner: "A",
                },
              ],
            },
            {
              playerA: "终末我家",
              playerB: "胡桃桃大魔王",
              video: "https://weibo.com/l/wblive/p/show/1022:2321325006404200038475?mark_id=999_reallog_mark_ad%3A999%7CWeiboADNatural",
              games: [
                {
                  playerACharacters: ["纳西妲", "林尼", "菲谢尔"],
                  playerAActions: defineActions({
                    "赌徒的耳环": 1,
                    "绝缘之旗印": 1,
                    "饰金之梦": 2,
                    "灵光明烁之心": 2,
                    "凯瑟琳": 1,
                    "卯师傅": 2,
                    "迪娜泽黛": 2,
                    "弥生七月": 2,
                    "婕德": 1,
                    "寻宝仙灵": 1,
                    "化种匣": 1,
                    "自由的新风": 1,
                    "运筹帷幄": 1,
                    "本大爷还没有输！": 1,
                    "琴音之诗": 2,
                    "野猪公主": 1,
                    "净觉花": 2,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "甜甜花酿鸡": 1,
                    "提瓦特煎蛋": 1,
                    "唐杜尔烤鸡": 1,
                  }),
                  playerBCharacters: ["夜兰", "雷音权现", "「女士」"],
                  playerBActions: defineActions({
                    "赌徒的耳环": 2,
                    "饰金之梦": 2,
                    "浮溯之珏": 1,
                    "灵光明烁之心": 2,
                    "卯师傅": 2,
                    "弥生七月": 2,
                    "便携营养袋": 1,
                    "寻宝仙灵": 2,
                    "化种匣": 2,
                    "愉舞欢游": 1,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 1,
                    "琴音之诗": 2,
                    "野猪公主": 2,
                    "莲花酥": 2,
                    "北地烟熏鸡": 2,
                    "兽肉薄荷卷": 2,
                    "提瓦特煎蛋": 1,
                  }),
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: ["纳西妲", "林尼", "菲谢尔"],
                  playerAActions: defineActions({
                    "赌徒的耳环": 1,
                    "绝缘之旗印": 1,
                    "饰金之梦": 2,
                    "灵光明烁之心": 2,
                    "凯瑟琳": 1,
                    "卯师傅": 2,
                    "迪娜泽黛": 2,
                    "弥生七月": 2,
                    "婕德": 1,
                    "寻宝仙灵": 1,
                    "化种匣": 1,
                    "自由的新风": 1,
                    "运筹帷幄": 1,
                    "本大爷还没有输！": 1,
                    "琴音之诗": 2,
                    "野猪公主": 1,
                    "净觉花": 2,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "甜甜花酿鸡": 1,
                    "提瓦特煎蛋": 1,
                    "唐杜尔烤鸡": 1,
                  }),
                  playerBCharacters: ["菲谢尔", "纳西妲", "林尼"],
                  playerBActions: defineActions({
                    "赌徒的耳环": 2,
                    "沙王的投影": 1,
                    "饰金之梦": 2,
                    "灵光明烁之心": 2,
                    "欧庇克莱歌剧院": 1,
                    "凯瑟琳": 1,
                    "弥生七月": 2,
                    "寻宝仙灵": 2,
                    "化种匣": 2,
                    "愉舞欢游": 1,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 2,
                    "琴音之诗": 2,
                    "野猪公主": 2,
                    "仙跳墙": 1,
                    "莲花酥": 1,
                    "提瓦特煎蛋": 1,
                    "唐杜尔烤鸡": 1,
                  }),
                  starter: "B",
                  winner: "B",
                },
              ],
            },
            {
              playerA: "Dr.666",
              playerB: "胡桃桃大魔王",
              video: "https://weibo.com/l/wblive/p/show/1022:2321325006404200038475?mark_id=999_reallog_mark_ad%3A999%7CWeiboADNatural",
              games: [
                {
                  playerACharacters: ["夜兰", "「女士」", "雷音权现"],
                  playerAActions: defineActions({
                    "赌徒的耳环": 2,
                    "饰金之梦": 2,
                    "浮溯之珏": 2,
                    "灵光明烁之心": 2,
                    "卯师傅": 2,
                    "弥生七月": 2,
                    "寻宝仙灵": 2,
                    "化种匣": 2,
                    "愉舞欢游": 1,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 1,
                    "琴音之诗": 2,
                    "野猪公主": 2,
                    "莲花酥": 2,
                    "北地烟熏鸡": 2,
                    "兽肉薄荷卷": 2,
                    "提瓦特煎蛋": 1,
                  }),
                  playerBCharacters: ["菲谢尔", "纳西妲", "林尼"],
                  playerBActions: defineActions({
                    "赌徒的耳环": 2,
                    "沙王的投影": 1,
                    "饰金之梦": 2,
                    "灵光明烁之心": 2,
                    "欧庇克莱歌剧院": 2,
                    "凯瑟琳": 1,
                    "弥生七月": 2,
                    "寻宝仙灵": 2,
                    "化种匣": 2,
                    "运筹帷幄": 2,
                    "本大爷还没有输！": 2,
                    "交给我吧！": 2,
                    "琴音之诗": 2,
                    "野猪公主": 2,
                    "仙跳墙": 1,
                    "莲花酥": 1,
                    "提瓦特煎蛋": 1,
                    "唐杜尔烤鸡": 1,
                  }),
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: ["夜兰", "「女士」", "雷音权现"],
                  playerAActions: defineActions({
                    "赌徒的耳环": 2,
                    "饰金之梦": 2,
                    "浮溯之珏": 2,
                    "灵光明烁之心": 2,
                    "卯师傅": 2,
                    "弥生七月": 2,
                    "寻宝仙灵": 2,
                    "化种匣": 2,
                    "愉舞欢游": 1,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 1,
                    "琴音之诗": 2,
                    "野猪公主": 2,
                    "莲花酥": 2,
                    "北地烟熏鸡": 2,
                    "兽肉薄荷卷": 2,
                    "提瓦特煎蛋": 1,
                  }),
                  playerBCharacters: ["夜兰", "雷音权现", "「女士」"],
                  playerBActions: defineActions({
                    "赌徒的耳环": 2,
                    "饰金之梦": 2,
                    "浮溯之珏": 1,
                    "灵光明烁之心": 2,
                    "卯师傅": 2,
                    "弥生七月": 2,
                    "便携营养袋": 1,
                    "寻宝仙灵": 2,
                    "化种匣": 2,
                    "磐岩盟契": 1,
                    "交给我吧！": 2,
                    "琴音之诗": 2,
                    "野猪公主": 2,
                    "莲花酥": 2,
                    "北地烟熏鸡": 2,
                    "兽肉薄荷卷": 2,
                    "提瓦特煎蛋": 1,
                  }),
                  starter: "A",
                  winner: "B",
                },
              ],
            },
            {
              playerA: "丶响尾蛇丶",
              playerB: "终末我家",
              video: "https://weibo.com/l/wblive/p/show/1022:2321325006404200038475?mark_id=999_reallog_mark_ad%3A999%7CWeiboADNatural",
              games: [
                {
                  playerACharacters: ["夜兰", "雷音权现", "「女士」"],
                  playerAActions: defineActions({
                    "赌徒的耳环": 2,
                    "饰金之梦": 2,
                    "浮溯之珏": 2,
                    "灵光明烁之心": 2,
                    "卯师傅": 2,
                    "弥生七月": 1,
                    "寻宝仙灵": 2,
                    "化种匣": 2,
                    "磐岩盟契": 1,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 1,
                    "琴音之诗": 2,
                    "野猪公主": 2,
                    "浮烁的四叶印": 2,
                    "莲花酥": 2,
                    "北地烟熏鸡": 2,
                    "兽肉薄荷卷": 2,
                  }),
                  playerBCharacters: ["夜兰", "雷音权现", "「女士」"],
                  playerBActions: defineActions({
                    "赌徒的耳环": 2,
                    "饰金之梦": 2,
                    "浮溯之珏": 2,
                    "灵光明烁之心": 1,
                    "卯师傅": 2,
                    "弥生七月": 1,
                    "玛梅赫": 1,
                    "寻宝仙灵": 2,
                    "化种匣": 2,
                    "磐岩盟契": 1,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 1,
                    "重攻击": 1,
                    "琴音之诗": 2,
                    "野猪公主": 1,
                    "净觉花": 1,
                    "莲花酥": 2,
                    "北地烟熏鸡": 2,
                    "兽肉薄荷卷": 2,
                    "提瓦特煎蛋": 1,
                  }),
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: ["雷电将军", "香菱", "刻晴"],
                  playerAActions: defineActions({
                    "赌徒的耳环": 2,
                    "桓纳兰那": 1,
                    "湖中垂柳": 1,
                    "立本": 2,
                    "迪娜泽黛": 2,
                    "玛梅赫": 2,
                    "婕德": 2,
                    "寻宝仙灵": 2,
                    "化种匣": 2,
                    "自由的新风": 1,
                    "元素共鸣：交织之雷": 2,
                    "元素共鸣：强能之雷": 2,
                    "运筹帷幄": 1,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 2,
                    "净觉花": 2,
                    "仙跳墙": 2,
                    "莲花酥": 1,
                  }),
                  playerBCharacters: ["纳西妲", "林尼", "菲谢尔"],
                  playerBActions: defineActions({
                    "赌徒的耳环": 1,
                    "饰金之梦": 2,
                    "灵光明烁之心": 2,
                    "凯瑟琳": 1,
                    "卯师傅": 2,
                    "迪娜泽黛": 2,
                    "弥生七月": 2,
                    "玛梅赫": 2,
                    "寻宝仙灵": 1,
                    "化种匣": 1,
                    "自由的新风": 1,
                    "运筹帷幄": 1,
                    "本大爷还没有输！": 1,
                    "琴音之诗": 2,
                    "野猪公主": 1,
                    "净觉花": 2,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "甜甜花酿鸡": 1,
                    "提瓦特煎蛋": 1,
                    "唐杜尔烤鸡": 1,
                  }),
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: ["雷电将军", "香菱", "刻晴"],
                  playerAActions: defineActions({
                    "赌徒的耳环": 2,
                    "桓纳兰那": 1,
                    "湖中垂柳": 1,
                    "立本": 2,
                    "迪娜泽黛": 2,
                    "玛梅赫": 2,
                    "婕德": 2,
                    "寻宝仙灵": 2,
                    "化种匣": 2,
                    "自由的新风": 1,
                    "元素共鸣：交织之雷": 2,
                    "元素共鸣：强能之雷": 2,
                    "运筹帷幄": 1,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 2,
                    "净觉花": 2,
                    "仙跳墙": 2,
                    "莲花酥": 1,
                  }),
                  playerBCharacters: ["夜兰", "雷音权现", "「女士」"],
                  playerBActions: defineActions({
                    "赌徒的耳环": 2,
                    "饰金之梦": 2,
                    "浮溯之珏": 2,
                    "灵光明烁之心": 1,
                    "卯师傅": 2,
                    "弥生七月": 1,
                    "玛梅赫": 1,
                    "寻宝仙灵": 2,
                    "化种匣": 2,
                    "磐岩盟契": 1,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 1,
                    "重攻击": 1,
                    "琴音之诗": 2,
                    "野猪公主": 1,
                    "净觉花": 1,
                    "莲花酥": 2,
                    "北地烟熏鸡": 2,
                    "兽肉薄荷卷": 2,
                    "提瓦特煎蛋": 1,
                  }),
                  starter: "B",
                  winner: "B",
                },
              ],
            },
            {
              playerA: "Dr.666",
              playerB: "终末我家",
              video: "https://weibo.com/l/wblive/p/show/1022:2321325006404200038475?mark_id=999_reallog_mark_ad%3A999%7CWeiboADNatural",
              games: [
                {
                  playerACharacters: ["菲谢尔", "纳西妲", "林尼"],
                  playerAActions: defineActions({
                    "赌徒的耳环": 2,
                    "饰金之梦": 2,
                    "灵光明烁之心": 1,
                    "花海甘露之光": 1,
                    "欧庇克莱歌剧院": 1,
                    "凯瑟琳": 1,
                    "卯师傅": 1,
                    "弥生七月": 2,
                    "寻宝仙灵": 2,
                    "化种匣": 2,
                    "裁定之时": 1,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 2,
                    "白垩之术": 1,
                    "琴音之诗": 2,
                    "野猪公主": 2,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "甜甜花酿鸡": 1,
                    "提瓦特煎蛋": 1,
                    "唐杜尔烤鸡": 1,
                  }),
                  playerBCharacters: ["纳西妲", "林尼", "菲谢尔"],
                  playerBActions: defineActions({
                    "赌徒的耳环": 2,
                    "饰金之梦": 2,
                    "灵光明烁之心": 2,
                    "凯瑟琳": 1,
                    "卯师傅": 2,
                    "迪娜泽黛": 2,
                    "弥生七月": 1,
                    "玛梅赫": 2,
                    "寻宝仙灵": 1,
                    "化种匣": 1,
                    "自由的新风": 1,
                    "运筹帷幄": 1,
                    "本大爷还没有输！": 1,
                    "琴音之诗": 2,
                    "野猪公主": 1,
                    "净觉花": 2,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "甜甜花酿鸡": 1,
                    "提瓦特煎蛋": 1,
                    "唐杜尔烤鸡": 1,
                  }),
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: ["莫娜", "雷音权现", "「女士」"],
                  playerAActions: defineActions({
                    "悲号回唱": 1,
                    "赌徒的耳环": 2,
                    "沙王的投影": 1,
                    "饰金之梦": 2,
                    "灵光明烁之心": 2,
                    "欧庇克莱歌剧院": 2,
                    "卯师傅": 2,
                    "立本": 2,
                    "弥生七月": 1,
                    "寻宝仙灵": 1,
                    "化种匣": 1,
                    "裁定之时": 1,
                    "本大爷还没有输！": 1,
                    "交给我吧！": 1,
                    "琴音之诗": 2,
                    "野猪公主": 2,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "蒙德土豆饼": 1,
                    "提瓦特煎蛋": 1,
                    "唐杜尔烤鸡": 1,
                  }),
                  playerBCharacters: ["纳西妲", "林尼", "菲谢尔"],
                  playerBActions: defineActions({
                    "赌徒的耳环": 2,
                    "饰金之梦": 2,
                    "灵光明烁之心": 2,
                    "凯瑟琳": 1,
                    "卯师傅": 2,
                    "迪娜泽黛": 2,
                    "弥生七月": 1,
                    "玛梅赫": 2,
                    "寻宝仙灵": 1,
                    "化种匣": 1,
                    "自由的新风": 1,
                    "运筹帷幄": 1,
                    "本大爷还没有输！": 1,
                    "琴音之诗": 2,
                    "野猪公主": 1,
                    "净觉花": 2,
                    "仙跳墙": 1,
                    "莲花酥": 2,
                    "甜甜花酿鸡": 1,
                    "提瓦特煎蛋": 1,
                    "唐杜尔烤鸡": 1,
                  }),
                  starter: "A",
                  winner: "A",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
});
