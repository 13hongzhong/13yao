import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import TransitionEffect from '@/components/TransitionEffect';


const Skills = () => {
    return (
        <>
            <Head>
                <title>Kagu • Skills</title>
                <meta name="description" content="any description" />
            </Head>

            <TransitionEffect />

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
                                <Image
                                    src="/images/profile/baiban2.png"
                                    className="block p-2 mx-auto mb-3 rounded-full"
                                    style={{ maxHeight: '210px', maxWidth: '210px', background: '#d4e7ef' }}  
                                    alt="Avatar"
                                    width={210}
                                    height={210}
                                />
                                <div className="text-center mb-3">
                                    <h2 className="text-2xl mb-2 font-bold" style={{ color: '#d8b0a4' }}>TOOLS</h2>
                                </div>
                                <ul className="list-disc list-inside text-center text-gray-400" style={{ listStyleType: 'none' }}>
                                    <li><span style={{ marginRight: '0.5rem' }}>◇</span>Git/Github</li>
                                    <li><span style={{ marginRight: '0.5rem' }}>◇</span>Unity 2D/3D</li>
                                    <li><span style={{ marginRight: '0.5rem' }}>◇</span>Godot4</li>
                                    <li><span style={{ marginRight: '0.5rem' }}>◇</span> AWS</li>
                                    <li><span style={{ marginRight: '0.5rem' }}>◇</span>Jupyter Notebook</li>
                                    <li><span style={{ marginRight: '0.5rem' }}>◇</span>Microsoft Office</li>
                                    <li><span style={{ marginRight: '0.5rem' }}>◇</span>Excel/Word/Powerpoint</li>
                                    <li><span style={{ marginRight: '0.5rem' }}>◇</span>Photoshop</li>
                                    <li><span style={{ marginRight: '0.5rem' }}>◇</span>Clip Studio Paint</li>
                                    <li><span style={{ marginRight: '0.5rem' }}>◇</span>Figma</li>
                                </ul>
                            </div>
                        </div>

                        <div className="lg:w-9/12 w-full lg:order-1 order-2 pr-3 mb-3 px-3">
                            <div className="mb-3">
                                <div className="rounded-xl p-3 text-white" style={{ backgroundColor: '#d7d7d7' }}> 
                                    <h1 className="text-4xl mb-0">
                                        <i className="fal fa-crown fa-fw"></i> Qualifications
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
                                        <i className="fal fa-bookmark mr-1"></i><b>Skills</b>
                                        </h4>
                                        <ul className="list-disc list-inside space-y-2 mb-3">
                                        <li><strong className="text-beige">Programming Languages:</strong> Python, C/C++, JavaScript, HTML/CSS, SQL, R, Golang</li>
                                        <li><strong className="text-beige">Programming Frameworks:</strong> Node.js, Express.js, React.js, Tailwind, Bootstrap 5, Jest</li>
                                        <li><strong className="text-beige">Languages:</strong> English (Fluent) and Mandarin Chinese (Native)</li>
                                        </ul>
                                        <h4 className="text-uppercase text-gray-800 opacity-70 text-2xl mb-2" style={{ color: '#dbb7ac' }}>
                                            <i className="fal fa-bookmark mr-1"></i><b>Relevant Coursework</b>
                                        </h4>
                                        <ul className="list-disc list-inside space-y-2">
                                            <li>Computer Science and Programming</li>
                                            <li>Computer Organization and Architecture</li>
                                            <li>Algorithms and Data Structures</li>
                                            <li>Data Science I</li>
                                            <li>Database Systems</li>
                                            <li>Software Design</li>
                                            <li>Fundamentals of Operating Systems</li>
                                            <li>Introduction to Game Development</li>
                                            <li>Introduction to Game Art and Design</li>
                                            <li>Introduction to Computer Networks</li>
                                            <li>Introduction to Automata and Computability</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-xl p-3 text-white text-center mt-3" style={{ backgroundColor: '#d7d7d7' }}>  
                        <p className="tracking-wide">
                            <i className="fal fa-quote-left fa-fw mr-1"></i>
                            <i>&quot;Fear is a reason to move forward.&quot;</i>
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

export default Skills;
