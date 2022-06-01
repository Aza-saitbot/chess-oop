import React, {FC, useEffect, useRef, useState} from 'react';
import {Player} from "../models/Player";
import {Colors} from "../models/Corors";

interface TimerProps {
    currentPlayer: Player | null
    restart: () => void
}

const Timer: FC<TimerProps> = ({restart, currentPlayer}) => {
    const [blackTimer, setBlackTimer] = useState(300)
    const [whiteTimer, setWhiteTimer] = useState(300)
    const timer = useRef<null | ReturnType<typeof setInterval>>(null)

    useEffect(() => {
        startTimer()
    }, [currentPlayer])

    function startTimer() {
        if (timer.current) {
            clearInterval(timer.current)
        }
        const callback = currentPlayer?.color === Colors.WHITE
            ? decrementWhiteTimer : decrementBlackTimer
        timer.current = setInterval(callback, 1000)
    }

    function decrementBlackTimer() {
        setBlackTimer(prevState => prevState - 1)
    }

    function decrementWhiteTimer() {
        setWhiteTimer(prevState => prevState - 1)
    }

    const handlerRestart = () => {
      setBlackTimer(300)
        setWhiteTimer(300)
        restart()
    }

    return (
        <div>
            <div>
                <button onClick={handlerRestart}>Restart game</button>
            </div>
            <h2>Черные - {blackTimer}</h2><h2>Белые-{whiteTimer}</h2>
        </div>
    );
};

export default Timer;