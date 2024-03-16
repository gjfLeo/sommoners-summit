import { Amber, AratakiItto, Barbara, Bennett, Chongyun, Collei, FatuiPyroAgent, Fischl, Jean, Keqing, Klee, Mona, Nahida, Noelle, RaidenShogun, RhodeiaOfLoch, Shenhe, Tighnari, Venti, YaeMiko, defineActions, defineTournament } from "~/utils/types";

const actions = {
  "蕊梨-双冰": defineActions({
    "赌徒的耳环": 2,
    "桓那兰那": 2,
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
  }),
  "蕊梨-决赛双冰": defineActions({
    "赌徒的耳环": 2,
    "桓那兰那": 2,
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
    "送你一程": 2,
    "仙跳墙": 1,
    "莲花酥": 2,
    "蒙德土豆饼": 2,
  }),
  "蕊梨-双火": defineActions({
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
    "莲花酥": 2,
    "蒙德土豆饼": 1,
    "唐杜尔烤鸡": 1,
  }),
  "蕊梨-双岩": defineActions({
    "钟剑": 2,
    "千岩牢固": 2,
    "璃月港口": 2,
    "天守阁": 2,
    "须弥城": 2,
    "阿圆": 2,
    "立本": 1,
    "元素共鸣：交织之岩": 2,
    "元素共鸣：坚定之岩": 2,
    "风与自由": 2,
    "运筹帷幄": 2,
    "交给我吧！": 1,
    "护法之誓": 2,
    "重攻击": 2,
    "莲花酥": 2,
    "蒙德土豆饼": 2,
  }),
  "蕊梨-水债皇": defineActions({
    "悉数讨回": 1,
    "幸运儿银冠": 1,
    "璃月港口": 2,
    "天守阁": 1,
    "桓那兰那": 1,
    "派蒙": 2,
    "提米": 2,
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
  }),
  "蕊梨-决赛水债皇": defineActions({
    "悉数讨回": 1,
    "幸运儿银冠": 2,
    "璃月港口": 2,
    "派蒙": 2,
    "提米": 2,
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
  }),
  "蕊梨-水皇草": defineActions({
    "赌徒的耳环": 1,
    "桓那兰那": 2,
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
    "烤蘑菇披萨": 1,
  }),
  "蕊梨-莫琴刻": defineActions({
    "赌徒的耳环": 2,
    "桓那兰那": 2,
    "提米": 2,
    "寻宝仙灵": 2,
    "风与自由": 2,
    "最好的伙伴！": 2,
    "换班时间": 2,
    "运筹帷幄": 2,
    "本大爷还没有输！": 2,
    "交给我吧！": 2,
    "星天之兆": 1,
    "白垩之术": 2,
    "送你一程": 2,
    "仙跳墙": 1,
    "莲花酥": 1,
    "蒙德土豆饼": 2,
    "唐杜尔烤鸡": 1,
  }),
  "Jack-水皇草": defineActions({
    "赌徒的耳环": 1,
    "桓那兰那": 2,
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
    "仙跳墙": 2,
    "莲花酥": 2,
    "蒙德土豆饼": 1,
  }),
  "花开何年-双冰": defineActions({
    "赌徒的耳环": 2,
    "桓那兰那": 2,
    "提米": 1,
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
    "送你一程": 1,
    "护法之誓": 1,
    "重攻击": 1,
    "仙跳墙": 1,
    "莲花酥": 2,
    "蒙德土豆饼": 2,
  }),
  "花开何年-半决赛双冰": defineActions({
    "赌徒的耳环": 2,
    "桓那兰那": 2,
    "提米": 1,
    "立本": 2,
    "刘苏": 1,
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
    "重攻击": 1,
    "仙跳墙": 1,
    "莲花酥": 2,
    "蒙德土豆饼": 1,
  }),
  "花开何年-双岩": defineActions({
    "钟剑": 2,
    "千岩牢固": 2,
    "璃月港口": 2,
    "天守阁": 2,
    "须弥城": 1,
    "阿圆": 2,
    "立本": 2,
    "元素共鸣：交织之岩": 2,
    "元素共鸣：坚定之岩": 2,
    "风与自由": 1,
    "运筹帷幄": 1,
    "交给我吧！": 1,
    "白垩之术": 1,
    "送你一程": 1,
    "护法之誓": 1,
    "重攻击": 1,
    "仙跳墙": 1,
    "莲花酥": 2,
    "蒙德土豆饼": 1,
    "烤蘑菇披萨": 2,
  }),
  "花开何年-双火": defineActions({
    "冒险憧憬": 2,
    "祭礼剑": 2,
    "赌徒的耳环": 2,
    "璃月港口": 1,
    "派蒙": 2,
    "提米": 1,
    "立本": 2,
    "元素共鸣：交织之火": 2,
    "元素共鸣：热诚之火": 2,
    "风与自由": 2,
    "最好的伙伴！": 2,
    "运筹帷幄": 1,
    "本大爷还没有输！": 2,
    "交给我吧！": 2,
    "送你一程": 1,
    "护法之誓": 1,
    "莲花酥": 1,
    "蒙德土豆饼": 1,
    "唐杜尔烤鸡": 1,
  }),
  "花开何年-水皇草": defineActions({
    "幸运儿银冠": 1,
    "赌徒的耳环": 1,
    "桓那兰那": 2,
    "派蒙": 2,
    "提米": 1,
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
    "仙跳墙": 2,
    "莲花酥": 2,
    "蒙德土豆饼": 1,
  }),
  "花开何年-半决赛双火": defineActions({
    "冒险憧憬": 2,
    "祭礼剑": 2,
    "赌徒的耳环": 2,
    "派蒙": 1,
    "立本": 2,
    "刘苏": 2,
    "元素共鸣：交织之火": 2,
    "元素共鸣：热诚之火": 2,
    "风与自由": 2,
    "最好的伙伴！": 2,
    "运筹帷幄": 2,
    "本大爷还没有输！": 2,
    "交给我吧！": 2,
    "送你一程": 2,
    "莲花酥": 2,
    "唐杜尔烤鸡": 1,
  }),
  "陌生-水皇草": defineActions({
    "赌徒的耳环": 2,
    "桓那兰那": 2,
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
    "送你一程": 1,
    "仙跳墙": 1,
    "莲花酥": 2,
    "蒙德土豆饼": 2,
  }),
  "陌生-双冰": defineActions({
    "赌徒的耳环": 2,
    "桓那兰那": 2,
    "提米": 2,
    "立本": 2,
    "元素共鸣：交织之冰": 2,
    "元素共鸣：粉碎之冰": 2,
    "岩与契约": 1,
    "最好的伙伴！": 1,
    "换班时间": 1,
    "运筹帷幄": 2,
    "本大爷还没有输！": 2,
    "交给我吧！": 2,
    "星天之兆": 1,
    "送你一程": 1,
    "重攻击": 1,
    "仙跳墙": 1,
    "莲花酥": 2,
    "蒙德土豆饼": 2,
    "唐杜尔烤鸡": 1,
  }),
  "陌生-莫皇草": defineActions({
    "赌徒的耳环": 2,
    "桓那兰那": 2,
    "提米": 2,
    "立本": 1,
    "拉娜": 2,
    "风与自由": 1,
    "最好的伙伴！": 2,
    "换班时间": 2,
    "一掷乾坤": 1,
    "运筹帷幄": 2,
    "本大爷还没有输！": 2,
    "交给我吧！": 1,
    "星天之兆": 1,
    "白垩之术": 2,
    "重攻击": 1,
    "仙跳墙": 1,
    "莲花酥": 2,
    "蒙德土豆饼": 2,
    "唐杜尔烤鸡": 1,
  }),
  "木偶人-双冰": defineActions({
    "赌徒的耳环": 2,
    "桓那兰那": 2,
    "提米": 2,
    "立本": 2,
    "元素共鸣：交织之冰": 2,
    "元素共鸣：粉碎之冰": 2,
    "岩与契约": 1,
    "最好的伙伴！": 2,
    "运筹帷幄": 2,
    "本大爷还没有输！": 2,
    "交给我吧！": 1,
    "星天之兆": 1,
    "送你一程": 2,
    "重攻击": 1,
    "仙跳墙": 2,
    "莲花酥": 2,
    "蒙德土豆饼": 2,
  }),
  "木偶人-半决赛双冰": defineActions({
    "赌徒的耳环": 2,
    "桓那兰那": 2,
    "提米": 2,
    "立本": 2,
    "元素共鸣：交织之冰": 2,
    "元素共鸣：粉碎之冰": 2,
    "岩与契约": 1,
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
    "蒙德土豆饼": 2,
  }),
  "木偶人-莫皇草": defineActions({
    "赌徒的耳环": 2,
    "桓那兰那": 2,
    "提米": 2,
    "立本": 1,
    "风与自由": 2,
    "最好的伙伴！": 2,
    "换班时间": 2,
    "一掷乾坤": 2,
    "运筹帷幄": 2,
    "本大爷还没有输！": 2,
    "交给我吧！": 2,
    "白垩之术": 2,
    "送你一程": 2,
    "仙跳墙": 2,
    "莲花酥": 2,
    "蒙德土豆饼": 1,
  }),
  "木偶人-半决赛莫皇草": defineActions({
    "赌徒的耳环": 2,
    "桓那兰那": 2,
    "提米": 2,
    "拉娜": 2,
    "风与自由": 2,
    "最好的伙伴！": 2,
    "换班时间": 2,
    "一掷乾坤": 2,
    "运筹帷幄": 2,
    "本大爷还没有输！": 2,
    "交给我吧！": 1,
    "白垩之术": 2,
    "送你一程": 2,
    "仙跳墙": 1,
    "莲花酥": 2,
    "蒙德土豆饼": 2,
  }),
  "木偶人-水皇草": defineActions({
    "幸运儿银冠": 1,
    "赌徒的耳环": 2,
    "桓那兰那": 2,
    "提米": 2,
    "立本": 2,
    "最好的伙伴！": 2,
    "换班时间": 2,
    "一掷乾坤": 2,
    "运筹帷幄": 2,
    "本大爷还没有输！": 2,
    "交给我吧！": 2,
    "白垩之术": 2,
    "送你一程": 2,
    "仙跳墙": 1,
    "莲花酥": 2,
    "蒙德土豆饼": 2,
  }),
  "木偶人-莫温刻": defineActions({
    "赌徒的耳环": 2,
    "桓那兰那": 2,
    "提米": 2,
    "立本": 2,
    "寻宝仙灵": 2,
    "风与自由": 2,
    "最好的伙伴！": 2,
    "换班时间": 1,
    "一掷乾坤": 1,
    "本大爷还没有输！": 2,
    "交给我吧！": 2,
    "白垩之术": 2,
    "送你一程": 2,
    "仙跳墙": 1,
    "莲花酥": 2,
    "蒙德土豆饼": 1,
    "唐杜尔烤鸡": 2,
  }),
  "归根-双草": defineActions({
    "赌徒的耳环": 2,
    "提米": 2,
    "立本": 2,
    "寻宝仙灵": 2,
    "元素共鸣：交织之草": 2,
    "元素共鸣：蔓生之草": 2,
    "草与智慧": 1,
    "最好的伙伴！": 2,
    "换班时间": 1,
    "本大爷还没有输！": 2,
    "交给我吧！": 2,
    "快快缝补术": 2,
    "送你一程": 2,
    "重攻击": 1,
    "仙跳墙": 2,
    "莲花酥": 2,
    "蒙德土豆饼": 1,
  }),
  "归根-水皇草": defineActions({
    "赌徒的耳环": 2,
    "桓那兰那": 2,
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
    "仙跳墙": 2,
    "莲花酥": 1,
    "蒙德土豆饼": 2,
  }),
  "归根-双冰": defineActions({
    "赌徒的耳环": 2,
    "桓那兰那": 2,
    "提米": 2,
    "立本": 2,
    "元素共鸣：交织之冰": 2,
    "元素共鸣：粉碎之冰": 2,
    "岩与契约": 1,
    "最好的伙伴！": 2,
    "换班时间": 1,
    "一掷乾坤": 1,
    "运筹帷幄": 1,
    "本大爷还没有输！": 2,
    "交给我吧！": 2,
    "送你一程": 2,
    "仙跳墙": 2,
    "莲花酥": 2,
    "蒙德土豆饼": 2,
  }),
  "喵帕斯-双冰": defineActions({
    "赌徒的耳环": 2,
    "桓那兰那": 2,
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
  }),
  "喵帕斯-半决赛双冰": defineActions({
    "赌徒的耳环": 2,
    "桓那兰那": 2,
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
  "喵帕斯-双火": defineActions({
    "冒险憧憬": 2,
    "祭礼剑": 2,
    "赌徒的耳环": 2,
    "璃月港口": 1,
    "须弥城": 2,
    "提米": 2,
    "立本": 2,
    "元素共鸣：交织之火": 2,
    "元素共鸣：热诚之火": 2,
    "风与自由": 2,
    "最好的伙伴！": 2,
    "运筹帷幄": 1,
    "本大爷还没有输！": 2,
    "交给我吧！": 2,
    "莲花酥": 2,
    "蒙德土豆饼": 1,
    "唐杜尔烤鸡": 1,
  }),
  "喵帕斯-莫温刻": defineActions({
    "祭礼剑": 2,
    "赌徒的耳环": 2,
    "桓那兰那": 2,
    "提米": 2,
    "立本": 2,
    "常九爷": 2,
    "鲸井小弟": 2,
    "风与自由": 2,
    "最好的伙伴！": 2,
    "换班时间": 1,
    "本大爷还没有输！": 2,
    "交给我吧！": 2,
    "白垩之术": 2,
    "仙跳墙": 2,
    "莲花酥": 2,
    "唐杜尔烤鸡": 1,
  }),
  "喵帕斯-水皇草": defineActions({
    "幸运儿银冠": 2,
    "桓那兰那": 1,
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
    "仙跳墙": 1,
    "莲花酥": 2,
    "蒙德土豆饼": 2,
    "烤蘑菇披萨": 1,
    "提瓦特煎蛋": 1,
  }),
  "喵帕斯-半决赛水皇草": defineActions({
    "幸运儿银冠": 2,
    "桓那兰那": 1,
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
    "仙跳墙": 1,
    "莲花酥": 2,
    "蒙德土豆饼": 2,
    "烤蘑菇披萨": 1,
  }),
  "喵帕斯-莫皇草": defineActions({
    "赌徒的耳环": 2,
    "须弥城": 2,
    "鲸井小弟": 2,
    "拉娜": 2,
    "风与自由": 1,
    "最好的伙伴！": 2,
    "换班时间": 2,
    "一掷乾坤": 2,
    "运筹帷幄": 2,
    "本大爷还没有输！": 2,
    "交给我吧！": 1,
    "白垩之术": 2,
    "送你一程": 2,
    "仙跳墙": 2,
    "莲花酥": 2,
    "蒙德土豆饼": 1,
    "唐杜尔烤鸡": 1,
  }),
  "夜枭-水皇草": defineActions({
    "赌徒的耳环": 1,
    "桓那兰那": 2,
    "派蒙": 2,
    "提米": 2,
    "立本": 2,
    "最好的伙伴！": 2,
    "换班时间": 2,
    "一掷乾坤": 2,
    "运筹帷幄": 1,
    "本大爷还没有输！": 2,
    "交给我吧！": 2,
    "星天之兆": 2,
    "白垩之术": 2,
    "送你一程": 1,
    "仙跳墙": 1,
    "莲花酥": 2,
    "蒙德土豆饼": 2,
  }),
};

export default defineTournament({
  name: "月话杯",
  gameVersion: "3.7",
  type: "积分赛试办赛",
  stages: [
    {
      name: "8进4淘汰赛",
      rules: {
        numDecks: 4,
        numDecksBanned: 1,
        numCharactersRequired: 9,
        numGames: 5,
        mode: "Conquest",
      },
      parts: [
        {
          name: "DAY1",
          date: "2023-06-24",
          matches: [
            {
              playerA: "蕊梨",
              playerB: "Jack",
              winner: "A",
              video: "https://www.bilibili.com/video/BV1pV4y1y7HK",
              games: [
                {
                  playerACharacters: [Noelle, Amber, AratakiItto],
                  playerAActions: actions["蕊梨-双岩"],
                  playerBCharacters: [Nahida, RhodeiaOfLoch, Fischl],
                  playerBActions: actions["Jack-水皇草"],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: [FatuiPyroAgent, RhodeiaOfLoch, Fischl],
                  playerAActions: actions["蕊梨-水债皇"],
                  playerBCharacters: [Nahida, RhodeiaOfLoch, Fischl],
                  playerBActions: actions["Jack-水皇草"],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: [Chongyun, RaidenShogun, Shenhe],
                  // TODO 比赛直播说卡组没要到
                  // playerAActions: actions["蕊梨-双冰"],
                  playerBCharacters: [Nahida, RhodeiaOfLoch, Fischl],
                  playerBActions: actions["Jack-水皇草"],
                  starter: "B",
                  winner: "A",
                },
              ],
            },
            {
              playerA: "陌生",
              playerB: "花开何年",
              winner: "A",
              video: "https://www.bilibili.com/video/BV1PN411D7kz",
              games: [
                {
                  playerACharacters: [Nahida, Mona, Fischl],
                  playerAActions: actions["陌生-莫皇草"],
                  playerBCharacters: [Noelle, Barbara, AratakiItto],
                  playerBActions: actions["花开何年-双岩"],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: [Chongyun, RaidenShogun, Shenhe],
                  playerAActions: actions["陌生-双冰"],
                  playerBCharacters: [Bennett, Klee, Keqing],
                  playerBActions: actions["花开何年-双火"],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: [Nahida, RhodeiaOfLoch, Fischl],
                  playerAActions: actions["陌生-水皇草"],
                  playerBCharacters: [Chongyun, RaidenShogun, Shenhe],
                  playerBActions: actions["花开何年-双冰"],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: [Nahida, RhodeiaOfLoch, Fischl],
                  playerAActions: actions["陌生-水皇草"],
                  playerBCharacters: [Bennett, Klee, Keqing],
                  playerBActions: actions["花开何年-双火"],
                  starter: "B",
                  winner: "A",
                },
              ],
            },
          ],
        },
        {
          name: "DAY2",
          date: "2023-06-25",
          matches: [
            {
              playerA: "木偶人",
              playerB: "归根",
              winner: "A",
              video: "https://www.bilibili.com/video/BV1hV4y1y7TC",
              games: [
                {
                  playerACharacters: [Nahida, Fischl, Mona],
                  playerAActions: actions["木偶人-莫皇草"],
                  playerBCharacters: [YaeMiko, Tighnari, Collei],
                  playerBActions: actions["归根-双草"],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: [Mona, Venti, Keqing],
                  playerAActions: actions["木偶人-莫温刻"],
                  playerBCharacters: [Chongyun, RaidenShogun, Shenhe],
                  playerBActions: actions["归根-双冰"],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: [Chongyun, RaidenShogun, Shenhe],
                  playerAActions: actions["木偶人-双冰"],
                  playerBCharacters: [Nahida, RhodeiaOfLoch, Fischl],
                  playerBActions: actions["归根-水皇草"],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: [Mona, Venti, Keqing],
                  playerAActions: actions["木偶人-莫温刻"],
                  playerBCharacters: [YaeMiko, Tighnari, Collei],
                  playerBActions: actions["归根-双草"],
                  starter: "B",
                  winner: "A",
                },
              ],
            },
            {
              playerA: "喵帕斯",
              playerB: "夜枭",
              winner: "A",
              video: "https://www.bilibili.com/video/BV16g4y1P7zN",
              games: [
                {
                  playerACharacters: [Mona, Venti, Keqing],
                  playerAActions: actions["喵帕斯-莫温刻"],
                  playerBCharacters: [Nahida, Fischl, RhodeiaOfLoch],
                  playerBActions: actions["夜枭-水皇草"],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: [Nahida, RhodeiaOfLoch, Fischl],
                  playerAActions: actions["喵帕斯-水皇草"],
                  playerBCharacters: [Nahida, Fischl, RhodeiaOfLoch],
                  playerBActions: actions["夜枭-水皇草"],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: [Chongyun, RaidenShogun, Shenhe],
                  playerAActions: actions["喵帕斯-双冰"],
                  playerBCharacters: [Nahida, Fischl, RhodeiaOfLoch],
                  playerBActions: actions["夜枭-水皇草"],
                  starter: "A",
                  winner: "A",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "半决赛",
      rules: {
        numDecks: 4,
        numDecksBanned: 1,
        numCharactersRequired: 9,
        numGames: 5,
        mode: "Conquest",
      },
      parts: [
        {
          name: "",
          date: "2023-07-01",
          matches: [
            {
              playerA: "喵帕斯",
              playerB: "木偶人",
              winner: "A",
              video: "https://www.bilibili.com/video/BV1y14y1d7K3",
              games: [
                {
                  playerACharacters: [Chongyun, RaidenShogun, Shenhe],
                  playerAActions: actions["喵帕斯-半决赛双冰"],
                  playerBCharacters: [Nahida, Fischl, Mona],
                  playerBActions: actions["木偶人-半决赛莫皇草"],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: [Nahida, RhodeiaOfLoch, Fischl],
                  playerAActions: actions["喵帕斯-半决赛水皇草"],
                  playerBCharacters: [RhodeiaOfLoch, Nahida, Fischl],
                  playerBActions: actions["木偶人-水皇草"],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: [Nahida, RhodeiaOfLoch, Fischl],
                  playerAActions: actions["喵帕斯-半决赛水皇草"],
                  playerBCharacters: [Chongyun, RaidenShogun, Shenhe],
                  playerBActions: actions["木偶人-半决赛双冰"],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: [Fischl, Mona, Nahida],
                  playerAActions: actions["喵帕斯-莫皇草"],
                  playerBCharacters: [Chongyun, RaidenShogun, Shenhe],
                  playerBActions: actions["木偶人-半决赛双冰"],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: [Chongyun, RaidenShogun, Shenhe],
                  playerAActions: actions["喵帕斯-半决赛双冰"],
                  playerBCharacters: [Chongyun, RaidenShogun, Shenhe],
                  playerBActions: actions["木偶人-半决赛双冰"],
                  starter: "B",
                  winner: "A",
                },
              ],
            },
            {
              playerA: "蕊梨",
              playerB: "花开何年",
              winner: "A",
              video: "https://www.bilibili.com/video/BV1um4y1J7GQ",
              games: [
                {
                  playerACharacters: [Chongyun, RaidenShogun, Shenhe],
                  playerAActions: actions["蕊梨-双冰"],
                  playerBCharacters: [Bennett, Klee, Keqing],
                  playerBActions: actions["花开何年-半决赛双火"],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: [Nahida, RhodeiaOfLoch, Fischl],
                  playerAActions: actions["蕊梨-水皇草"],
                  playerBCharacters: [Bennett, Klee, Keqing],
                  playerBActions: actions["花开何年-半决赛双火"],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: [Nahida, RhodeiaOfLoch, Fischl],
                  playerAActions: actions["蕊梨-水皇草"],
                  playerBCharacters: [Fischl, RhodeiaOfLoch, Nahida],
                  playerBActions: actions["花开何年-水皇草"],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: [Nahida, RhodeiaOfLoch, Fischl],
                  playerAActions: actions["蕊梨-水皇草"],
                  playerBCharacters: [Chongyun, RaidenShogun, Shenhe],
                  playerBActions: actions["花开何年-半决赛双冰"],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: [Mona, Jean, Keqing],
                  playerAActions: actions["蕊梨-莫琴刻"],
                  playerBCharacters: [Chongyun, RaidenShogun, Shenhe],
                  playerBActions: actions["花开何年-半决赛双冰"],
                  starter: "A",
                  winner: "A",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "决赛",
      rules: {
        numDecks: 4,
        numDecksBanned: 1,
        numCharactersRequired: 9,
        numGames: 5,
        mode: "Conquest",
      },
      parts: [
        {
          name: "",
          date: "2023-07-02",
          matches: [
            {
              playerA: "喵帕斯",
              playerB: "蕊梨",
              winner: "A",
              video: "https://www.bilibili.com/video/BV1q14y1d7rW",
              games: [
                {
                  playerACharacters: [Nahida, RhodeiaOfLoch, Fischl],
                  playerAActions: actions["喵帕斯-水皇草"],
                  playerBCharacters: [Chongyun, RaidenShogun, Shenhe],
                  playerBActions: actions["蕊梨-决赛双冰"],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: [Bennett, Keqing, Klee],
                  playerAActions: actions["喵帕斯-双火"],
                  playerBCharacters: [Chongyun, RaidenShogun, Shenhe],
                  playerBActions: actions["蕊梨-决赛双冰"],
                  starter: "B",
                  winner: "B",
                },
                {
                  playerACharacters: [Bennett, Keqing, Klee],
                  playerAActions: actions["喵帕斯-双火"],
                  playerBCharacters: [Bennett, Keqing, Klee],
                  playerBActions: actions["蕊梨-双火"],
                  starter: "A",
                  winner: "A",
                },
                {
                  playerACharacters: [Chongyun, RaidenShogun, Shenhe],
                  playerAActions: actions["喵帕斯-半决赛双冰"],
                  playerBCharacters: [FatuiPyroAgent, RhodeiaOfLoch, Fischl],
                  playerBActions: actions["蕊梨-决赛水债皇"],
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
