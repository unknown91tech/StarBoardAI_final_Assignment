"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BarChart3,
  ChevronDown, 
  ChevronUp, 
  Briefcase, 
  Users, 
  TrendingUp, 
  GraduationCap,
  Building,
  Home
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

// Mock data for demographic trends
const populationData = {
  current: 76_912,
  growthRate: 1.2,
  trendData: [
    { year: 2018, population: 73_100 },
    { year: 2019, population: 74_200 },
    { year: 2020, population: 74_800 },
    { year: 2021, population: 75_700 },
    { year: 2022, population: 76_912 },
    { year: 2023, population: 77_900 }
  ]
};

const incomeData = {
  medianHouseholdIncome: 76_912,
  growthRate: 2.3,
  incomeTiers: [
    { tier: "Under $25K", percentage: 14 },
    { tier: "$25K-$50K", percentage: 18 },
    { tier: "$50K-$75K", percentage: 21 },
    { tier: "$75K-$100K", percentage: 17 },
    { tier: "$100K-$150K", percentage: 16 },
    { tier: "Over $150K", percentage: 14 }
  ]
};

const workforceData = {
  unemploymentRate: 7.4,
  laborForceParticipation: 68.2,
  topIndustries: [
    { industry: "Healthcare & Social Assistance", percentage: 22 },
    { industry: "Retail Trade", percentage: 14 },
    { industry: "Professional Services", percentage: 12 },
    { industry: "Manufacturing", percentage: 10 },
    { industry: "Transportation & Warehousing", percentage: 9 }
  ]
};

const housingData = {
  totalHousingUnits: 32_480,
  occupancyRate: 92.3,
  ownerOccupied: 31.5,
  renterOccupied: 68.5,
  medianHomeValue: 625_000,
  medianRent: 2_150
};

