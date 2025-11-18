import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Analytics } from "@vercel/analytics/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Editorial from "./pages/EditorialClean";
import EditorialArticle from "./pages/EditorialArticle";
import Projects from "./pages/Projects";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/editorial" element={<Editorial />} />
          <Route path="/editorial/:slug" element={<EditorialArticle />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
      {/* Vercel Analytics */}
      <Analytics />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
