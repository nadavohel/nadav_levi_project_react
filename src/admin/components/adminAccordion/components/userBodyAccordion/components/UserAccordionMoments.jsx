import { useContext } from "react";
import { GeneralContext } from "../../../../../../App";
import { useNavigate } from "react-router-dom";

export default function UserAccordionMoments( props ) {
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
        <div
            onClick={() =>
                showAllThisUserMoments(props.userData.email, props.userData.firstName)
            }
        >
            <div className="lonkToUserMoment">
                Show All User Moments
            </div>
        </div>
    );
}