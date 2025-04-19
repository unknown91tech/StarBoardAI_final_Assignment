"use client";

import { Building2, Calendar, MapPin } from "lucide-react";
import Image from "next/image";

export function PropertyCard() {
  return (
    <div className="flex flex-col md:flex-row gap-4 p-4 border rounded-lg">
      <div className="relative w-full md:w-48 h-40 rounded-md overflow-hidden">
        <Image 
          src="https://images.pexels.com/photos/1838640/pexels-photo-1838640.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          alt="280 Richards, Brooklyn, NY"
          fill
          className="object-cover"
        />
        <div className="absolute bottom-2 left-2 text-xs text-white bg-black/60 px-2 py-1 rounded">
          Click for Google Street View
        </div>
      </div>
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">280 Richards, Brooklyn, NY</h2>
        <div className="flex items-center text-sm text-muted-foreground gap-1">
          <Calendar className="h-4 w-4" />
          <span>Date Uploaded: 11/06/2024</span>
        </div>
        <div className="flex items-center text-sm text-muted-foreground gap-1">
          <Building2 className="h-4 w-4" />
          <span>Warehouse</span>
        </div>
        <div className="flex items-center mt-1 gap-4 flex-wrap">
          <div className="flex flex-col">
            <span className="text-xs text-muted-foreground">Guidance Price</span>
            <span className="font-medium">$143,000,000</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-muted-foreground">Price PSF</span>
            <span className="font-medium">$23.92</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-muted-foreground">Cap Rate</span>
            <span className="font-medium">5.0%</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-muted-foreground">Property Size</span>
            <span className="font-medium">312,000 sqft</span>
          </div>
        </div>
      </div>
    </div>
  );
}