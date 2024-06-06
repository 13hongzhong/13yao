import React from 'react';
import Link from 'next/link';
import { LinkArrow } from '@/components/Icons';

const Layout = () => {
    return (
        <>
            <style>
                {`
                    html, body {
                        height: 100%;
                        margin: 0;
                        padding: 0;
                         
                    }
                    .layout-container {
                        height: 70vh;  /* Slightly less than full viewport height */
                        box-sizing: border-box;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        background-color: #FFFFFF;
                        box-shadow: 10px 10px 0px rgba(0, 0, 0, 0.2);
                    }
                    .card-content {
                        flex-grow: 1;
                        overflow-y: auto;
                    }
                    .buttons {
                        display: flex;
                        flex-wrap: wrap;
                        gap: 10px;
                        margin-top: -8px;
                        margin-right: 13px;
                        justify-content: center;
                    }
                    .button {
                        display: flex;
                        align-items: center;
                        background-color: #f7c3b3;
                        color: #fff;
                        padding: 10px 20px;
                        border-radius: 5px;
                        text-decoration: none;
                        font-size: 16px;
                        font-weight: 600;
                        border: 2px solid transparent;
                        transition: background-color 0.3s, border-color 0.3s, color 0.3s;
                    }
                    .button:hover {
                        background-color: #fff;
                        color: #ffcbcb;
                        border-color: #eeafaf;
                    }
                    @media (max-width: 768px) {
                        .layout-container {
                            height: auto; 
                            margin-top: 0; 
                            border-width: 10px;
                        }
                        .layout-container::before {
                            display: none; 
                        }
                        .md\\:w-5\\/12, .md\\:w-7\\/12 {
                            width: 100%; 
                        }
                        .min-h\\-[400px] {
                            min-height: 250px; 
                        }
                        .flex-col {
                            flex-direction: column; 
                        }
                        .mx-auto {
                            margin: 0 auto; 
                            padding: 0 10px; 
                        }
                        .mt-[-70px] {
                            margin-top: 20px; 
                        }
                        .min-h\\-[30px] {
                            min-height: 50px; 
                        }
                        .text-[90px] {
                            font-size: 30px; 
                        }
                        .bg-cover {
                            background-size: cover; 
                        }
                        .buttons {
                            gap: 5px; 
                            flex-wrap: nowrap; 
                            justify-content: center; 
                        }
                        .button {
                            font-size: 14px;
                            padding: 8px 16px;
                        }
                    }
                `}
            </style>
            <div className="layout-container mx-auto max-w-[1100px] relative overflow-hidden border-l-[15px] border-[#D7D7D7] border-r-[15px] border-[#D7D7D7] rounded-[30px] mt-[-70px]">
                <div className="absolute inset-0 z-[-1] flex">
                    <div className="w-1/3 flex bg-red overflow-hidden">
                        <div className="flex items-center ml-[-100px]">
                            <span className="fa-stack fa-2x text-[90px]">
                            </span>
                        </div>
                    </div>
                    <div className="flex-1 bg-[#D7D7D7]"></div>
                </div>
                <div className="mx-auto tracking-wide max-w-[900px] z-[2]">
                    <div className="flex flex-col md:flex-row py-2 md:py-3 h-full">
                        <div className="md:w-5/12 mb-1 md:mb-0 z-[3]">
                            <div className="min-h-[400px] bg-cover bg-center bg-no-repeat"
                                style={{ 
                                    backgroundImage: 'url(/images/profile/photo1.png)', 
                                    backgroundSize: '98%', /* Adjust the size here */
                                    filter: '' }}
                                >
                            </div>
                            <div className='buttons'> {/* Container for buttons */}
                                <Link href="/dummy.pdf" target={"_blank"}
                                    className="button"
                                    download={true}
                                >
                                    Resume <LinkArrow className={"w-6 ml-1"} />
                                </Link>
                                <Link href="mailto:cuit980@gmail.com" target={"_blank"}
                                    className="button"
                                >Contact</Link>
                            </div>
                        </div>
                        <div className="md:w-7/12 p-2 md:px-3 my-auto flex flex-col bg-[#D7D7D7]">
                            <div className="text-center mt-1 mb-3 text-white relative z-[6]">
                                <div className="text-uppercase mb-n1 font-serif font-black text-[90px] tracking-wider drop-shadow-lg">
                                    <span className="bold" style={{ fontSize: '0.6em' }}>Kagu</span> <span style={{ fontSize: '0.4em' }}>&#10047;</span> <span style={{ fontSize: '0.6em' }}>白板</span>
                                </div>
                                <p className="text-uppercase font-mono italic text-[85%] tracking-wider">illustrator . writer . developer</p>
                            </div>
                            <div className="card-content p-2 text-justify bg-white text-[#8a8787] rounded-[8px]">
                            <p><span className="text-uppercase italic text-[#d8b0a4] tracking-wider">Lorem ipsum dolor sit amet</span>, consectetur adipiscing elit. Duis sollicitudin elit sed tellus blandit viverra sed eget odio. Donec accumsan tempor lacus, et venenatis elit feugiat non. Duis porta eros et velit blandit dapibus. Curabitur ac finibus eros. Duis placerat velit vitae massa sodales, eget mattis nibh pellentesque.</p>
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
