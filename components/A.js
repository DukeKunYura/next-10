import Link from 'next/link';
import styles from '../styles/A.module.css';

const ALink = ({ text, href }) => {
    return (
        <Link href={href}>
            <a className="nav-link">{text}</a>
        </Link>
    );
};

export default ALink;
