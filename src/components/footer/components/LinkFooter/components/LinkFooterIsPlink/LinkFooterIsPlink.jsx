import { useContext } from 'react';
import LinkFooterIsPLContainer from './components/LinkFooterIsPLContainer';
import { GeneralContext } from '../../../../../../App';
import { RoleTypes } from '../../../../../navbar/components/RoleTypes';

export default function LinkFooterIsPlink(props) {
    const { userRoleType } = useContext(GeneralContext);

    return (
        <>
            {
                (
                    (props.link.title === 'Home') ||
                    (props.link.title === 'Login') ||
                    (
                        (props.link.title === 'My Moments') &&
                        (userRoleType === RoleTypes.admin)
                    )
                ) ?
                    <LinkFooterIsPLContainer link={props.link} /> :
                    <>
                        {
                            (
                                (
                                    (userRoleType === RoleTypes.user) ||
                                    (userRoleType === RoleTypes.business)
                                ) &&
                                (props.link.title === 'Favorite') &&
                                (props.row === 2)
                            ) ?
                                <LinkFooterIsPLContainer link={props.link} /> :
                                (
                                    (
                                        (userRoleType === RoleTypes.user) &&
                                        (props.link.title != 'Favorite')
                                    ) ||
                                    (
                                        (userRoleType != RoleTypes.user) &&
                                        (userRoleType === RoleTypes.business) &&
                                        (props.link.title != 'Favorite')
                                    ) ||
                                    (userRoleType === RoleTypes.none) ||
                                    (userRoleType === RoleTypes.admin)
                                ) ?
                                    <>
                                        <p className='pBetween'>:</p>
                                        <LinkFooterIsPLContainer link={props.link} />
                                    </> : ''
                        }
                    </>
            }
        </>
    );
}



{/* 
<>
    {
        (props.icon) ?
            <>
                {
                    <LinkFooterIsIcon
                        icon={true}
                        link={props.link}
                        row={props.row}
                    />
                }
            </> :
            <LinkFooterIsPlink link={props.link} />
    }
</> 
*/}