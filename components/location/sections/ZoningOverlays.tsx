"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { 
  AlertTriangle,
  Building2, 
  ChevronDown, 
  ChevronUp, 
  ExternalLink, 
  FileText, 
  LayoutGrid, 
  Ruler,
  Scale
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export function ZoningOverlays() {
  const [isExpanded, setIsExpanded] = useState(true);
  
  return (
    <Card>
      <CardHeader className="pb-3 flex flex-row items-center justify-between">
        <div>
          <CardTitle>Zoning Overlays</CardTitle>
          <CardDescription>Municipal zoning and regulatory information</CardDescription>
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
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Card>
                <CardHeader className="py-3">
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline" className="font-medium px-3">M-2</Badge>
                    <CardTitle className="text-sm">Zoning Code</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-base">Medium Manufacturing</div>
                  <div className="text-sm text-muted-foreground mt-1">Brooklyn Waterfront</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="py-3">
                  <div className="flex items-center space-x-2">
                    <LayoutGrid className="h-4 w-4 text-chart-2" />
                    <CardTitle className="text-sm">Floor Area Ratio</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-base">2.0 FAR</div>
                  <div className="text-sm text-muted-foreground mt-1">Max commercial use</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="py-3">
                  <div className="flex items-center space-x-2">
                    <Ruler className="h-4 w-4 text-chart-3" />
                    <CardTitle className="text-sm">Height Limit</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-base">60 feet</div>
                  <div className="text-sm text-muted-foreground mt-1">Sky exposure plane</div>
                </CardContent>
              </Card>
            </div>
            
            <Card>
              <CardHeader className="py-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base">Permitted Uses</CardTitle>
                  <Badge variant="outline">
                    <Scale className="h-3 w-3 mr-1" />
                    Regulatory
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-sm">
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                    <span>Manufacturing (General)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                    <span>Warehouses & Distribution</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                    <span>Food & Beverage Production</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                    <span>Self-Storage Facilities</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                    <span>Vehicle Storage & Repair</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-yellow-500 mr-2"></div>
                    <span>Office Space (Limited)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-red-500 mr-2"></div>
                    <span>Residential Development</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-red-500 mr-2"></div>
                    <span>Hotels & Hospitality</span>
                  </div>
                </div>
                
                <div className="mt-4 text-xs text-muted-foreground flex items-center">
                  <div className="flex items-center mr-3">
                    <div className="w-2 h-2 rounded-full bg-green-500 mr-1"></div>
                    <span>Permitted</span>
                  </div>
                  <div className="flex items-center mr-3">
                    <div className="w-2 h-2 rounded-full bg-yellow-500 mr-1"></div>
                    <span>Conditional</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-red-500 mr-1"></div>
                    <span>Prohibited</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Alert variant="warning" className="bg-amber-50 border-amber-200 text-amber-800">
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>Special Flood Hazard Area</AlertTitle>
              <AlertDescription>
                This property is within FEMA Zone AE, which is subject to flooding during 1% annual chance flood events. 
                Flood insurance is required, and specific building codes apply.
              </AlertDescription>
            </Alert>
            
            <div className="space-y-2">
              <h3 className="text-sm font-medium">Municipal References</h3>
              <Separator />
              <div className="space-y-3 pt-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <FileText className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="text-sm">New York City Zoning Resolution</span>
                  </div>
                  <Button variant="ghost" size="sm" className="h-8 gap-1">
                    <ExternalLink className="h-3.5 w-3.5" />
                    <span>View</span>
                  </Button>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <FileText className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="text-sm">Brooklyn Community Board 6 Guidelines</span>
                  </div>
                  <Button variant="ghost" size="sm" className="h-8 gap-1">
                    <ExternalLink className="h-3.5 w-3.5" />
                    <span>View</span>
                  </Button>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <FileText className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="text-sm">FEMA Flood Map Service Center</span>
                  </div>
                  <Button variant="ghost" size="sm" className="h-8 gap-1">
                    <ExternalLink className="h-3.5 w-3.5" />
                    <span>View</span>
                  </Button>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Building2 className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="text-sm">NYC Department of Buildings Portal</span>
                  </div>
                  <Button variant="ghost" size="sm" className="h-8 gap-1">
                    <ExternalLink className="h-3.5 w-3.5" />
                    <span>View</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      )}
    </Card>
  );
}