import { useContext } from "react";
import { GeneralContext } from "../../../../../../../App";

export default function NameUserOnMenuNavbarMobile() {
    const { user } = useContext(GeneralContext);

    return (
        <div className='nameOpenMenu'>
            {user.fullName ? user.fullName : 'Moment of Soccer'}
        </div>
    );
}
