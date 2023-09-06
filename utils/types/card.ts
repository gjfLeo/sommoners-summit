// #region 角色牌常量

export const Ganyu = "甘雨";
export const Diona = "迪奥娜";
export const Kaeya = "凯亚";
export const Chongyun = "重云";
export const KamisatoAyaka = "神里绫华";
export const Eula = "优菈";
export const Shenhe = "申鹤";
export const Qiqi = "七七";

export const Barbara = "芭芭拉";
export const Xingqiu = "行秋";
export const Mona = "莫娜";
export const Tartaglia = "达达利亚";
export const SangonomiyaKokomi = "珊瑚宫心海";
export const KamisatoAyato = "神里绫人";
export const Candace = "坎蒂丝";

export const Diluc = "迪卢克";
export const Xiangling = "香菱";
export const Bennett = "班尼特";
export const Amber = "安柏";
export const Yoimiya = "宵宫";
export const Klee = "可莉";
export const HuTao = "胡桃";
export const Yanfei = "烟绯";
export const Dehya = "迪希雅";

export const Fischl = "菲谢尔";
export const Razor = "雷泽";
export const Keqing = "刻晴";
export const Cyno = "赛诺";
export const Beidou = "北斗";
export const KujouSara = "九条裟罗";
export const RaidenShogun = "雷电将军";
export const YaeMiko = "八重神子";
export const Lisa = "丽莎";

export const Sucrose = "砂糖";
export const Jean = "琴";
export const Venti = "温迪";
export const Xiao = "魈";
export const KaedeharaKazuha = "枫原万叶";
export const Wanderer = "流浪者";

export const Ningguang = "凝光";
export const Noelle = "诺艾尔";
export const Zhongli = "钟离";
export const Albedo = "阿贝多";
export const AratakiItto = "荒泷一斗";

export const Collei = "柯莱";
export const Tighnari = "提纳里";
export const Nahida = "纳西妲";
export const Yaoyao = "瑶瑶";

export const FatuiCyroCicinMage = "愚人众·冰萤术士";
export const RhodeiaOfLoch = "纯水精灵·洛蒂娅";
export const FatuiMirrorMaiden = "愚人众·藏镜仕女";
export const FatuiPyroAgent = "愚人众·火之债务处理人";
export const AbyssLectorFathomlessFlames = "深渊咏者·渊火";
export const ElectroHypostasis = "无相之雷";
export const MaguuKenki = "魔偶剑鬼";
export const StonehideLawachurl = "岩盔丘丘王";
export const JadeplumeTerrorshroom = "翠翎恐禽";

export const ALL_CHARACTER_CARDS = [
  Ganyu, Diona, Kaeya, Chongyun, KamisatoAyaka, Eula, Shenhe, Qiqi,
  Barbara, Xingqiu, Mona, Tartaglia, SangonomiyaKokomi, KamisatoAyato, Candace,
  Diluc, Xiangling, Bennett, Amber, Yoimiya, Klee, HuTao, Yanfei, Dehya,
  Fischl, Razor, Keqing, Cyno, Beidou, KujouSara, RaidenShogun, YaeMiko, Lisa,
  Sucrose, Jean, Venti, Xiao, KaedeharaKazuha, Wanderer,
  Ningguang, Noelle, Zhongli, Albedo, AratakiItto,
  Collei, Tighnari, Nahida, Yaoyao,
  FatuiCyroCicinMage,
  RhodeiaOfLoch, FatuiMirrorMaiden,
  FatuiPyroAgent, AbyssLectorFathomlessFlames,
  ElectroHypostasis,
  MaguuKenki,
  StonehideLawachurl,
  JadeplumeTerrorshroom,
] as const;

// #endregion

export type CharacterCard = typeof ALL_CHARACTER_CARDS[number];

const characterCardOrder = Object.fromEntries(ALL_CHARACTER_CARDS.map((card, i) => [card, i])) as Record<CharacterCard, number>;
export const characterCardSorter = (a: CharacterCard, b: CharacterCard) => characterCardOrder[a] - characterCardOrder[b];

// #region 行动牌常量

const TALENTS = [
  "唯此一心", "猫爪冰摇", "冷血之剑", "吐纳真定", "寒天宣命祝词", "战欲涌现", "忘玄", "起死回骸",
  "光辉的季节", "重帘留香", "沉没的预言", "深渊之灾·凝水盛放", "匣中玉栉", "镜华风姿", "衍溢的汐潮",
  "流火焦灼", "交叉火力", "冒险憧憬", "一触即发", "长野原龙势流星群", "砰砰礼物", "血之灶火", "最终解释权", "崇诚之真",
  "噬星魔鸦", "觉醒", "抵天雷罚", "落羽的裁泽", "霹雳连霄", "我界", "万千的愿望", "神篱之御荫", "脉冲的魔女",
  "混元熵增论", "蒲公英的国土", "绪风之拥", "降魔·护法夜叉", "风物之诗咏", "梦迹一风",
  "储之千日，用之一刻", "支援就交给我吧", "炊金馔玉", "神性之陨", "荒泷第一",
  "飞叶迴斜", "眼识殊明", "心识蕴藏之种", "慈惠仁心",
  "冰萤寒光",
  "百川奔流", "镜锢之笼",
  "悉数讨回", "烬火重燃",
  "汲能棱晶",
  "机巧神通",
  "重铸：岩盔",
  "孢子增殖",
] as const;

