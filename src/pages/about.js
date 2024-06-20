import React from 'react';
import Head from 'next/head';
import Experience from '@/components/Experience';
import Education from '@/components/Education';


const About = () => {
    return (
        <>
            <Head>
                <title>Kagu ✿ About Me</title>
                <meta name="description" content="any description" />
            </Head>

            <main className="flex items-center justify-center text-dark w-full min-h-screen" style={{ 
                backgroundColor: '#f4f5f6',
                backgroundImage: "url('/images/background/square.png')",
                backgroundRepeat: 'repeat',
                backgroundSize: '400px 400px'
            }}>
                <div className="container mx-auto p-3 my-5 max-w-screen-lg bg-gray-100 text-gray-800 rounded-xl shadow-md">
                    <div className="flex flex-wrap -mx-3">
                        <div className="lg:w-3/12 w-full lg:order-2 order-1 mb-3 px-3">
                            <div className="bg-white rounded-xl p-3">
                                <img
                                    src="/images/profile/baiban2.png"
                                    className="block p-2 mx-auto mb-3 rounded-full"
                                    style={{ maxHeight: '210px', maxWidth: '210px', background: '#d4e7ef' }}  
                                    alt="Avatar"
                                />
                                <div className="text-center mb-3">
                                    <h2 className="text-2xl mb-2 font-bold" style={{ color: '#d8b0a4' }}>TOOLS</h2>
                                </div>
                                <ul className="list-disc list-inside text-center text-gray-400" style={{ listStyleType: 'none' }}>
                                    <li><span style={{ marginRight: '0.5rem' }}>◇</span>Microsoft Office</li>
                                    <li><span style={{ marginRight: '0.5rem' }}>◇</span>Excel/Word/Powerpoint</li>
                                    <li><span style={{ marginRight: '0.5rem' }}>◇</span>Live2D Cubism</li>
                                    <li><span style={{ marginRight: '0.5rem' }}>◇</span>Unity 2D/3D</li>
                                    <li><span style={{ marginRight: '0.5rem' }}>◇</span>Godot4</li>
                                    <li><span style={{ marginRight: '0.5rem' }}>◇</span>Photoshop</li>
                                    <li><span style={{ marginRight: '0.5rem' }}>◇</span>Clip Studio Paint</li>
                                    <li><span style={{ marginRight: '0.5rem' }}>◇</span> Illustrator</li>
                                    <li><span style={{ marginRight: '0.5rem' }}>◇</span>Premiere</li>
                                    <li><span style={{ marginRight: '0.5rem' }}>◇</span>After Effects</li>
                                </ul>
                            </div>
                        </div>

                        <div className="lg:w-9/12 w-full lg:order-1 order-2 pr-3 mb-3 px-3">
                            <div className="mb-3">
                                <div className="rounded-xl p-3 text-white" style={{ backgroundColor: '#d7d7d7' }}> 
                                    <h1 className="text-4xl mb-0">
                                        <i className="fal fa-crown fa-fw"></i> A Little Introduction
                                    </h1>
                                </div>
                            </div>

                            <div className="flex flex-wrap -mx-3">
                                <div className="md:w-5/12 w-full mb-3 md:mb-0 px-3">
                                    <div className="bg-white rounded-xl h-full">
                                        <div
                                            className="h-full bg-cover bg-center"
                                            style={{ backgroundImage: 'url(/images/profile/baiban1.png)', minHeight: '400px' }}
                                        ></div>
                                    </div>
                                </div>

                                <div className="md:w-7/12 w-full px-3">
                                    <div className="bg-white rounded-xl p-3 h-full overflow-auto" style={{ maxHeight: '450px' }}>
                                        <h4 className="text-uppercase text-gray-800 opacity-70 text-2xl mb-2" style={{ color: '#dbb7ac' }}>
                                            <i className="fal fa-bookmark mr-1"></i>About
                                        </h4>
                                        <p className="mb-2">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet massa blandit, fermentum enim a, scelerisque velit. Integer interdum urna ac dui sollicitudin sollicitudin. In feugiat posuere nulla, eget lobortis ante. Aliquam magna libero, dictum sit amet scelerisque ac, scelerisque tincidunt magna. Nulla et consectetur diam. Aliquam ipsum mi, tristique sed vestibulum ac, aliquet eget magna. Mauris varius id magna vitae ullamcorper. In gravida libero consectetur, lobortis nisl sit amet, pellentesque ligula. Suspendisse tincidunt feugiat posuere.
                                        </p>
                                        <h4 className="text-uppercase text-gray-800 opacity-70 text-2xl mb-2" style={{ color: '#dbb7ac' }}>
                                            <i className="fal fa-bookmark mr-1"></i>Skills
                                        </h4>
                                        <ul className="list-disc list-inside space-y-2">
                                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                            <li>Suspendisse sit amet massa blandit, fermentum enim a, scelerisque velit.</li>
                                            <li>Integer interdum urna ac dui sollicitudin sollicitudin.</li>
                                            <li>Nulla et consectetur diam. Aliquam ipsum mi, tristique sed vestibulum ac, aliquet eget magna.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-xl p-3 text-white text-center mt-3" style={{ backgroundColor: '#d7d7d7' }}>  
                        <p className="tracking-wide">
                            <i className="fal fa-quote-left fa-fw mr-1"></i>
                            <i>"Fear is a reason to move forward."</i>
                            <i className="fal fa-quote-right fa-fw ml-1"></i>
                        </p>
                    </div>
                    <Experience />
                    <Education />
                </div>
            </main>

            

            
        </>
    );
}

export default About;
