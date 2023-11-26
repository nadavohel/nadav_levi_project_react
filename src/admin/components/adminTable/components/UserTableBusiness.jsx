import { useContext } from "react";
import { GeneralContext } from "../../../../App";
import { Button } from "@mui/material"

export default function UserTableBusiness( props ) {
    const { setAllUsers, allUsers, setLoader, changeBusinessRefresh, setChangeBusinessRefresh, snackbar } = useContext(GeneralContext);

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
            setChangeBusinessRefresh(!changeBusinessRefresh);
            if (switchBusiness.business) {
                snackbar(name + ' he is Business user');
            } else {
                snackbar(name + ' he is now a regular user');
            }
        })
        .catch(err => snackbar(err.message));
    })

    return (
        <td>
            <Button
                fullWidth
                variant="contained"
                sx={{ width: '100px', height: '36px' }}
                onClick={() => { changeBusiness(props.userData.id) }}
                className='linkButton'
            >
                {props.userData.business === true ? 'Business' : 'user'}
            </Button>
        </td>
    );
}