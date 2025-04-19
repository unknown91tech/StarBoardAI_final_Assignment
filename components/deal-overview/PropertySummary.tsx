"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function PropertySummary() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Deal Summary</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm">
          280 Richards, fully leased to Amazon, aligns with HUSPP's strategy of acquiring prime logistics assets in 
          Brooklyn's high-demand Red Hook submarket. With 13 years remaining on the lease and 3% annual rent 
          escalations, it offers stable, long-term cash flow. While single-tenant exposure is a risk, Amazon's 
          investment-grade rating and renewal options enhance its resilience, making it a strong addition to HUSPP's 
          portfolio.
        </p>
      </CardContent>
    </Card>
  );
}