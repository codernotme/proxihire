export type OpportunityType = "internship" | "event" | "promotion" | "project";
export type OpportunityStatus = "draft" | "open" | "closed" | "filled" | "cancelled";

export interface Opportunity {
  id: string;
  title: string;
  company: {
    id: string;
    name: string;
    logo?: string;
  };
  type: OpportunityType;
  description: string;
  requirements: string[];
  location: string;
  isRemote: boolean;
  compensation: {
    type: "hourly" | "fixed" | "range";
    amount: number;
    maxAmount?: number;
    currency: string;
  };
  startDate: string;
  endDate?: string;
  duration?: string;
  hoursPerWeek?: number;
  status: OpportunityStatus;
  skills: string[];
  applicationsCount: number;
  createdAt: string;
  updatedAt: string;
  createdBy: string;
}
