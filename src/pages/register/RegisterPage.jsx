import { useForm, Controller } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const defaultValues = {
    email: "",
    password: "",
    confirmPassword: "",
};

export const RegisterPage = () => {
    const navigate = useNavigate();

    const { control, watch, handleSubmit, formState } = useForm({
        defaultValues,
        mode: "onBlur",
    });

    const { isValid, isDirty } = formState;

    const validatePasswordMatch = (value) => {
        const password = watch("password");
        if (value !== password) {
            return "Passwords do not match";
        }
        return true;
    };

    const onRegister = (formData) => {
        console.log(formData);
        navigate("/login");
    };

    return (
        <StyledDiv>
            <Typography variant="h1">Sign Up</Typography>
            <Controller
                name="email"
                control={control}
                rules={{
                    pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                        message: "Invalid email address",
                    },
                    required: "This field is required",
                }}
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
                control={control}
                rules={{
                    minLength: {
                        value: 8,
                        message: "Minimum sign length is 8",
                    },
                    pattern: {
                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9])/,
                        message:
                            "Password requires upper, lower, special character and number",
                    },
                    required: "This field is required",
                }}
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
            <Controller
                name="confirmPassword"
                control={control}
                rules={{
                    minLength: {
                        value: 8,
                        message: "Minimum sign length is 8",
                    },
                    required: "This field is required",
                    validate: validatePasswordMatch,
                }}
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
                            label="Confirm Password"
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
                onClick={handleSubmit(onRegister)}
                disabled={!(isDirty && isValid)}
            >
                CREATE AN ACCOUNT
            </StyledButton>
            <LinkPlace>
                <Link to="/login">Log in</Link>
            </LinkPlace>
        </StyledDiv>
    );
};

const LinkPlace = styled.div`
    display: flex;
    justify-content: center;
    a {
        color: ${(props) => props.theme.palette.primary.main};
    }
`;

const StyledDiv = styled.div`
    width: 480px;
    padding: 16px;
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
