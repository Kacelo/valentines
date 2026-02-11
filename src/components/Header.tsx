import React from 'react';

interface HeaderProps {
    imageUrl: string;
}

const Header: React.FC<HeaderProps> = ({ imageUrl }) => {
    return (
        <div>
            <img src={imageUrl} alt="Heart Header" className=""/>
        </div>
    );
};

export default Header;