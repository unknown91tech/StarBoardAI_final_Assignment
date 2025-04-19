import { DealOverviewContent } from "@/components/deal-overview/DealOverviewContent";
import { Header } from "@/components/shared/Header";

export default function DealOverviewPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        <DealOverviewContent />
      </main>
    </div>
  );
}