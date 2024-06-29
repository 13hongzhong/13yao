import React, { useState } from 'react';
import Image from 'next/image';

const Pagedoll = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    const handleClick = () => {
        const audioElement = document.getElementById('pagedoll-audio');
        if (isPlaying) {
            audioElement.pause();
        } else {
            audioElement.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div>
            <a target="_blank" rel="noopener noreferrer">
                <i className="fa-solid fa-code fixed bottom-4 right-4 z-[10]"></i>
            </a>
            <div className="hidden md:block fixed bottom-5 right-4 z-[50] max-w-[15%] cursor-pointer" onClick={handleClick}>
                <div className="relative">
                    <i className="fas fa-comment fa-flip-horizontal fa-fade fa-5x animate-pulse text-gray-500"></i>
                    <div className="absolute top-0 left-0 w-full h-full z-[10]"></div>
                </div>
                <Image 
                    src="images/profile/doll.gif" 
                    alt="Pagedoll Character" 
                    width={150} 
                    height={150} 
                />
                <audio id="pagedoll-audio" loop>
                    <source src="images/profile/music.mp3" type="audio/mpeg" />
                </audio>
            </div>
        </div>
    );
};

export default Pagedoll;
