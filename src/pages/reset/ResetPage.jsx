import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export const ResetPage = () => {
    const navigate = useNavigate();

    const { control, handleSubmit, formState } = useForm({
        defaultValues: { email: "" },
        mode: "onBlur",
    });

    const { isValid, isDirty } = formState;

    const onReset = (formData) => {
        console.log(formData);
        navigate("/login");
    };

    return (
        <StyledDiv>
            <Typography variant="h1" sx={{ marginBottom: "24px" }}>
                Reset Password
            </Typography>
            <Controller
                name="email"
                control={control}
                rules={{
                    required: "This field is required",
                    pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: "Invalid email address",
                    },
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
            <StyledButton
                variant={"contained"}
                onClick={handleSubmit(onReset)}
                disabled={!(isDirty && isValid)}
            >
                RESET PASSWORD
            </StyledButton>
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
`;
