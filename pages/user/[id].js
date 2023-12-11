import {useRouter} from 'next/router';
import styles from '../../styles/User.module.scss';

export default function User({user}) {
    const {query} = useRouter();
    console.log(user)
    return (
        <div className={styles.user}>
            <h3>User id: {query.id}</h3>
            <h3>{user.name}</h3>

        </div>
    )
}

export async function getServerSideProps({params}) {

    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const user = await res.json()
    console.log(user)
  
    return {
      props: {
        user
      }
    }
  }