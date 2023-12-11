import ALink from '../components/A';

const Index = () => {
  return (
    <div>
        <div className='navbar'>
            <ALink href={'/'} text={'General'}/>
            <ALink href={'/users'} text={'Users'}/>
        </div>
    </div>
  )
}

export default Index;
