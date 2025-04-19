export interface AccountFormData {
    name: string;
    email: string;
    company: string;
    role: string;
  }
  
  export interface ScreeningParameter {
    id: string;
    label: string;
    selected: boolean;
  }
  
  export type SettingsSection = "account" | "deal-criteria" | "models";
  
  export interface ModelFile {
    id: string;
    name: string;
    uploadDate: string;
  }
  
  export interface DealCriteriaForm {
    targetIrr: string;
    isRangeSet: boolean;
    priceRange: number[];
    screeningParameters: ScreeningParameter[];
  }