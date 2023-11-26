import React from "react";
import ImageGallery from "react-image-gallery";
import { ImageGalleryMain } from "../images/ImageGalleryMain";

export class HomePageGallery extends React.Component {
    render() {
        return <ImageGallery items={ImageGalleryMain} />;
    }
}