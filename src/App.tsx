import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import Services from "./pages/Services";
import HowWeWork from "./pages/HowWeWork";
import About from "./pages/About";
import SaaS from "./pages/SaaS";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";

// Owner Pages
import Partners from "./pages/owner/Partners";
import ServicesManagement from "./pages/owner/Services";
import AboutManagement from "./pages/owner/AboutManagement";
import SaaSManagement from "./pages/owner/SaaSManagement";
import ContactInfoManagement from "./pages/owner/ContactInfoManagement";
import Consultations from "./pages/owner/Consultations";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/how-we-work" element={<HowWeWork />} />
            <Route path="/about" element={<About />} />
            <Route path="/saas" element={<SaaS />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
            <Route path="/login" element={<Login />} />
            
            {/* Owner Routes */}
            <Route path="/owner/partners" element={<Partners />} />
            <Route path="/owner/services" element={<ServicesManagement />} />
            <Route path="/owner/about" element={<AboutManagement />} />
            <Route path="/owner/saas" element={<SaaSManagement />} />
            <Route path="/owner/contact-info" element={<ContactInfoManagement />} />
            <Route path="/owner/consultations" element={<Consultations />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;