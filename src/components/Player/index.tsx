import axios from "axios";
import { useState } from "react";

export const Player = () => {
  const [bedwarsStats, setBedwarsStats] = useState();
  const [skywarsStats, setSkywarsStats] = useState();
  const [duelsStats, setDuelsStats] = useState();

  const fetchStats = () => {
    axios
      .get(
        "https://api.hypixel.net/player?uuid=8ed449dc-584b-46f2-b271-5fb518e8dc7b&key=8cce7666-5359-431a-999e-a9394bc11168"
      )
      .then((response) => {
        console.log(response.data.player);
      });
  };
  return (
    <>
      <div className="w-screen h-screen bg-purple-500">
        <div className="flex">
          <div className="bg-[#edecff] w-96 h-96 m-4">
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
            <hr className="border-black border-[1.5px] w-[95%] mx-auto mt-2" />
          </div>
        </div>
      </div>
    </>
  );
};
