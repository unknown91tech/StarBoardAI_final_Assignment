"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { 
  AlertTriangle,
  ArrowUpRight, 
  ChevronDown, 
  ChevronUp, 
  Clock, 
  CloudOff,
  Construction,
  ExternalLink, 
  FileText, 
  Flame,
  Info,
  LocateFixed,
  ShieldAlert,
  ThumbsUp,
  Waves
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function LocationRisksOpportunities() {
  const [isExpanded, setIsExpanded] = useState(true);
  
  const risks = [
    {
      id: "flood",
      title: "Flood Zone Vulnerability",
      description: "Located in FEMA Zone AE with 1% annual flood chance. Flood insurance required.",
      impact: "High",
      timeframe: "Ongoing",
      icon: <Waves className="h-4 w-4" />,
      source: "FEMA Flood Map Service",
      sourceUrl: "#"
    },
    {
      id: "construction",
      title: "Infrastructure Construction",
      description: "Planned highway improvements on I-278 may affect access during 2026-2027.",
      impact: "Medium",
      timeframe: "2026-2027",
      icon: <Construction className="h-4 w-4" />,
      source: "NYC DOT 5-Year Plan",
      sourceUrl: "#"
    },
    {
      id: "climate",
      title: "Climate Change Exposure",
      description: "Coastal location with potential sea level rise exposure over the next 30 years.",
      impact: "Medium",
      timeframe: "Long-term",
      icon: <CloudOff className="h-4 w-4" />,
      source: "NYC Climate Resilience Report",
      sourceUrl: "#"
    },
    {
      id: "regulatory",
      title: "Zoning Changes",
      description: "City council considering changes to industrial waterfront zoning in next session.",
      impact: "Low",
      timeframe: "Uncertain",
      icon: <ShieldAlert className="h-4 w-4" />,
      source: "Brooklyn CB6 Minutes",
      sourceUrl: "#"
    }
  ];
  
  const opportunities = [
    {
      id: "last-mile",
      title: "Last-Mile Delivery Premium",
      description: "Proximity to 2.5M+ consumers within 5 miles creates significant last-mile delivery value.",
      impact: "High", 
      timeframe: "Current",
      icon: <Flame className="h-4 w-4" />,
      source: "NYC Economic Development Corp",
      sourceUrl: "#"
    },
    {
      id: "tax-incentives",
      title: "Industrial Business Zone Benefits",
      description: "Property qualifies for tax incentives and abatements through the IBZ program.",
      impact: "Medium",
      timeframe: "Ongoing", 
      icon: <ThumbsUp className="h-4 w-4" />,
      source: "NYC Small Business Services",
      sourceUrl: "#"
    },
    {
      id: "transit",
      title: "Transit Improvements",
      description: "Planned expansion of ferry service will enhance connectivity to Manhattan and Queens.",
      impact: "Medium",
      timeframe: "2026",
      icon: <ArrowUpRight className="h-4 w-4" />,
      source: "NYC Ferry Expansion Plan",
      sourceUrl: "#"
    },
    {
      id: "retail",
      title: "Retail Corridor Development",
      description: "Nearby retail corridor development could enhance area amenities and appeal.",
      impact: "Low",
      timeframe: "2-5 years",
      icon: <LocateFixed className="h-4 w-4" />,
      source: "Brooklyn Chamber of Commerce",
      sourceUrl: "#"
    }
  ];
  
  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "High":
        return "bg-red-100 text-red-800 border-red-300";
      case "Medium":
        return "bg-amber-100 text-amber-800 border-amber-300";
      case "Low":
        return "bg-blue-100 text-blue-800 border-blue-300";
      default:
        return "bg-secondary";
    }
  };
  
  const getOpportunityColor = (impact: string) => {
    switch (impact) {
      case "High":
        return "bg-green-100 text-green-800 border-green-300";
      case "Medium":
        return "bg-blue-100 text-blue-800 border-blue-300";
      case "Low":
        return "bg-purple-100 text-purple-800 border-purple-300";
      default:
        return "bg-secondary";
    }
  };

  return (
    <Card>
      <CardHeader className="pb-3 flex flex-row items-center justify-between">
        <div>
          <CardTitle>Location Risks & Opportunities</CardTitle>
          <CardDescription>Risk assessment and upside potential</CardDescription>
        </div>
        <button 
          onClick={() => setIsExpanded(!isExpanded)} 
          className="p-1 rounded-full hover:bg-secondary"
        >
          {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>
      </CardHeader>
      {isExpanded && (
        <CardContent>
          <Tabs defaultValue="risks" className="w-full">
            <TabsList className="mb-4">
              <TabsTrigger value="risks">Risk Factors</TabsTrigger>
              <TabsTrigger value="opportunities">Opportunities</TabsTrigger>
              <TabsTrigger value="summary">Executive Summary</TabsTrigger>
            </TabsList>
            
            <TabsContent value="risks">
              <div className="space-y-4">
                <Alert variant="warning" className="bg-amber-50 border-amber-200 text-amber-800">
                  <AlertTriangle className="h-4 w-4" />
                  <AlertTitle>Location Risk Assessment</AlertTitle>
                  <AlertDescription>
                    Our analysis has identified 4 potential risk factors for this location. 
                    Review each factor and its potential impact on property operations and value.
                  </AlertDescription>
                </Alert>
                
                {risks.map((risk) => (
                  <div key={risk.id} className="border rounded-lg overflow-hidden">
                    <div className="p-4">
                      <div className="flex justify-between items-start">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center mt-0.5">
                            {risk.icon}
                          </div>
                          <div>
                            <h3 className="font-medium">{risk.title}</h3>
                            <p className="text-sm mt-1">{risk.description}</p>
                          </div>
                        </div>
                        <Badge className={`ml-2 ${getImpactColor(risk.impact)}`}>
                          {risk.impact} Impact
                        </Badge>
                      </div>
                      
                      <div className="mt-4 flex justify-between items-center text-sm">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
                          <span className="text-muted-foreground">Timeframe: {risk.timeframe}</span>
                        </div>
                        <div className="flex items-center">
                          <FileText className="h-4 w-4 mr-1 text-muted-foreground" />
                          <span className="text-muted-foreground">Source:</span>
                          <Button variant="link" size="sm" className="h-auto p-0 ml-1">
                            {risk.source}
                            <ExternalLink className="h-3 w-3 ml-1" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="opportunities">
              <div className="space-y-4">
                <Alert className="bg-green-50 border-green-200 text-green-800">
                  <ArrowUpRight className="h-4 w-4" />
                  <AlertTitle>Location Opportunities</AlertTitle>
                  <AlertDescription>
                    We've identified 4 potential upside opportunities related to this location.
                    These factors may positively impact property value and performance.
                  </AlertDescription>
                </Alert>
                
                {opportunities.map((opportunity) => (
                  <div key={opportunity.id} className="border rounded-lg overflow-hidden">
                    <div className="p-4">
                      <div className="flex justify-between items-start">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center mt-0.5">
                            {opportunity.icon}
                          </div>
                          <div>
                            <h3 className="font-medium">{opportunity.title}</h3>
                            <p className="text-sm mt-1">{opportunity.description}</p>
                          </div>
                        </div>
                        <Badge className={`ml-2 ${getOpportunityColor(opportunity.impact)}`}>
                          {opportunity.impact} Potential
                        </Badge>
                      </div>
                      
                      <div className="mt-4 flex justify-between items-center text-sm">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
                          <span className="text-muted-foreground">Timeframe: {opportunity.timeframe}</span>
                        </div>
                        <div className="flex items-center">
                          <FileText className="h-4 w-4 mr-1 text-muted-foreground" />
                          <span className="text-muted-foreground">Source:</span>
                          <Button variant="link" size="sm" className="h-auto p-0 ml-1">
                            {opportunity.source}
                            <ExternalLink className="h-3 w-3 ml-1" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="summary">
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center">
                    <Info className="h-4 w-4 mr-2" />
                    <CardTitle className="text-base">Location Risk-Opportunity Analysis</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-sm">
                      The 280 Richards property presents a <strong>balanced risk-opportunity profile</strong> typical of Brooklyn waterfront industrial assets. The location benefits from strong e-commerce demand and last-mile delivery advantages, but faces challenges related to its coastal position.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="border rounded-lg p-3">
                        <h3 className="text-sm font-medium flex items-center">
                          <AlertTriangle className="h-3.5 w-3.5 mr-1.5 text-amber-600" />
                          Primary Risk Factors
                        </h3>
                        <ul className="mt-2 text-sm space-y-1">
                          <li className="flex items-start">
                            <span className="mr-1.5">•</span>
                            <span>Flood zone exposure requiring insurance and resilience measures</span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-1.5">•</span>
                            <span>Possible access disruption from planned infrastructure improvements</span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-1.5">•</span>
                            <span>Long-term climate change exposure requiring monitoring</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="border rounded-lg p-3">
                        <h3 className="text-sm font-medium flex items-center">
                          <ThumbsUp className="h-3.5 w-3.5 mr-1.5 text-green-600" />
                          Key Opportunities
                        </h3>
                        <ul className="mt-2 text-sm space-y-1">
                          <li className="flex items-start">
                            <span className="mr-1.5">•</span>
                            <span>Exceptional last-mile delivery location serving 2.5M+ consumers</span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-1.5">•</span>
                            <span>Tax incentives and abatements through IBZ program</span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-1.5">•</span>
                            <span>Transit improvements will enhance connectivity and value</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="border-t pt-4">
                      <h3 className="text-sm font-medium mb-2">Risk Mitigation Recommendations</h3>
                      <ul className="text-sm space-y-1">
                        <li className="flex items-start">
                          <span className="mr-1.5">1.</span>
                          <span>Conduct full climate resilience assessment to address flood vulnerability</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-1.5">2.</span>
                          <span>Monitor DOT construction schedule and develop alternative access plan</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-1.5">3.</span>
                          <span>Engage with city officials regarding industrial zoning preservation</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-1.5">4.</span>
                          <span>Apply for all applicable tax incentives and abatements</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </CardContent>
      )}
    </Card>
  );
}