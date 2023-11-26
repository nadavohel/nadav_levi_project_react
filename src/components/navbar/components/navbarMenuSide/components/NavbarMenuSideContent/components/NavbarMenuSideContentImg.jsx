import { GeneralContext } from "../../../../../../../App";
import profile1 from "../../../../../../../images/profile1.jpg";
import { useContext } from 'react';

export default function NavbarMenuSideContentImg() {
    const { user } = useContext(GeneralContext);

    return (
        <div className='profileInMenu'>
            <img
                src={`${user.imgUrl}`}
                alt={`${user.fullName}`}
                onError={({ currentTarget }) => {
                    currentTarget.onerror = null;
                    currentTarget.src = profile1;
                }}
            />
        </div>
    );
}
