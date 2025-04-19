"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ChevronDown, 
  ChevronUp, 
  ExternalLink, 
  FileText, 
  Database,
  Globe,
  BookOpen,
  Info
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

interface DataSource {
  name: string;
  type: "public" | "proprietary" | "internal";
  description: string;
  lastUpdated: string;
  url?: string;
}

export function LocationDataSource() {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const dataSources: DataSource[] = [
    {
      name: "FEMA Flood Map Service Center",
      type: "public",
      description: "Official flood hazard information for flood insurance and risk management.",
      lastUpdated: "Jan 2025",
      url: "https://msc.fema.gov/portal/home"
    },
    {
      name: "NYC Department of City Planning",
      type: "public",
      description: "Zoning maps, land use data, and development regulations.",
      lastUpdated: "Feb 2025",
      url: "https://www.nyc.gov/site/planning/index.page"
    },
    {
      name: "U.S. Census Bureau",
      type: "public",
      description: "Demographic and economic data for population analysis.",
      lastUpdated: "Dec 2024",
      url: "https://www.census.gov/"
    },
    {
      name: "CoStar Real Estate Analytics",
      type: "proprietary",
      description: "Commercial real estate data including comps, vacancies, and rents.",
      lastUpdated: "April 2025",
      url: "https://www.costar.com/"
    },
    {
      name: "NYC Department of Transportation",
      type: "public",
      description: "Transportation infrastructure and planned improvements.",
      lastUpdated: "March 2025",
      url: "https://www.nyc.gov/html/dot/html/home/home.shtml"
    },
    {
      name: "Starboard Research Team",
      type: "internal",
      description: "Proprietary market analysis and on-site verification.",
      lastUpdated: "April 2025"
    },
    {
      name: "NYC Economic Development Corporation",
      type: "public",
      description: "Economic development initiatives and incentive programs.",
      lastUpdated: "Feb 2025",
      url: "https://edc.nyc/"
    }
  ];
  
  const getSourceBadge = (type: string) => {
    switch (type) {
      case "public":
        return <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">Public</Badge>;
      case "proprietary":
        return <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">Proprietary</Badge>;
      case "internal":
        return <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">Internal</Badge>;
      default:
        return null;
    }
  };
  
  const getSourceIcon = (type: string) => {
    switch (type) {
      case "public":
        return <Globe className="h-4 w-4 text-blue-600" />;
      case "proprietary":
        return <Database className="h-4 w-4 text-purple-600" />;
      case "internal":
        return <BookOpen className="h-4 w-4 text-green-600" />;
      default:
        return <Info className="h-4 w-4" />;
    }
  };

  return (
    <Card>
      <CardHeader className="pb-3 flex flex-row items-center justify-between">
        <div>
          <CardTitle>Data Sources</CardTitle>
          <CardDescription>Reference information for location analysis</CardDescription>
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
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              This location analysis is compiled from the following data sources, last verified on April 19, 2025.
            </p>
            
            <div className="space-y-1">
              {dataSources.map((source, index) => (
                <div key={index} className="flex items-center justify-between py-2.5 border-b last:border-b-0">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                      {getSourceIcon(source.type)}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-medium text-sm">{source.name}</h3>
                        {getSourceBadge(source.type)}
                      </div>
                      <p className="text-xs text-muted-foreground mt-0.5">{source.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-xs text-muted-foreground">
                      Updated: {source.lastUpdated}
                    </div>
                    {source.url && (
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0" asChild>
                        <a href={source.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                          <span className="sr-only">Visit {source.name}</span>
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex items-center justify-between text-sm pt-2">
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">Methodology reference available</span>
              </div>
              <Button variant="outline" size="sm">
                View Full Methodology
              </Button>
            </div>
          </div>
        </CardContent>
      )}
    </Card>
  );
}