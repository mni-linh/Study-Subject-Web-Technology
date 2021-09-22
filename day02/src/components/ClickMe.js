import React, {useState} from 'react';

export const ClickMe = () => {
    const [times, setTimes] = useState(1);
    const handleClickMe = () => {
        setTimes(times + 1);
    };
    return (
        <>
            <h2> CLICK ME DEMO </h2>
            <h3> Đã click {times} lần </h3>
            <button onClick={handleClickMe}> Click Me (cách 1)</button>
            <button onClick={() => {
                console.log('Vừa click cách 2')
                handleClickMe();
                
            }}> 
                Click Me (cách 2)</button>
        </>
    )
}