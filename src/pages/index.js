import Head from 'next/head';
import Layout from '@/components/Layout';
import Link from 'next/link';
import { LinkArrow } from '@/components/Icons';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>Kagu • Home</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className='flex items-center text-dark w-full min-h-screen' style={{ 
        backgroundColor: '#f4f5f6',
        backgroundImage: "url('/images/background/square.png')",
        backgroundRepeat: 'repeat',
        backgroundSize: '400px 400px'
      }}>
        <Layout className='pt-0'>
          <div className="flex items-center justify-between w-full">
          </div>
        </Layout>
      </main>
    </>
  );
}
