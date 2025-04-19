"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { toast } from "@/hooks/use-toast";
import { ChevronDown } from "lucide-react";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function DealCriteriaSettings() {
  const [irr, setIrr] = useState("10");
  const [isRangeSet, setIsRangeSet] = useState(false);
  const [priceRange, setPriceRange] = useState([50, 120]);
  
  const [screeningParameters, setScreeningParameters] = useState([
    { id: "return-on-cost", label: "Return on Cost", selected: false },
    { id: "cash-on-cash", label: "Cash-on-Cash", selected: false },
    { id: "return-on-equity", label: "Return on Equity", selected: false },
    { id: "urban-center", label: "Nearest Urban Center", selected: false },
    { id: "population-growth", label: "Population Growth Rate", selected: false },
    { id: "unemployment", label: "Unemployment Rate", selected: false },
    { id: "household-income", label: "Average Household Income", selected: false },
    { id: "occupancy", label: "Occupancy Rate", selected: false },
    { id: "tenants", label: "Tenants", selected: false },
    { id: "walt", label: "WALT", selected: false },
    { id: "average-wage", label: "Average Wage", selected: false }
  ]);
  
  const handleParameterToggle = (id: string) => {
    setScreeningParameters(prev => 
      prev.map(param => 
        param.id === id ? { ...param, selected: !param.selected } : param
      )
    );
  };
  
  const handleSave = () => {
    // Here you would typically submit the form data to an API
    toast({
      title: "Criteria saved",
      description: "Your deal criteria settings have been saved successfully."
    });
  };
  
  const availableParameters = [
    "Cap Rate",
    "NOI Margin",
    "Debt Service Coverage Ratio",
    "Loan-to-Value Ratio",
    "Median Income Growth"
  ];

  const handleAddParameter = (paramName) => {
    // Create a new parameter object with a unique ID
    const newParam = {
      id: paramName.toLowerCase().replace(/\s+/g, '-'),
      label: paramName,
      selected: true // Set to true since user is explicitly adding it
    };
    
    // Check if parameter already exists to avoid duplicates
    const exists = screeningParameters.some(param => param.id === newParam.id);
    
    if (!exists) {
      // Add the new parameter to the list
      setScreeningParameters([...screeningParameters, newParam]);
      
      toast({
        title: "Parameter added",
        description: `${paramName} has been added to your screening parameters.`
      });
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Deal Criteria</h2>
        <p className="text-muted-foreground">
          Configure your deal screening parameters and financial criteria.
        </p>
      </div>
      
      <Separator />
      
      <Card>
        <CardHeader>
          <CardTitle>Deal Screening Parameters</CardTitle>
          <CardDescription>
            Select the data points that appear on the deal overview page.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4">
            {screeningParameters.map((param) => (
              <div key={param.id} className="flex items-center gap-2">
                <RadioGroup value={param.selected ? "selected" : "unselected"}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem 
                      value="selected" 
                      id={`${param.id}-selected`}
                      onClick={() => handleParameterToggle(param.id)}
                      checked={param.selected}
                    />
                    <Label htmlFor={`${param.id}-selected`}>{param.label}</Label>
                  </div>
                </RadioGroup>
              </div>
            ))}
          </div>
          
          <div className="mt-6">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2">
                  Add Data Point
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent> 
              {availableParameters.map((param) => (
                <DropdownMenuItem 
                    key={param} 
                    onClick={() => handleAddParameter(param)}
                >
                    {param}
                </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Financial Criteria</CardTitle>
          <CardDescription>
            Set your target financial parameters for deal evaluation.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="irr">Target IRR</Label>
            <div className="flex items-center gap-4">
              <Input 
                id="irr"
                value={irr}
                onChange={(e) => setIrr(e.target.value)}
                className="w-full"
              />
              <span className="text-xl font-medium">%</span>
            </div>
            
            <div className="flex items-center gap-2 mt-2">
              <input 
                type="checkbox"
                id="set-range"
                checked={isRangeSet}
                onChange={() => setIsRangeSet(!isRangeSet)}
                className="rounded border-gray-300"
              />
              <Label htmlFor="set-range" className="cursor-pointer">Set range</Label>
            </div>
          </div>
          
          <div className="space-y-4">
            <Label>Price Range</Label>
            <div className="pt-6 px-2">
              <Slider
                defaultValue={[50, 120]}
                max={200}
                step={1}
                value={priceRange}
                onValueChange={(value) => setPriceRange(value as number[])}
              />
            </div>
            <div className="flex justify-between text-sm text-muted-foreground">
              <div>${priceRange[0].toLocaleString('en-US')}M</div>
              <div>${priceRange[1].toLocaleString('en-US')}M</div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div>
        <Button onClick={handleSave}>Save Settings</Button>
      </div>
    </div>
  );
}