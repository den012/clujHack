import React from 'react';
import { useState, useEffect } from 'react';


import speakPic from "../assets/bubble.png";
import girafeSpeak from "../assets/girafe.mp4";

const greetings = [
    "Hi !",
    "Hola !",
    "Bonjour !",
    "Hallo !",
    "Ciao !",
    "Olá !",
    "Привет !",
    "你好 !",
    "こんにちは !",
    "Merhaba !",
    "Hei !",
    "Hoi !",
    "Hej !",
    "Hei !",
    "Γεια σου !",
    "Ahoj !",
]

const Hero = () => {
    const [text, setText] = useState(greetings[Math.floor(Math.random() * greetings.length)]);

    useEffect(() => {
        const interval = setInterval(() => {
            setText(greetings[Math.floor(Math.random() * greetings.length)]);
        }, 3000); // Change text every 5 seconds
    
        return () => clearInterval(interval); // Clean up on component unmount
    }, []);

    return (
        <div className="h-screen w-full rounded-md relative flex flex-col items-center justify-center antialiased" style={{background: 'linear-gradient(to top, #222222, #000000)'}}>
            <div className="max-w-5xl mx-auto p-4 flex flex-row justify-center items-center">
                <div style={{marginRight: '2em'}}>
                    <h1 className="relative z-10 text-xl md:text-8xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold"  style={{lineHeight: '1.5'}}>
                        ZooLingo
                    </h1>
                    <p className="text-neutral-500 max-w-lg mx-auto my-2 text-2xl text-center relative z-10">
                        Step into ZooLingo, where the zoo animals become your language teachers! Learn new words and phrases with the help of friendly animals.
                    </p>
                </div>
                {/* <h1 style={{ fontSize: '10vw', marginLeft: '5vw' }}>🐶</h1> */}
                <div style={{flexGrow: 1, maxWidth: '50%'}}>
                    <video autoPlay muted loop style={{width: '100%', height: 'auto'}}>
                        <source src={girafeSpeak} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <h1 className="mt-4 flex items-center justify-center text-4xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold" style={{lineHeight: '1.5'}}>{text}</h1>
                </div>
            </div>
        </div>
    )
}

export default Hero;