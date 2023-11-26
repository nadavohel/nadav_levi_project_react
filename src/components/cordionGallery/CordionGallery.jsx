import { useState } from 'react';
import { GeneralContext } from '../../App';
import GalleyCordionImg from './components/GalleyCordionImg';

export default function CordionGallery() {
    const [picSelected, setPicSelected] = useState('0');

    return (
        <GeneralContext.Provider value={{ setPicSelected, picSelected }}>
            <div className="containerSlider">
                <div className="galleryBox">
                    <GalleyCordionImg img='1' />
                    <GalleyCordionImg img='2' />
                    <GalleyCordionImg img='3' />
                    <GalleyCordionImg img='4' />
                    <GalleyCordionImg img='5' />
                </div>
            </div>
        </GeneralContext.Provider>
    );
}