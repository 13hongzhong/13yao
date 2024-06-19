import React from 'react';
import { motion, useScroll } from "framer-motion"
import { useRef } from 'react';

const Details = ({ position, company, companyLink, time, address, work }) => {
    return (
        <li className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto'>
            {/* Details content */}
            <div className='ml-12'>
                <h3 className='capitalize font-bold text-2xl' style={{ color: '#c88671' }}>
                    {position}&nbsp;
                    <a href={companyLink} target="_blank" className='capitalize' style={{ color: '#abd1e1' }}>
                        @{company}
                    </a>
                </h3>
                <span className='capitalize font-medium text-dark/45'>
                    {time} | {address}
                </span>
                <p className='font-medium w-full text-dark/65'>{work}</p>
            </div>
        </li>
    );
};

const Experience = () => {

    const ref = useRef(null);
    const{scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )

    return (
        <div className="relative">
            <h2 className='font-bold text-8xl mt-32 w-full text-center' style={{ color: '#d8b0a4' }}>
                Experience
            </h2>

          
            <div ref={ref} className='w-[75%] mx-auto relative mt-12'>
             
            <motion.div 

            style={{scaleY: scrollYProgress,  backgroundColor: '#beebff'}}
            
           div className="absolute left-8 top-0 w-[4px] h-full bg-dark origin-top" />

            


                
                <div className='w-5/7 mx-auto'>
                    <ul className="w-full flex flex-col items-start">
                        <Details
                            position='Customer Service'
                            company='Papa Johns'
                            companyLink='https://www.papajohns.com/'
                            time='2016-2017'
                            address='Frisco, TX'
                            work='In my role, I operated pizza ovens and kitchen equipment, focusing on collaborating with fellow kitchen staff, ensuring customer satisfaction through clear interactions.'
                        />

                        <Details
                            position='Customer Service'
                            company='Papa Johns'
                            companyLink='https://www.papajohns.com/'
                            time='2016-2017'
                            address='Frisco, TX'
                            work='In my role, I operated pizza ovens and kitchen equipment, focusing on collaborating with fellow kitchen staff, ensuring customer satisfaction through clear interactions.'
                        />

                        <Details
                            position='Customer Service'
                            company='Papa Johns'
                            companyLink='https://www.papajohns.com/'
                            time='2016-2017'
                            address='Frisco, TX'
                            work='In my role, I operated pizza ovens and kitchen equipment, focusing on collaborating with fellow kitchen staff, ensuring customer satisfaction through clear interactions.'
                        />

                        <Details
                            position='Customer Service'
                            company='Papa Johns'
                            companyLink='https://www.papajohns.com/'
                            time='2016-2017'
                            address='Frisco, TX'
                            work='In my role, I operated pizza ovens and kitchen equipment, focusing on collaborating with fellow kitchen staff, ensuring customer satisfaction through clear interactions.'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Experience;
