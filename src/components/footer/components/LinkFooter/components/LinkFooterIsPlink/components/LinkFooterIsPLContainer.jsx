import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { GeneralContext } from '../../../../../../../App';

export default function LinkFooterIsPLContainer(props) {
    const { thisPage } = useContext(GeneralContext);

    return (
        <div className='footerLinkContainer'>
            <Link
                to={props.link.route}
                style={{ textDecoration: 'none' }}
            >
                <p className={
                    thisPage === props.link.title ?
                        'footerLink footerActiveLink' :
                        'footerLink'
                }
                >
                    {props.link.title}
                </p>
            </Link>
        </div>
    );
}