import { useContext } from "react";
import { GeneralContext } from "../../../App";
import Accordion from '@mui/material/Accordion';
import UserHeaderAccordion from "./components/UserHeaderAccordion";
import UserBodyAccordion from "./components/userBodyAccordion/UserBodyAccordion";

export default function AdminAccordion() {
    const { allUsers, setAllUsers, setLoader, setUserMomentByAdmin, changeBusinessRefresh, setChangeBusinessRefresh, SearchInput, snackbar } = useContext(GeneralContext);

    return (
        <GeneralContext.Provider value={{ allUsers, setAllUsers, setLoader, setUserMomentByAdmin, changeBusinessRefresh, setChangeBusinessRefresh, snackbar }}>
            <div>
                <br />
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
                        <div key={user.id} className='accordionContainer'>
                            <Accordion>
                                <UserHeaderAccordion userData={user} />
                                <UserBodyAccordion userData={user} />
                            </Accordion>
                        </div>
                    )
                }
            </div>
        </GeneralContext.Provider >
    );
}