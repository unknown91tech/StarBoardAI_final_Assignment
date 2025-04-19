"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";
import { Building, TrendingUp, Clock, DollarSign } from "lucide-react";
import { useScenario } from "@/app/context/ScenarioContext";

export function ScenarioComparison() {
  const { scenarios } = useScenario();
  
  // Transform scenario data for the charts
  const roiData = scenarios.map(scenario => ({
    name: scenario.title,
    value: scenario.metrics.roi
  }));
  
  const capRateData = scenarios.map(scenario => ({
    name: scenario.title,
    value: scenario.metrics.capRate
  }));
  
  const irrData = scenarios.map(scenario => ({
    name: scenario.title,
    value: scenario.metrics.irr
  }));
  
  const paybackData = scenarios.map(scenario => ({
    name: scenario.title,
    value: scenario.metrics.paybackPeriod
  }));

  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle>Scenario Comparison</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="roi">
          <TabsList className="mb-4">
            <TabsTrigger value="roi">ROI</TabsTrigger>
            <TabsTrigger value="cap-rate">Cap Rate</TabsTrigger>
            <TabsTrigger value="irr">IRR</TabsTrigger>
            <TabsTrigger value="payback">Payback Period</TabsTrigger>
          </TabsList>
          
          <TabsContent value="roi">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {scenarios.map(scenario => (
                <Card key={scenario.id}>
                  <CardHeader className="py-3">
                    <div className="flex items-center space-x-2">
                      <Building className="h-4 w-4 text-chart-1" />
                      <CardTitle className="text-sm font-medium">{scenario.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{scenario.metrics.roi}%</div>
                    <div className="flex items-center mt-1 text-xs">
                      <TrendingUp className="h-3 w-3 mr-1 text-green-500" />
                      <span className="text-green-500 font-medium">Return on Investment</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={roiData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="value" name="ROI (%)" fill="hsl(var(--chart-1))" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
          
          <TabsContent value="cap-rate">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {scenarios.map(scenario => (
                <Card key={scenario.id}>
                  <CardHeader className="py-3">
                    <div className="flex items-center space-x-2">
                      <DollarSign className="h-4 w-4 text-chart-2" />
                      <CardTitle className="text-sm font-medium">{scenario.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{scenario.metrics.capRate}%</div>
                    <div className="flex items-center mt-1 text-xs">
                      <span className="text-muted-foreground">Capitalization Rate</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={capRateData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="value" name="Cap Rate (%)" fill="hsl(var(--chart-2))" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
          
          <TabsContent value="irr">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {scenarios.map(scenario => (
                <Card key={scenario.id}>
                  <CardHeader className="py-3">
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="h-4 w-4 text-chart-3" />
                      <CardTitle className="text-sm font-medium">{scenario.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{scenario.metrics.irr}%</div>
                    <div className="flex items-center mt-1 text-xs">
                      <span className="text-muted-foreground">Internal Rate of Return</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={irrData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="value" name="IRR (%)" fill="hsl(var(--chart-3))" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
          
          <TabsContent value="payback">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {scenarios.map(scenario => (
                <Card key={scenario.id}>
                  <CardHeader className="py-3">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-chart-4" />
                      <CardTitle className="text-sm font-medium">{scenario.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{scenario.metrics.paybackPeriod} years</div>
                    <div className="flex items-center mt-1 text-xs">
                      <span className="text-muted-foreground">Payback Period</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={paybackData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="value" name="Payback Period (Years)" fill="hsl(var(--chart-4))" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}