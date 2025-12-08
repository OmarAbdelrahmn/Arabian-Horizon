import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import AboutPage from "@/pages/AboutPage";
import StrategyPage from "@/pages/StrategyPage";
import StakeholdersPage from "@/pages/StakeholdersPage";
import StructurePage from "@/pages/StructurePage";
import InitiativesPage from "@/pages/InitiativesPage";
import ContactPage from "@/pages/ContactPage";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={AboutPage} />
      <Route path="/services" component={Services} />
      <Route path="/strategy" component={StrategyPage} />
      <Route path="/stakeholders" component={StakeholdersPage} />
      <Route path="/structure" component={StructurePage} />
      <Route path="/initiatives" component={InitiativesPage} />
      <Route path="/contact" component={ContactPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
