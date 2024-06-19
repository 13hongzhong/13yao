import React from 'react';

const Details = ({ position, company, companyLink, time, address, work }) => {
    return (
        <li className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
            <div>
            <h3 className='capitalize font-bold text-2x1' style={{ color: '#c88671' }}>
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
    return (
        <>
            <h2 className='font-bold text-8xl mt-20 w-full text-center' style={{ color: '#d8b0a4' }}>
                Experience
            </h2>
            <div className='w-full mt-24 flex items-center justify-center'>
                <div className='w-3/4'>
                    <ul>
                        
                    <Details
                            position='Customer Service'
                            company='Papa Johns'
                            companyLink='https://www.papajohns.com/'
                            time='2016-2017'
                            address='Frisco, TX'
                            work='In my role, I operated pizza ovens and kitchen equipment, focusing on collaborating with fellow kitchen staff, ensuring customer satisfaction through clear interactions. '
                        />

                    <Details
                            position='Customer Service'
                            company='Papa Johns'
                            companyLink='https://www.papajohns.com/'
                            time='2016-2017'
                            address='Frisco, TX'
                            work='In my role, I operated pizza ovens and kitchen equipment, focusing on collaborating with fellow kitchen staff, ensuring customer satisfaction through clear interactions. '
                        />

                    <Details
                            position='Customer Service'
                            company='Papa Johns'
                            companyLink='https://www.papajohns.com/'
                            time='2016-2017'
                            address='Frisco, TX'
                            work='In my role, I operated pizza ovens and kitchen equipment, focusing on collaborating with fellow kitchen staff, ensuring customer satisfaction through clear interactions. '
                        />

                    <Details
                            position='Customer Service'
                            company='Papa Johns'
                            companyLink='https://www.papajohns.com/'
                            time='2016-2017'
                            address='Frisco, TX'
                            work='In my role, I operated pizza ovens and kitchen equipment, focusing on collaborating with fellow kitchen staff, ensuring customer satisfaction through clear interactions. '
                        />
                        
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Experience;
