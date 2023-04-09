import { getStats } from "../../getStats";

export const Player = () => {
  const { bedwarsStats, playerInfo } = getStats();

  return (
    <>
      <div className="w-screen h-screen bg-purple-500 overflow-auto">
      <div className="flex">
          <div className="bg-[#edecff] p-4 m-4 rounded-lg">
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
        </div>
      </div>
    </>
  );
};
