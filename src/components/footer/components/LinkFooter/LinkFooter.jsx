import LinkFooterIsIcon from './components/LinkFooterIsIcon';
import LinkFooterIsPlink from './components/LinkFooterIsPlink/LinkFooterIsPlink';

export default function LinkFooter( props ) {

    return (
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
                                <LinkFooterIsPlink 
                                    link={props.link} 
                                    row={props.row} 
                                />
                        }
                    </> 
            }
        </>
    );
}