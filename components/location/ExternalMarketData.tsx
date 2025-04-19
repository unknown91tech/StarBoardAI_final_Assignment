"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { 
  ChevronDown, 
  ChevronUp, 
  ExternalLink, 
  BarChart2, 
  TrendingUp, 
  TrendingDown,
  AlertTriangle
} from "lucide-react";
import { Separator } from "@/components/ui/separator";

// Simulation of external API data
const simulateExternalMarketData = () => {
  return new Promise<{
    marketStatus: "Strong" | "Moderate" | "Weak";
    vacancyRate: number;
    vacancyTrend: "up" | "down" | "stable";
    avgRentPSF: number;
    rentTrend: "up" | "down" | "stable";
    constructionActivity: "High" | "Moderate" | "Low";
    marketRisks: {
      type: string;
      description: string;
      severity: "High" | "Medium" | "Low";
    }[];
    marketNews: {
      title: string;
      source: string;
      date: string;
      url: string;
    }[];
  }>((resolve) => {
    setTimeout(() => {
      resolve({
        marketStatus: "Strong",
        vacancyRate: 3.2,
        vacancyTrend: "down",
        avgRentPSF: 28.75,
        rentTrend: "up",
        constructionActivity: "Moderate",
        marketRisks: [
          {
            type: "Oversupply Risk",
            description: "Two similar industrial buildings under construction within 2 miles",
            severity: "Medium"
          },
          {
            type: "Infrastructure Risk",
            description: "Planned highway construction may impact access in 2026",
            severity: "Low"
          },
          {
            type: "Regulatory Risk",
            description: "Potential rezoning discussion in neighboring districts",
            severity: "Low"
          }
        ],
        marketNews: [
          {
            title: "Amazon Expands Brooklyn Logistics Footprint",
            source: "Commercial Observer",
            date: "March 12, 2025",
            url: "#"
          },
          {
            title: "Brooklyn Industrial Rents Hit Record High in Q1 2025",
            source: "CoStar",
            date: "April 5, 2025",
            url: "#"
          },
          {
            title: "Red Hook Infrastructure Improvements Planned for 2026",
            source: "The Real Deal",
            date: "February 28, 2025",
            url: "#"
          }
        ]
      });
    }, 1500);
  });
};

export function ExternalMarketData() {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [marketData, setMarketData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await simulateExternalMarketData();
        setMarketData(data);
      } catch (error) {
        console.error("Failed to fetch market data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Strong":
        return "bg-green-100 text-green-800 border-green-300";
      case "Moderate":
        return "bg-amber-100 text-amber-800 border-amber-300";
      case "Weak":
        return "bg-red-100 text-red-800 border-red-300";
      default:
        return "bg-secondary";
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up":
        return <TrendingUp className="h-3.5 w-3.5 text-green-600" />;
      case "down":
        return <TrendingDown className="h-3.5 w-3.5 text-red-600" />;
      default:
        return <BarChart2 className="h-3.5 w-3.5 text-amber-600" />;
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "High":
        return "text-red-600";
      case "Medium":
        return "text-amber-600";
      case "Low":
        return "text-blue-600";
      default:
        return "text-muted-foreground";
    }
  };

  return (
    <Card>
      <CardHeader className="pb-3 flex flex-row items-center justify-between">
        <div>
          <CardTitle>External Market Data</CardTitle>
          <CardDescription>Real-time market insights and news</CardDescription>
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
          {isLoading ? (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <Skeleton className="h-12 w-40" />
                <Skeleton className="h-8 w-32" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Skeleton className="h-24 w-full" />
                <Skeleton className="h-24 w-full" />
                <Skeleton className="h-24 w-full" />
              </div>
              <Skeleton className="h-32 w-full" />
              <Skeleton className="h-40 w-full" />
            </div>
          ) : (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium text-lg">Brooklyn Industrial Market</h3>
                  <p className="text-sm text-muted-foreground">Real-time data as of April 2025</p>
                </div>
                <Badge className={`px-3 py-1 ${getStatusColor(marketData.marketStatus)}`}>
                  {marketData.marketStatus} Market
                </Badge>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="border rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <div className="flex items-center justify-between w-full">
                      <span className="text-sm text-muted-foreground">Vacancy Rate</span>
                      <div className="flex items-center gap-1">
                        {getTrendIcon(marketData.vacancyTrend)}
                        <span className={marketData.vacancyTrend === "down" ? "text-green-600" : "text-red-600"}>
                          {marketData.vacancyTrend === "down" ? "Decreasing" : marketData.vacancyTrend === "up" ? "Increasing" : "Stable"}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-2xl font-semibold">{marketData.vacancyRate}%</p>
                </div>

                <div className="border rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <div className="flex items-center justify-between w-full">
                      <span className="text-sm text-muted-foreground">Average Rent</span>
                      <div className="flex items-center gap-1">
                        {getTrendIcon(marketData.rentTrend)}
                        <span className={marketData.rentTrend === "up" ? "text-green-600" : "text-red-600"}>
                          {marketData.rentTrend === "up" ? "Increasing" : marketData.rentTrend === "down" ? "Decreasing" : "Stable"}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-2xl font-semibold">${marketData.avgRentPSF}/SF</p>
                </div>

                <div className="border rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <span className="text-sm text-muted-foreground">Construction Activity</span>
                  </div>
                  <p className="text-2xl font-semibold">{marketData.constructionActivity}</p>
                  <p className="text-xs text-muted-foreground mt-1">New development activity</p>
                </div>
              </div>

              <div>
                <h3 className="font-medium text-base mb-3">Market Risk Factors</h3>
                <div className="space-y-3">
                  {marketData.marketRisks.map((risk: any, index: number) => (
                    <div key={index} className="flex items-start p-3 border rounded-lg">
                      <AlertTriangle className={`h-5 w-5 mr-3 mt-0.5 ${getSeverityColor(risk.severity)}`} />
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-medium">{risk.type}</h4>
                          <Badge variant="outline" className={getSeverityColor(risk.severity)}>
                            {risk.severity} Risk
                          </Badge>
                        </div>
                        <p className="text-sm mt-1">{risk.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-medium text-base mb-3">Recent Market News</h3>
                <div className="space-y-3">
                  {marketData.marketNews.map((news: any, index: number) => (
                    <div key={index} className="flex justify-between items-center border-b pb-2">
                      <div>
                        <h4 className="font-medium text-sm">{news.title}</h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          {news.source} • {news.date}
                        </p>
                      </div>
                      <Button variant="ghost" size="sm" className="h-8 gap-1">
                        <ExternalLink className="h-3.5 w-3.5" />
                        <span>Read</span>
                      </Button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 flex justify-end">
                <Button variant="ghost" size="sm" className="h-8 gap-1">
                  <ExternalLink className="h-3.5 w-3.5" />
                  <span>View Full Market Report</span>
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      )}
    </Card>
  );
}