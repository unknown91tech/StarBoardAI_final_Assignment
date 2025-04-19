"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export function PersonalizedInsights() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Personalized Insights</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 text-sm">
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>
              Jake Klein viewed this deal in 2019, but decided not to proceed due to{" "}
              <Link href="#" className="text-blue-600 hover:underline">lack of potential upside</Link>.
            </span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>
              On 10/01/2021, your firm bid on{" "}
              <Link href="#" className="text-blue-600 hover:underline">55 Bay St, Brooklyn, NY 11231</Link>, a larger site also occupied by Amazon 0.5 
              miles away.{" "}
              <Link href="#" className="text-blue-600 hover:underline">Rockfield won the deal for $450k</Link> cap rates in the area have compressed 45bps since then.
            </span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>
              On 01/19/2025, Tom, VP of Research, noted in the Investment Committee meeting that congestion 
              pricing has driven{" "}
              <Link href="#" className="text-blue-600 hover:underline">renewed demand for infill industrial in Brooklyn</Link>.
            </span>
          </li>
        </ul>
      </CardContent>
    </Card>
  );
}