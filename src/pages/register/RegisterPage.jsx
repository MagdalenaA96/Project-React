import { useForm, Controller } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

const defaultValues = {
    email: "",
    password: "",
    confirmPassword: "",
};

export const RegisterPage = () => {
    const navigate = useNavigate();

    const { control, watch, handleSubmit } = useForm({
        defaultValues,
        mode: "onBlur",
    });

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
        <div>
            <h1>Sign Up</h1>
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
                    <div>
                        <input type="email" placeholder="E-mail" {...field} />
                        {fieldState?.error?.message && (
                            <p>{fieldState.error.message}</p>
                        )}
                    </div>
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
                    <div>
                        <input
                            type="password"
                            placeholder="Password"
                            {...field}
                        />
                        {fieldState?.error?.message && (
                            <p>{fieldState.error.message}</p>
                        )}
                    </div>
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
                    <div>
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            {...field}
                        />
                        {fieldState?.error?.message && (
                            <p>{fieldState.error.message}</p>
                        )}
                    </div>
                )}
            />
            <button onClick={handleSubmit(onRegister)}>
                CREATE AN ACCOUNT
            </button>
            <Link to="/login">Log in</Link>
        </div>
    );
};
