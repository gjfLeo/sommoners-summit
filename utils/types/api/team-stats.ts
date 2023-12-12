import type { ActionCard, TeamId } from "../card";
import type { GameVersion } from "../game-version";
import type { Game } from "../output-data";

export interface ApiTeamStatsMapValue {
  total: number;
  win: number;
  starterTotal: number;
  starterWin: number;
  followerTotal: number;
  followerWin: number;
  banned: number;
  vsSame: number;
}

export interface ApiTeamStatsMapData {
  teamStatsMap: Record<TeamId, ApiTeamStatsMapValue>;
}

export interface ApiTeamStatsBasicStats {
  total: number;
  win: number;
  totalWithDeck: number;
  winWithDeck: number;
}

export interface ApiTeamStatsCardUsageValue {
  totalCount: number;
  winCount: number;
  totalAverage: number;
  winAverage: number;
  deckPick: number;
}

export interface ApiTeamStatsVsTeamStatsValue {
  total: number;
  win: number;
}

export interface ApiTeamStatsData {
  basicStats: ApiTeamStatsBasicStats;
  cardUsageMap: Partial<Record<ActionCard, ApiTeamStatsCardUsageValue>>;
  typicalDeckId?: string;
  vsTeamStatsMap: Record<TeamId, ApiTeamStatsVsTeamStatsValue>;
}

export interface ApiTeamGamesData {
  gameList: Game[];
  total: number;
}

export interface ApiTeamStatsByVersionData {
  statsByVersion: Record<GameVersion, ApiTeamStatsByVersionValue>;
}
export interface ApiTeamStatsByVersionValue {
  ban: number;
  pick: number;
  win: number;
}
