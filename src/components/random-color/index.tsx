import { useEffect, useState } from "react";

const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

export default function RandomColor() {

    const [colorType, setColorType] = useState('hex');
    const [color, setColor] = useState('#000000');

    function getRandomNumber(maxNumber: number) { return Math.floor(Math.random() * maxNumber); }

    function generateColor() {

        if (colorType == 'hex') {

            let hex = '#';
            for (let i = 0; i < 6; i++) {
                hex += digits[getRandomNumber(digits.length)];
            }

            setColor(hex);
        }
        else {
            const r = getRandomNumber(256);
            const g = getRandomNumber(256);
            const b = getRandomNumber(256);
            setColor(`rgb(${r}, ${g}, ${b})`);
        }
    }

    useEffect(() => {
        generateColor();
    }, [colorType]);

    return (
        <>
            <div style={{
                position: 'absolute',
                top: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                columnGap: '4px'
            }}>
                <button onClick={() => setColorType('hex')}>To HEX color</button>
                <button onClick={() => setColorType('rgb')}>To RGB color</button>
                <button onClick={generateColor}>Generate new color</button>
            </div>
            <div style={{
                width: '100vw',
                height: '100vh',
                background: color
            }}>
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    fontSize: '50px',
                    color: 'white',
                    backgroundColor: 'gray',
                    padding: '10px 20px',
                    borderRadius: 10
                }}>{color}</div>
            </div>
        </>
    )
}