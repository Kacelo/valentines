import React, { FC } from 'react';
import Confetti from 'react-confetti';

const ConfettiComponent: FC<{ isVisible: boolean }> = ({ isVisible }) => {
    console.log("Confetti visibility:", isVisible);
    return (
        <>
            {isVisible && <Confetti />}
        </>
    );
};

export default ConfettiComponent;