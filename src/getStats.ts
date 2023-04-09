import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { bedwarsStatsType, playerInfoType, skywarsStatsType } from "./types/types";

export const getStats = () => {
  const [uuid, setUUID] = useState<string>("");
  const [bedwarsStats, setBedwarsStats] = useState<bedwarsStatsType>({
    coins: 0,
    deaths: 0,
    exp: 0,
    kills: 0,
    wins: 0,
    games_played: 0,
    kd: 0
  });
  const [skywarsStats, setSkywarsStats] = useState<skywarsStatsType>({
    games_played: 0,
    deaths: 0,
    coins: 0,
    kills: 0,
    wins: 0,
    lastMode: ""
  });
  const [playerInfo, setPlayerInfo] = useState<playerInfoType>({
    displayName: "",
    firstLogin: 0,
    lastLogin: 0,
    karma: 0,
    mostRecentGameType: "",
    userLanguage: "",
    uuid: 0
  });

  const locationDOM = useLocation();
  const nickname = locationDOM.pathname.replace("/player/", "");

  const getData = async () => {
    const responseUID = await fetch(
      `https://playerdb.co/api/player/minecraft/${nickname}`
    );
    const jsonUID = await responseUID.json();

    const responseStats = await fetch(
      `https://api.hypixel.net/player?uuid=${jsonUID.data.player.id}&key=${import.meta.env.VITE_HYPIXEL_API_KEY}`

    );
    const json = await responseStats.json();
    console.log(json)
    if (!responseStats.ok) return;
    setBedwarsStats({
        coins: json.player.stats.Bedwars["coins"],
        exp: json.player.stats.Bedwars["Experience"],
        kills: json.player.stats.Bedwars["kills_bedwars"],
        deaths: json.player.stats.Bedwars["deaths_bedwars"],
        games_played: json.player.stats.Bedwars["games_played_bedwars"],
        wins: json.player.stats.Bedwars["wins_bedwars"],
        kd: json.player.stats.Bedwars["kills_bedwars"] / json.player.stats.Bedwars["deaths_bedwars"] ,
    })
    setPlayerInfo({
        displayName: json.player["displayname"],
        firstLogin: json.player["firstLogin"],
        karma: json.player["karma"],
        lastLogin: json.player["lastLogin"],
        mostRecentGameType: json.player["mostRecentGameType"],
        userLanguage: json.player["userLanguage"],
        uuid: json.player["uuid"]
    })
    setSkywarsStats({
      coins: json.player.stats.SkyWars["coins"],
      deaths: json.player.stats.SkyWars["deaths"],
      games_played: json.player.stats.SkyWars["games_played_skywars"],
      kills: json.player.stats.SkyWars["kills"],
      lastMode: json.player.stats.SkyWars["lastMode"],
      wins: json.player.stats.SkyWars["wins"]
    })
  };
  // console.log(skywarsStats, playerInfo, bedwarsStats)

  useEffect(() => {
    return () => {
        getData()
    };
  }, []);

  return { bedwarsStats, playerInfo };
};
