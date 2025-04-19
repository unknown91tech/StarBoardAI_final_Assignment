"use client";

import { useState } from "react";
import { SupplyPipeline } from "./sections/SupplyPipeline";
import { LandSaleComparables } from "./sections/LandSaleComparables";
import { DemographicTrends } from "./sections/DemographicTrends";
import { ProximityInsights } from "./sections/ProximityInsights";
import { ZoningOverlays } from "./sections/ZoningOverlays";
import { PropertyCard } from "./PropertyCard";
import { Button } from "@/components/ui/button";
import { FileDown, FileText, MapPin, Compass, BarChart3, FileSearch } from "lucide-react";
import { LocationPDFExport } from "./LocationPDFExport";
import { ExternalMarketData } from "./ExternalMarketData";
import { LocationRisksOpportunities } from "./LocationRisksOpportunities";
import { LocationDataSource } from "./LocationDataSource";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function LocationAnalysisTab() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between gap-4 md:items-center">
        <PropertyCard />
        <div className="flex items-center gap-3 flex-wrap justify-end">
          <LocationPDFExport 
            propertyName="280 Richards" 
            propertyLocation="Brooklyn, NY" 
          />
          <Button variant="outline" className="flex items-center gap-2">
            <FileDown className="h-4 w-4" />
            Export to Excel
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            Generate PowerPoint
          </Button>
        </div>
      </div>
      
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="mb-4">
          <TabsTrigger value="overview" className="flex items-center gap-1">
            <Compass className="h-4 w-4" />
            Overview
          </TabsTrigger>
          <TabsTrigger value="market-data" className="flex items-center gap-1">
            <BarChart3 className="h-4 w-4" />
            Market Data
          </TabsTrigger>
          <TabsTrigger value="risks" className="flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            Risks & Opportunities
          </TabsTrigger>
          <TabsTrigger value="sources" className="flex items-center gap-1">
            <FileSearch className="h-4 w-4" />
            Data Sources
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 location-pdf-section">
            <SupplyPipeline />
            <LandSaleComparables />
          </div>
          
          <div className="grid grid-cols-1 gap-6 mt-6 location-pdf-section">
            <DemographicTrends />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 location-pdf-section">
            <ProximityInsights />
            <ZoningOverlays />
          </div>
        </TabsContent>
        
        <TabsContent value="market-data">
          <div className="space-y-6">
            <div className="location-pdf-section">
              <ExternalMarketData />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 location-pdf-section">
              <DemographicTrends />
              <LandSaleComparables />
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="risks">
          <div className="space-y-6">
            <div className="location-pdf-section">
              <LocationRisksOpportunities />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 location-pdf-section">
              <ProximityInsights />
              <ZoningOverlays />
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="sources">
          <div className="space-y-6">
            <LocationDataSource />
            <div className="grid grid-cols-1 gap-6">
              <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="text-lg font-medium mb-2">Data Quality Statement</h3>
                <p className="text-sm mb-4">
                  All location data presented in this analysis has been verified by our research team 
                  as of April 19, 2025. We maintain strict data quality standards and strive to provide 
                  the most accurate and up-to-date information for your investment decisions.
                </p>
                <p className="text-sm text-muted-foreground">
                  If you identify any discrepancies or have additional questions about the data sources, 
                  please contact your Starboard representative or our research team directly.
                </p>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}