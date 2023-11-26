import { useContext } from 'react';
import { GeneralContext } from '../../../App';
import { PagesFotter } from "./PagesFotter";
import LinkFooter from "./LinkFooter/LinkFooter";
import { RoleTypes, checkPermissions } from "../../navbar/components/RoleTypes";

export default function FotterlinkFotter() {
    const { userRoleType } = useContext(GeneralContext);

    return (
        <>
            <div className='linkFotter'>
                {PagesFotter
                    .filter(p =>
                        !p.permissions ||
                        checkPermissions(p.permissions, userRoleType))
                    .filter(p =>
                        p.row === 1).
                    map(p => (
                        <LinkFooter
                            key={p.route}
                            icon={false}
                            link={p}
                            row={p.row}
                        />
                    ))
                }
            </div>
            <div className='linkFotter'>
                {
                    (userRoleType === RoleTypes.user) ?
                        <LinkFooter
                            key={PagesFotter[5].route}
                            icon={false}
                            link={PagesFotter[5]}
                            row={2}
                        /> : (userRoleType === RoleTypes.business) ?
                            <>
                                <LinkFooter
                                    key={PagesFotter[5].route}
                                    icon={false}
                                    link={PagesFotter[5]}
                                    row={2}
                                />
                                <LinkFooter
                                    key={PagesFotter[6].route}
                                    icon={false}
                                    link={PagesFotter[6]}
                                    row={2}
                                />
                            </>
                            :
                            PagesFotter
                                .filter(p =>
                                    !p.permissions ||
                                    checkPermissions(p.permissions, userRoleType))
                                .filter(p => p.row === 2)
                                .map(p => (
                                    <LinkFooter
                                        key={p.route}
                                        icon={false}
                                        link={p}
                                        row={p.row}
                                    />
                                ))
                }
            </div>
        </>
    );
}