import { MenuItem, Typography } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { GeneralContext } from "../../../App";
import { RoleTypes } from "../../navbar/components/RoleTypes";

export default function LinkMomentMenu( props ) {
    const { setLoader, setColorHeart, setAnchorElUser, setDeleteRefresh, deleteRefresh, userRoleType, openNavbarMenuSide, setOpenNavbarMenuSide, snackbar } = useContext(GeneralContext);
    
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
        setOpenNavbarMenuSide(!openNavbarMenuSide);
    };

    const RemoveThisCard = () => {
        setLoader(true);

        fetch(
            (userRoleType === RoleTypes.admin) ?
            `https://api.shipap.co.il/admin/cards/${props.moment.id}?token=e2cbbb61-7346-11ee-8f3c-14dda9d4a5f0` : 
            `https://api.shipap.co.il/business/cards/${props.moment.id}?token=e2cbbb61-7346-11ee-8f3c-14dda9d4a5f0`, {
            credentials: 'include',
            method: 'DELETE',
        })
        .then(() => {
            setLoader(false);
            setDeleteRefresh(!deleteRefresh);
            snackbar(`The moment removed`);
        })
            .catch(err => snackbar(err.message));
        handleCloseUserMenu();
    };

    const AddToFavoriteColor = () => {
        setLoader(true);
        fetch(`https://api.shipap.co.il/cards/${props.moment.id}/favorite?token=e2cbbb61-7346-11ee-8f3c-14dda9d4a5f0`, {
            credentials: 'include',
            method: 'PUT',
        })
        .then(() => {
            setLoader(false);
            snackbar(`The moment added to favorite`);
        })
        .catch(err => snackbar(err.message));
        setColorHeart(true);
        handleCloseUserMenu();
    };

    const RemoveFromFavoriteColor = () => {
        setLoader(true);
        fetch(`https://api.shipap.co.il/cards/${props.moment.id}/unfavorite?token=e2cbbb61-7346-11ee-8f3c-14dda9d4a5f0`, {
            credentials: 'include',
            method: 'PUT',
        })
        .then(() => {
            setLoader(false);
            snackbar(`The moment removed from favorite`);
        })
        .catch(err => snackbar(err.message));
        setColorHeart(false);
        handleCloseUserMenu();
    };

    return (
        <Link 
            to={props.goTo}
            style={{ textDecoration: 'none', color: 'black' }}
        >
            <MenuItem 
                className='rowSideMenuMomentBox'
                onClick={
                    props.name === 'Read More' ? handleCloseUserMenu : 
                    props.name === 'Edit' ? handleCloseUserMenu : 
                    props.name === 'Delete' ? RemoveThisCard : 
                    props.name === 'Add to favorite' ? AddToFavoriteColor :
                    props.name === 'Remove from favorite' ? RemoveFromFavoriteColor : ''
            }>
                <Typography 
                    textAlign="center"
                    className='titleNenuSideName'
                >
                    {props.name}
                </Typography>
            </MenuItem>
        </Link>
    )
}