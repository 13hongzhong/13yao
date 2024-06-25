import React from 'react';
import Link from 'next/link';
import { LinkArrow } from './Icons';
import Background from './Background';

const Layout = () => {
  return (
    <Background>
      <div className="container mx-auto my-5 p-3 rounded-lg shadow-lg" style={{ maxWidth: '1200px', backgroundColor: '#f3f4f6' }}>
        <div className="flex flex-wrap">
          <div className="w-full lg:w-5/12 mb-3">
            <div
              style={{
                backgroundImage: "url('/images/profile/photo1.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                borderRadius: '16px',
                minHeight: '450px',
                boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', 
              }}
              className="rounded-lg h-full"
            ></div>
          </div>
          <div className="w-full lg:w-5/12 px-3">
            <div className="relative py-3 mb-3 rounded-lg" style={{ backgroundColor: ' #d7d7d7', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
              <div className="text-white text-center py-3">
                <h1 className="text-3xl font-bold uppercase mb-1" style={{ letterSpacing: '2.5px' }}>
                  Kagu ✿ 白板
                </h1>
                <p className="text-sm" style={{ letterSpacing: '1px' }}>
                  illustrator • writer • developer
                </p>
              </div>
            </div>
            <div className="p-3 bg-gray-100 mb-3 rounded-lg overflow-auto" style={{ height: '270px', lineHeight: '1.4', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sagittis eget risus eu fermentum. Sed leo mi, luctus vitae
                porttitor et, viverra ut lacus. Mauris bibendum, risus in efficitur dignissim, sapien enim pulvinar dui, a gravida elit
                lorem sit amet velit. Suspendisse et malesuada magna, mollis fringilla mauris. Cras sollicitudin eleifend tortor, et
                congue nulla finibus a. Suspendisse ullamcorper suscipit nulla at mattis. Vivamus commodo, magna ac pulvinar iaculis,
                lectus dui posuere elit, in finibus urna turpis eget arcu. Morbi auctor sapien non nulla vestibulum, eget malesuada leo
                condimentum. Integer blandit augue neque.
              </p>
            </div>

            <div className='flex justify-center lg:self-center md:mb-9 md:mt-9 sm:mt-6 sm:mb-6 mb-4'>
              <div className='flex'>
                <Link
                  href="/dummy.pdf"
                  target="_blank"
                  className="flex items-center bg-beige text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-beige border-2 border-solid border-transparent hover:border-pink"
                  download={true}
                >
                  Resume <LinkArrow className="w-6 ml-1" />
                </Link>
                <Link
                  href="mailto:cuit980@gmail.com"
                  target="_blank"
                  className="ml-4 bg-beige text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-beige border-2 border-solid border-transparent hover:border-pink"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-2/12">
            <div className="h-full flex flex-col justify-between">
              <div
                style={{
                  backgroundImage: "url('/images/background/beige_paw.png')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  minHeight: '150px',
                  borderRadius: '16px',
                  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
                }}
                className="mb-3"
              ></div>
              <div
                style={{
                  backgroundImage: "url('/images/background/blue_paw.jpg')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  minHeight: '150px',
                  borderRadius: '16px',
                  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
                }}
                className="mb-3"
              ></div>
              <div
                style={{
                  backgroundImage: "url('/images/background/pink_paw.jpg')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  minHeight: '150px',
                  borderRadius: '16px',
                  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
                }}
                className="mb-3"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </Background>
  );
};

export default Layout;
