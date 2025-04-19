"use client";

interface Metric {
  label: string;
  value: string;
  icon: string;
}

interface MetricsGridProps {
  metrics: Metric[];
}

export function MetricsGrid({ metrics }: MetricsGridProps) {
  return (
    <div className="space-y-4">
      {metrics.map((metric, index) => (
        <div key={index} className="flex items-center">
          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-muted mr-3">
            <span>{metric.icon}</span>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">{metric.label}</p>
            <p className="font-semibold text-lg">{metric.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
}