"use client";

interface PropertyStatsProps {
  label: string;
  value: string;
  icon?: string;
}

export function PropertyStats({ label, value, icon }: PropertyStatsProps) {
  return (
    <div className="flex items-center gap-3">
      {icon && (
        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-muted/50">
          <span>{icon}</span>
        </div>
      )}
      <div>
        <p className="text-xs text-muted-foreground">{label}</p>
        <p className="font-medium">{value}</p>
      </div>
    </div>
  );
}