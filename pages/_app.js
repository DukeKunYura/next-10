// These styles apply to every route in the application
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/global.css';
import { useEffect } from 'react';

export default function App({ Component, pageProps }) {
    useEffect(() => {
        require('bootstrap/dist/js/bootstrap.bundle.min.js');
    }, []);
    return <Component {...pageProps} />;
}
