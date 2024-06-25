import Background from '@/components/Background';
import React from 'react';
import Head from 'next/head';
import Skeleton from '@/components/Skeleton';
import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link';
import Image from 'next/image';
import { AltGithubIcon } from '@/components/Icons';
import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg";
import TransitionEffect from '@/components/TransitionEffect';


const Project = ({title, type, img, link, github}) => {
    return (
        <article className="w-full flex flex-col items-center justify-center rounded-2xl bg-light p-6 relative lg:flex-row lg:p-8">
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-darkpink rounded-br-3xl shadow-md' />
            <Link href={link} target="_blank" className='w-full cursor-pointer overflow-hidden rounded-lg lg:w-1/2'>
                <Image src={img} alt={title} className="w-full h-auto" />
            </Link>

            <div className='w-full flex flex-col items-start justify-between mt-4 lg:mt-0 lg:w-1/2 lg:pl-6'>
                <span className='text-blue font-medium text-xl'>{type}</span>
                <Link href={link} target="_blank" className='relative inline-block group text-beige'>
                    <h2 className='my-2 w-full text-left text-3xl font-bold lg:text-4xl'>
                        {title}
                    </h2>
                    <span className='absolute inset-x-0 bottom-0 h-0.5 bg-transparent transition-all duration-300 group-hover:bg-beige' style={{ textDecorationColor: '#d8b0a4' }}></span>
                </Link>
                <div className='w-full mt-2 flex items-center justify-between'>
                    <Link href={link} target="_blank" className='text-lg font-semibold underline text-beige hover:text-darkbeige active:text-pressbeige'> Visit </Link> 
                    <Link href={github} target="_blank" className='w-8'> <AltGithubIcon /> </Link> 
                </div>
            </div>
        </article>
    )
}

const FeaturedProject = ({type, title, summary, img, link, github}) => {
    return(
        <article className='w-full flex flex-col items-center justify-between relative rounded-br-2xl rounded-3xl bg-light shadow-1xl p-6 lg:flex-row lg:p-12'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-darkpink rounded-br-3xl shadow-md' />
            <Link href={link} target="_blank" className='w-full cursor-pointer overflow-hidden rounded-lg lg:w-1/2'>
                <Image src={img} alt={title} className="w-full h-auto" />
            </Link>

            <div className='w-full flex flex-col items-start justify-between mt-4 lg:mt-0 lg:w-1/2 lg:pl-6'>
                <span className='text-blue font-medium text-xl'>{type}</span>
                <Link href={link} target="_blank" className='relative inline-block group text-beige'>
                    <h2 className='my-2 w-full text-left text-3xl font-bold lg:text-4xl'>
                        {title}
                    </h2>
                    <span className='absolute inset-x-0 bottom-0 h-0.5 bg-transparent transition-all duration-300 group-hover:bg-beige' style={{ textDecorationColor: '#d8b0a4' }}></span>
                </Link>
                <p className='my-2 font-medium text-black'>{summary}</p>
                <div className='mt-2 flex items-center'>
                    <Link href={github} target="_blank" className='w-10'> <AltGithubIcon /> </Link> 
                    <Link href={link} target="_blank" className='ml-4 rounded-lg bg-beige text-light p-2 px-6 text-lg font-semibold hover:bg-darkbeige active:bg-pressbeige'> Visit Project </Link> 
                </div>
            </div>
        </article>
    )
}

const projects = () => {
    return (
        <>
            <Head>
                <title>Kagu • Projects</title>
                <meta name="description" content="any description"/>
            </Head>

            <TransitionEffect />

            <Background>
                <main className='w-full mb-16 flex flex-col items-center justify-center'>
                    <Skeleton className='pt-16'> 
                        <div className='grid grid-cols-12 gap-6 md:gap-8 lg:gap-12'>
                            <div className='col-span-12'>
                                <FeaturedProject 
                                    title="Crypto Screener Application"
                                    img={project1}
                                    summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                                    It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                                    local currency."
                                    link="/"
                                    github="/"
                                    type="Featured Project"
                                />
                            </div>
                            <div className='col-span-12 md:col-span-6'>
                                <Project 
                                    title="Crypto Screener Application"
                                    img={project1}
                                    link="/"
                                    github="/"
                                    type="Featured Project"
                                />
                            </div>
                            <div className='col-span-12 md:col-span-6'>
                                <Project 
                                    title="Crypto Screener Application"
                                    img={project1}
                                    link="/"
                                    github="/"
                                    type="Featured Project"
                                />
                            </div>
                            <div className='col-span-12'>
                                <FeaturedProject 
                                    title="Crypto Screener Application"
                                    img={project1}
                                    summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                                    It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                                    local currency."
                                    link="/"
                                    github="/"
                                    type="Featured Project"
                                />
                            </div>
                            <div className='col-span-12 md:col-span-6'>
                                <Project 
                                    title="Crypto Screener Application"
                                    img={project1}
                                    link="/"
                                    github="/"
                                    type="Featured Project"
                                />
                            </div>
                            <div className='col-span-12 md:col-span-6'>
                                <Project 
                                    title="Crypto Screener Application"
                                    img={project1}
                                    link="/"
                                    github="/"
                                    type="Featured Project"
                                />
                            </div>
                        </div>
                    </Skeleton>
                </main>
            </Background>
        </>
    );
};

export default projects;
