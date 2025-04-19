"use client";

import { Header } from "@/components/shared/Header";
import { PropertyCard } from "@/components/location/PropertyCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building2, Calendar, DollarSign, FileText, FileDown, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";

const PropertyMetrics = dynamic(() => import("../../components/dashborad/PropertyMetrics"), { 
    ssr: false,
    loading: () => <div className="h-80 flex items-center justify-center">
      <p className="text-muted-foreground">Loading metrics...</p>
    </div>
  });

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <div>
            <h1 className="text-3xl font-bold">Deal Dashboard</h1>
            <p className="text-muted-foreground mt-1">
              280 Richards, Brooklyn, NY - Financial Performance
            </p>
          </div>
          
          <div className="flex items-center gap-3">
            <Button variant="outline" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Generate Report
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <FileDown className="h-4 w-4" />
              Export Data
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <Card>
            <CardHeader className="py-3">
              <div className="flex items-center space-x-2">
                <DollarSign className="h-4 w-4 text-chart-1" />
                <CardTitle className="text-sm font-medium">Purchase Price</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$143M</div>
              <div className="flex items-center mt-1 text-xs">
                <span className="text-muted-foreground">$23.92 per sqft</span>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="py-3">
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-4 w-4 text-chart-2" />
                <CardTitle className="text-sm font-medium">Cap Rate</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5.0%</div>
              <div className="flex items-center mt-1 text-xs">
                <span className="text-muted-foreground">Year 1 NOI: $7.27M</span>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="py-3">
              <div className="flex items-center space-x-2">
                <Building2 className="h-4 w-4 text-chart-3" />
                <CardTitle className="text-sm font-medium">Lease Term</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">13 years</div>
              <div className="flex items-center mt-1 text-xs">
                <span className="text-muted-foreground">Expires: Sep-37</span>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="py-3">
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4 text-chart-4" />
                <CardTitle className="text-sm font-medium">Debt Term</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3.85%</div>
              <div className="flex items-center mt-1 text-xs">
                <span className="text-muted-foreground">$72.9M through Feb-28</span>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="lg:col-span-2">
            <PropertyMetrics />
          </div>
          
          <div className="space-y-6">
            <PropertyCard />
            
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Tenant Overview</CardTitle>
                <CardDescription>Amazon.com Services LLC</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Credit Rating</span>
                  <span className="font-medium">AA (S&P)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Annual Rent</span>
                  <span className="font-medium">$7.61M</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Rent Escalations</span>
                  <span className="font-medium">3% Annually</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Renewal Options</span>
                  <span className="font-medium">4 x 5-year @ FMV</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Market Value vs. Contract</span>
                  <span className="font-medium text-green-600">+30%</span>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Key Documents</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center justify-between">
                    <div className="flex items-center">
                      <FileText className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span className="text-sm">Offering Memorandum</span>
                    </div>
                    <Button variant="ghost" size="sm">View</Button>
                  </li>
                  <li className="flex items-center justify-between">
                    <div className="flex items-center">
                      <FileText className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span className="text-sm">Lease Agreement</span>
                    </div>
                    <Button variant="ghost" size="sm">View</Button>
                  </li>
                  <li className="flex items-center justify-between">
                    <div className="flex items-center">
                      <FileText className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span className="text-sm">Financial Model</span>
                    </div>
                    <Button variant="ghost" size="sm">View</Button>
                  </li>
                  <li className="flex items-center justify-between">
                    <div className="flex items-center">
                      <FileText className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span className="text-sm">Property Inspection</span>
                    </div>
                    <Button variant="ghost" size="sm">View</Button>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Investment Team</CardTitle>
              <CardDescription>Team members assigned to this deal</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Sarah Johnson</h4>
                      <p className="text-sm text-muted-foreground">Lead Acquisitions</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">Contact</Button>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Michael Chen</h4>
                      <p className="text-sm text-muted-foreground">Financial Analyst</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">Contact</Button>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Jessica Lee</h4>
                      <p className="text-sm text-muted-foreground">Asset Manager</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">Contact</Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Deal Timeline</CardTitle>
              <CardDescription>Key milestones and events</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative pl-6 border-l-2 border-border space-y-6">
                <div className="relative mb-8">
                  <div className="absolute -left-[10px] top-0 h-4 w-4 rounded-full bg-primary"></div>
                  <div className="pb-1">
                    <span className="text-xs font-medium text-muted-foreground">PRESENT</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium">Due Diligence</h3>
                    <p className="text-xs text-muted-foreground mt-1">Reviewing property documents and financials</p>
                  </div>
                </div>
                
                <div className="relative mb-8">
                  <div className="absolute -left-[10px] top-0 h-4 w-4 rounded-full bg-secondary"></div>
                  <div className="pb-1">
                    <span className="text-xs font-medium text-muted-foreground">APR 15, 2025</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium">Offer Acceptance</h3>
                    <p className="text-xs text-muted-foreground mt-1">Initial offer accepted by seller</p>
                  </div>
                </div>
                
                <div className="relative mb-8">
                  <div className="absolute -left-[10px] top-0 h-4 w-4 rounded-full bg-secondary"></div>
                  <div className="pb-1">
                    <span className="text-xs font-medium text-muted-foreground">APR 5, 2025</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium">Initial Analysis</h3>
                    <p className="text-xs text-muted-foreground mt-1">Financial modeling and market analysis</p>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="absolute -left-[10px] top-0 h-4 w-4 rounded-full bg-secondary"></div>
                  <div className="pb-1">
                    <span className="text-xs font-medium text-muted-foreground">MAR 25, 2025</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium">Deal Sourced</h3>
                    <p className="text-xs text-muted-foreground mt-1">Property identified as investment opportunity</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );}