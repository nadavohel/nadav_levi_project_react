import Card from '@mui/material/Card';
import { useContext, useEffect, useState } from 'react';
import MomentHeaderCard from './components/MomentHeaderCard';
import RoleTypesNoneMenu from './components/RoleTypesNoneMenu';
import RoleTypesUserMenu from './components/RoleTypesUserMenu';
import RoleTypesBusinessMenu from './components/RoleTypesBusinessMenu';
import RoleTypesAdminMenu from './components/RoleTypesAdminMenu';
import IconsMomentCard from './components/IconsMomentCard';
import { GeneralContext } from '../../App';
import MomentImgCard from './components/MomentImgCard';
import MomentSubtitle from './components/MomentSubtitle';
import { RoleTypes } from '../navbar/components/RoleTypes';

export default function MomentCard({ thisCard }) {
    const { setLoader, user, userRoleType, deleteRefresh, setDeleteRefresh, sORm, openNavbarMenuSide, setOpenNavbarMenuSide, snackbar } = useContext(GeneralContext);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const [colorHeart, setColorHeart] = useState(thisCard.favorite);
    const [emailUser, setEmailUser] = useState();
    const [momentsUser, setMomentsUser] = useState();

    useEffect(() => {
        setEmailUser(user.email || '');
        setMomentsUser(thisCard.clientId);
    }, [user]);

    return (
        <GeneralContext.Provider value={{ setAnchorElUser, anchorElUser, setLoader, setColorHeart, colorHeart, setDeleteRefresh, deleteRefresh, emailUser, userRoleType, momentsUser, sORm, openNavbarMenuSide, setOpenNavbarMenuSide, snackbar }}>
            {
                <Card 
                    sx={{ maxWidth: 345 }} 
                    key={thisCard.id} 
                    className='MomentCard'
                >
                    <MomentHeaderCard moment={thisCard} />
                    {
                        (userRoleType === RoleTypes.none) ?
                        <RoleTypesNoneMenu moment={thisCard} /> : 
                        (userRoleType === RoleTypes.user) ?
                        <RoleTypesUserMenu moment={thisCard} /> : 
                        (userRoleType === RoleTypes.business) ?
                        <RoleTypesBusinessMenu moment={thisCard} /> : 
                        (userRoleType === RoleTypes.admin) ?
                        <RoleTypesAdminMenu moment={thisCard} /> : ''
                    }
                    <MomentImgCard moment={thisCard} />
                    <MomentSubtitle moment={thisCard} />
                    <IconsMomentCard moment={thisCard} />
                </Card> 
            }
        </GeneralContext.Provider>
    );
}

