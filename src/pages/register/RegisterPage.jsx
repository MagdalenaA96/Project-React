import { useForm, Controller } from "react-hook-form";

const defaultValues = {
    email: "",
    password: "",
    confirmPassword: "",
};

export const RegisterPage = () => {
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
                            <span>{fieldState.error.message}</span>
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
                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])/,
                        message:
                            "Password requires upper, lower, and special character",
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
                            <span>{fieldState.error.message}</span>
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
                            <span>{fieldState.error.message}</span>
                        )}
                    </div>
                )}
            />
            <button onClick={handleSubmit(onRegister)}>
                CREATE AN ACCOUNT
            </button>
            <p>Log in</p>
        </div>
    );
};
