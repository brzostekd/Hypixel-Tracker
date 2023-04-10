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
  brokenBeds: number
  lostBeds: number;
  collectedRes: number;
  finalKills: number;
  purshasedItems: number
  kd: number;
};

export type skywarsStatsType = {
  games_played: number;
  deaths: number;
  coins: number;
  kills: number;
  wins: number;
  lastMode: string;
  openedChest: number, 
  losses: number;
  souls: number
};

export type duelsStatsType = {
  games_played: number;
  deaths: number;
  coins: number;
  kills: number;
  wins: number;
  blocks_placed: number;
  bow_shots: number, 
  losses: number;
  golden_apples_eaten: number
};