import React, { useState } from 'react';
import Head from 'next/head';
import Background from '@/components/Background';

const images = [
  '/images/illustrations/1.png',
  '/images/illustrations/2.png',
  '/images/illustrations/3.png',
  '/images/illustrations/4.png',
  // Add more images here if needed to fill the 4x4 grid
];

const Illustrations = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <Head>
        <title>Kagu • Illustrations</title>
        <meta name="description" content="any description" />
      </Head>

      <Background>
        <div className="h-screen flex flex-col justify-start">
          <div className="container mx-auto p-4 flex-grow">
            <h1 className="text-6xl font-bold text-beige mb-4 text-center mt-8">Chibis</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {images.map((src, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-lg shadow-lg cursor-pointer w-full h-90" // Set fixed width and height
                  onClick={() => setSelectedImage(src)}
                >
                  <img src={src} alt={`Illustration ${index + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)}
          >
            <img src={selectedImage} alt="Selected" className="max-w-full max-h-full" />
          </div>
        )}
      </Background>
    </>
  );
};

export default Illustrations;
