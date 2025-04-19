"use client";

import Image from "next/image";

export function SaleComparablesSection() {
  const saleComparables = [
    {
      address: "1 Debaun Road",
      submarket: "Millstone, NJ",
      date: "Jun-24",
      sf: "132,930",
      pp: "$41,903,580",
      owner: "Cabot",
      tenant: "Berry Plastics",
      imageUrl: "https://images.pexels.com/photos/7078675/pexels-photo-7078675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      address: "Baylis 495 Business Park",
      submarket: "Melville, NY",
      date: "May-24",
      sf: "103,500",
      pp: "$44,000,000",
      owner: "Betnal Green",
      tenant: "Dr. Pepper",
      imageUrl: "https://images.pexels.com/photos/3760529/pexels-photo-3760529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      address: "39 Edgeboro Road",
      submarket: "Millstone, NJ",
      date: "Oct-23",
      sf: "513,240",
      pp: "$165,776,520",
      owner: "Blackstone",
      tenant: "FedEx",
      imageUrl: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      address: "Terminal Logistics Center",
      submarket: "Queens, NY",
      date: "Mar-23",
      sf: "336,000",
      pp: "$136,000,000",
      owner: "Goldman",
      tenant: "Do & Co",
      imageUrl: "https://images.pexels.com/photos/2138126/pexels-photo-2138126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {saleComparables.map((item, index) => (
        <div key={index} className="flex gap-4 border rounded-lg p-3">
          <div className="relative w-24 h-24 rounded-md overflow-hidden">
            <Image 
              src={item.imageUrl} 
              alt={item.address}
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-1">
            <div className="flex justify-between">
              <p className="font-medium">{item.address}</p>
              <p className="text-xs bg-secondary px-2 py-0.5 rounded">{item.date}</p>
            </div>
            <p><strong>Submarket:</strong> {item.submarket}</p>
            <p><strong>SF:</strong> {item.sf}</p>
            <p><strong>PP:</strong> {item.pp}</p>
            <p><strong>Owner:</strong> {item.owner}</p>
            <p><strong>Tenant:</strong> {item.tenant}</p>
          </div>
        </div>
      ))}
    </div>
  );
}