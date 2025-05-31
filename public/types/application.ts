export type ApplicationStatus = 
  | "pending" 
  | "reviewed" 
  | "shortlisted" 
  | "interview_scheduled" 
  | "interview_completed" 
  | "offered" 
  | "accepted" 
  | "rejected" 
  | "withdrawn";

export interface Application {
  id: string;
  opportunityId: string;
  opportunity: {
    id: string;
    title: string;
    company: {
      id: string;
      name: string;
      logo?: string;
    };
  };
  applicant: {
    id: string;
    name: string;
    email: string;
    avatar?: string;
    university?: string;
    major?: string;
  };
  status: ApplicationStatus;
  appliedAt: string;
  updatedAt: string;
  coverLetter?: string;
  resume?: string;
  notes?: string;
  interviewDate?: string;
  feedback?: {
    rating: number;
    comment: string;
    createdAt: string;
    createdBy: string;
  }[];
}
