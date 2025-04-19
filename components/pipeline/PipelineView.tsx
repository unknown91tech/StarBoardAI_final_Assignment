"use client";

import { useState, useEffect } from "react";
import { PropertyRow } from "./PropertyRow";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Download, Filter, Plus, Search, SlidersHorizontal } from "lucide-react";
import { PipelineFilters, FilterValues } from "./PipelineFilters";

// Sample data based on the screenshot
const properties = [
  {
    id: 1,
    name: "280 Richards",
    location: "Brooklyn, NY",
    type: "Industrial, Warehouse",
    sqft: 312000,
    imageUrl: "https://images.pexels.com/photos/1838640/pexels-photo-1838640.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    irr: 11.9,
    equityMultiple: 2.1,
    returnOnEquity: 16.3,
    pricePSF: 23.92,
    status: "active"
  },
  {
    id: 2,
    name: "397 Ferry Street",
    location: "Newark, NJ",
    type: "Industrial, Warehouse",
    sqft: 95535,
    imageUrl: "https://images.pexels.com/photos/7078675/pexels-photo-7078675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    irr: 17.6,
    equityMultiple: 3.2,
    returnOnEquity: 19.5,
    pricePSF: 32.30,
    status: "under-contract"
  },
  {
    id: 3,
    name: "Kearny Street",
    location: "Kearny, NJ",
    type: "Industrial, Warehouse",
    sqft: 207000,
    imageUrl: "https://images.pexels.com/photos/3760529/pexels-photo-3760529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    irr: 14.8,
    equityMultiple: 2.6,
    returnOnEquity: 15.8,
    pricePSF: 22.30,
    status: "active"
  },
  {
    id: 4,
    name: "Matrix Center",
    location: "Camden, NJ",
    type: "Industrial, Warehouse",
    sqft: 270600,
    imageUrl: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    irr: 12.2,
    equityMultiple: 2.2,
    returnOnEquity: 11.4,
    pricePSF: 11.20,
    status: "closed"
  },
];

