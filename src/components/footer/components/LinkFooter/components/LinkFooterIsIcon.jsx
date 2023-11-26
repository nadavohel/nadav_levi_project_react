import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { GeneralContext } from '../../../../../App';

export default function LinkFooterIsIcon( props ) {
    const { thisPage, sORm } = useContext(GeneralContext);

    return (
        <>
            {
                thisPage === props.link.title ?
                    <Link
                        to={props.link.route}
                    >
                        {(sORm === 'Sun') ?
                            props.link.iconActiveSun :
                            props.link.iconActiveMoon}
                    </Link> :
                    <Link
                        to={props.link.route}
                        style={{ textDecoration: 'none' }}
                    >
                        {(sORm === 'Sun') ?
                            props.link.iconSun :
                            props.link.iconMoon}
                    </Link>
            }
        </> 
    );
} 