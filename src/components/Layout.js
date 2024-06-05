import React from 'react';

const Layout = () => {
    return (
        <>
            <style>
                {`
                    html, body {
                        height: 100%;
                        margin: 0;
                        padding: 0;
                        overflow: hidden;  /* Prevent scrolling */
                    }
                    .layout-container {
                        height: 70vh;  /* Slightly less than full viewport height */
                        box-sizing: border-box;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                    }
                    .card-content {
                        flex-grow: 1;
                        overflow-y: auto;
                    }
                `}
            </style>
            <div className="layout-container mx-auto max-w-[1100px] relative overflow-hidden border-l-[15px] border-[#CD5151] border-r-[15px] border-[#CD5151] rounded-[30px] mt-[-70px]">
                <div className="absolute inset-0 z-[-1] flex">
                    <div className="w-1/3 flex bg-red overflow-hidden">
                        <div className="flex items-center ml-[-100px]">
                            <span className="fa-stack fa-2x text-[90px]">
               
                            </span>
                        </div>
                    </div>
                    <div className="flex-1 bg-[#CD5151]"></div>
                </div>
                <div className="mx-auto tracking-wide max-w-[900px] z-[2]">
                    <div className="flex flex-col md:flex-row py-2 md:py-3 h-full">
                        <div className="md:w-5/12 mb-1 md:mb-0 z-[3]">
                            <div className="min-h-[400px] bg-cover bg-center bg-no-repeat"
                                style={{ 
                                    backgroundImage: 'url(/images/profile/try3.png)', 
                                    backgroundSize: '98%', /* Adjust the size here */
                                    filter: 'drop-shadow(3px 3px #fff) drop-shadow(-3px -3px #CD5151)' }}
                                >
                            </div>
                        </div>
                        <div className="md:w-7/12 p-2 md:px-3 my-auto flex flex-col bg-[#CD5151]">
                            <div className="text-center mt-1 mb-3 text-white relative z-[6]">
                                <div className="text-uppercase mb-n1 font-serif font-black text-[90px] tracking-wider drop-shadow-lg">
                                <span className="bold" style={{ fontSize: '0.6em' }}>Kagu</span> <span style={{ fontSize: '0.4em' }}>&#10047;</span> <span style={{ fontSize: '0.6em' }}>白板</span>



                                </div>
                                <p className="text-uppercase font-mono italic text-[85%] tracking-wider">illustrator . writer . developer</p>
                            </div>
                            <div className="card-content p-2 text-justify bg-white text-[#071f23] rounded-[8px]">
                                <p><span className="text-uppercase italic text-[#CD5151] tracking-wider">Lorem ipsum dolor sit amet</span>, consectetur adipiscing elit. Duis sollicitudin elit sed tellus blandit viverra sed eget odio. Donec accumsan tempor lacus, et venenatis elit feugiat non. Duis porta eros et velit blandit dapibus. Curabitur ac finibus eros. Duis placerat velit vitae massa sodales, eget mattis nibh pellentesque.</p>
                                <p>Etiam ac pulvinar diam. Maecenas placerat sed dui at egestas. Quisque dictum, turpis a mollis laoreet, sapien lorem faucibus tortor, sagittis iaculis ex odio sit amet neque.</p>
                            </div>
                            <div className="flex mt-1 mx-n1">
                                <div className="p-1">
                                    <div className="min-h-[30px] rounded-[8px] bg-cover bg-center bg-no-repeat"
                                        style={{ backgroundImage: 'url()' }}>
                                    </div>
                                </div>
                            </div>
                        
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Layout;
