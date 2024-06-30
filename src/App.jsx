import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner.jsx";
import NavbarLayout from "@/components/layouts/navbar.jsx"; // Import the navbar layout

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router>
          <NavbarLayout> {/* Wrap the Routes with NavbarLayout */}
            <Routes>
              <Route exact path="/" element={<Index />} />
            </Routes>
          </NavbarLayout>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;