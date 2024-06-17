import { useNavigate } from "react-router-dom"

export const DashboardPage = () => {
    const navigate = useNavigate()

    return (
        <div>
            <div onClick={() => {navigate("/management/users")}}>
                Users management
            </div>
            <div onClick={() => {navigate("/jobs-directory")}}>
                Jobs Directory
            </div>
        </div>
    )
}