import { useContext, useEffect } from 'react';
import { GeneralContext } from '../../App';
import MyProfileAdreess from './components/MyProfileAdreess';
import MyProfileImg from './components/MyProfileImg';
import MyProfileDetails from './components/MyProfileDetails';
import MyProfileExitSign from './components/MyProfileExitSign';

export default function MyProfile() {
    const { user, sORm, profilePage } = useContext(GeneralContext);
    
    useEffect(() => {
        const MyProfileId = document.getElementById('profileContainerId');
        if (profilePage) {
            MyProfileId.style.opacity = 1;
            MyProfileId.style.zIndex = 6000;
        } else {
            MyProfileId.style.opacity = 0;
            MyProfileId.style.zIndex = -1;
        }
    }, [profilePage]);

    return (
        <>
            {
                (user) ? 
                    <div 
                        className='profileContainer'
                        id="profileContainerId"
                    >
                        <div className='profileBoc'>
                            <MyProfileExitSign />
                            <MyProfileDetails user={user} />
                            <MyProfileImg user={user} />
                            <MyProfileAdreess user={user} />

                        </div>
                    </div> : 
                    <div className='profileContainer'></div>
            }
        </>
    );
}