import { useContext } from 'react';
import { RoleTypes } from '../../../RoleTypes';
import LinkPagesOnMenuNavbarMobile from './components/LinkPagesOnMenuNavbarMobile';
import LogOutOnMenuNavbarMobile from './components/LogOutOnMenuNavbarMobile';
import NameUserOnMenuNavbarMobile from './components/NameUserOnMenuNavbarMobile';
import { GeneralContext } from '../../../../../../App';

export default function NavbarMobileMenuContent() {
    const { userRoleType } = useContext(GeneralContext);
    return (
        <div>
            <NameUserOnMenuNavbarMobile />
            <LinkPagesOnMenuNavbarMobile />
            {(userRoleType === RoleTypes.none) ? '' : <LogOutOnMenuNavbarMobile />}
        </div>
    );
}