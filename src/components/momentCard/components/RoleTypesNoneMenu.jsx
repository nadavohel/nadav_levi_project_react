import { Menu } from "@mui/material";
import { useContext } from "react";
import LinkMomentMenu from "./LinkMomentMenu";
import { GeneralContext } from "../../../App";

export default function RoleTypesNoneMenu( props ) {
    const { anchorElUser, setAnchorElUser, openNavbarMenuSide, setOpenNavbarMenuSide } = useContext(GeneralContext);

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
        setOpenNavbarMenuSide(!openNavbarMenuSide);
    };

    return (
        <Menu
            sx={{ mt: '45px', width: '180px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
        >

            <LinkMomentMenu
                goTo={`/card-moment/${props.moment.id}`}
                name={"Read More"}
                moment={props.moment}
            />
        </Menu>
    )
}