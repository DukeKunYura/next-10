import {useRouter} from 'next/router';
import styles from '../../styles/User.module.scss';

export default function User() {
    const {query} = useRouter();
    return (
        <div className={styles.user}>
            <h3>User id: {query.id}</h3>

        </div>
    )
}