export function DemographicTrends() {
  const [isExpanded, setIsExpanded] = useState(true);
  
  return (
    <Card>
      <CardHeader className="pb-3 flex flex-row items-center justify-between">
        <div>
          <CardTitle>Demographic Trends</CardTitle>
          <CardDescription>Population, income, and workforce data</CardDescription>
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
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="mb-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="population">Population</TabsTrigger>
              <TabsTrigger value="income">Income</TabsTrigger>
              <TabsTrigger value="workforce">Workforce</TabsTrigger>
              <TabsTrigger value="housing">Housing</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card>
                  <CardHeader className="py-3">
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-chart-1" />
                      <CardTitle className="text-sm font-medium">Population</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{populationData.current.toLocaleString()}</div>
                    <div className="flex items-center mt-1 text-xs">
                      <TrendingUp className="h-3 w-3 mr-1 text-green-500" />
                      <span className="text-green-500 font-medium">{populationData.growthRate}% growth</span>
                      <span className="text-muted-foreground ml-1">annually</span>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="py-3">
                    <div className="flex items-center space-x-2">
                      <BarChart3 className="h-4 w-4 text-chart-2" />
                      <CardTitle className="text-sm font-medium">Median Income</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">${incomeData.medianHouseholdIncome.toLocaleString()}</div>
                    <div className="flex items-center mt-1 text-xs">
                      <TrendingUp className="h-3 w-3 mr-1 text-green-500" />
                      <span className="text-green-500 font-medium">{incomeData.growthRate}% growth</span>
                      <span className="text-muted-foreground ml-1">annually</span>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="py-3">
                    <div className="flex items-center space-x-2">
                      <Briefcase className="h-4 w-4 text-chart-3" />
                      <CardTitle className="text-sm font-medium">Unemployment</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{workforceData.unemploymentRate}%</div>
                    <div className="flex items-center mt-1 text-xs">
                      <span className="text-muted-foreground">Labor Force: {workforceData.laborForceParticipation}%</span>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="py-3">
                    <div className="flex items-center space-x-2">
                      <Home className="h-4 w-4 text-chart-4" />
                      <CardTitle className="text-sm font-medium">Housing</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">${housingData.medianHomeValue.toLocaleString()}</div>
                    <div className="flex items-center mt-1 text-xs">
                      <span className="text-muted-foreground">Median home value</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader className="py-4">
                    <CardTitle className="text-sm">Top Industries by Employment</CardTitle>
                  </CardHeader>
                  <CardContent className="px-4 pb-4">
                    <div className="space-y-4">
                      {workforceData.topIndustries.map((industry, index) => (
                        <div key={index}>
                          <div className="flex justify-between mb-1 text-sm">
                            <span>{industry.industry}</span>
                            <span className="font-medium">{industry.percentage}%</span>
                          </div>
                          <div className="w-full bg-secondary rounded-full h-2">
                            <div 
                              className="bg-chart-1 h-2 rounded-full" 
                              style={{ width: `${industry.percentage * 3}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="py-4">
                    <CardTitle className="text-sm">Income Distribution</CardTitle>
                  </CardHeader>
                  <CardContent className="px-4 pb-4">
                    <div className="space-y-4">
                      {incomeData.incomeTiers.map((tier, index) => (
                        <div key={index}>
                          <div className="flex justify-between mb-1 text-sm">
                            <span>{tier.tier}</span>
                            <span className="font-medium">{tier.percentage}%</span>
                          </div>
                          <div className="w-full bg-secondary rounded-full h-2">
                            <div 
                              className="bg-chart-2 h-2 rounded-full" 
                              style={{ width: `${tier.percentage * 3}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="mt-6">
                <Card>
                  <CardHeader className="py-4">
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-sm">Key Insights</CardTitle>
                      <Badge variant="outline">Market Analysis</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="px-4 pb-4">
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <span className="mr-2 bg-chart-1 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs mt-0.5">1</span>
                        <span><strong>Strong income growth</strong> indicates potential for increased consumer spending in the area.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 bg-chart-2 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs mt-0.5">2</span>
                        <span><strong>High renter occupancy (68.5%)</strong> suggests demand for multi-family and rental properties.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 bg-chart-3 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs mt-0.5">3</span>
                        <span><strong>Healthcare and logistics</strong> sectors show significant employment, supporting demand for specialized commercial spaces.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 bg-chart-4 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs mt-0.5">4</span>
                        <span><strong>Modest population growth (1.2%)</strong> indicates stable demand for housing and commercial services.</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="population">
              <div className="aspect-[21/9] bg-muted rounded-lg flex items-center justify-center mb-6">
                <div className="text-center p-4">
                  <BarChart3 className="h-10 w-10 mx-auto mb-2 text-muted-foreground" />
                  <p className="text-muted-foreground">Population trend chart will be displayed here</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                  <CardHeader className="py-3">
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-chart-1" />
                      <CardTitle className="text-sm font-medium">Total Population</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{populationData.current.toLocaleString()}</div>
                    <div className="flex items-center mt-1 text-xs">
                      <TrendingUp className="h-3 w-3 mr-1 text-green-500" />
                      <span className="text-green-500 font-medium">{populationData.growthRate}% growth</span>
                      <span className="text-muted-foreground ml-1">annually</span>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="py-3">
                    <div className="flex items-center space-x-2">
                      <GraduationCap className="h-4 w-4 text-chart-2" />
                      <CardTitle className="text-sm font-medium">Education Level</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">38.5%</div>
                    <div className="flex items-center mt-1 text-xs">
                      <span className="text-muted-foreground">Bachelor's degree or higher</span>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="py-3">
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-chart-3" />
                      <CardTitle className="text-sm font-medium">Median Age</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">36.2</div>
                    <div className="flex items-center mt-1 text-xs">
                      <span className="text-muted-foreground">Years</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="mt-6">
                <Card>
                  <CardHeader className="py-4">
                    <CardTitle className="text-sm">Population Projections</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left font-medium py-2">Year</th>
                          <th className="text-right font-medium py-2">Projected Population</th>
                          <th className="text-right font-medium py-2">% Change</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="py-2">2024</td>
                          <td className="text-right">78,950</td>
                          <td className="text-right text-green-500">+1.3%</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2">2025</td>
                          <td className="text-right">80,060</td>
                          <td className="text-right text-green-500">+1.4%</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2">2026</td>
                          <td className="text-right">81,220</td>
                          <td className="text-right text-green-500">+1.4%</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2">2027</td>
                          <td className="text-right">82,400</td>
                          <td className="text-right text-green-500">+1.5%</td>
                        </tr>
                        <tr>
                          <td className="py-2">2028</td>
                          <td className="text-right">83,640</td>
                          <td className="text-right text-green-500">+1.5%</td>
                        </tr>
                      </tbody>
                    </table>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            {/* Other tab content would be implemented similarly */}
            <TabsContent value="income">
              <div className="text-center p-16 text-muted-foreground">
                Income data visualizations would be displayed here
              </div>
            </TabsContent>
            
            <TabsContent value="workforce">
              <div className="text-center p-16 text-muted-foreground">
                Workforce data visualizations would be displayed here
              </div>
            </TabsContent>
            
            <TabsContent value="housing">
              <div className="text-center p-16 text-muted-foreground">
                Housing data visualizations would be displayed here
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      )}
    </Card>
  );
}