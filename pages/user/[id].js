import { useRouter } from 'next/router';
import styles from '../../styles/User.module.scss';
import MainContainer from '../../components/MainContainer';
import UserInfo from '../../components/UserInfo';

export default function User({ user }) {
    const { query } = useRouter();
    console.log(user);
    return (
        <MainContainer keywords={user.name}>
            <div className="container-xl">
                <UserInfo user={user} />
            </div>
        </MainContainer>
    );
}

export async function getServerSideProps({ params }) {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${params.id}`,
    );
    const user = await res.json();
    console.log(user);

    return {
        props: {
            user,
        },
    };
}
