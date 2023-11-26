import { useContext } from "react";
import { GeneralContext } from "../../../App";
import LinkButton from "../../../components/LinkButton";
import { RoleTypes } from "../../../components/navbar/components/RoleTypes";

export default function HomePageLinkButtonSignUp() {
    const { userRoleType } = useContext(GeneralContext);

    return (
        <>
            {
                (userRoleType === RoleTypes.none) ?
                    <div className={'centerGrid'}>
                        <LinkButton
                            width={'300px'}
                            goTo={"/signup"}
                            className={'centerGrid'}
                        >
                            Sign up for free
                        </LinkButton>
                    </div > : ''
            }
        </>
    );
}