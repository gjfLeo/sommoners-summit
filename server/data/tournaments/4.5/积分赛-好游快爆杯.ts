import { defineTournament } from "~/utils/types";

export default defineTournament({
  name: "好游快爆杯",
  type: "全民积分赛",
  gameVersion: "4.5",
  stages: [
    {
      name: "8进4",
      rules: {
        numDecks: 3,
        numDecksBanned: 1,
        numCharactersBanned: 1,
        numCharactersRequired: 7,
        numGames: 3,
        mode: "Conquest",
      },
      parts: [
        {
          name: "DAY1",
          date: "2024-04-10",
          matches: [
            {
              playerA: "胡桃桃大魔王 ",
              playerB: "Elaina",
              video: "https://live.i3839.com/n/hykb/zhibo/m/?comm_id=14&imm=0&gameid=106235",
              banned: [
                {
                  playerACharacters: ["夜兰"],
                  playerBCharacters: ["「女士」"],
                },
                {
                  playerACharacters: ["千年珍珠骏麟", "若陀龙王", "林尼"],
                  playerBCharacters: ["林尼", "若陀龙王", "千年珍珠骏麟"],
                },
              ],
              games: [
                {
                  playerACharacters: ["绮良良", "千年珍珠骏麟", "镀金旅团·炽沙叙事人"],
                  playerBCharacters: ["绮良良", "千年珍珠骏麟", "林尼"],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: ["绮良良", "千年珍珠骏麟", "镀金旅团·炽沙叙事人"],
                  playerBCharacters: ["行秋", "重云", "雷泽"],
                  starter: "A",
                  winner: "B",
                },
              ],
            },
            {
              playerA: "神的微笑",
              playerB: "Smile",
              video: "https://live.i3839.com/n/hykb/zhibo/m/?comm_id=14&imm=0&gameid=106235",
              banned: [
                {
                  playerACharacters: ["若陀龙王"],
                  playerBCharacters: ["「女士」"],
                },
                {
                  playerACharacters: ["莫娜", "雷音权现", "无相之冰"],
                  playerBCharacters: ["夜兰", "雷音权现", "无相之冰"],
                },
              ],
              games: [
                {
                  playerACharacters: ["行秋", "重云", "雷泽"],
                  playerBCharacters: ["优菈", "莫娜", "流浪者"],
                  starter: "A",
                  winner: "B",
                },
                {
                  playerACharacters: ["夜兰", "雷音权现", "无相之冰"],
                  playerBCharacters: ["愚人众·雷萤术士", "莫娜", "纳西妲"],
                  starter: "B",
                  winner: "A",
                },
                {
                  playerACharacters: ["行秋", "重云", "雷泽"],
                  playerBCharacters: ["愚人众·雷萤术士", "莫娜", "纳西妲"],
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
