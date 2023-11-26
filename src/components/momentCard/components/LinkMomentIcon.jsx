import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Tooltip } from '@mui/material';
import { GeneralContext } from '../../../App';
import { RoleTypes } from '../../navbar/components/RoleTypes';

export default function LinkMomentIcon( props ) {
    const { setLoader, setColorHeart, colorHeart, setAnchorElUser, setDeleteRefresh, deleteRefresh, userRoleType, openNavbarMenuSide, setOpenNavbarMenuSide, snackbar } = useContext(GeneralContext);

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

    const changeFavoriteStatus = () => {
        setLoader(true);
        if (colorHeart) {
            fetch(`https://api.shipap.co.il/cards/${props.moment.id}/unfavorite?token=e2cbbb61-7346-11ee-8f3c-14dda9d4a5f0`, {
                credentials: 'include',
                method: 'PUT',
            })
            .then(() => {
                setLoader(false);
                snackbar(`The moment removed from favorite`);
            })
            .catch(err => snackbar(err.message));
        } else {
            fetch(`https://api.shipap.co.il/cards/${props.moment.id}/favorite?token=e2cbbb61-7346-11ee-8f3c-14dda9d4a5f0`, {
                credentials: 'include',
                method: 'PUT',
            })
            .then(() => {
                setLoader(false);
                snackbar(`The moment added to favorite`);
            })
            .catch(err => snackbar(err.message));
        }
        colorHeart ? setColorHeart(false) : setColorHeart(true);
    };

    return (
            <Link 
                to={props.goTo} 
                style={{ textDecoration: 'none', color: 'black' }}>

                <Tooltip 
                    title={props.name}
                >
                    <IconButton 
                        aria-label="share"
                        onClick={
                            props.name === 'Delete' ? RemoveThisCard : changeFavoriteStatus 
                        }
                    >
                        {props.children}
                    </IconButton>
                </Tooltip>
            </Link>
    )
}