"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

import { FileDown, FileText, CalendarClock, Building2 } from "lucide-react";
import { PropertyStats } from "./PropertyStats";
import { PropertySummary } from "./PropertySummary";
import { PersonalizedInsights } from "./PersonalizedInsights";
import { AssetLevelData } from "./AssetLevelData";
import { TabNavigator } from "../shared/TabNavigator";
import { MetricsGrid } from "./MetricsGrid";
import { SupplyPipelineSection } from "./SupplyPipelineSection";
import { LocationAnalysisTab } from "../location/LocationAnalysisTab";
import { SaleComparablesSection } from "./SaleComparablesSection";


export function DealOverviewContent() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Deal Overview</h1>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Underwriting Model</span>
          <Button variant="outline" size="sm" className="h-8 text-xs">
            Industrial-Template-v2.4.xlsx
          </Button>
        </div>
      </div>

      {/* Gray background section with IR tool */}
      <div className="bg-muted/30 p-6 rounded-lg">
        <div className="flex justify-end mb-4">
          <Button variant="outline" size="sm" className="h-8 text-xs">
            Sensitize IRR on varying Exit Cap Rates and Rental Growth
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center">
            <span className="text-xs">👤</span>
          </div>
          <div className="flex-1">
            <input
              type="text"
              placeholder="Thinking..."
              className="w-full bg-white border rounded-md px-4 py-2 text-sm"
            />
          </div>
        </div>
      </div>

      {/* Property header section */}
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-auto">
          <div className="relative rounded-lg overflow-hidden w-full md:w-64 h-40">
            <Image 
              src="https://images.pexels.com/photos/1838640/pexels-photo-1838640.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="280 Richards"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-2 left-2 text-xs text-white bg-black/60 px-2 py-1 rounded">
              Click for Google Street View
            </div>
          </div>
        </div>
        <div className="flex-1 space-y-4">
          <div>
            <h2 className="text-2xl font-bold">280 Richards, Brooklyn, NY</h2>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CalendarClock className="h-4 w-4" />
              <span>Date Uploaded: 11/06/2024</span>
              <Building2 className="ml-2 h-4 w-4" />
              <span>Warehouse</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <PropertyStats 
              label="Seller"
              value="Thor Equities"
              icon="👤" 
            />
            <PropertyStats 
              label="Guidance Price"
              value="$143,000,000"
              icon="💰" 
            />
            <PropertyStats 
              label="Guidance Price PSF"
              value="$23.92"
              icon="📊" 
            />
            <PropertyStats 
              label="Cap Rate"
              value="5.0%"
              icon="%" 
            />
            <PropertyStats 
              label="Property Size"
              value="312,000 sqft"
              icon="📏" 
            />
            <PropertyStats 
              label="Land Area"
              value="16 acres"
              icon="🗺️" 
            />
            <PropertyStats 
              label="Zoning"
              value="M-2"
              icon="🏙️" 
            />
          </div>
          
          <div className="flex justify-end gap-2">
            <Button variant="outline" size="sm" className="h-8 flex items-center gap-2">
              <FileDown className="h-4 w-4" />
              Export to Excel
            </Button>
            <Button variant="outline" size="sm" className="h-8 flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Generate PowerPoint
            </Button>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <PropertySummary />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <PersonalizedInsights />
          <AssetLevelData />
        </div>
      </div>

      <TabNavigator
        value={activeTab}
        onChange={setActiveTab}
        tabs={[
          {
            value: "overview",
            label: "Overview",
            content: (
              <div className="space-y-6 py-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="col-span-1">
                    <h3 className="text-lg font-medium mb-4">Projected Financial Metrics</h3>
                    <MetricsGrid 
                      metrics={[
                        { label: "IRR", value: "13.9%", icon: "💵" },
                        { label: "Equity Multiple", value: "2.3x", icon: "📈" },
                        { label: "Return on Equity", value: "18.5%", icon: "⏱️" },
                        { label: "Return on Cost", value: "19.2%", icon: "💰" },
                      ]}
                    />
                  </div>
                  
                  <div className="col-span-1">
                    <h3 className="text-lg font-medium mb-4">Key Assumptions</h3>
                    <MetricsGrid 
                      metrics={[
                        { label: "Exit Price", value: "$195,000,000", icon: "🏷️" },
                        { label: "Exit Cap Rate", value: "5.0%", icon: "%" },
                        { label: "Rental Growth", value: "3.5%", icon: "📈" },
                        { label: "Hold Period", value: "16 Years", icon: "⏱️" },
                      ]}
                    />
                  </div>
                  
                  <div className="col-span-1">
                    <h3 className="text-lg font-medium mb-4">Market Analysis</h3>
                    <MetricsGrid 
                      metrics={[
                        { label: "Nearest Urban Center", value: "Brooklyn, NY", icon: "🏙️" },
                        { label: "Population Growth Rate", value: "1.2%", icon: "📈" },
                        { label: "Median Household Income", value: "$76,912", icon: "👪" },
                        { label: "Unemployment Rate", value: "7.4%", icon: "👥" },
                      ]}
                    />
                  </div>
                  
                  <div className="col-span-1">
                    <h3 className="text-lg font-medium mb-4">Lease Analysis</h3>
                    <MetricsGrid 
                      metrics={[
                        { label: "Rent PSF", value: "$24.40", icon: "💰" },
                        { label: "Remaining Lease term", value: "13 Yrs (Sep 37)", icon: "⏱️" },
                        { label: "Rent Escalations", value: "3%", icon: "⬆️" },
                        { label: "Mark-to-Market Opportunity", value: "30%+", icon: "📈" },
                      ]}
                    />
                  </div>
                </div>
                
                <div className="space-y-6">
                  <h3 className="text-lg font-medium mb-2">Supply Pipeline</h3>
                  <SupplyPipelineSection />
                  
                  <h3 className="text-lg font-medium mb-2">Sale Comparables</h3>
                  <SaleComparablesSection />
                </div>
              </div>
            )
          },
          {
            value: "location",
            label: "Location",
            content: <LocationAnalysisTab />
          },
          {
            value: "financial",
            label: "Financial",
            content: (
              <div className="h-96 flex items-center justify-center text-muted-foreground">
                Financial analysis tab content will be displayed here
              </div>
            )
          },
          {
            value: "lease",
            label: "Lease",
            content: (
              <div className="h-96 flex items-center justify-center text-muted-foreground">
                Lease analysis tab content will be displayed here
              </div>
            )
          }
        ]}
      />
    </div>
  );
}