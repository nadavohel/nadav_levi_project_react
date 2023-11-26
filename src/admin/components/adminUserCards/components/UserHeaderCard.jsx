import { CardHeader, IconButton, Tooltip, Typography } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useContext } from "react";
import { GeneralContext } from "../../../../App";

export default function UserHeaderCard( props ) {
    const { setAnchorElUser, openNavbarMenuSide, setOpenNavbarMenuSide } = useContext(GeneralContext);
    
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
        setOpenNavbarMenuSide(!openNavbarMenuSide);
    };

    return (
        <>
            <CardHeader
                action={
                    <div className="userHeaderCard">
                        <div className="headCard">
                            <div className="headCardName">
                                {props.userData.firstName} {props.userData.middleName} {props.userData.lastName}
                            </div>
                            <Tooltip title="Open settings">
                                <IconButton
                                    aria-label="settings"
                                    onClick={handleOpenUserMenu}
                                >
                                    <MoreVertIcon />
                                </IconButton>
                            </Tooltip>
                        </div>
                        <Typography>
                            <span className="bold">id:</span> {props.userData.id} <br />
                            <span className="bold">email:</span> {props.userData.email} <br />
                            <span className="bold">phone:</span> {props.userData.phone}
                        </Typography>
                    </div>
                }
            />
        </>
    );
}