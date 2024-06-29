import Head from 'next/head';
import square from "../../public/images/background/square.png";
import Image from 'next/image';

const Background = ({ children }) => (
    <>
        <Head>
            <meta name="description" content="any description" />
        </Head>
        <main className="flex items-center justify-center text-dark w-full min-h-screen" style={{ 
            backgroundColor: '#f4f5f6',
            backgroundImage: "url('/13yao/images/background/square.png')",
            backgroundRepeat: 'repeat',
            backgroundSize: '400px 400px'
        }}>
            {children}
        </main>
    </>
);

export default Background;
