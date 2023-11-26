import { useContext } from "react";
import { GeneralContext } from "../../../../../App";
import { AccordionDetails } from "@mui/material";
import UserAccordionMoments from "./components/UserAccordionMoments";
import UserAccordionRemove from "./components/UserAccordionRemove";
import UserBodyAccordionImg from "./components/UserBodyAccordionImg";
import UserBodyAccordionDetails from "./components/UserBodyAccordionDetails";

export default function UserBodyAccordion( props ) {
    const { allUsers, setAllUsers, setLoader, setUserMomentByAdmin, changeBusinessRefresh, setChangeBusinessRefresh, snackbar } = useContext(GeneralContext);

    return (
        <GeneralContext.Provider value={{ allUsers, setAllUsers, setLoader, setUserMomentByAdmin, changeBusinessRefresh, setChangeBusinessRefresh, snackbar }}>
            <AccordionDetails>
                <UserBodyAccordionDetails userData={props.userData} />
                <br />
                <UserBodyAccordionImg userData={props.userData} />
                <UserAccordionRemove userData={props.userData} />
                {<br />}
                <UserAccordionMoments userData={props.userData} />
            </AccordionDetails>
        </GeneralContext.Provider >
    );
}