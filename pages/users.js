import { useState } from "react";
import Link from 'next/link';

const Users = ({users}) => {
  return (
    <div>Users
        <div>
            {users.map(user=> <ul key={user.id}><Link href={`/user/${user.id}`} >{user.name}</Link></ul>)}
        </div>
    </div>
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
