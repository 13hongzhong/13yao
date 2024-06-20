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
            
            <main className='w-full mb-16 flex flex-col items-center justify-center'>
                <Background>
                    <Skeleton className='pt-4'> 
                        <AnimatedText text="Project Showcase" className="text-6xl" style={{ color: '#d8b0a4' }} /> 
                    </Skeleton>
                </Background>
            </main>
        </>
    );
};

export default projects;
