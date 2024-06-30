import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Logo = () => {
    return (
        <div className='flex items-center justify-center mt-0.5'>
            <Link href="/">
                <Image
                    src="/13yao/images/profile/flower.png" 
                    alt="Logo"
                    width={64} 
                    height={64} 
                    className='hidden md:hidden lg:hidden xl:inline-block' 
                />
            </Link>
        </div>
    );
}

export default Logo;
