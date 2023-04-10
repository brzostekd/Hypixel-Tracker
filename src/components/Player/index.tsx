import { useState } from "react";
import { getStats } from "../../getStats";
import { motion } from "framer-motion";
import { Loading } from "./loading";

export const Player = () => {
  const { bedwarsStats, playerInfo, skywarsStats, isLoading } = getStats();
  const [ bedwarsActive, setBedwarsActive ] = useState<boolean>(false);
  const [ skywarsActive, setSkywarsActive ] = useState<boolean>(false);
 
  return (
    <>
      <div className="w-screen h-screen bg-purple-500 overflow-auto">
        {!isLoading ? (
      <div className="flex flex-col md:flex-row justify-between">
          <div className="bg-[#edecff] p-4 m-4 h-[50%] rounded-lg">
            <div className="flex items-center gap-4 mt-2 justify-center">
              <img
                className="w-16 h-16"
                src={`https://mc-heads.net/avatar/${playerInfo.uuid}`}
                alt=""
              />
              <h1 className="font-redhat font-bold text-2xl uppercase">
                {playerInfo.displayName}
              </h1>
            </div>
            <hr className="border-black border-[1.5px] w-[99%] mx-auto mt-2" />
            <div className="flex flex-col items-center space-y-4 justify-center h-[65%] my-6 pb-4">
              <p className="stats-item">Karma: <span>{playerInfo.karma}</span></p>
              <p className="stats-item">UUID: <span>{playerInfo.uuid}</span></p>
              <p className="stats-item">Najczęściej grany tryb: <span>{playerInfo.mostRecentGameType}</span></p>
              <p className="stats-item">Pierwsze logowanie: <span>{new Date(playerInfo.firstLogin).toLocaleTimeString()} {new Date(playerInfo.firstLogin).toLocaleDateString()}</span></p>
              <p className="stats-item">Ostatnie logowanie: <span>{new Date(playerInfo.lastLogin).toLocaleTimeString()} {new Date(playerInfo.lastLogin).toLocaleDateString()}</span></p>
            </div>
          </div>
          <div className="h-auto w-full p-4 md:p-0 md:w-[60%] mr-5 mt-4 space-y-6">
            <div className={`bg-[#4b4168] h-auto mb-4 rounded-lg ${bedwarsActive ? 'pt-4' : "py-4"}`}>
              <div className="flex justify-between items-center">
              <p className="font-poppins text-white font-bold px-4 text-3xl">Bedwars</p>
              <span onClick={() => setBedwarsActive(!bedwarsActive)} className={`arrow ${bedwarsActive ? '-rotate-90' : 'rotate-90'}`}>{'>'}</span> 
              </div>          
              <motion.div
              animate={bedwarsActive ? "open" : "closed"}
              variants={{
                open: { opacity: 1, x: 0 },
                closed: { opacity: 0 },
              }}
              className={`stats ${bedwarsActive ? "flex" : "hidden"}`}>
                <p className="stats-item">Zabójstwa: <span>{bedwarsStats.kills}</span></p>
                <p className="stats-item">Śmierci: <span>{bedwarsStats.deaths}</span></p>
                <p className="stats-item">Zdobyte materiały: <span>{bedwarsStats.collectedRes}</span></p>
                <p className="stats-item">Monety: <span>{bedwarsStats.coins}</span></p>
                <p className="stats-item">Doświadczenie: <span>{bedwarsStats.exp}</span></p>
                <p className="stats-item">Zagrane gry: <span>{bedwarsStats.games_played}</span></p>
                <p className="stats-item">Zniszczone łózka: <span>{bedwarsStats.brokenBeds}</span></p>
                <p className="stats-item">Stracone łózka: <span>{bedwarsStats.lostBeds}</span></p>
                <p className="stats-item">Wygrane: <span>{bedwarsStats.wins}</span></p>
                <p className="stats-item">Kupione itemy: <span>{bedwarsStats.purshasedItems}</span></p>
                <p className="stats-item">KD: <span>{bedwarsStats.kd.toFixed(2)}</span></p>
                <p className="stats-item">Finałowe zabójstwa: <span>{bedwarsStats.finalKills}</span></p>
                </motion.div>     
           </div>
            <div className={`bg-[#4b4168] h-auto mb-4 rounded-lg ${skywarsActive ? 'pt-4' : "py-4"}`}>
              <div className="flex justify-between items-center">
              <p className="font-poppins text-white font-bold px-4 text-3xl">Skywars</p>
              <span onClick={() => setSkywarsActive(!skywarsActive)} className={`arrow ${skywarsActive ? '-rotate-90' : 'rotate-90'}`}>{'>'}</span> 
              </div>          
              <motion.div
              animate={skywarsActive ? "open" : "closed"}
              variants={{
                open: { opacity: 1, x: 0 },
                closed: { opacity: 0 },
              }}
              className={`stats ${skywarsActive ? "flex" : "hidden"}`}>
                <p className="stats-item">Zabójstwa: <span>{skywarsStats.kills}</span></p>
                <p className="stats-item">Śmierci: <span>{skywarsStats.deaths}</span></p>
                <p className="stats-item">Zagrane gry: <span>{skywarsStats.games_played}</span></p>
                <p className="stats-item">Monety: <span>{skywarsStats.coins}</span></p>
                <p className="stats-item">Ostatni tryb: <span>{skywarsStats.lastMode}</span></p>
                <p className="stats-item">Wygrane: <span>{skywarsStats.wins}</span></p>
                <p className="stats-item">Przegrane: <span>{skywarsStats.losses}</span></p>
                <p className="stats-item">KD: <span>{(skywarsStats.kills / skywarsStats.deaths).toFixed(2)}</span></p>
                <p className="stats-item">Dusze: <span>{skywarsStats.souls}</span></p>
                </motion.div>     
           </div>
          </div>
        </div>
        ): (
          <Loading />
        )}
      </div>
    </>
  );
};
