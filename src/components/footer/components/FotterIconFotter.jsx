import { Tooltip } from '@mui/material';
import { useContext } from 'react';
import { GeneralContext } from '../../../App';
import { PagesFotter } from "../components/PagesFotter";
import LinkFooter from "../components/LinkFooter/LinkFooter";
import { checkPermissions } from "../../navbar/components/RoleTypes";

export default function FotterIconFotter() {
    const { userRoleType, setFotterTooltipBox } = useContext(GeneralContext);

    const tooltipHover = () => {
        setFotterTooltipBox(true);
    };

    const tooltipNotHover = () => {
        setFotterTooltipBox(false);
    };

    return (
        <>
            <div className='iconFotter'>
                {PagesFotter
                    .filter(p =>
                        !p.permissions ||
                        checkPermissions(p.permissions, userRoleType))
                    .map(p => (
                        <Tooltip
                            onMouseOut={tooltipNotHover}
                            onMouseOver={tooltipHover}
                            key={p.route}
                            title={p.title}
                            className='iconFotterHover'
                            placement="top"
                        >
                            <div key={p.route}>
                                <LinkFooter
                                    icon={true}
                                    link={p}
                                    row={p.row}
                                />
                            </div>
                        </Tooltip>))
                }
            </div>
        </>
    );
}