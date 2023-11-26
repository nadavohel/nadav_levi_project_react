import { useContext } from 'react';
import { GeneralContext } from '../../App';
import FotterIconFotter from "./components/FotterIconFotter";
import FotterCopyright from "./components/FotterCopyright";
import FotterlinkFotter from './components/FotterlinkFotter';

export default function Footer() {
    const { fotterTooltipBox } = useContext(GeneralContext);

    return (
        <>
            <div className={
                (fotterTooltipBox) ?
                    'fotterTooltipBox fotterTooltipColor' :
                    'fotterTooltipBox'
            }>
            </div>
            <footer>
                <div className='footerContainer'>
                    <FotterIconFotter />
                    {<FotterlinkFotter />}
                    <FotterCopyright />
                </div>
            </footer>
        </>
    );
}