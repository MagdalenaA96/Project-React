import { LoginPage } from "./pages/login";
import { RegisterPage } from "./pages";
import { ResetPage } from "./pages/reset/ResetPage";
import { UsersPage } from "./pages/users/UsersPage";
import { Router } from "./router/Router";

function App() {
    return (
        <div>
            <Router/>
        </div>
    );
}

export default App;
