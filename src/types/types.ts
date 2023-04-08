export type playerInfo = {
  displayName: string;
  firstLogin: number;
  lastLogin: number;
  karma: number;
  mostRecentGameType: string;
  userLanguage: string;
};

export type bedwarsStats = {
  coins: number;
  deaths: number;
  exp: number;
  kills: number;
  wins: number;
  games_played: number;
};

export type skywarsStats = {
  games_played: number
  deaths: number
  coins: number
  kills: number
  wins: number
  lastMode: string
};
