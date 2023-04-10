import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  bedwarsStatsType,
  playerInfoType,
  skywarsStatsType,
  duelsStatsType,
} from "./types/types";

export const getStats = () => {
  const navigator = useNavigate();

  const [bedwarsStats, setBedwarsStats] = useState<bedwarsStatsType>({
    coins: 0,
    deaths: 0,
    exp: 0,
    kills: 0,
    wins: 0,
    games_played: 0,
    kd: 0,
    brokenBeds: 0,
    collectedRes: 0,
    finalKills: 0,
    lostBeds: 0,
    purshasedItems: 0,
  });

  const [skywarsStats, setSkywarsStats] = useState<skywarsStatsType>({
    games_played: 0,
    deaths: 0,
    coins: 0,
    kills: 0,
    wins: 0,
    lastMode: "",
    losses: 0,
    openedChest: 0,
    souls: 0,
  });

  const [duelsStats, setDuelsStats] = useState<duelsStatsType>({
    games_played: 0,
    deaths: 0,
    coins: 0,
    kills: 0,
    wins: 0,
    blocks_placed: 0,
    bow_shots: 0,
    losses: 0,
    golden_apples_eaten: 0,
  });

  const [playerInfo, setPlayerInfo] = useState<playerInfoType>({
    displayName: "",
    firstLogin: 0,
    lastLogin: 0,
    karma: 0,
    mostRecentGameType: "",
    userLanguage: "",
    uuid: 0,
  });

  const [isLoading, setisLoading] = useState(true);

  const locationDOM = useLocation();
  const nickname = locationDOM.pathname.replace("/player/", "");

  const getData = async () => {
    setisLoading(true);
    const responseUID = await fetch(
      `https://playerdb.co/api/player/minecraft/${nickname}`
    );
    const jsonUID = await responseUID.json();

    if (!responseUID.ok) {
      navigator("/");
      return alert("Nie znaleziono gracza!");
    }

    const responseStats = await fetch(
      `https://api.hypixel.net/player?uuid=${jsonUID.data.player.id}&key=${
        import.meta.env.VITE_HYPIXEL_API_KEY
      }`
    );

    const jsonWithStats = await responseStats.json();
    if (!responseStats.ok) return;
    setBedwarsStats({
      coins: jsonWithStats.player.stats.Bedwars["coins"],
      exp: jsonWithStats.player.stats.Bedwars["Experience"],
      kills: jsonWithStats.player.stats.Bedwars["kills_bedwars"],
      deaths: jsonWithStats.player.stats.Bedwars["deaths_bedwars"],
      games_played: jsonWithStats.player.stats.Bedwars["games_played_bedwars"],
      wins: jsonWithStats.player.stats.Bedwars["wins_bedwars"],
      kd:
        jsonWithStats.player.stats.Bedwars["kills_bedwars"] /
        jsonWithStats.player.stats.Bedwars["deaths_bedwars"],
      brokenBeds: jsonWithStats.player.stats.Bedwars["beds_broken_bedwars"],
      lostBeds: jsonWithStats.player.stats.Bedwars["beds_lost_bedwars"],
      collectedRes: jsonWithStats.player.stats.Bedwars["resources_collected_bedwars"],
      finalKills: jsonWithStats.player.stats.Bedwars["final_kills_bedwars"],
      purshasedItems: jsonWithStats.player.stats.Bedwars[`_items_purchased_bedwars`],
    });
    setPlayerInfo({
      displayName: jsonWithStats.player["displayname"],
      firstLogin: jsonWithStats.player["firstLogin"],
      karma: jsonWithStats.player["karma"],
      lastLogin: jsonWithStats.player["lastLogin"],
      mostRecentGameType: jsonWithStats.player["mostRecentGameType"],
      userLanguage: jsonWithStats.player["userLanguage"],
      uuid: jsonWithStats.player["uuid"],
    });
    setSkywarsStats({
      coins: jsonWithStats.player.stats.SkyWars["coins"],
      deaths: jsonWithStats.player.stats.SkyWars["deaths"],
      games_played: jsonWithStats.player.stats.SkyWars["games_played_skywars"],
      kills: jsonWithStats.player.stats.SkyWars["kills"],
      lastMode: jsonWithStats.player.stats.SkyWars["lastMode"],
      wins: jsonWithStats.player.stats.SkyWars["wins"],
      losses: jsonWithStats.player.stats.SkyWars["losses"],
      openedChest: jsonWithStats.player.stats.SkyWars["chests_opened"],
      souls: jsonWithStats.player.stats.SkyWars["souls"],
    });
    setDuelsStats({
      coins: jsonWithStats.player.stats.Duels["coins"],
      deaths: jsonWithStats.player.stats.Duels["deaths"],
      games_played: jsonWithStats.player.stats.Duels["games_played_duels"],
      kills: jsonWithStats.player.stats.Duels["kills"],
      blocks_placed: jsonWithStats.player.stats.Duels["blocks_placed"],
      wins: jsonWithStats.player.stats.Duels["wins"],
      losses: jsonWithStats.player.stats.Duels["losses"],
      bow_shots: jsonWithStats.player.stats.Duels["bow_shots"],
      golden_apples_eaten: jsonWithStats.player.stats.Duels["golden_apples_eaten"],
    });
    setisLoading(false);
  };

  useEffect(() => {
    return () => {
      getData();
    };
  }, []);

  return { bedwarsStats, playerInfo, skywarsStats, duelsStats, isLoading };
};
