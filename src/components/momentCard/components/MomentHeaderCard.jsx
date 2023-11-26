import { Avatar, CardHeader, IconButton, Tooltip } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useContext } from "react";
import { GeneralContext } from "../../../App";

export default function MomentHeaderCard( props ) {
    const { setAnchorElUser, openNavbarMenuSide, setOpenNavbarMenuSide } = useContext(GeneralContext);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
        setOpenNavbarMenuSide(!openNavbarMenuSide);
    };

    return (
            <CardHeader
                action={
                    <Tooltip title="Open settings">
                        <IconButton 
                            aria-label="settings" 
                            onClick={handleOpenUserMenu}
                        >
                            <MoreVertIcon />
                        </IconButton>
                    </Tooltip>
                }
                title={props.moment.title}
                subheader={props.moment.createdTime}
            />
    )
}