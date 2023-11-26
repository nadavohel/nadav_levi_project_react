import { HomePageGallery } from "../../../components/GallerySlider";

export default function HomePageGalleryContainer() {

    return (
        <>
            <h1 className='h1SliderSecondContainer'>
                The most exciting moments captured this month !!!
            </h1>
            <div className="gallerySliderContainer">
                <div className="sliderSecondContainer">
                    <HomePageGallery />
                </div>
            </div>
        </>
    );
}