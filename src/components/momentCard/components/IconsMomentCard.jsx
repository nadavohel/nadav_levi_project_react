import CardActions from '@mui/material/CardActions';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useContext } from 'react';
import { RiClipboardFill, RiFileEditFill, RiFileExcel2Fill } from "react-icons/ri";
import LinkMomentIcon from './LinkMomentIcon';
import { GeneralContext } from '../../../App';
import { RoleTypes } from '../../navbar/components/RoleTypes';

export default function IconsMomentCard ( props ) {
    const { colorHeart, emailUser, userRoleType } = useContext(GeneralContext);

    return (
        <CardActions 
            disableSpacing 
            className='iconsMomentCardContainer'
        >
            {
                (userRoleType != RoleTypes.none) ?
                    <LinkMomentIcon
                        goTo={''}
                        name={colorHeart ? 'Remove from favorite' : 'Add to favorite'}
                        moment={props.moment}
                    >
                        <FavoriteIcon sx={{ color: colorHeart ? 'red' : 'rgba(0, 0, 0, 0.54)' }} />
                    </LinkMomentIcon> : ''
            }
            <LinkMomentIcon
                goTo={`/card-moment/${props.moment.id}`}
                name={"Read More"}
                moment={props.moment}
            >
                <RiClipboardFill style={{ fontSize: '28px' }} />
            </LinkMomentIcon>
            {
                (emailUser === props.moment.email) ?
                    <LinkMomentIcon
                        goTo={`/edit-moment/${props.moment.id}`}
                        name={"Edit"}
                        moment={props.moment}
                    >
                        <RiFileEditFill style={{ fontSize: '28px' }} />
                    </LinkMomentIcon> : ''
            }
            {
                ((emailUser === props.moment.email) ||(userRoleType === RoleTypes.admin)) ?
                    <LinkMomentIcon
                        goTo={''}
                        name={"Delete"}
                        moment={props.moment}
                    >
                        <RiFileExcel2Fill style={{ fontSize: '28px' }} />
                    </LinkMomentIcon> : ''
            }
        </CardActions>
    )
}
