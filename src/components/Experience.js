import React from 'react';
import { motion, useScroll } from "framer-motion";
import { useRef } from 'react';
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
    
    const ref = useRef(null);
    
    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto'>
           
           <LiIcon reference={ref} />
           
            <motion.div className='ml-12'
            initial={{y:50}}
            whileInView={{y:0}}
            transition={{duration:0.5, type:"spring"}}
            >
                <h3 className='capitalize font-bold text-2xl md:text-3xl' style={{ color: '#c88671' }}>
                    {position}&nbsp;
                    <a href={companyLink} target="_blank" className='capitalize' style={{ color: '#abd1e1' }}>
                        @{company}
                    </a>
                </h3>
                <span className='capitalize font-medium text-dark/45'>
                    {time} | {address}
                </span>
                <p className='font-medium w-full text-dark/65'>{work}</p>
            </motion.div>
        </li>
    );
};

const Filler = ({ position, company, companyLink, time, address, work }) => {
    return (
        <li className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto'>
            <div className='ml-12'>
                <h3 className='capitalize font-bold text-2xl md:text-3xl' style={{ color: '#c88671' }}>
                    {position}&nbsp;
                    
                </h3>
                <p className='font-medium w-full text-dark/65'>{work}</p>
            </div>
        </li>
    );
};

const Experience = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end center"]
    });

    return (
        <div className="relative">
            <h2 className='font-bold text-7xl md:text-6xl lg:text-8xl mt-32 w-full text-center' style={{ color: '#d8b0a4' }}>
                Experience
            </h2>
            <div ref={ref} className='w-[75%] mx-auto relative mt-12'>
                <motion.div
                    style={{
                        scaleY: scrollYProgress,
                        backgroundColor: '#beebff',
                        transformOrigin: 'top'
                    }}
                    className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top"
                />
                <div className='w-full md:w-5/7 mx-auto'>
                    <ul className="w-full flex flex-col items-start">
                        <Details
                            position='Customer Service'
                            company='Papa Johns'
                            companyLink='https://www.papajohns.com/'
                            time='2016-2017'
                            address='Frisco, TX'
                            work='I operated pizza ovens and collaborated with coworkers to deliver pizza in a timely manner to customers.'
                        />
                        <Details
                            position='Shift Lead'
                            company='Jersey Mike’s Subs'
                            companyLink='https://www.jerseymikes.com/'
                            time='2017-2022'
                            address='Frisco, TX'
                            work='I guided coworkers, provided customer service, and hold a Food Handling and Manager certificate. I made sandwiches!!!'
                        />
                        <Details
                            position='Coding Mentor'
                            company='UH IEEE'
                            companyLink='https://ieeeuh.squarespace.com/'
                            time='2021-2024'
                            address='Houston, TX'
                            work='I secured club sponsorships, hosted events like Chili Cook Off, assisted with budgeting, tutored students in programming, and created visual assets with Figma to advertise events.'
                        />
                        <Filler
                           position=''
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Experience;
