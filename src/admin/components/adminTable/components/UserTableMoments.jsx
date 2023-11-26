import { useContext } from "react";
import { GeneralContext } from "../../../../App";
import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom";

export default function UserTableMoments( props ) {
    const { setUserMomentByAdmin } = useContext(GeneralContext);
    const navigate = useNavigate();

    const showAllThisUserMoments = (emaila, firstNamee) => {
        setUserMomentByAdmin({
            email: emaila,
            firstName: firstNamee,
        });
        navigate('/user-moments-by-id');
    };

    return (
        <td>
            <Button
                fullWidth
                variant="contained"
                sx={{ width: '160px', height: '36px' }}
                className='linkButton'
                onClick={
                    () => showAllThisUserMoments(
                        props.userData.email,
                        props.userData.firstName
                    )}
            >
                <div className="remove">All Moments</div>
            </Button>
        </td>
    );
}