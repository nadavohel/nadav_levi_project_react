export default function UserTableDetails( props ) {

    return (
        <>
            <td>{props.userData.id}</td>
            <td>{props.userData.firstName}</td>
            <td>{props.userData.lastName}</td>
            <td>{props.userData.middleName}</td>
            <td>{props.userData.email}</td>
        </>
    );
}