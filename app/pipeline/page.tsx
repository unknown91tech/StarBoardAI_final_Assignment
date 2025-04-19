import { PipelineView } from "@/components/pipeline/PipelineView";
import { Header } from "@/components/shared/Header";

export default function PipelinePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        <h1 className="text-3xl font-bold mb-6">Deal Pipeline</h1>
        <p className="text-muted-foreground mb-8">
          Track and analyze potential investment opportunities in your pipeline.
        </p>
        <PipelineView />
      </main>
    </div>
  );
}