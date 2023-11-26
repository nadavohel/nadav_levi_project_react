import imgProfile from "../../../../images/profile1.jpg";

export default function ImgUserCard( props ) {

    return (
        <>
            <img
                alt={props.userData.imgAlt}
                src={props.userData.imgUrl}
                onError={({ currentTarget }) => {
                    currentTarget.onerror = null;
                    currentTarget.src = imgProfile;
                }}
                height="250"
                width="100%"
            />
        </>
    );
}