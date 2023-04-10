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
    golden_apples_eaten: 0
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

  const [isLoading, setisLoading] = useState(true)

  const locationDOM = useLocation();
  const nickname = locationDOM.pathname.replace("Hypixel-Tracker/player/", "");

  const getData = async () => {
    setisLoading(true);
    const responseUID = await fetch(
      `https://playerdb.co/api/player/minecraft/${nickname}`
    );
    const jsonUID = await responseUID.json();

    if (!responseUID.ok) {
       navigator('/Hypixel-Tracker')      
      return alert("Nie znaleziono gracza!");
    };

    const responseStats = await fetch(
      `https://api.hypixel.net/player?uuid=${jsonUID.data.player.id}&key=${
        import.meta.env.VITE_HYPIXEL_API_KEY
      }`
    );

    const json = await responseStats.json();
    if (!responseStats.ok) return;
    setBedwarsStats({
      coins: json.player.stats.Bedwars["coins"],
      exp: json.player.stats.Bedwars["Experience"],
      kills: json.player.stats.Bedwars["kills_bedwars"],
      deaths: json.player.stats.Bedwars["deaths_bedwars"],
      games_played: json.player.stats.Bedwars["games_played_bedwars"],
      wins: json.player.stats.Bedwars["wins_bedwars"],
      kd:
        json.player.stats.Bedwars["kills_bedwars"] /
        json.player.stats.Bedwars["deaths_bedwars"],
      brokenBeds: json.player.stats.Bedwars["beds_broken_bedwars"],
      lostBeds: json.player.stats.Bedwars["beds_lost_bedwars"],
      collectedRes: json.player.stats.Bedwars["resources_collected_bedwars"],
      finalKills: json.player.stats.Bedwars["final_kills_bedwars"],
      purshasedItems: json.player.stats.Bedwars[`_items_purchased_bedwars`],
    });
    setPlayerInfo({
      displayName: json.player["displayname"],
      firstLogin: json.player["firstLogin"],
      karma: json.player["karma"],
      lastLogin: json.player["lastLogin"],
      mostRecentGameType: json.player["mostRecentGameType"],
      userLanguage: json.player["userLanguage"],
      uuid: json.player["uuid"],
    });
    setSkywarsStats({
      coins: json.player.stats.SkyWars["coins"],
      deaths: json.player.stats.SkyWars["deaths"],
      games_played: json.player.stats.SkyWars["games_played_skywars"],
      kills: json.player.stats.SkyWars["kills"],
      lastMode: json.player.stats.SkyWars["lastMode"],
      wins: json.player.stats.SkyWars["wins"],
      losses: json.player.stats.SkyWars["losses"],
      openedChest: json.player.stats.SkyWars["chests_opened"],
      souls: json.player.stats.SkyWars["souls"],
    });
    setDuelsStats({
      coins: json.player.stats.Duels["coins"],
      deaths: json.player.stats.Duels["deaths"],
      games_played: json.player.stats.Duels["games_played_duels"],
      kills: json.player.stats.Duels["kills"],
      blocks_placed: json.player.stats.Duels["blocks_placed"],
      wins: json.player.stats.Duels["wins"],
      losses: json.player.stats.Duels["losses"],
      bow_shots: json.player.stats.Duels["bow_shots"],
      golden_apples_eaten: json.player.stats.Duels["golden_apples_eaten"],
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
