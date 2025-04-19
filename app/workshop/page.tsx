import { WorkshopDashboard } from "@/components/workshop/WorkshopDashboard";
import { Header } from "@/components/shared/Header";

export default function WorkshopPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        <h1 className="text-3xl font-bold mb-6">Deal Workshop</h1>
        <p className="text-muted-foreground mb-8">
          Run scenarios and analyze different use cases for 280 Richards, Brooklyn.
        </p>
        <WorkshopDashboard />
      </main>
    </div>
  );
}