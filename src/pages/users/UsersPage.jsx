import { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import styled from "@emotion/styled";
import { useAppBarState } from "../../contexts/appBarContext/useAppBarState";

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

    const { setAppBarSettings, resetAppBar } = useAppBarState();

    useEffect(() => {
        setAppBarSettings((prevState) => ({
            ...prevState,
            backgroundColor: "rgb(48, 48, 48)",
            menuIconColor: "rgba(255, 255, 255, 0.56)",
            showIconButton: true,
            title: "Users Management",
            subtitle: true,
            height: "74px",
            margin: "24px 0",
            titleTypography: "h1",
            alignSelf: "flex-start",
            borderBottom: "none",
        }));

        return () => {
            resetAppBar();
        };
    }, [setAppBarSettings, resetAppBar]);

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
        <div style={{ height: "100%" }}>
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
                        sx={{
                            "& .MuiDataGrid-row": {
                                backgroundColor: "rgba(255,255,255,0.08)",
                                "&:hover": {
                                    backgroundColor:
                                        "rgba(144, 202, 249, 0.17)",
                                },
                            },
                            "& .MuiDataGrid-row.Mui-selected": {
                                backgroundColor: "rgba(144, 202, 249, 0.17)",  
                            },
                            "& .MuiDataGrid-columnHeader": {
                                backgroundColor: "rgba(255,255,255,0.08)",
                            },

                            "& .MuiDataGrid-checkboxInput": {
                                color: "white",
                                "&:checked": { color: "blue" },
                            },
                            "& .Mui-checked": {
                                color: "primary.main"
                            },
                        }}
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
