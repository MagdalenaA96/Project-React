import { Router } from "./router";
import { ThemeProvider } from "./providers/ThemeProvider";

function App() {
    return (
        <div>
            <ThemeProvider>
                <Router />
            </ThemeProvider>
        </div>
    );
}

export default App;
