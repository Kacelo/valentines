import React, { use, useEffect, useState } from 'react';
import Header from './components/Header';
import Confetti from './components/Confetti';
import './styles/global.css';
import { DecisionButtons } from './components/DecisionButtons';
import Love from './assets/Love.png';
import { Message } from './components/Message';
import Yay from './assets/yay.mp3';

const App = () => {
    const [showConfetti, setShowConfetti] = useState(false);
    const audioRef = React.useRef<HTMLAudioElement>(null);

    useEffect(() => {   
        audioRef.current = new Audio(Yay);
        audioRef.current.volume = 0.9;
        audioRef.current.preload = 'auto';
        
        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current = null;
            }
        };
    }, []);

    useEffect(() => {
        if (showConfetti && audioRef.current) {
            audioRef.current.play().catch((error) => {
                console.error("Error playing audio:", error);
            });
        }
    }, [showConfetti])

    const handleYesClick = () => {
        setShowConfetti(true);
        
        // Wait a second for her to see the confetti, then redirect
        setTimeout(() => {
            setShowConfetti(false); // Stop confetti after redirecting
            const phoneNumber = "+264814380939"; // Your number with country code
            const message = encodeURIComponent("Yes! I'll be your Valentine! ❤️");
            window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
        }, 7000);
    };

    

    return (
        <div className="flex flex-col items-center justify-center bg-pink-300 w-full h-screen md:h-full">
            <Header imageUrl={Love} />
            {showConfetti && <Confetti isVisible={showConfetti} />}
            <Message />
            <DecisionButtons onYesClick={handleYesClick} />
        </div>
    );
};

export default App;