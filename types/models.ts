export interface PropertyDetails {
    name: string;
    location: string;
    dateUploaded: string;
    type: string;
    price: number;
    pricePSF: number;
    capRate: number;
    size: number;
    tenant?: string;
    leaseLength?: string;
    landArea?: number;
    zoning?: string;
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
  
  // Scenario Analysis Types
  export interface AnalysisMessage {
    id: number;
    sender: 'user' | 'assistant';
    content: string;
    timestamp?: Date;
  }
  
  export interface AnalysisFile {
    id: number;
    filename: string;
    type: 'excel' | 'pdf' | 'image';
    url: string;
    createdAt?: Date;
  }
  
  export interface ScenarioData {
    id: string;
    title: string;
    description: string;
    type: 'manufacturing' | 'warehouse' | 'mixed-use' | 'retail';
    metrics: {
      roi: number;
      capRate: number;
      irr: number;
      paybackPeriod: number;
    };
  }