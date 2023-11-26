import imgProfile from "../../../../../../images/profile1.jpg";

export default function UserBodyAccordionImg( props ) {

    return (
        <div className="imgAccordionContainer">
            <img
                alt={props.userData.imgAlt}
                src={props.userData.imgUrl}
                onError={({ currentTarget }) => {
                    currentTarget.onerror = null;
                    currentTarget.src = imgProfile;
                }}
            />
        </div>
    );
}