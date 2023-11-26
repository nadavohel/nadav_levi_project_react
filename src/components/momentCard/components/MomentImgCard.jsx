import imgMoment from "../../../images/alternaiveImageMoment/Slide2.jpg";

export default function MomentImgCard( props ) {

    return (
        <div className="imgMoment">
            <img
                alt={props.moment.imgAlt}
                src={props.moment.imgUrl}
                onError={({ currentTarget }) => {
                    currentTarget.onerror = null;
                    currentTarget.src = imgMoment;
                }}
            />
        </div>
        
    )
}