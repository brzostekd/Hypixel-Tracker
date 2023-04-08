import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { bedwarsStats, playerInfo } from "../../types/types";
import { useNavigate } from "react-router-dom";

export const Player = () => {
  const [bedwarsStats, setBedwarsStats] = useState<bedwarsStats>();
  const [skywarsStats, setSkywarsStats] = useState();
  const [duelsStats, setDuelsStats] = useState();
  const [playerInfo, setPlayerInfo] = useState<playerInfo>();

  const [UUID, setUUID] = useState(null);

  const locationDOM = useLocation();
  const nickname = locationDOM.pathname.replace("/player/", "");

  const navigator = useNavigate();
  useEffect(() => {
    const fetchUUID = async() => {
      const response = await axios.get(`https://api.minetools.eu/uuid/${nickname}`);
      setUUID(response.data.id)
      console.log(UUID)
    }

    const fetchData = async() => {
      const reponse = await axios.get('')
    }

    return () => {
      fetchUUID()
    }
  }, [])

  
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
              <h2>{UUID}</h2>
            </div>
            <hr className="border-black border-[1.5px] w-[95%] mx-auto mt-2" />
          </div>
        </div>
      </div>
    </>
  );
};
