import { useContext, useEffect } from "react";
import { GeneralContext } from "../../../App";

import A01 from "../../../images/slideGalletry/bigImages/Gallery011.jpg";
import A02 from "../../../images/slideGalletry/bigImages/Gallery014.jpg";
import A03 from "../../../images/slideGalletry/bigImages/Gallery003.jpg";
import A04 from "../../../images/slideGalletry/bigImages/Gallery016.jpg";
import A05 from "../../../images/slideGalletry/bigImages/Gallery005.jpg";

export default function GalleyCordionImg( props ) {
    const { setPicSelected, picSelected } = useContext(GeneralContext);

    const selectedPic = (pic) => {
        if (pic == picSelected) {
            setPicSelected('0');
        } else {
            setPicSelected(pic);
        }
    };

    return (
        <div
            onClick={() => { selectedPic(props.img) }}
            className={
                picSelected === props.img ?
                    `imageSliderGallery imageSliderGallery${props.img} imageSliderGalleryShake` :
                    `imageSliderGallery imageSliderGallery${props.img}`
            }
            style={{ backgroundImage:
                        props.img === '1' ? `url(${A01})` : 
                        props.img === '2' ? `url(${A02})` : 
                        props.img === '3' ? `url(${A03})` : 
                        props.img === '4' ? `url(${A04})` : `url(${A05})`}}
        >
        </div>
    );
}