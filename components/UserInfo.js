import Link from 'next/link';

const UserInfo = ({ user }) => {
    return (
        <>
            <br />
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{user.name}</h5>
                    <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                    </p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        username: {user.username}
                    </li>
                    <li className="list-group-item">email: {user.email}</li>
                    <li className="list-group-item">website: {user.website}</li>
                    <li className="list-group-item">phone: {user.phone}</li>
                </ul>
                <div className="card-body">
                    <Link href="/users">
                        <a className="card-link">back to list</a>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default UserInfo;
