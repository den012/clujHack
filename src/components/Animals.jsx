import React from "react";
import {useState } from "react";
import { useEffect } from "react";

import BearSpeak from "../assets/bear.mp4";
import BoySpeak from "../assets/boy.mp4";
import CatSpeak from "../assets/cat.mp4";
import DinoSpeak from "../assets/dino.mp4";
import DogSpeak from "../assets/dog.mp4";
import DragonSpeak from "../assets/dragon.mp4";
import GirlSpeak from "../assets/girl.mp4";
import LionSpeak from "../assets/lion.mp4";
import PigSpeak from "../assets/pig.mp4";
import SharkSpeak from "../assets/shark.mp4";

const animals = [
    BearSpeak,
    BoySpeak,
    CatSpeak,
    DinoSpeak,
    DogSpeak,
    DragonSpeak,
    GirlSpeak,
    LionSpeak,
    PigSpeak,
    SharkSpeak,
];

const prompt = [
    "Hi, how are you?", // English
    "Hola, ¿cómo estás?", // Spanish
    "Bonjour, comment ça va?", // French
    "Hallo, wie geht's dir?", // German
    "Ciao, come stai?", // Italian
    "Olá, como vai você?", // Portuguese
    "Привет, как дела?", // Russian
    "你好，你好吗？", // Chinese
    "こんにちは、お元気ですか？", // Japanese Korean
    "Merhaba, nasılsın?", // Turkish
    "Hej, hur mår du?", // Swedish
    "Hei, kuinka voit?", // Finnish
    "Hoi, hoe gaat het met je?", // Dutch
    "Hej, hvordan har du det?", // Danish
    "Hei, hvordan går det?", // Norwegian
    "Γεια σου, πώς είσαι;", // Greek
    "Ahoj, jak se máš?", // Czech
    "Witaj, jak się masz?", // Polish
    "Salut, ce faci?", // Romanian
];

const Animals = () => {
    const [currentVideo, setCurrentVideo] = useState(0);
    const [prev, setPrev] = useState(animals[(currentVideo - 1 + animals.length) % animals.length]);
    const [current, setCurrent] = useState(animals[currentVideo]);
    const [next, setNext] = useState(animals[(currentVideo + 1) % animals.length]);

    useEffect(() => {
        setPrev(animals[(currentVideo - 1 + animals.length) % animals.length]);
        setCurrent(animals[currentVideo]);
        setNext(animals[(currentVideo + 1) % animals.length]);
    }, [currentVideo]);

    const nextVideo = () => {
        setCurrentVideo((currentVideo + 1) % animals.length);
    };

    const prevVideo = () => {
        setCurrentVideo((currentVideo - 1 + animals.length) % animals.length);
    };

    const [text, setText] = useState(prompt[Math.floor(Math.random() * prompt.length)]);

    useEffect(() => {
        const interval = setInterval(() => {
            setText(prompt[Math.floor(Math.random() * prompt.length)]);
        }, 3000); // Change text every 5 seconds
    
        return () => clearInterval(interval); // Clean up on component unmount
    }, []);

    return (
        <div className="h-screen w-full rounded-md relative flex flex-col items-center justify-center antialiased" style={{background: 'linear-gradient(to right, #000000, #222222)'}}>
            <div className="max-w-5xl mx-auto p-4 flex flex-row justify-center items-center">
                <div>
                    <h1 className="mb-9 relative z-10 text-xl md:text-4xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold" style={{lineHeight: '1.5'}}>
                        Choose your favourite talking peer
                    </h1>
                    <h1 className="relative z-10 text-xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold" style={{lineHeight: '1.5'}}>
                        {text}
                    </h1>
                    <div className="flex overflow-x-hidden mt-4">
                        <video className="mr-5" key={prev} autoPlay muted loop style={{opacity: '30%', width: '30%', height: '100%', transition: 'opacity 1s, width 1s'}}>
                            <source src={prev} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <video key={current} autoPlay muted loop style={{width: '40%', height: '100%', transition: 'opacity 1s, width 1s'}}>
                            <source src={current} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <video classNam="ml-5" key={next} preload = "auto" autoPlay muted loop style={{opacity: '30%', width: '30%', height: '100%', transition: 'opacity 1s, width 1s'}}>
                            <source src={next} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        
                    </div>
                    <div className="flex flex-col items-center mt-4">
                        <div className="flex flex-row justify-center items-center mt-4">
                            <button onClick={prevVideo} className="text-2xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-bold py-2 px-4 rounded-l-md mr-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 shadow-lg scale-100">Prev</button>
                            <button className="text-2xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-bold py-2 px-4 rounded-l-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 shadow-lg scale-100">Pick me!</button>
                            <button onClick={nextVideo} className="text-2xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-bold py-2 px-4 rounded-r-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 shadow-lg scale-100">Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Animals;