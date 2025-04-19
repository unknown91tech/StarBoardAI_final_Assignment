"use client";

import Image from "next/image";

export function SupplyPipelineSection() {
  const supplyPipelineItems = [
    {
      address: "640 Columbia",
      submarket: "Brooklyn",
      deliveryDate: "Jun-25",
      owner: "CBREI",
      sf: "336,350",
      imageUrl: "https://images.pexels.com/photos/2138126/pexels-photo-2138126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      address: "WB Mason",
      submarket: "Bronx",
      deliveryDate: "May-25",
      owner: "Link Logistics",
      sf: "150,000",
      imageUrl: "https://images.pexels.com/photos/7078675/pexels-photo-7078675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {supplyPipelineItems.map((item, index) => (
        <div key={index} className="flex gap-4 border rounded-lg p-3">
          <div className="relative w-24 h-24 rounded-md overflow-hidden">
            <Image 
              src={item.imageUrl} 
              alt={item.address}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p><strong>Address:</strong> {item.address}</p>
            <p><strong>Submarket:</strong> {item.submarket}</p>
            <p><strong>Delivery Date:</strong> {item.deliveryDate}</p>
            <p><strong>Owner:</strong> {item.owner}</p>
            <p><strong>SF:</strong> {item.sf}</p>
          </div>
        </div>
      ))}
    </div>
  );
}