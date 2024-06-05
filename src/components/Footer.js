import React from 'react';

const Footer = () => {
    return (
        <footer className="absolute bottom- left-0 w-full bg-blue-500 min-h-100px flex justify-center items-center">

            <style>{`
                /* Tailwind CSS classes for animations */
                @keyframes animateWave {
                    0% {
                        background-position-x: 1000px;
                    }
                    100% {
                        background-position-x: 0px;
                    }
                }

                @keyframes animateWave_02 {
                    0% {
                        background-position-x: 0px;
                    }
                    100% {
                        background-position-x: 1000px;
                    }
                }

                /* Custom styling for waves */
                .wave {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 100px;
                    background-image: url('/images/ocean/wave.png'); 
                    background-size: 1000px 100px;
                }

                .wave1 {
                    z-index: 1000;
                    opacity: 1;
                    animation: animateWave 4s linear infinite;
                }

                .wave2 {
                    z-index: 999;
                    opacity: 0.5;
                    animation: animateWave_02 4s linear infinite;
                }

                .wave3 {
                    z-index: 1000;
                    opacity: 0.2;
                    animation: animateWave 3s linear infinite;
                }

                .wave4 {
                    z-index: 999;
                    opacity: 0.7;
                    animation: animateWave_02 3s linear infinite;
                }
            `}</style>
            <div className="waves absolute top-0 left-0 w-full">
                <div className="wave wave1"></div>
                <div className="wave wave2"></div>
                <div className="wave wave3"></div>
                <div className="wave wave4"></div>
            </div>
            <p className="text-white text-center mt-5 mb-3 text-lg">Rights</p>
        </footer>
    );
}

export default Footer;
