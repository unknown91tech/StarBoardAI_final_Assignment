"use client";

import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';

const PropertyMetrics = () => {
  const [capRate, setCapRate] = useState(5.0);
  const [holdingPeriod, setHoldingPeriod] = useState(7);
  
  // Sample data based on the 280 Richards property
  const cashFlowData = [
    { year: 'Year 1', noi: 7271429, debtService: 3542000, cashFlow: 3729429 },
    { year: 'Year 2', noi: 7492378, debtService: 3542000, cashFlow: 3950378 },
    { year: 'Year 3', noi: 7717149, debtService: 3542000, cashFlow: 4175149 },
    { year: 'Year 4', noi: 7948664, debtService: 3542000, cashFlow: 4406664 },
    { year: 'Year 5', noi: 8187123, debtService: 3542000, cashFlow: 4645123 },
    { year: 'Year 6', noi: 8432737, debtService: 3542000, cashFlow: 4890737 },
    { year: 'Year 7', noi: 8685719, debtService: 3542000, cashFlow: 5143719 },
    { year: 'Year 8', noi: 8946291, debtService: 3542000, cashFlow: 5404291 },
    { year: 'Year 9', noi: 9214680, debtService: 3542000, cashFlow: 5672680 },
    { year: 'Year 10', noi: 9491120, debtService: 3542000, cashFlow: 5949120 },
  ];
  
  // Calculate metrics based on slider inputs
  const calculateMetrics = () => {
    const initialInvestment = 143000000;
    const debt = 72900000;
    const equity = initialInvestment - debt;
    
    const exitNOI = cashFlowData[holdingPeriod - 1].noi;
    const exitValue = exitNOI / (capRate / 100);
    const exitDebt = debt - (holdingPeriod * 500000); // Assuming $500k annual principal paydown
    const exitProceeds = exitValue - exitDebt;
    
    let totalCashFlow = 0;
    for (let i = 0; i < holdingPeriod; i++) {
      totalCashFlow += cashFlowData[i].cashFlow;
    }
    
    const totalReturn = totalCashFlow + exitProceeds - equity;
    const irr = ((Math.pow((exitProceeds + totalCashFlow) / equity, 1 / holdingPeriod) - 1) * 100).toFixed(1);
    const equityMultiple = ((exitProceeds + totalCashFlow) / equity).toFixed(2);
    const cashOnCash = ((cashFlowData[0].cashFlow / equity) * 100).toFixed(1);
    
    return {
      irr,
      equityMultiple,
      cashOnCash,
      exitValue: (exitValue / 1000000).toFixed(1),
      exitCap: capRate.toFixed(2)
    };
  };
  
  const metrics = calculateMetrics();
  
  return (
    <div className="space-y-6">
      <Tabs defaultValue="cashflow" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="cashflow">Cash Flow</TabsTrigger>
          <TabsTrigger value="returns">Returns</TabsTrigger>
          <TabsTrigger value="sensitivity">Sensitivity</TabsTrigger>
        </TabsList>
        
        <TabsContent value="cashflow">
          <div className="grid grid-cols-1 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Projected Cash Flow</CardTitle>
                <CardDescription>Annual property cash flow projections</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={cashFlowData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="year" />
                      <YAxis tickFormatter={(value) => `$${(value/1000000).toFixed(1)}M`} />
                      <Tooltip formatter={(value) => [`$${(value/1000000).toFixed(2)}M`, '']} />
                      <Legend />
                      <Bar name="NOI" dataKey="noi" fill="#10b981" />
                      <Bar name="Debt Service" dataKey="debtService" fill="#6366f1" />
                      <Bar name="Cash Flow" dataKey="cashFlow" fill="#f97316" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="returns">
          <Card>
            <CardHeader>
              <CardTitle>Return Metrics</CardTitle>
              <CardDescription>Adjust assumptions to see impact on returns</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="space-y-3">
                    <label className="text-sm font-medium">Exit Cap Rate: {capRate}%</label>
                    <Slider 
                      value={[capRate]} 
                      min={3.5} 
                      max={7.5} 
                      step={0.1} 
                      onValueChange={(values) => setCapRate(values[0])} 
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>3.5%</span>
                      <span>5.5%</span>
                      <span>7.5%</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <label className="text-sm font-medium">Holding Period: {holdingPeriod} years</label>
                    <Slider 
                      value={[holdingPeriod]} 
                      min={3} 
                      max={10} 
                      step={1} 
                      onValueChange={(values) => setHoldingPeriod(values[0])} 
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>3 yrs</span>
                      <span>7 yrs</span>
                      <span>10 yrs</span>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="border rounded-lg p-4 text-center">
                    <div className="text-lg font-bold text-blue-600">{metrics.irr}%</div>
                    <div className="text-sm text-muted-foreground">IRR</div>
                  </div>
                  
                  <div className="border rounded-lg p-4 text-center">
                    <div className="text-lg font-bold text-green-600">{metrics.equityMultiple}x</div>
                    <div className="text-sm text-muted-foreground">Equity Multiple</div>
                  </div>
                  
                  <div className="border rounded-lg p-4 text-center">
                    <div className="text-lg font-bold text-amber-600">{metrics.cashOnCash}%</div>
                    <div className="text-sm text-muted-foreground">Cash on Cash</div>
                  </div>
                  
                  <div className="border rounded-lg p-4 text-center">
                    <div className="text-lg font-bold">${metrics.exitValue}M</div>
                    <div className="text-sm text-muted-foreground">Exit Value</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="sensitivity">
          <div className="flex items-center justify-center h-80 bg-muted rounded-lg">
            <p className="text-muted-foreground">
              Sensitivity analysis would be displayed here
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PropertyMetrics;