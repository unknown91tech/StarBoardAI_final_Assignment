"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Building2, 
  Columns, 
  Users, 
  CalendarClock,
  Warehouse,
  Building,
  Home
} from "lucide-react";

export function AssetLevelData() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Asset-Level Data</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Building2 className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">Clear Heights</p>
                <p className="font-medium">36'</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Columns className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">Column Spacing</p>
                <p className="font-medium">63' X 54'</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Warehouse className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">Loading Spaces</p>
                <p className="font-medium">28</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Users className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">Tenant</p>
                <p className="font-medium">Amazon</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Building className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">Total Space</p>
                <p className="font-medium">357,151 sqft</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <CalendarClock className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">Year Built</p>
                <p className="font-medium">2021</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Home className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">Occupancy Rate</p>
                <p className="font-medium">100%</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Warehouse className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">Parking Spaces</p>
                <p className="font-medium">393</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}