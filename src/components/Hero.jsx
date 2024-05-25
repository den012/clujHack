import React from 'react';

import speakPic from "../assets/bubble.png";
import girafeSpeak from "../assets/girafe.mp4";

const Hero = () => {
    return (
        <div className="h-screen w-full rounded-md relative flex flex-col items-center justify-center antialiased" style={{background: 'linear-gradient(to right, #000000, #222222)'}}>
            <div className="max-w-5xl mx-auto p-4 flex flex-row justify-center items-center">
                <div>
                <h1 className="relative z-10 text-xl md:text-8xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
                    Denis Denis
                </h1>
                <p className="text-neutral-500 max-w-lg mx-auto my-2 text-xl text-center relative z-10">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto aut suscipit nesciunt, voluptas obcaecati, quo provident officia ut quam id laboriosam deserunt fugit facilis consectetur libero consequatur aliquam ducimus iste.
                </p>
                </div>
                {/* <h1 style={{ fontSize: '10vw', marginLeft: '5vw' }}>🐶</h1> */}
                <div style={{flexGrow: 1, maxWidth: '50%'}}>
                <video autoPlay muted loop style={{width: '100%', height: 'auto'}}>
                    <source src={girafeSpeak} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                </div>
            </div>
        </div>
    )
}

export default Hero;