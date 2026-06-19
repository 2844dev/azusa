import { AppShell } from "../components/layout/AppShell";
import { SearchPage } from "../pages/SearchPage";
import "../App.css";
import { TooltipProvider } from "@/components/ui/tooltip.tsx";
import {AnimeListPage} from "@/pages/AnimeListPage.tsx";

function App() {
    return (
        <TooltipProvider>
            <AppShell>
                <AnimeListPage />
            </AppShell>
        </TooltipProvider>
    );
}

export default App;
