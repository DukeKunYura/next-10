import { useState } from "react";
import Link from 'next/link';
import MainContainer from "../components/MainContainer";

const Users = ({users}) => {
  return (
    <MainContainer keywords={"users"}>
      Users
        <div>
            {users.map(user=> <ul key={user.id}><Link href={`/user/${user.id}`} >{user.name}</Link></ul>)}
        </div>
    </MainContainer>
  )
}

export default Users;

export async function getStaticProps() {

  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await res.json()

  return {
    props: {
      users
    }
  }
}
