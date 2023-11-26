import { useContext } from "react";
import { GeneralContext } from "../../../../../../App";
import { Button } from "@mui/material";

export default function UserBodyAccordionDetails( props ) {
    const { allUsers, setAllUsers, changeBusinessRefresh, setChangeBusinessRefresh, setLoader, snackbar } = useContext(GeneralContext);

    const changeBusiness = ((id) => {
        const switchBusiness = allUsers.find(client => client.id === props.userData.id);
        switchBusiness.business = !switchBusiness.business;
        const name = `${switchBusiness.firstName} ${switchBusiness.lastName}`;

        setLoader(true);
        fetch(`https://api.shipap.co.il/admin/clients/${id}?token=e2cbbb61-7346-11ee-8f3c-14dda9d4a5f0`, {
            credentials: 'include',
            method: 'PUT',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(switchBusiness),
        })
        .then(() => {
            setAllUsers([...allUsers.filter(s => s.id != 373)]);
            setLoader(false);
            setChangeBusinessRefresh(!changeBusinessRefresh)
            if (switchBusiness.business) {
                snackbar(name + ' he is Business user');
            } else {
                snackbar(name + ' he is now a regular user');
            }
        })
        .catch(err => snackbar(err.message));
    })

    return (
        <div className='centerTypography'>
            <h1>
                {props.userData.firstName} {props.userData.middleName} {props.userData.lastName}
            </h1>
            <p><span className="bold">Id:</span> {props.userData.id}</p>
            <p className="emailAccordion"><span className="bold">Email:</span> {props.userData.email}</p>
            <p><span className="bold">Phone:</span> {props.userData.phone}</p>
            <p><span className="bold">Country:</span> {props.userData.country}</p>
            <p><span className="bold">Adreess:</span> {props.userData.street} {props.userData.houseNumber}, {props.userData.city}</p>
            <p><span className="bold">Zip Code:</span> {props.userData.zip}</p>
            <Button
                fullWidth
                variant="contained"
                sx={{ width: '100px' }}
                onClick={(ev) => { changeBusiness(props.userData.id) }}
            >
                { props.userData.business === true ? 'Business' : 'user' }
            </Button>
        </div>
    );
}