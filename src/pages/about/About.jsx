import { useContext, useEffect } from 'react';
import { GeneralContext } from '../../App';
import AboutPreface from './components/AboutPreface';

export default function About() {
    const { setThisPage } = useContext(GeneralContext);
    
    useEffect(() => {
        setThisPage('About');
    }, []);

    return (
        <>
            <h1>About Card Site</h1>
            <AboutPreface />
        </>
    )
}