"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  AreaChart, 
  Building, 
  ChevronDown, 
  ChevronUp, 
  Coins, 
  FileText, 
  MapPin, 
  Move, 
  SquareStack
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const landSaleComparables = [
  {
    id: 1,
    address: "640 Columbia",
    submarket: "Brooklyn",
    date: "Jun-25",
    owner: "CBRE",
    sf: 336350,
    pricePerSF: 410,
    totalPrice: 137903500,
    zoning: "M3-1",
    siteSize: "2.2 acres",
    imageUrl: "https://images.pexels.com/photos/2138126/pexels-photo-2138126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 2,
    address: "1 Debaun Road",
    submarket: "Millstone, NJ",
    date: "Jun-24",
    owner: "Cabot",
    sf: 132930,
    pricePerSF: 312,
    totalPrice: 41903580,
    zoning: "I-P",
    siteSize: "1.8 acres",
    imageUrl: "https://images.pexels.com/photos/7078675/pexels-photo-7078675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 3,
    address: "Baylis 495 Business Park",
    submarket: "Melville, NY",
    date: "May-24",
    owner: "Bethal Green",
    sf: 103500,
    pricePerSF: 425,
    totalPrice: 44000000,
    zoning: "I-1",
    siteSize: "3.4 acres",
    imageUrl: "https://images.pexels.com/photos/3760529/pexels-photo-3760529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 4,
    address: "39 Edgeboro Road",
    submarket: "Millstone, NJ",
    date: "Oct-23",
    owner: "Blackstone",
    sf: 513240,
    pricePerSF: 323,
    totalPrice: 165776520,
    zoning: "I-P",
    siteSize: "4.6 acres",
    imageUrl: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

export function LandSaleComparables() {
  const [isExpanded, setIsExpanded] = useState(true);
  
  return (
    <Card>
      <CardHeader className="pb-3 flex flex-row items-center justify-between">
        <div>
          <CardTitle>Land Sale Comparables</CardTitle>
          <CardDescription>Recent land transactions in the area</CardDescription>
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
          <Tabs defaultValue="cards" className="w-full">
            <TabsList className="mb-4">
              <TabsTrigger value="cards">Cards</TabsTrigger>
              <TabsTrigger value="table">Table</TabsTrigger>
              <TabsTrigger value="analysis">Analysis</TabsTrigger>
            </TabsList>
            
            <TabsContent value="cards" className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {landSaleComparables.map((comparable) => (
                  <div key={comparable.id} className="border rounded-lg overflow-hidden">
                    <div className="relative h-36">
                      <img 
                        src={comparable.imageUrl} 
                        alt={comparable.address}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-3 space-y-2">
                      <div className="flex justify-between items-start">
                        <h3 className="font-medium text-sm">{comparable.address}</h3>
                        <span className="text-xs px-2 py-0.5 bg-secondary rounded-full">
                          {comparable.date}
                        </span>
                      </div>
                      
                      <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs">
                        <div className="flex items-center">
                          <MapPin className="h-3 w-3 mr-1 text-muted-foreground" />
                          <span>{comparable.submarket}</span>
                        </div>
                        <div className="flex items-center">
                          <Building className="h-3 w-3 mr-1 text-muted-foreground" />
                          <span>{comparable.sf.toLocaleString()} SF</span>
                        </div>
                        <div className="flex items-center">
                          <FileText className="h-3 w-3 mr-1 text-muted-foreground" />
                          <span>Zoning: {comparable.zoning}</span>
                        </div>
                        <div className="flex items-center">
                          <Move className="h-3 w-3 mr-1 text-muted-foreground" />
                          <span>{comparable.siteSize}</span>
                        </div>
                      </div>
                      
                      <div className="pt-1 border-t flex items-center justify-between text-sm">
                        <div className="flex items-center">
                          <Coins className="h-4 w-4 mr-1 text-muted-foreground" />
                          <span>${comparable.pricePerSF}/SF</span>
                        </div>
                        <span className="font-medium">${(comparable.totalPrice / 1000000).toFixed(1)}M</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="table">
              <div className="border rounded-lg overflow-hidden">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-muted">
                      <th className="text-left py-2 px-3 font-medium">Address</th>
                      <th className="text-left py-2 px-3 font-medium">Submarket</th>
                      <th className="text-left py-2 px-3 font-medium">Date</th>
                      <th className="text-right py-2 px-3 font-medium">Size (SF)</th>
                      <th className="text-right py-2 px-3 font-medium">Price/SF</th>
                      <th className="text-right py-2 px-3 font-medium">Total Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {landSaleComparables.map((comparable, index) => (
                      <tr key={comparable.id} className={index % 2 === 0 ? "bg-card" : "bg-muted/30"}>
                        <td className="py-2 px-3">{comparable.address}</td>
                        <td className="py-2 px-3">{comparable.submarket}</td>
                        <td className="py-2 px-3">{comparable.date}</td>
                        <td className="py-2 px-3 text-right">{comparable.sf.toLocaleString()}</td>
                        <td className="py-2 px-3 text-right">${comparable.pricePerSF}</td>
                        <td className="py-2 px-3 text-right">${(comparable.totalPrice / 1000000).toFixed(1)}M</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </TabsContent>
            
            <TabsContent value="analysis">
              <div className="space-y-4">
                <div className="aspect-[16/9] bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center p-4">
                    <AreaChart className="h-10 w-10 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-muted-foreground">Price per SF comparison chart will be displayed here</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <Coins className="h-4 w-4 mr-2 text-chart-1" />
                      <h3 className="font-medium">Average Price</h3>
                    </div>
                    <p className="text-2xl font-semibold">$368/SF</p>
                    <p className="text-sm text-muted-foreground mt-1">Range: $312-$425/SF</p>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <SquareStack className="h-4 w-4 mr-2 text-chart-2" />
                      <h3 className="font-medium">Average Size</h3>
                    </div>
                    <p className="text-2xl font-semibold">271,505 SF</p>
                    <p className="text-sm text-muted-foreground mt-1">Range: 103K-513K SF</p>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <Building className="h-4 w-4 mr-2 text-chart-3" />
                      <h3 className="font-medium">Dominant Zoning</h3>
                    </div>
                    <p className="text-2xl font-semibold">Industrial</p>
                    <p className="text-sm text-muted-foreground mt-1">Similar to subject property</p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      )}
    </Card>
  );
}