import { useContext } from 'react';
import { GeneralContext } from '../../../../../../../App';

export default function NavbarMenuSideContentName() {
    const { user } = useContext(GeneralContext);

    return (
        <div className='nameOpenMenu'>
            {user.fullName}
        </div>
    );
}