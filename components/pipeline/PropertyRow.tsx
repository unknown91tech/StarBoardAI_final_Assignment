"use client";

import Image from "next/image";
import { Building2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface PropertyRowProps {
  property: {
    id: number;
    name: string;
    location: string;
    type: string;
    sqft: number;
    imageUrl: string;
    irr: number;
    equityMultiple: number;
    returnOnEquity: number;
    pricePSF: number;
    status: string;
  };
}

export function PropertyRow({ property }: PropertyRowProps) {
  return (
    <div className="grid grid-cols-5 gap-4 p-4 hover:bg-muted/20 transition-colors cursor-pointer">
      <div className="flex items-center gap-3">
        <div className="relative h-16 w-24 rounded-md overflow-hidden flex-shrink-0">
          <Image
            src={property.imageUrl}
            alt={property.name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h3 className="font-medium text-sm">{property.name}, {property.location}</h3>
            {property.status && (
              <Badge variant="outline" className="text-xs font-normal">
                {property.status === "active" && "Active"}
                {property.status === "under-contract" && "Under Contract"}
                {property.status === "closed" && "Closed"}
                {property.status === "pass" && "Pass"}
              </Badge>
            )}
          </div>
          <div className="flex items-center text-xs text-muted-foreground mt-1">
            <Building2 className="h-3 w-3 mr-1" />
            <span>{property.type}</span>
          </div>
          <div className="text-xs text-muted-foreground mt-0.5">
            {property.sqft.toLocaleString()} sqft
          </div>
        </div>
      </div>
      
      <div className="flex items-center justify-center">
        <div className="text-center">
          <span className="font-semibold">{property.irr}%</span>
        </div>
      </div>
      
      <div className="flex items-center justify-center">
        <div className="text-center">
          <span className="font-semibold">{property.equityMultiple}x</span>
        </div>
      </div>
      
      <div className="flex items-center justify-center">
        <div className="text-center">
          <span className="font-semibold">{property.returnOnEquity}%</span>
        </div>
      </div>
      
      <div className="flex items-center justify-center">
        <div className="text-center">
          <span className="font-semibold">${property.pricePSF.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}