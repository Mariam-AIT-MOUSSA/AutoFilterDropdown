import { useEffect, useState } from "react";
import AutoFilterDropDown from "../utilities/autoFilterDropdown";

export default function UsersDropdown() {

    const [usersList, setUsersList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(() => {
        async function fetchUsers() {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();
            if (data) {
                setUsersList(data);
                setIsLoading(false);
            }
        }

        fetchUsers();
    }, []);

    function onValueChange(selectedUser) {
        setSelectedUser(selectedUser)
    }

    if (isLoading) {
        return <p>Loading data... </p>
    }

    return (
        <>
            <AutoFilterDropDown data={usersList} fieldName={'name'} valueChange={onValueChange}></AutoFilterDropDown>
            <br />
        </>
    )
}