"use client";

import { Button } from "@/components/ui/button";
import { Send, Loader2 } from "lucide-react";

interface ScenarioInputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  isAnalyzing?: boolean;
}

export function ScenarioInput({ value, onChange, onSubmit, isAnalyzing = false }: ScenarioInputProps) {
  return (
    <div className="flex items-center space-x-2 mb-6">
      <div className="flex-1 relative">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Run a scenario analysis..."
          className="w-full px-4 py-3 rounded-full border border-border bg-background text-sm pr-16"
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !isAnalyzing) {
              onSubmit();
            }
          }}
          disabled={isAnalyzing}
        />
        <Button 
          className="absolute right-1 top-1 rounded-full h-8 w-8 p-0"
          onClick={onSubmit}
          disabled={isAnalyzing}
        >
          <Send className="h-4 w-4" />
        </Button>
      </div>
      <Button 
        variant="default" 
        onClick={onSubmit}
        disabled={isAnalyzing}
      >
        {isAnalyzing ? (
          <>
            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
            Analyzing...
          </>
        ) : (
          'Run Analysis'
        )}
      </Button>
    </div>
  );
}