import { useState } from 'react';
import Link from 'next/link';
import MainContainer from '../components/MainContainer';
import CardUser from '../components/CardUser';

const Users = ({ users }) => {
    return (
        <MainContainer keywords={'users'}>
            <div className="container-xl">
                {users.map((user) => (
                    <CardUser key={user.id} id={user.id} name={user.name} />
                ))}
            </div>
        </MainContainer>
    );
};

export default Users;

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();

    return {
        props: {
            users,
        },
    };
}
