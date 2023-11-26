import imgMoment from "../../../images/profile1.jpg";
export default function MyProfileImg( props ) {

    return (
        <div className="imgAccordionContainer">
            <img
                src={props.user.imgUrl}
                alt={props.user.imgAlt}
                onError={({ currentTarget }) => {
                    currentTarget.onerror = null;
                    currentTarget.src = imgMoment;
                }}
            />
        </div>
    );
}