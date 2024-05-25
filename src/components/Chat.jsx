import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import {ClipLoader} from 'react-spinners';

import Typewriter from 'typewriter-effect';

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

    const [inputValue, setInputValue] = useState("");
    const [apiResponse, setApiResponse] = useState("");
    const [showTypewriter, setShowTypewriter] = useState(false);
    const [submissionCount, setSubmissionCount] = useState(0);

    const submitPrompt = async () => {
      try {
        const response = await fetch('http://localhost:8080/ai/message', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(inputValue)
        });
        console.log(inputValue);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.text();
        setApiResponse(data);
        setShowTypewriter(true);
        setSubmissionCount(count => count + 1);
        console.log('Response:', data);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    
    return (
        <div className="h-screen overflow-hidden w-full rounded-md relative flex flex-col items-center justify-center antialiased" style={{background: 'linear-gradient(to top, #222222, #000000)'}}>
            <div className="max-w-5xl mx-auto p-4 flex flex-col justify-center items-center">
                <h1 className="mt-4 relative z-10 text-xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold" style={{lineHeight: '1.5'}}>{names[videoIndex]}</h1>
                {loading ? (
                    <div>
                        <ClipLoader color="#e1ecea" />
                    </div>
                ) : (
                    <div className="max-w-5xl mx-auto p-4 flex flex-col justify-center items-center">
                        <video className="" autoPlay muted loop style={{width: '45%', height: '70%', transition: 'opacity 1s, width 1s'}}>
                        <source src={animals[videoIndex]} type="video/mp4" />
                        Your browser does not support the video tag.
                        </video>
                        <form className="mb-8" onSubmit={e => { e.preventDefault(); submitPrompt(); }}>
                          <input className="w-full px-3 py-2  placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 bg-white-200 font-sans" style={{width: '450px', height: '40px'}}
                          placeholder="enter your prompt" value={inputValue} onChange={e => setInputValue(e.target.value)} />
                          {/* <button className="bg-red-100" type="submit">Submit</button> */}
                        </form>
                        <div className="flex justify-center items-center text-3xl font-sans font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 " style={{width: '900px', height: '150px'}}>
                          {showTypewriter && (
                          <Typewriter
                            key={submissionCount}
                            onInit={(typewriter) => {
                              typewriter.typeString(apiResponse)
                                .callFunction(() => {
                                  console.log('String typed out!');
                                })
                                .pauseFor(2500)
                                .start();
                            }}
                          />
                        )}
                      {/* <h1 className="text-4xl text-red-600">{apiResonse}</h1> */}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Chat;