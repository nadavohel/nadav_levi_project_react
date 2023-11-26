
import { useContext } from "react";
import { GeneralContext } from "../../../App";
import UserTableDetails from "./components/UserTableDetails";
import UserTableBusiness from "./components/UserTableBusiness";
import UserTableRemove from "./components/UserTableRemove";
import UserTableMoments from "./components/UserTableMoments";

export default function AdminTable() {
    const { allUsers, setAllUsers, setLoader, setUserMomentByAdmin, SearchInput, changeBusinessRefresh, setChangeBusinessRefresh, snackbar } = useContext(GeneralContext);

    return (
        <GeneralContext.Provider value={{ setAllUsers, allUsers, setLoader, setUserMomentByAdmin, changeBusinessRefresh, setChangeBusinessRefresh, snackbar }}>
            <div className="table">
                <div>
                    <table>
                        <thead>
                            <tr >
                                <th className='th'>id</th>
                                <th className='th'>First Name</th>
                                <th className='th'>Last name</th>
                                <th className='th'>Middle name</th>
                                <th className='th'>email</th>
                                <th className='th'>business</th>
                                <th className='th'>Remove User</th>
                                <th className='th'>Show User Moments</th>
                            </tr>
                        </thead>
                        <tbody className='rowColor'>
                            {
                                allUsers.filter(
                                    s => `
                                        ${s.id} 
                                        ${s.firstName.toLowerCase()}
                                        ${s.lastName.toLowerCase()}
                                        ${s.middleName.toLowerCase()}
                                        ${s.email.toLowerCase()}
                                        ${s.business}
                                    `
                                .includes(SearchInput.toLowerCase())
                                ).map((user) =>
                                    <tr key={user.id}>
                                        <UserTableDetails userData={user} />
                                        <UserTableBusiness userData={user} />
                                        <UserTableRemove userData={user} />
                                        <UserTableMoments userData={user} />
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </GeneralContext.Provider>
    )
}