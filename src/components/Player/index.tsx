import { useState } from "react";
import { getStats } from "../../getStats";
import { motion } from "framer-motion";

export const Player = () => {
  const { bedwarsStats, playerInfo, skywarsStats } = getStats();
  const [ bedwarsActive, setBedwarsActive ] = useState<boolean>(false);
  const [ skywarsActive, setSkywarsActive ] = useState<boolean>(false);
 
  return (
    <>
      <div className="w-screen h-screen bg-purple-500 overflow-auto">
      <div className="flex justify-between">
          <div className="bg-[#edecff] p-4 m-4 h-[50%] rounded-lg">
            <div className="flex items-center gap-4 mt-2 justify-center">
              <img
                className="w-16"
                src="https://mc-heads.net/avatar/8ed449dc584b46f2b2715fb518e8dc7b"
                alt=""
              />
              <h1 className="font-redhat font-bold text-2xl uppercase">
                _Hixo
              </h1>
            </div>
            <hr className="border-black border-[1.5px] w-[99%] mx-auto mt-2" />
            <div className="flex flex-col items-center space-y-4 justify-center h-[65%] my-6 pb-4">
              <p className="item">Karma: {playerInfo.karma}</p>
              <p className="item">UUID: {playerInfo.uuid}</p>
              <p className="item">Najczęściej grany tryb: {playerInfo.mostRecentGameType}</p>
              <p className="item">Pierwsze logowanie: {new Date(playerInfo.firstLogin).toLocaleTimeString()} {new Date(playerInfo.firstLogin).toLocaleDateString()}</p>
              <p className="item">Ostatnie logowanie: {new Date(playerInfo.lastLogin).toLocaleTimeString()} {new Date(playerInfo.lastLogin).toLocaleDateString()}</p>
            </div>
          </div>
          <div className="h-auto w-[60%] mr-5 mt-4 space-y-6">
            <div className={`bg-[#4b4168] h-auto mb-4 rounded-lg ${bedwarsActive ? 'pt-4' : "py-4"}`}>
              <div className="flex justify-between items-center">
              <p className="font-poppins text-white font-bold px-4 text-3xl">Bedwars</p>
              <span onClick={() => setBedwarsActive(!bedwarsActive)} className="font-bold text-4xl font-poppins text-white rotate-90 mr-6 cursor-pointer select-none">{'>'}</span> 
              </div>          
              <motion.div
              animate={bedwarsActive ? "open" : "closed"}
              variants={{
                open: { opacity: 1, x: 0 },
                closed: { opacity: 0 },
              }}
              className={`w-full h-full bg-[#edecff] mt-4 flex-col font-poppins text-[#4b4168] my-2 p-4 rounded-b-lg ${bedwarsActive ? "flex" : "hidden"}`}>
                <p className="px-6 my-1 font-bold">Zabójstwa: <span className="font-normal">{bedwarsStats.kills}</span></p>
                <p className="px-6 my-1 font-bold">Śmierci: <span className="font-normal">{bedwarsStats.deaths}</span></p>
                <p className="px-6 my-1 font-bold">Zdobyte materiały: <span className="font-normal">{bedwarsStats.collectedRes}</span></p>
                <p className="px-6 my-1 font-bold">Monety: <span className="font-normal">{bedwarsStats.coins}</span></p>
                <p className="px-6 my-1 font-bold">Doświadczenie: <span className="font-normal">{bedwarsStats.exp}</span></p>
                <p className="px-6 my-1 font-bold">Zagrane gry: <span className="font-normal">{bedwarsStats.games_played}</span></p>
                <p className="px-6 my-1 font-bold">Zniszczone łózka: <span className="font-normal">{bedwarsStats.brokenBeds}</span></p>
                <p className="px-6 my-1 font-bold">Stracone łózka: <span className="font-normal">{bedwarsStats.lostBeds}</span></p>
                <p className="px-6 my-1 font-bold">Wygrane: <span className="font-normal">{bedwarsStats.wins}</span></p>
                <p className="px-6 my-1 font-bold">Kupione itemy: <span className="font-normal">{bedwarsStats.purshasedItems}</span></p>
                <p className="px-6 my-1 font-bold">KD: <span className="font-normal">{bedwarsStats.kd.toFixed(2)}</span></p>
                <p className="px-6 my-1 font-bold">Finałowe zabójstwa: <span className="font-normal">{bedwarsStats.finalKills}</span></p>
                </motion.div>     
           </div>
            <div className={`bg-[#4b4168] h-auto mb-4 rounded-lg ${skywarsActive ? 'pt-4' : "py-4"}`}>
              <div className="flex justify-between items-center">
              <p className="font-poppins text-white font-bold px-4 text-3xl">Skywars</p>
              <span onClick={() => setSkywarsActive(!skywarsActive)} className="font-bold text-4xl font-poppins text-white rotate-90 mr-6 cursor-pointer select-none">{'>'}</span> 
              </div>          
              <motion.div
              animate={skywarsActive ? "open" : "closed"}
              variants={{
                open: { opacity: 1, x: 0 },
                closed: { opacity: 0 },
              }}
              className={`w-full h-full bg-[#edecff] mt-4 flex-col font-poppins text-[#4b4168] my-2 p-4 rounded-b-lg ${skywarsActive ? "flex" : "hidden"}`}>
                <p className="px-6 my-1 font-bold">Zabójstwa: <span className="font-normal">{skywarsStats.kills}</span></p>
                <p className="px-6 my-1 font-bold">Śmierci: <span className="font-normal">{skywarsStats.deaths}</span></p>
                <p className="px-6 my-1 font-bold">Zagrane gry: <span className="font-normal">{skywarsStats.games_played}</span></p>
                <p className="px-6 my-1 font-bold">Monety: <span className="font-normal">{skywarsStats.coins}</span></p>
                <p className="px-6 my-1 font-bold">Ostatni tryb: <span className="font-normal">{skywarsStats.lastMode}</span></p>
                <p className="px-6 my-1 font-bold">Wygrane: <span className="font-normal">{skywarsStats.wins}</span></p>
                <p className="px-6 my-1 font-bold">Przegrane: <span className="font-normal">{skywarsStats.losses}</span></p>
                <p className="px-6 my-1 font-bold">KD: <span className="font-normal">{(skywarsStats.kills / skywarsStats.deaths).toFixed(2)}</span></p>
                <p className="px-6 my-1 font-bold">Dusze: <span className="font-normal">{skywarsStats.souls}</span></p>
                </motion.div>     
           </div>
          </div>
        </div>
      </div>
    </>
  );
};
