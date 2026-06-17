import { AppShell } from "../components/layout/AppShell";
import { SearchPage } from "../pages/SearchPage";
import "../App.css";
import { TooltipProvider } from "@/components/ui/tooltip.tsx";

function App() {
    return (
        <TooltipProvider>
            <AppShell>
                <SearchPage />
            </AppShell>
        </TooltipProvider>
    );
}

export default App;
