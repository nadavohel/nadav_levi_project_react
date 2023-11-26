import { useContext } from 'react';
import Tooltip from '@mui/material/Tooltip';
import profile1 from "../../../../../images/profile1.jpg";
import { GeneralContext } from '../../../../../App';

export default function NavbarMenuSideLogo() {
    const { user, setAnchorElUser, openNavbarMenuSide, setOpenNavbarMenuSide } = useContext(GeneralContext);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
        setOpenNavbarMenuSide(!openNavbarMenuSide);
    };

    return (
        <div className='navbarMenuSideLogo'>
            <Tooltip title="Open settings">
                <div className="profile profileInMenuCursor" onClick={handleOpenUserMenu}>
                    <img
                        src={`${user.imgUrl}`}
                        onError={({ currentTarget }) => {
                            currentTarget.onerror = null;
                            currentTarget.src = profile1;
                        }}
                    />
                </div>
            </Tooltip>
        </div>

    );
}
