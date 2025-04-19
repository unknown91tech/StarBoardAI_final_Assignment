"use client";


import { ScenarioComparison } from "./ScenarioComparison";
import { PropertyCard } from "../location/PropertyCard";
import { useScenario } from "@/app/context/ScenarioContext";
import { ScenarioInput } from "./ScenarioInput";
import { ScenarioConversation } from "./ScenarioConversation";
import { ScenarioFiles } from "./ScenarioFiles";

export function WorkshopDashboard() {
  const {
    inputValue,
    setInputValue,
    isAnalyzing,
    messages,
    files,
    runAnalysis
  } = useScenario();

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between gap-4 md:items-center mb-8">
        <PropertyCard />
      </div>
      
      <div className="border rounded-lg bg-card overflow-hidden">
        <div className="p-4 border-b bg-muted/30">
          <h2 className="text-lg font-medium">Scenario Analysis</h2>
        </div>
        
        <div className="p-4">
          <ScenarioInput
            value={inputValue}
            onChange={setInputValue}
            onSubmit={runAnalysis}
            isAnalyzing={isAnalyzing}
          />
          
          {messages.length > 0 && (
            <ScenarioConversation messages={messages} />
          )}
          
          {files.length > 0 && (
            <ScenarioFiles files={files} />
          )}
        </div>
      </div>

      {files.length > 0 && <ScenarioComparison />}
    </div>
  );
}