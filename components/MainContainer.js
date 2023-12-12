import ALink from '../components/A';
import Head from 'next/head';

const MainContainer = ({ children, keywords }) => {
    return (
        <>
            <Head>
                <meta keywords={'next, ssr, test, ' + keywords}></meta>
                <title>General</title>
            </Head>

            <div className="navbar">
                <ALink href={'/'} text={'General'} />
                <ALink href={'/users'} text={'Users'} />
            </div>
            <div>{children}</div>
        </>
    );
};

export default MainContainer;
