import React, { useState } from 'react';
import './EightBall.css';
import BallInfo from './BallInfo';

function EightBall() {
    
    const [msg, setMessage] = useState("Think of a Question")
    const [color, setColor] = useState("black")

    const [countGreen, setCountGreen] = useState(0);
    const [countGoldenrod, setCountGoldenrod] = useState(0);
    const [countRed, setCountRed] = useState(0);

    const handleClick = () => {
        const randIdx = Math.floor(Math.random() * BallInfo.length);
        const randAnswer = BallInfo[randIdx];
        setColor(randAnswer.color);
        setMessage(randAnswer.msg);

        if (randAnswer.color === 'green') {
            setCountGreen(countGreen + 1);
        } else if (randAnswer.color === 'goldenrod') {
            setCountGoldenrod(countGoldenrod + 1);
        } else if (randAnswer.color === 'red') {
            setCountRed(countRed + 1);
        }
    }

    const handleReset = () => {
        setColor("black");
        setMessage("Think of a Question");
    };

    return (
        <div className="EightBall-container">
            <div className="EightBall" style={{ backgroundColor: color }} onClick={handleClick}>
                <p>{msg}</p>
            </div>
            <button onClick={handleReset}>Reset</button>
            <div className="EightBall-record">
                <p>Green: {countGreen}</p>
                <p>Goldenrod: {countGoldenrod}</p>
                <p>Red: {countRed}</p>
            </div>
        </div>
    )
}

export default EightBall;