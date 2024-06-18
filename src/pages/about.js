import React from 'react';
import Head from 'next/head';
import Pagedoll from '@/components/Pagedoll';

const about = () => {
    return (
        <>
            <Head>
                <title>About Page</title>
                <meta name="description" content="any description" />
            </Head>

            <main className="container mx-auto p-3 my-5 max-w-screen-lg bg-gray-100 text-gray-800 rounded-xl shadow-md">
                <div className="flex flex-wrap -mx-3">
                    <div className="lg:w-3/12 w-full lg:order-2 order-1 mb-3 px-3">
                        <div className="bg-white rounded-xl p-3 h-full">
                            <img
                                src="IMG_URL"
                                className="block p-2 mx-auto mb-3 rounded-full"
                                style={{ maxHeight: '210px', background: '#d7d7d7' }}  
                                alt="Avatar"
                            />
                            <div className="flex flex-col space-y-2">
                                {[
                                    { label: 'Name', value: 'write a name' },
                                    { label: 'Age', value: 'much too old' },
                                    { label: 'Gender', value: 'content' },
                                    { label: 'Height', value: 'content' },
                                    { label: 'Race', value: '(or species)' },
                                    { label: 'Role', value: 'content' },
                                    { label: 'Demeanor', value: 'content' },
                                    {
                                        label: 'Theme',
                                        value: (
                                            <a
                                                href="SONG_LINK"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-500"
                                            >
                                                <i className="fas fa-music-alt fa-fw" /><i className="fas fa-music fa-fw" /><i className="fas fa-music-alt fa-fw" />
                                            </a>
                                        )
                                    },
                                    {
                                        label: 'HTML',
                                        value: (
                                            <a
                                                href="/Pinky"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-500"
                                            >
                                                Pinky
                                            </a>
                                        )
                                    }
                                ].map((item, index) => (
                                    <div key={index} className="flex justify-between uppercase text-sm opacity-70 tracking-wide">
                                        <div className="pr-1">{item.label} <i className="fal fa-angle-double-right fa-fw"></i></div>
                                        <div>{item.value}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-9/12 w-full lg:order-1 order-2 pr-3 mb-3 px-3">
                        <div className="mb-3">
                            <div className="rounded-xl p-3 text-white" style={{ backgroundColor: '#d7d7d7' }}> 
                                <h1 className="text-4xl mb-0">
                                    <i className="fal fa-crown fa-fw"></i> Title here
                                </h1>
                            </div>
                        </div>

                        <div className="flex flex-wrap -mx-3">
                            <div className="md:w-5/12 w-full mb-3 md:mb-0 px-3">
                                <div className="bg-white rounded-xl h-full">
                                    <div
                                        className="h-full bg-cover bg-center"
                                        style={{ backgroundImage: 'url(IMG_URL)', minHeight: '400px' }}
                                    ></div>
                                </div>
                            </div>

                            <div className="md:w-7/12 w-full px-3">
                                <div className="bg-white rounded-xl p-3 h-full overflow-auto" style={{ maxHeight: '450px' }}>
                                    <h4 className="text-uppercase text-gray-800 opacity-70 text-2xl mb-2" style={{ color: '#dbb7ac' }}>
                                        <i className="fal fa-bookmark mr-1"></i>About
                                    </h4>
                                    <p className="mb-2">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet massa blandit, fermentum enim a, scelerisque velit. Integer interdum urna ac dui sollicitudin sollicitudin. In feugiat posuere nulla, eget lobortis ante. Aliquam magna libero, dictum sit amet scelerisque ac, scelerisque tincidunt magna. Nulla et consectetur diam. Aliquam ipsum mi, tristique sed vestibulum ac, aliquet eget magna. Mauris varius id magna vitae ullamcorper. In gravida libero consectetur, lobortis nisl sit amet, pellentesque ligula. Suspendisse tincidunt feugiat posuere. Duis dui erat, accumsan a aliquam eu, efficitur a tortor. Nunc molestie, leo in commodo aliquam, tellus augue tempor velit, non placerat ex sem non nisi.
                                    </p>
                                    <h4 className="text-uppercase text-gray-800 opacity-70 text-2xl mb-2" style={{ color: '#dbb7ac' }}>
                                        <i className="fal fa-bookmark mr-1"></i>Trivia
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
                        <i>Write a quote or tagline here</i>
                        <i className="fal fa-quote-right fa-fw ml-1"></i>
                    </p>
                </div>
            </main>

            
        </>
    );
}

export default about;
