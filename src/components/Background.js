import Head from 'next/head';

const Background = ({ children }) => (
    <>
        <Head>
            <meta name="description" content="any description" />
        </Head>
        <main className="flex items-center justify-center text-dark w-full min-h-screen" style={{ 
            backgroundColor: '#f4f5f6',
            backgroundImage: "url('/images/background/square.png')",
            backgroundRepeat: 'repeat',
            backgroundSize: '400px 400px'
        }}>
            {children}
        </main>
    </>
);

export default Background;
