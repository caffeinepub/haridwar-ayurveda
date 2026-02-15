import { Header } from './components/landing/Header';
import { Hero } from './components/landing/Hero';
import { Benefits } from './components/landing/Benefits';
import { ProductHighlights } from './components/landing/ProductHighlights';
import { Testimonials } from './components/landing/Testimonials';
import { ConsultationForm } from './components/landing/ConsultationForm';
import { FAQ } from './components/landing/FAQ';
import { Footer } from './components/landing/Footer';
import { AdminRequestsPanel } from './components/admin/AdminRequestsPanel';
import { useInternetIdentity } from './hooks/useInternetIdentity';
import { useGetCallerUserRole } from './hooks/useQueries';

function App() {
  const { identity } = useInternetIdentity();
  const { data: userRole, isLoading: roleLoading } = useGetCallerUserRole();
  
  const isAuthenticated = !!identity;
  const isAdmin = userRole === 'admin';
  const showAdminPanel = isAuthenticated && !roleLoading && isAdmin;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <ProductHighlights />
        <Testimonials />
        <ConsultationForm />
        <FAQ />
        {showAdminPanel && <AdminRequestsPanel />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
