import { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Typography } from "@mui/material";
import styled from "@emotion/styled";

const URL = "https://jsonplaceholder.typicode.com/users";
const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
        field: "avatar",
        headerName: "Avatar",
        width: 100,
        sortable: false,
        filterable: false,
    },
    { field: "firstName", headerName: "First name", width: 297.75 },
    { field: "lastName", headerName: "Last name", width: 297.75 },
    {
        field: "email",
        headerName: "E-mail",
        width: 297.75,
    },
    {
        field: "action",
        headerName: "",
        width: 100,
        sortable: false,
        filterable: false,
    },
];
export const UsersPage = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [isError, setError] = useState(false);

    useEffect(() => {
        fetch(URL)
            .then((response) => response.json())
            .then((data) => {
                const formattedData = data.map((user) => ({
                    id: user.id,
                    avatar: "",
                    firstName: user.name.split(" ")[0],
                    lastName: user.name.split(" ")[1],
                    email: user.email,
                    action: "icon",
                }));
                setUsers(formattedData);
            })
            .catch((e) => setError(true))
            .finally(() => setLoading(false));
    }, []);

    return (
        <div>
            <Typography variant="h1">Users Management</Typography>
            {isLoading && <div>Loading...</div>}
            {isError && <div>Error</div>}
            {!isLoading && !isError && users !== null && (
                <div style={{ width: "100%" }}>
                    <StyledDataGrid
                        rows={users}
                        columns={columns}
                        initialState={{
                            pagination: {
                                paginationModel: { pageSize: 10 },
                            },
                        }}
                        checkboxSelection
                        hideFooter
                        disableExtendRowFullWidth
                        autoHeight
                    />
                </div>
            )}
        </div>
    );
};

const StyledDataGrid = styled(DataGrid)({
    "& .MuiDataGrid-cell": {
        color: "rgb(255, 255, 255)",
    },
    "& .MuiDataGrid-columnHeaderTitle": {
        color: "rgb(255, 255, 255)",
    },
});
