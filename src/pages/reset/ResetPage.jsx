import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export const ResetPage = () => {
    const navigate = useNavigate();

    const { control, handleSubmit } = useForm({
        defaultValues: { email: "" },
        mode: "onBlur",
    });

    const onReset = (formData) => {
        console.log(formData);
        navigate("/login")
    };

    return (
        <div>
            <h1>Reset Password</h1>
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
                    <div>
                        <input type="email" placeholder="E-mail" {...field} />
                        {fieldState?.error?.message && (
                            <p>{fieldState.error.message}</p>
                        )}
                    </div>
                )}
            />
            <button onClick={handleSubmit(onReset)}>RESET PASSWORD</button>
        </div>
    );
};
