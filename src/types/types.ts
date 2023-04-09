export type playerInfoType = {
  displayName: string;
  firstLogin: number;
  lastLogin: number;
  karma: number;
  mostRecentGameType: string;
  userLanguage: string;
  uuid: number;
};

export type bedwarsStatsType = {
  coins: number;
  deaths: number;
  exp: number;
  kills: number;
  wins: number;
  games_played: number;
  kd: number;
};

export type skywarsStatsType = {
  games_played: number;
  deaths: number;
  coins: number;
  kills: number;
  wins: number;
  lastMode: string;
};
