"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Building, 
  ChevronDown, 
  ChevronUp, 
  Factory, 
  MapPin, 
  Ship, 
  Timer, 
  Truck, 
  Train,
  Car
} from "lucide-react";
import Image from "next/image";

const proximityData = [
  {
    category: "Highways",
    items: [
      { name: "I-278 (Brooklyn-Queens Expressway)", distance: 0.8, travelTime: 3 },
      { name: "I-495 (Long Island Expressway)", distance: 4.6, travelTime: 12 },
      { name: "NY-27 (Prospect Expressway)", distance: 2.3, travelTime: 8 }
    ],
    icon: <Car className="h-4 w-4" />
  },
  {
    category: "Ports",
    items: [
      { name: "Red Hook Container Terminal", distance: 1.5, travelTime: 6 },
      { name: "Brooklyn Cruise Terminal", distance: 1.8, travelTime: 7 },
      { name: "Port Newark-Elizabeth", distance: 14.2, travelTime: 30 }
    ],
    icon: <Ship className="h-4 w-4" />
  },
  {
    category: "Major Tenants",
    items: [
      { name: "Amazon Fulfillment Center", distance: 3.2, travelTime: 10 },
      { name: "FedEx Distribution Center", distance: 5.6, travelTime: 15 },
      { name: "Ikea Brooklyn", distance: 1.2, travelTime: 5 },
      { name: "Industry City", distance: 2.8, travelTime: 9 }
    ],
    icon: <Building className="h-4 w-4" />
  },
  {
    category: "Rail Lines",
    items: [
      { name: "Bay Ridge Branch (Freight)", distance: 1.9, travelTime: 7 },
      { name: "NYCT Subway (D/N/R Lines)", distance: 0.6, travelTime: 5 },
      { name: "LIRR Atlantic Terminal", distance: 4.2, travelTime: 15 }
    ],
    icon: <Train className="h-4 w-4" />
  }
];

export function ProximityInsights() {
  const [isExpanded, setIsExpanded] = useState(true);
  
  return (
    <Card>
      <CardHeader className="pb-3 flex flex-row items-center justify-between">
        <div>
          <CardTitle>Proximity Insights</CardTitle>
          <CardDescription>Distance to key infrastructure and tenants</CardDescription>
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
          <div className="space-y-5">
            <div className="aspect-video relative rounded-lg overflow-hidden bg-muted">
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-muted-foreground">Interactive map will be displayed here</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {proximityData.map((category, idx) => (
                <Card key={idx} className="border-muted">
                  <CardHeader className="py-3 pb-2">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center mr-2">
                        {category.icon}
                      </div>
                      <CardTitle className="text-base">{category.category}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="px-4 pb-4">
                    <ul className="space-y-3">
                      {category.items.map((item, index) => (
                        <li key={index} className="flex items-center justify-between border-b pb-2">
                          <div className="flex items-start">
                            <MapPin className="h-4 w-4 mr-2 mt-0.5 text-muted-foreground" />
                            <span className="text-sm">{item.name}</span>
                          </div>
                          <div className="flex gap-3 items-center text-sm">
                            <div className="flex items-center">
                              <Truck className="h-3.5 w-3.5 mr-1 text-muted-foreground" />
                              <span>{item.distance} mi</span>
                            </div>
                            <div className="flex items-center">
                              <Timer className="h-3.5 w-3.5 mr-1 text-muted-foreground" />
                              <span>{item.travelTime} min</span>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <Card>
              <CardHeader className="py-3">
                <CardTitle className="text-base">Logistics Advantages</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-chart-1 text-white flex items-center justify-center mr-2 mt-0.5 text-xs">1</div>
                    <span><strong>Excellent highway access</strong> with I-278 less than 1 mile away, providing direct routes to Manhattan, Queens, and Staten Island.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-chart-2 text-white flex items-center justify-center mr-2 mt-0.5 text-xs">2</div>
                    <span><strong>Proximity to multiple shipping terminals</strong> facilitates efficient import/export operations and reduces transportation costs.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-chart-3 text-white flex items-center justify-center mr-2 mt-0.5 text-xs">3</div>
                    <span><strong>Last-mile delivery advantage</strong> with access to 2.5M+ residents within a 5-mile radius.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-chart-4 text-white flex items-center justify-center mr-2 mt-0.5 text-xs">4</div>
                    <span><strong>Rail connectivity</strong> provides alternative freight transportation options and reduces dependence on trucking.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      )}
    </Card>
  );
}