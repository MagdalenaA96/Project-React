import { useState, useEffect } from "react";

const URL = "https://jsonplaceholder.typicode.com/users";

export const UsersPage = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [isError, setError] = useState(false);

    useEffect(() => {
        fetch(URL)
            .then((response) => response.json())
            .then((data) => {
                setUsers(data);
            })
            .catch((e) => setError(true))
            .finally(() => setLoading(false));
    }, []);

    return (
        <div>
            <h1>Users Management</h1>
            <ul>
                {isLoading && <div>Loading...</div>}
                {isError && <div>Error</div>}
                {!isLoading &&
                    !isError &&
                    users !== null &&
                    users.map((user) => <li key="user.id">{user.name}</li>)}
            </ul>
        </div>
    );
};
