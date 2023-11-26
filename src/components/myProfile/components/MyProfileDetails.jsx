export default function MyProfileDetails( props ) {

    return (
        <>
            <h1 className='centerDiv'>
                {props.user.firstName} {props.user.middleName} {props.user.lastName}
            </h1>
            <p className="emailAccordion">email: {props.user.email}</p>
            <p>phone: {props.user.phone}</p>
        </>

    );
}