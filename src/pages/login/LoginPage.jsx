import { useForm, Controller } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useUserStore } from "../../store/useUserStore";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const defaultValues = {
    email: "",
    password: "",
};

export const LoginPage = () => {
    const setUser = useUserStore((state) => state.setUser);
    const navigate = useNavigate();

    const { control, handleSubmit, formState } = useForm({
        defaultValues,
        mode: "onBlur",
    });

    const { isValid, isDirty } = formState;

    const onLogin = (formData) => {
        setUser(formData.email);
        navigate("/dashboard");
    };

    return (
        <StyledDiv>
            <Typography variant="h1" sx={{ marginBottom: "24px" }}>Log in</Typography>
            <Controller
                name="email"
                rules={{
                    pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                        message: "Invalid email address",
                    },
                    required: "This field is required",
                }}
                control={control}
                render={({ field, fieldState }) => (
                    <Box
                        component="form"
                        sx={{
                            "& > :not(style)": { width: "100%" },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField
                            label="E-mail"
                            variant="filled"
                            type="email"
                            error={!!fieldState.error}
                            helperText={
                                fieldState?.error && fieldState.error.message
                            }
                            {...field}
                        />
                    </Box>
                )}
            />
            <Controller
                name="password"
                rules={{
                    required: "This field is required",
                    minLength: {
                        value: 8,
                        message: "Minimum sign length is 8",
                    },
                }}
                control={control}
                render={({ field, fieldState }) => (
                    <Box
                        component="form"
                        sx={{
                            "& > :not(style)": { width: "100%" },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField
                            label="Password"
                            variant="filled"
                            type="password"
                            error={!!fieldState.error}
                            helperText={
                                fieldState?.error && fieldState.error.message
                            }
                            {...field}
                        />
                    </Box>
                )}
            />
            <StyledButton
                variant={"contained"}
                onClick={handleSubmit(onLogin)}
                disabled={!(isDirty && isValid)}
            >
                LOG IN
            </StyledButton>
            <LinksPlace>
                <Link to="/register">Create account</Link>
                <Link to="/reset-password">Forgot password</Link>
            </LinksPlace>
        </StyledDiv>
    );
};

const StyledDiv = styled.div`
    width: 480px;
    padding: 16px;
    background-color: ${(props) => props.theme.palette.background.paper};
`;

const StyledButton = styled(Button)`
    background-color: ${(props) =>
        props.disabled
            ? props.theme.palette.action.disabledBackground
            : props.theme.palette.primary.main};
    color: ${(props) =>
        props.disabled ? "black" : props.theme.palette.primary.contrastText};
    width: 100%;
    margin: 8px 0 24px;
`;

const LinksPlace = styled.div`
    display: flex;
    justify-content: space-between;
    a {
        color: ${(props) => props.theme.palette.primary.main};
    }
`;
