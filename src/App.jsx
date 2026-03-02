import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";
import { Home } from "@/pages/Home.jsx";
import { NotFound } from "@/pages/NotFound.jsx";

function App() {
    return (
        <>
            <Toaster
                position="top-right"
                toastOptions={{
                    classNames: {
                        toast:
                            "!bg-background/95 !text-foreground !border !border-primary/40 " +
                            "!shadow-[0_0_25px_rgba(139,92,246,0.25)] backdrop-blur-md rounded-xl",
                        title: "font-semibold text-foreground",
                        description: "text-muted-foreground",
                    },
                }}
            />
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;