import Background from '@/components/Background';
import React from 'react';
import Head from 'next/head';
import Skeleton from '@/components/Skeleton';
import AnimatedText from '@/components/AnimatedText';

const projects = () => {
    return (
        <>
            <Head>
                <title>Kagu • Projects</title>
                <meta name="description" content="any description"/>
            </Head>
            <Background>
            <main className='w-full mb-16 flex flex-col items-center justify-center'>
                
                <Skeleton className='pt-16'> 
                        <AnimatedText text="Project Showcase" className="text-6xl" style={{ color: '#d8b0a4' }} /> 
                    
                    <div className='grid grid-cols-12 gap-24'>
                            <div className='col-span-12'>
                                Featured Project
                            </div>
                            <div className='col-span-6'>
                                Project-1
                            </div>
                            <div className='col-span-6'>
                                Project-2
                            </div>

                    </div>

                    
                    </Skeleton>
                
            </main>
            </Background>
        </>
    );
};

export default projects;
