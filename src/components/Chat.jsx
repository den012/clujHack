import React from 'react';

const Chat = () => {
    const submit = () => {
        console.log('submit');
    }
    return (
        <div className="h-screen w-full rounded-md relative flex flex-col items-center justify-center antialiased" style={{background: 'linear-gradient(to right, #000000, #222222)'}}>
            <div className="max-w-5xl mx-auto p-4 flex flex-row justify-center items-center">
                <h1 className="text-4xl text-red-400">TEST</h1>
                <input className="text-4xl"></input>
                <button className="text-4xl bg-red-400" onClick={submit}>Submit</button>

                <h1 className="text-4xl text-blue-400">Answer</h1>
            </div>
        </div>
    )
};

export default Chat;