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

    return (
        <div className="h-screen w-full rounded-md relative flex flex-col items-center justify-center antialiased" style={{background: 'linear-gradient(to right, #000000, #222222)'}}>
            <div className="max-w-5xl mx-auto p-4 flex flex-row justify-center items-center">
                <div>
                    <h1 className="relative z-10 text-xl md:text-4xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
                        Choose your favourite talking peer
                    </h1>
                    <div className="flex overflow-x-hidden">
                        <video key={prev} autoPlay muted loop style={{opacity: '30%', width: '33.33%', height: '100%'}}>
                            <source src={prev} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <video key={current} autoPlay muted loop style={{width: '40%', height: '100%'}}>
                            <source src={current} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <video key={next} preload = "auto" autoPlay muted loop style={{opacity: '30%', width: '33.33%', height: '100%'}}>
                            <source src={next} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        
                    </div>
                    <div className="flex flex-row justify-center items-center">
                        <button onClick={prevVideo} className="bg-neutral-300 text-neutral-900 font-bold py-2 px-4 rounded-l-md">Previous</button>
                        <button onClick={nextVideo} className="bg-neutral-300 text-neutral-900 font-bold py-2 px-4 rounded-r-md">Next</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Animals;