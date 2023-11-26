import NavbarMenuSideContentName from './components/NavbarMenuSideContentName';
import NavbarMenuSideContentImg from './components/NavbarMenuSideContentImg';
import NavbarMenuSideContentProfile from './components/NavbarMenuSideContentProfile';
import NavbarMenuSideContentLinks from './components/NavbarMenuSideContentLinks';
import NavbarMenuSideContentLogout from './components/NavbarMenuSideContentLogout';
import { RoleTypes } from '../../../RoleTypes';
import { useContext } from 'react';
import { GeneralContext } from '../../../../../../App';

export default function NavbarMenuSideContent() {
    const { userRoleType } = useContext(GeneralContext);

    return (
        <div className='navbarMenuSideContent'>
            <NavbarMenuSideContentImg />
            <NavbarMenuSideContentName />
            {(userRoleType === RoleTypes.admin) ? '' :
            <>
                <NavbarMenuSideContentProfile />
                <NavbarMenuSideContentLinks />
            </>}
            <NavbarMenuSideContentLogout />
        </div>
    );
}