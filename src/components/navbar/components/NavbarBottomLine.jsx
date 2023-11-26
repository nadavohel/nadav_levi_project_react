import { useContext } from 'react';
import { GeneralContext } from '../../../App';

export default function NavbarBottomLine() {
    const { navbarBottomLine } = useContext(GeneralContext);

    return (
        <div className={
            navbarBottomLine ?
                `navbarBottomLine opacityOn` :
                `navbarBottomLine opacityOff`
        }>
            <div></div>
        </div>
    );
}