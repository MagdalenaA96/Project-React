import { useForm, Controller } from "react-hook-form";
import { Link } from "react-router-dom";

const defaultValues = {
    email: "",
    password: "",
};

export const LoginPage = () => {
    const { control, handleSubmit } = useForm({
        defaultValues,
        mode: "onBlur",
    });

    const onLogin = (formData) => {
        console.log(formData);
    };

    return (
        <div>
            <h1>Log in</h1>
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
                rules={{
                    required: "This field is required",
                    minLength: {
                        value: 8,
                        message: "Minimum sign length is 8",
                    },
                }}
                control={control}
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
            <button onClick={handleSubmit(onLogin)}>LOG IN</button>
            <Link to="/register">Create account</Link>
            <Link to="/reset-password">Forgot password</Link>
        </div>
    );
};
