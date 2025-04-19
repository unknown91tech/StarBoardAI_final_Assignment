export interface PropertyDetails {
  name: string;
  address: string;
  dateUploaded: string;
  propertyType: string;
  guidancePrice: number;
  pricePSF: number;
  capRate: number;
  propertySize: number;
  landArea: number;
  zoning: string;
}

export interface DevelopmentProject {
  id: number;
  name: string;
  address: string;
  type: string;
  status: string;
  completion: string;
  squareFeet: number;
  progress: number;
}

export interface LandSaleComparable {
  id: number;
  address: string;
  submarket: string;
  date: string;
  owner: string;
  sf: number;
  pricePerSF: number;
  totalPrice: number;
  zoning: string;
  siteSize: string;
  imageUrl: string;
}

export interface IncomeData {
  medianHouseholdIncome: number;
  growthRate: number;
  incomeTiers: {
    tier: string;
    percentage: number;
  }[];
}

export interface PopulationData {
  current: number;
  growthRate: number;
  trendData: {
    year: number;
    population: number;
  }[];
}

export interface WorkforceData {
  unemploymentRate: number;
  laborForceParticipation: number;
  topIndustries: {
    industry: string;
    percentage: number;
  }[];
}

export interface HousingData {
  totalHousingUnits: number;
  occupancyRate: number;
  ownerOccupied: number;
  renterOccupied: number;
  medianHomeValue: number;
  medianRent: number;
}

export interface ProximityItem {
  name: string;
  distance: number;
  travelTime: number;
}

export interface ProximityCategory {
  category: string;
  items: ProximityItem[];
  icon: React.ReactNode;
}