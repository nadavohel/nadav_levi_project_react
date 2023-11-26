export default function MyProfileAdreess( props ) {

    return (
        <>
            <p>country: {props.user.country}</p>
            <p>Adreess: {props.user.street} {props.user.houseNumber}, {props.user.city}</p>
            <p>Zip Code: {props.user.zip}</p>
        </>
    );
}