const WEAPONS = [
  "魔导绪论", "祭礼残章", "天空之卷", "千夜浮梦", "盈满之实",
  "鸦羽弓", "祭礼弓", "天空之翼", "阿莫斯之弓", "终末嗟叹之诗", "王下近侍",
  "白铁大剑", "祭礼大剑", "狼的末路", "天空之傲", "钟剑",
  "白缨枪", "千岩长枪", "天空之脊", "贯虹之槊", "薙草之稻光", "贯月矢",
  "旅行剑", "祭礼剑", "风鹰剑", "天空之刃", "西风剑",
] as const;
const ARTIFACTS = [
  "冒险家头带", "幸运儿银冠", "游医的方巾", "赌徒的耳环", "教官的帽子", "流放者头冠",
  "华饰之兜", "绝缘之旗印", "将帅兜鍪", "千岩牢固",
  "虺雷之姿", "辰砂往生录", "无常之面", "追忆之注连", "海祇之冠",
  "踏破冰雪的回音", "冰风迷途的勇士", "酒渍船帽", "沉沦之心",
  "焦灼的魔女帽", "炽烈的炎之魔女", "唤雷的头冠", "如雷的盛怒",
  "翠绿的猎人之冠", "翠绿之影", "不动玄石之相", "悠古的磐岩",
  "月桂的宝冠", "深林的记忆",
] as const;
const AREAS = [
  "璃月港口", "骑士团图书馆", "群玉阁", "晨曦酒庄", "望舒客栈", "西风大教堂",
  "天守阁", "鸣神大社", "珊瑚宫", "须弥城", "桓纳兰那", "镇守之森",
  "黄金屋", "化成郭",
] as const;
const FRIENDS = [
  "派蒙", "凯瑟琳", "蒂玛乌斯", "瓦格纳", "卯师傅", "阿圆", "提米", "立本", "常九爷", "艾琳", "田铁嘴", "刘苏",
  "花散里", "鲸井小弟", "旭东", "迪娜泽黛", "拉娜", "老章", "塞塔蕾", "弥生七月",
] as const;
const ITEMS = [
  "参量质变仪", "便携营养袋", "红羽团扇", "寻宝仙灵",
] as const;

const LEGENDS = [
  "旧时庭园", "磐岩盟契", "愉舞欢游", "自由的新风",
] as const;

const ELEMENTS = [
  "元素共鸣：交织之冰", "元素共鸣：粉碎之冰",
  "元素共鸣：交织之水", "元素共鸣：疗愈之水",
  "元素共鸣：交织之火", "元素共鸣：热诚之火",
  "元素共鸣：交织之雷", "元素共鸣：强能之雷",
  "元素共鸣：交织之风", "元素共鸣：迅捷之风",
  "元素共鸣：交织之岩", "元素共鸣：坚定之岩",
  "元素共鸣：交织之草", "元素共鸣：蔓生之草",
] as const;
const FACTIONS = [
  "风与自由", "岩与契约", "雷与永恒", "草与智慧",
] as const;

const SPELLS = [
  "最好的伙伴！", "换班时间", "一掷乾坤", "运筹帷幄", "本大爷还没有输！", "交给我吧！", "鹤归之时",
  "星天之兆", "白垩之术", "诸武精通", "神宝迁宫祝词", "快快缝补术", "送你一程", "护法之誓",
  "深渊的呼唤", "愚人众的阴谋",
  "下落斩", "重攻击", "温妮莎传奇", "永远的友谊", "大梦的曲调", "藏锋何处", "拳力斗技！",
] as const;
const FOODS = [
  "绝云锅巴", "仙跳墙", "莲花酥", "北地烟熏鸡", "甜甜花酿鸡", "蒙德土豆饼", "烤蘑菇披萨", "兽肉薄荷卷",
  "提瓦特煎蛋", "刺身拼盘", "唐杜尔烤鸡", "黄油蟹蟹",
] as const;

export const ALL_ACTION_CARDS = [
  ...TALENTS, ...WEAPONS, ...ARTIFACTS,
  ...AREAS, ...FRIENDS, ...ITEMS,
  ...LEGENDS, ...ELEMENTS, ...FACTIONS,
  ...SPELLS, ...FOODS,
];

// #endregion

export type ActionCard = typeof ALL_ACTION_CARDS[number];

const actionCardOrder = Object.fromEntries(ALL_ACTION_CARDS.map((card, i) => [card, i])) as Record<ActionCard, number>;
export const actionCardSorter = (a: ActionCard, b: ActionCard) => actionCardOrder[a] - actionCardOrder[b];
