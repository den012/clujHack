import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import {ClipLoader} from 'react-spinners';

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

const names = [
    "Hi there! I am a bear.",
    "Hi there! I am a boy.",
    "Hi there! I am a cat.",
    "Hi there! I am a dinosaur.",
    "Hi there! I am a dog.",
    "Hi there! I am a dragon.",
    "Hi there! I am a girl.",
    "Hi there! I am a lion.",
    "Hi there! I am a pig.",
    "Hi there! I am a shark.",
]

const Chat = () => {
    const [displayedMessage, setDisplayedMessage] = useState("");

    const submit = () => {
        setDisplayedMessage("Hello, I am Alfredo the friendly lion!");
    }

    const [videoIndex, setVideoIndex] = useState(0);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchVideoIndex = async () => {
        try {
          const response = await fetch('http://localhost:3000/getVideo');
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
  
          const data = await response.json();
          setVideoIndex(data.video);
  
          // Add a delay before rendering the video
          setTimeout(() => {
            setLoading(false);
          }, 2000);  // 2000 milliseconds = 2 seconds
        } catch (error) {
          console.error('Error:', error);
        }
      };
  
      fetchVideoIndex();
    }, []);
    
    return (
        <div className="h-screen overflow-hidden w-full rounded-md relative flex flex-col items-center justify-center antialiased" style={{background: 'linear-gradient(to right, #000000, #222222)'}}>
            <div className="max-w-5xl mx-auto p-4 flex flex-col justify-center items-center">
                <h1 className="mb-9 relative z-10 text-xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold" style={{lineHeight: '1.5'}}>{names[videoIndex]}</h1>
                {loading ? (
                    <div>
                        <ClipLoader color="#e1ecea" />
                    </div>
                ) : (
                    <div className="max-w-5xl mx-auto p-4 flex flex-col justify-center items-center">
                        <video className="mb-1" autoPlay muted loop style={{width: '50%', height: '100%', transition: 'opacity 1s, width 1s'}}>
                        <source src={animals[videoIndex]} type="video/mp4" />
                        Your browser does not support the video tag.
                        </video>
                        <input className="bg-red-100" placeholder="enter your prompt"></input>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Chat;