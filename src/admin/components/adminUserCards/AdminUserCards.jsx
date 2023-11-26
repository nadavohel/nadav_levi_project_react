import { Card } from "@mui/material"
import { useContext, useState } from "react";
import { GeneralContext } from "../../../App";
import UserHeaderCard from "./components/UserHeaderCard";
import MenuUserCard from "./components/MenuUserCard";
import UserCardAdress from "./components/UserCardAdress.jsx";
import UserCardIconsMenu from "./components/UserCardIconsMenu.jsx";
import ImgUserCard from "./components/ImgUserCard.jsx";

export default function AdminUserCards() {
    const { allUsers, setAllUsers, setLoader, setUserMomentByAdmin, changeBusinessRefresh, setChangeBusinessRefresh, openNavbarMenuSide, setOpenNavbarMenuSide, SearchInput, snackbar } = useContext(GeneralContext);
    const [anchorElUser, setAnchorElUser] = useState(null);

    return (
        <GeneralContext.Provider value={{ setAnchorElUser, anchorElUser, setLoader, setUserMomentByAdmin, setAllUsers, allUsers, changeBusinessRefresh, setChangeBusinessRefresh, openNavbarMenuSide, setOpenNavbarMenuSide, snackbar }}>
            <div className="centerGrid">
                <div className="containerMomentCard adminUserCards">
                    {
                        allUsers.filter(
                            s => `
                                ${s.id} 
                                ${s.firstName.toLowerCase()}
                                ${s.lastName.toLowerCase()}
                                ${s.middleName.toLowerCase()}
                                ${s.email.toLowerCase()}
                                ${s.business}
                            `
                        .includes(SearchInput.toLowerCase())
                        ).map((user) =>
                            <div key={user.id} className="userCardShadow">
                                <Card sx={{ maxWidth: 345 }}>
                                    <UserHeaderCard userData={user} />
                                    <MenuUserCard userData={user} />
                                    <ImgUserCard userData={user} />
                                    <UserCardAdress userData={user} />
                                    <UserCardIconsMenu userData={user} />
                                </Card>
                            </div>
                        )
                    }
                </div>
            </div>
        </GeneralContext.Provider >
    );
}