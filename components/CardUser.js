import Link from 'next/link';

const CardUser = ({ id, name }) => {
    return (
        <>
            <br />
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                    </p>
                    <Link href={`/user/${id}`}>
                        <span className="btn btn-primary">more...</span>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default CardUser;
