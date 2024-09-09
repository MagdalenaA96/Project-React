import { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useAppBarState } from "../../contexts/appBarContext/useAppBarState";
import Avatar from "@mui/material/Avatar";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const URL = "https://jsonplaceholder.typicode.com/users";
const columns = [
    { field: "id", headerName: "ID", width: 297.75 },
    {
        field: "avatar",
        headerName: "Avatar",
        width: 100,
        sortable: false,
        filterable: false,
        renderCell: (params) => (
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    height: "100%",
                }}
            >
                <Avatar
                    {...params.row.avatarProps}
                    sx={{
                        backgroundColor: "rgba(255, 255, 255, 0.28)",
                        color: "black",
                    }}
                />
            </div>
        ),
    },
    { field: "firstName", headerName: "First name", width: 297.75 },
    { field: "lastName", headerName: "Last name", width: 297.75 },
    {
        field: "email",
        headerName: "E-mail",
        width: 297.75,
        renderCell: (params) => (
            <div
                style={{
                    display: "inline-block",
                    lineHeight: "1.2",
                    height: "auto",
                    padding: "4px 12px",
                    backgroundColor: "rgba(255, 255, 255, 0.16)",
                    borderRadius: "16px",
                }}
            >
                {params.value}
            </div>
        ),
    },
    {
        field: "action",
        headerName: "",
        width: 100,
        sortable: false,
        filterable: false,
        renderCell: (params) => params.row.action,
    },
];

function stringAvatar(name) {
    return {
        children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
}

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
            title: "Users management",
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
    }, []);

    useEffect(() => {
        fetch(URL)
            .then((response) => response.json())
            .then((data) => {
                const formattedData = data.map((user) => ({
                    id: user.id,
                    avatarProps: stringAvatar(user.name),
                    firstName: user.name.split(" ")[0],
                    lastName: user.name.split(" ")[1],
                    email: user.email,
                    action: (
                        <MoreVertIcon
                            style={{
                                height: "100%",
                                display: "flex",
                                alignItems: "center",
                                color: "rgba(255, 255, 255, 0.6)",
                            }}
                        />
                    ),
                }));
                setUsers(formattedData);
            })
            .catch((e) => setError(true))
            .finally(() => setLoading(false));
    }, []);

    return (
        <div
            style={{
                height: "100%",
                display: "flex",
                width: "100vw",
                padding: "0 24px",
            }}
        >
            {isLoading && <div>Loading...</div>}
            {isError && <div>Error</div>}
            {!isLoading && !isError && users !== null && (
                <div style={{ width: "100%" }}>
                    <DataGrid
                        rows={users}
                        columns={columns}
                        rowHeight={72}
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
                            width: "100%",
                            border: "none",
                            "--DataGrid-rowBorderColor":
                                "rgba(255, 255, 255, 0.15)",
                            "& .MuiDataGrid-rowHeight": { height: "72px" },
                            "& .MuiDataGrid-row": {
                                backgroundColor: "rgba(255,255,255,0.08)",
                                color: "rgba(255,255,255, 1)",
                                fontWeight: "400",
                                letterSpacing: "0.15px",
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
                            "& .MuiDataGrid-columnHeaderTitle": {
                                color: "rgb(255, 255, 255)",
                                fontWeight: "500",
                                letterSpacing: "0.17px",
                            },

                            "& .MuiDataGrid-checkboxInput": {
                                color: "rgba(255,255,255,0.7)",
                            },
                            "& [data-testid='TripleDotsVerticalIcon'], & .MuiDataGrid-sortIcon":
                                {
                                    fill: "rgba(255, 255, 255, 0.5)",
                                },
                        }}
                    />
                </div>
            )}
        </div>
    );
};
