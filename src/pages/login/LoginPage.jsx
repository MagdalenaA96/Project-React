import { useForm, Controller } from "react-hook-form";

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
                            <span>{fieldState.error.message}</span>
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
                            <span>{fieldState.error.message}</span>
                        )}
                    </div>
                )}
            />
            <button onClick={handleSubmit(onLogin)}>LOG IN</button>
            <p>Create account</p>
            <p>Forgot password</p>
        </div>
    );
};
