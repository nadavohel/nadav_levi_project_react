import { useContext } from 'react';
import { GeneralContext } from '../../../App';

export default function MyProfileExitSign() {
    const { setProfilePage } = useContext(GeneralContext);

    const MyProfileOff = (() => {
        setProfilePage(false);
    });

    return (
        <div
            className="remove removePos"
            onClick={MyProfileOff}
        >
            ❌
        </div>
    );
}