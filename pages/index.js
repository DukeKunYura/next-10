import Head from 'next/head';
import ALink from '../components/A';

const Index = () => {
  return (
    <>
      <Head>
        <meta keywords="next, ssr, test"></meta>
        <title>General</title>
      </Head>
      <div>
        <div className='navbar'>
          <ALink href={'/'} text={'General'}/>
          <ALink href={'/users'} text={'Users'}/>
        </div>
      </div>
    </>
    
  )
}

export default Index;
