import Header from '@/components/header';
import Footer from '@/components/footer';
import AnalyticsDashboard from '@/components/dashboard/analytics';

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col bg-secondary">
      <Header />
      <main className="flex-grow">
        <div className="container py-8 px-4">
            <h1 className="text-3xl font-bold font-headline mb-6">Analytics Dashboard</h1>
            <AnalyticsDashboard />
        </div>
      </main>
      <Footer />
    </div>
  );
}
