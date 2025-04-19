"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { 
  RotateCcw, 
  SlidersHorizontal
} from "lucide-react";

export interface FilterValues {
  propertyType?: string;
  location?: string;
  size: {
    min?: number;
    max?: number;
  };
  dealStatus?: string;
  minIrr: number;
  minEquityMultiple: number;
  price: {
    min?: number;
    max?: number;
  };
  acquisitionDate?: string;
}

interface PipelineFiltersProps {
  onApplyFilters: (filters: FilterValues) => void;
  onResetFilters: () => void;
}

export function PipelineFilters({ onApplyFilters, onResetFilters }: PipelineFiltersProps) {
  // State for all filter values
  const [propertyType, setPropertyType] = useState<string | undefined>(undefined);
  const [location, setLocation] = useState<string | undefined>(undefined);
  const [minSize, setMinSize] = useState<string>("");
  const [maxSize, setMaxSize] = useState<string>("");
  const [dealStatus, setDealStatus] = useState<string | undefined>(undefined);
  const [minIrr, setMinIrr] = useState<number>(10);
  const [minEquityMultiple, setMinEquityMultiple] = useState<number>(1.5);
  const [minPrice, setMinPrice] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<string>("");
  const [acquisitionDate, setAcquisitionDate] = useState<string | undefined>(undefined);

  // Reset all filters to default values
  const handleReset = () => {
    setPropertyType(undefined);
    setLocation(undefined);
    setMinSize("");
    setMaxSize("");
    setDealStatus(undefined);
    setMinIrr(10);
    setMinEquityMultiple(1.5);
    setMinPrice("");
    setMaxPrice("");
    setAcquisitionDate(undefined);
    
    onResetFilters();
  };

  // Apply filters
  const handleApplyFilters = () => {
    const filters: FilterValues = {
      propertyType,
      location,
      size: { 
        min: minSize ? parseInt(minSize) : undefined, 
        max: maxSize ? parseInt(maxSize) : undefined 
      },
      dealStatus,
      minIrr,
      minEquityMultiple,
      price: { 
        min: minPrice ? parseFloat(minPrice) : undefined, 
        max: maxPrice ? parseFloat(maxPrice) : undefined 
      },
      acquisitionDate
    };
    
    onApplyFilters(filters);
  };

  return (
    <Card className="mb-6">
      <CardContent className="pt-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="h-4 w-4" />
            <h3 className="text-lg font-semibold">Filter Properties</h3>
          </div>
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-muted-foreground flex items-center gap-1"
            onClick={handleReset}
          >
            <RotateCcw className="h-3.5 w-3.5" />
            Reset Filters
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="space-y-2">
            <Label>Property Type</Label>
            <Select value={propertyType} onValueChange={setPropertyType}>
              <SelectTrigger>
                <SelectValue placeholder="Any property type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="industrial">Industrial</SelectItem>
                <SelectItem value="warehouse">Warehouse</SelectItem>
                <SelectItem value="multifamily">Multifamily</SelectItem>
                <SelectItem value="office">Office</SelectItem>
                <SelectItem value="retail">Retail</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label>Location</Label>
            <Select value={location} onValueChange={setLocation}>
              <SelectTrigger>
                <SelectValue placeholder="Any location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ny">New York</SelectItem>
                <SelectItem value="nj">New Jersey</SelectItem>
                <SelectItem value="pa">Pennsylvania</SelectItem>
                <SelectItem value="ct">Connecticut</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label>Size Range (sqft)</Label>
            <div className="flex gap-2 items-center">
              <Input 
                type="number" 
                placeholder="Min" 
                className="h-9" 
                value={minSize}
                onChange={(e) => setMinSize(e.target.value)}
              />
              <span className="text-muted-foreground">to</span>
              <Input 
                type="number" 
                placeholder="Max" 
                className="h-9" 
                value={maxSize}
                onChange={(e) => setMaxSize(e.target.value)}
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label>Deal Status</Label>
            <Select value={dealStatus} onValueChange={setDealStatus}>
              <SelectTrigger>
                <SelectValue placeholder="Any status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="under-contract">Under Contract</SelectItem>
                <SelectItem value="closed">Closed</SelectItem>
                <SelectItem value="pass">Pass</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label>Minimum IRR: {minIrr}%</Label>
            <div className="pt-2 px-2">
              <Slider 
                value={[minIrr]} 
                onValueChange={(values) => setMinIrr(values[0])} 
                max={30} 
                step={1} 
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>0%</span>
                <span>15%</span>
                <span>30%</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label>Minimum Equity Multiple: {minEquityMultiple.toFixed(1)}x</Label>
            <div className="pt-2 px-2">
              <Slider 
                value={[minEquityMultiple]} 
                onValueChange={(values) => setMinEquityMultiple(values[0])} 
                max={5} 
                step={0.1} 
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>1.0x</span>
                <span>2.5x</span>
                <span>5.0x</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label>Price PSF Range</Label>
            <div className="flex gap-2 items-center">
              <Input 
                type="number" 
                placeholder="Min" 
                className="h-9" 
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
              />
              <span className="text-muted-foreground">to</span>
              <Input 
                type="number" 
                placeholder="Max" 
                className="h-9" 
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label>Acquisition Date</Label>
            <Select value={acquisitionDate} onValueChange={setAcquisitionDate}>
              <SelectTrigger>
                <SelectValue placeholder="Any date" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="last-30-days">Last 30 days</SelectItem>
                <SelectItem value="last-quarter">Last Quarter</SelectItem>
                <SelectItem value="last-year">Last Year</SelectItem>
                <SelectItem value="custom">Custom Range</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="flex justify-end mt-6">
          <Button onClick={handleApplyFilters}>Apply Filters</Button>
        </div>
      </CardContent>
    </Card>
  );
}