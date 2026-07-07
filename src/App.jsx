import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { Route, Switch, Router as WouterRouter } from 'wouter';
// Import Pages
import Home from '@/pages/Home';
import About from '@/pages/About';
import Services from '@/pages/Services';
import Reviews from '@/pages/Reviews';
import FAQ from '@/pages/FAQ';
import Blog from '@/pages/Blog';
import BlogPost from '@/pages/BlogPost';
import Contact from '@/pages/Contact';
import FooterInfo from '@/pages/FooterInfo';
const queryClient = new QueryClient();
const HowItWorks = () => <FooterInfo page="how" />;
const PrivacyPolicy = () => <FooterInfo page="privacy" />;
const TermsAndConditions = () => <FooterInfo page="terms" />;
const Support = () => <FooterInfo page="support" />;
const Disclaimer = () => <FooterInfo page="disclaimer" />;
function Router() {
  return <Switch>{<Route path="/" component={Home} />}{<Route path="/about" component={About} />}{<Route path="/services" component={Services} />}{<Route path="/reviews" component={Reviews} />}{<Route path="/faq" component={FAQ} />}{<Route path="/blog" component={Blog} />}{<Route path="/blog/:id" component={BlogPost} />}{<Route path="/contact" component={Contact} />}{<Route path="/how-it-works" component={HowItWorks} />}{<Route path="/privacy-policy" component={PrivacyPolicy} />}{<Route path="/terms-and-conditions" component={TermsAndConditions} />}{<Route path="/support" component={Support} />}{<Route path="/disclaimer" component={Disclaimer} />}{<Route component={NotFound} />}</Switch>;
}
function App() {
  return <QueryClientProvider client={queryClient}>{<TooltipProvider>{<WouterRouter base="">{<Router />}</WouterRouter>}{<Toaster />}</TooltipProvider>}</QueryClientProvider>;
}
export default App;
