import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';

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


import Typist from 'react-typist';


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

const Chat = () => {
    const [message, setMessage] = useState("");
    const [displayedMessage, setDisplayedMessage] = useState("");
    const [messageIndex, setMessageIndex] = useState(-1);

    const messages = [
        "ddenis are multe mere si pere",
        "aana are multi cpu si gpu",
        "ccristi are multe hdd-uri si ssd-uri",
        "Aalex are multe ram-uri si placi video",
    ];

    useEffect(() => {
        setMessage(messages[messageIndex]);
    }, [messageIndex]);

    useEffect(() => {
        if (message !== "") {
            let i = 0;
            const timer = setInterval(() => {
                if (i < message.length) {
                    setDisplayedMessage((prev) => prev + message.charAt(i));
                    i++;
                } else {
                    clearInterval(timer);
                }
            }, 100); // Adjust typing speed as needed
    
            return () => clearInterval(timer); // Clean up on unmount
        }
    }, [message]);

    const submit = () => {
        setDisplayedMessage("");
        setMessageIndex((messageIndex + 1) % messages.length);
        if (messageIndex !== -1) {
            setMessage(messages[messageIndex]);
        }
    }
    
    return (
        <div className="h-screen overflow-hidden w-full rounded-md relative flex flex-col items-center justify-center antialiased" style={{background: 'linear-gradient(to right, #000000, #222222)'}}>
            <div className="max-w-5xl mx-auto p-4 flex flex-col justify-center items-center">
                <h1 className="mb-9 relative z-10 text-xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold" style={{lineHeight: '1.5'}}>Alfredo the friendly lion</h1>
                <video className="mb-4" autoPlay muted loop style={{width: '55%', height: '100%', transition: 'opacity 1s, width 1s'}}>
                    <source src={animals[7]} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div style={{width: '850px', height: '200px'}}>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                        <input className="mb-2 bg-gray-200 text-gray-600 font-sans font-bold py-2 px-4 rounded" style={{opacity: '0.7', width: '40%'}} placeholder="Think of a scenario"></input>
                        <input className="mb-2 bg-gray-200 text-gray-600 font-sans font-bold py-2 px-4 rounded" style={{opacity: '0.7', width: '40%'}} placeholder="Type your message"></input>
                        <button className="mb-2 bg-gray-200 text-gray-600 font-sans font-bold py-2 px-4 rounded" style={{opacity: '0.7'}} onClick={submit}>Submit</button>
                        <div style={{opacity: '0.6', width: '800px', height: '150px'}} className="bg-gray-200 p-4 rounded-md">
                            {displayedMessage ? (
                                <div className="text-xl bg-clip-text text-gray-600 font-sans font-bold text-center">
                                    Alfredo: {displayedMessage}
                                </div>
                            ) : (
                                <div className="text-xl text-gray-600 font-sans font-bold text-center">
                                    Alfredo's thoughts...
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chat;