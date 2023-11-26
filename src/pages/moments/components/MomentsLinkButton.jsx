import { useContext } from "react";
import { GeneralContext } from "../../../App";
import LinkButton from "../../../components/LinkButton";
import { RoleTypes } from "../../../components/navbar/components/RoleTypes";

export default function MomentsLinkButton() {
    const { userRoleType } = useContext(GeneralContext);

    return (
        <>
            {
                ((userRoleType === RoleTypes.business) ||
                    (userRoleType === RoleTypes.admin)) ?
                    <div className={'centerGrid'}>
                        <LinkButton
                            width={'300px'}
                            goTo={"/add-moment"}
                        >
                            Add Your Moment!
                        </LinkButton>
                    </div> : ''
            }
        </>
    )
}