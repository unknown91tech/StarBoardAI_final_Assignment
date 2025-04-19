
import { LocationAnalysisTab } from "@/components/location/LocationAnalysisTab";
import { Header } from "@/components/shared/Header";

export default function LocationAnalysisPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        <h1 className="text-3xl font-bold mb-2">Location Analysis</h1>
        <p className="text-muted-foreground mb-8">
          Analyze the surrounding market conditions, development risks, and regional dynamics for 280 Richards, Brooklyn.
        </p>
        <LocationAnalysisTab />
      </main>
    </div>
  );
} 