export function PipelineView() {
  const [showFilters, setShowFilters] = useState(false);
  const [selectedModel, setSelectedModel] = useState("Industrial.Template.v2.4.xlsx");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProperties, setFilteredProperties] = useState(properties);
  const [activeFilters, setActiveFilters] = useState<FilterValues | null>(null);
  const [isFiltersApplied, setIsFiltersApplied] = useState(false);

  // Filter properties based on search term and active filters
  useEffect(() => {
    let result = [...properties];
    
    // Apply search filter
    if (searchTerm.trim() !== '') {
      const lowerCaseSearch = searchTerm.toLowerCase();
      result = result.filter(property => 
        property.name.toLowerCase().includes(lowerCaseSearch) ||
        property.location.toLowerCase().includes(lowerCaseSearch) ||
        property.type.toLowerCase().includes(lowerCaseSearch) ||
        property.sqft.toString().includes(lowerCaseSearch) ||
        property.pricePSF.toString().includes(lowerCaseSearch)
      );
    }
    
    // Apply active filters if they exist
    if (isFiltersApplied && activeFilters) {
      // Property type filter
      if (activeFilters.propertyType) {
        result = result.filter(property => 
          property.type.toLowerCase().includes(activeFilters.propertyType!.toLowerCase())
        );
      }
      
      // Location filter
      if (activeFilters.location) {
        result = result.filter(property => {
          if (activeFilters.location === 'ny') return property.location.includes('NY');
          if (activeFilters.location === 'nj') return property.location.includes('NJ');
          if (activeFilters.location === 'pa') return property.location.includes('PA');
          if (activeFilters.location === 'ct') return property.location.includes('CT');
          return true;
        });
      }
      
      // Size range filter
      if (activeFilters.size.min !== undefined) {
        result = result.filter(property => property.sqft >= activeFilters.size.min!);
      }
      if (activeFilters.size.max !== undefined) {
        result = result.filter(property => property.sqft <= activeFilters.size.max!);
      }
      
      // Deal status filter
      if (activeFilters.dealStatus) {
        result = result.filter(property => property.status === activeFilters.dealStatus);
      }
      
      // IRR filter
      result = result.filter(property => property.irr >= activeFilters.minIrr);
      
      // Equity multiple filter
      result = result.filter(property => property.equityMultiple >= activeFilters.minEquityMultiple);
      
      // Price PSF range filter
      if (activeFilters.price.min !== undefined) {
        result = result.filter(property => property.pricePSF >= activeFilters.price.min!);
      }
      if (activeFilters.price.max !== undefined) {
        result = result.filter(property => property.pricePSF <= activeFilters.price.max!);
      }
      
      // Acquisition date filter would be implemented here if we had that data
    }
    
    setFilteredProperties(result);
  }, [searchTerm, isFiltersApplied, activeFilters]);

  // Handler for applying filters
  const handleApplyFilters = (filters: FilterValues) => {
    setActiveFilters(filters);
    setIsFiltersApplied(true);
  };

  // Handler for resetting filters
  const handleResetFilters = () => {
    setActiveFilters(null);
    setIsFiltersApplied(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="relative w-full sm:w-auto">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search deals..."
            className="pl-9 w-full sm:w-80"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <Button 
            variant="outline" 
            size="sm" 
            className="flex items-center gap-2"
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter className="h-4 w-4" />
            Filters {isFiltersApplied && '(Active)'}
          </Button>
          
          <Button 
            variant="outline" 
            size="sm" 
            className="flex items-center gap-2"
          >
            <Download className="h-4 w-4" />
            Export
          </Button>
          
          <Button 
            variant="default" 
            size="sm" 
            className="flex items-center gap-2 ml-auto sm:ml-0"
          >
            <Plus className="h-4 w-4" />
            Add Property
          </Button>
        </div>
      </div>
      
      {showFilters && (
        <PipelineFilters 
          onApplyFilters={handleApplyFilters} 
          onResetFilters={handleResetFilters} 
        />
      )}
      
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <div className="text-sm text-muted-foreground mb-3 sm:mb-0">
          Showing {filteredProperties.length} {filteredProperties.length === 1 ? 'property' : 'properties'}
          {searchTerm && ` for "${searchTerm}"`}
          {isFiltersApplied && ' with filters applied'}
        </div>
        
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <span className="text-sm whitespace-nowrap">Underwriting Model:</span>
          <Select 
            value={selectedModel} 
            onValueChange={setSelectedModel}
          >
            <SelectTrigger className="w-full sm:w-64 h-9 text-sm">
              <SelectValue placeholder="Select a model" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Industrial.Template.v2.4.xlsx">Industrial.Template.v2.4.xlsx</SelectItem>
              <SelectItem value="Multifamily.Template.v3.1.xlsx">Multifamily.Template.v3.1.xlsx</SelectItem>
              <SelectItem value="Office.Template.v1.8.xlsx">Office.Template.v1.8.xlsx</SelectItem>
              <SelectItem value="Retail.Template.v2.2.xlsx">Retail.Template.v2.2.xlsx</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="border rounded-lg overflow-hidden">
        <div className="grid grid-cols-5 gap-4 p-4 bg-muted/30 border-b font-medium text-sm">
          <div>Property</div>
          <div className="text-center">IRR</div>
          <div className="text-center">Equity Multiple</div>
          <div className="text-center">Return on Equity</div>
          <div className="text-center">Price psf</div>
        </div>
        
        <div className="divide-y">
          {filteredProperties.length > 0 ? (
            filteredProperties.map((property) => (
              <PropertyRow key={property.id} property={property} />
            ))
          ) : (
            <div className="p-8 text-center text-muted-foreground">
              No properties match your search criteria
            </div>
          )}
        </div>
      </div>
    </div>
  );
}