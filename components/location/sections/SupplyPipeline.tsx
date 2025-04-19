"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Building2, 
  CalendarClock, 
  ChevronDown, 
  ChevronUp, 
  Clock, 
  Construction, 
  HardHat, 
  MapPin 
} from "lucide-react";

const developmentProjects = [
  {
    id: 1,
    name: "Gowanus Canal Development",
    address: "450 Smith Street, Brooklyn",
    type: "Mixed-Use",
    status: "Under Construction",
    completion: "Q3 2025",
    squareFeet: 240000,
    progress: 35,
  },
  {
    id: 2,
    name: "Red Hook Logistics Center",
    address: "125 Ferris Street, Brooklyn",
    type: "Industrial",
    status: "Approved",
    completion: "Q1 2026",
    squareFeet: 180000,
    progress: 10,
  },
  {
    id: 3,
    name: "Brooklyn Navy Yard Expansion",
    address: "63 Flushing Avenue, Brooklyn",
    type: "Commercial",
    status: "Planning",
    completion: "Q4 2026",
    squareFeet: 320000,
    progress: 5,
  },
  {
    id: 4,
    name: "Sunset Park Warehouse Conversion",
    address: "220 36th Street, Brooklyn",
    type: "Industrial/Office",
    status: "Under Construction",
    completion: "Q2 2025",
    squareFeet: 150000,
    progress: 60,
  }
];

export function SupplyPipeline() {
  const [isExpanded, setIsExpanded] = useState(true);
  
  return (
    <Card>
      <CardHeader className="pb-3 flex flex-row items-center justify-between">
        <div>
          <CardTitle>Supply Pipeline</CardTitle>
          <CardDescription>Nearby developments and construction timeline</CardDescription>
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
          <Tabs defaultValue="list" className="w-full">
            <TabsList className="mb-4">
              <TabsTrigger value="list">List View</TabsTrigger>
              <TabsTrigger value="timeline">Timeline</TabsTrigger>
              <TabsTrigger value="map">Map View</TabsTrigger>
            </TabsList>
            
            <TabsContent value="list" className="space-y-4">
              {developmentProjects.map((project) => (
                <div key={project.id} className="border rounded-lg p-4 space-y-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">{project.name}</h3>
                      <div className="flex items-center text-sm text-muted-foreground mt-1">
                        <MapPin className="h-3.5 w-3.5 mr-1" />
                        <span>{project.address}</span>
                      </div>
                    </div>
                    <div className="px-2 py-1 rounded text-xs font-medium bg-secondary">
                      {project.type}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
                    <div className="flex items-center">
                      <Construction className="h-4 w-4 mr-1 text-muted-foreground" />
                      <span>{project.status}</span>
                    </div>
                    <div className="flex items-center">
                      <CalendarClock className="h-4 w-4 mr-1 text-muted-foreground" />
                      <span>Est. Completion: {project.completion}</span>
                    </div>
                    <div className="flex items-center">
                      <Building2 className="h-4 w-4 mr-1 text-muted-foreground" />
                      <span>{project.squareFeet.toLocaleString()} sqft</span>
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <div className="flex justify-between items-center text-xs">
                      <span>Progress</span>
                      <span>{project.progress}%</span>
                    </div>
                    <Progress value={project.progress} className="h-2" />
                  </div>
                </div>
              ))}
            </TabsContent>
            
            <TabsContent value="timeline">
              <div className="relative pl-6 border-l-2 border-border space-y-6">
                {developmentProjects
                  .sort((a, b) => {
                    const extractQuarter = (date: string) => {
                      const [q, year] = date.split(' ');
                      return parseInt(year) * 4 + parseInt(q.substring(1));
                    };
                    return extractQuarter(a.completion) - extractQuarter(b.completion);
                  })
                  .map((project, index) => (
                    <div key={project.id} className="relative">
                      <div className="absolute -left-[26px] top-0 h-6 w-6 rounded-full bg-primary flex items-center justify-center">
                        <Clock className="h-3 w-3 text-primary-foreground" />
                      </div>
                      <div className="pb-2">
                        <span className="text-sm font-medium text-muted-foreground">{project.completion}</span>
                      </div>
                      <div className="border rounded-lg p-3 bg-card">
                        <h3 className="font-medium">{project.name}</h3>
                        <div className="flex items-center gap-2 text-sm mt-1 flex-wrap">
                          <span className="px-2 py-0.5 rounded-full text-xs bg-secondary">
                            {project.type}
                          </span>
                          <span className="text-muted-foreground">{project.squareFeet.toLocaleString()} sqft</span>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </TabsContent>
            
            <TabsContent value="map">
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground">Interactive map will be integrated here</p>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      )}
    </Card>
  );
}