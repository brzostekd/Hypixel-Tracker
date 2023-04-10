import { useState } from 'react'
import logo from '../../assets/hypixel.png'
import { useNavigate } from 'react-router-dom';

export const Home = () => {
    const [username, setUsername] = useState<string | null>(null);
    const navigator = useNavigate()

    const routeToStats = () => {
        if(username !== null) {
            navigator(`/player/${username}`)
        }
    }
    
    return (
        <div className="h-screen w-screen bg-purple-500 flex justify-center items-center font-bold font-poppins text-white">
            <div className="w-[500px] h-[500px] bg-purple-700 flex justify-center items-center backdrop-blur-xl rounded-xl">
            <div className='flex flex-col justify-center items-center'>
                <img className='w-80' src={logo} alt="hypixel logo" />
                <form className='flex flex-col gap-3 font-normal' action="">
                    <input onChange={(e) => {
                        setUsername(e.target.value)
                    }} className='py-3 px-8 text-center rounded-lg bg-purple-400 text-white placeholder:text-white md:outline-none' placeholder='Podaj swój nickname' type="text" />
                    <button onClick={routeToStats} className='py-2 w-32 mx-auto bg-purple-500 rounded-xl text-xl'>Szukaj</button>
                </form>
            </div>
            </div>
        </div>
    )
}