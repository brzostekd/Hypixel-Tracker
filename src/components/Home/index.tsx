import { useState } from 'react'
import logo from '../../assets/hypixel.png'

export const Home = () => {
    const [username, setUsername] = useState<string | null>()
    
    return (
        <div className="h-screen w-screen bg-purple-500 flex justify-center items-center">
            <div className="w-[500px] h-[500px] bg-purple-700 flex justify-center items-center backdrop-blur-xl">
            <div className='flex flex-col justify-center items-center'>
                <img className='w-80' src={logo} alt="hypixel logo" />
                <form className='flex flex-col gap-3' action="">
                    <input onChange={(e) => {
                        setUsername(e.target.value)
                    }} className='py-3 px-8 text-center rounded-lg bg-purple-400 text-black placeholder:text-black' placeholder='Podaj swój nickname' type="text" />
                    <button className='py-2 w-32 mx-auto bg-purple-500 rounded-xl text-xl '>Szukaj</button>
                </form>
            </div>
            </div>
        </div>
    )
}