export type UserRole = "admin" | "startup" | "student";

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
  createdAt: string;
  status: "active" | "suspended" | "pending";
}

export interface AdminUser extends User {
  role: "admin";
  permissions: string[];
  lastLogin: string;
}

export interface StartupUser extends User {
  role: "startup";
  company: {
    id: string;
    name: string;
    logo?: string;
    industry: string;
    size: string;
    location: string;
    website?: string;
  };
  position: string;
  teamMembers?: number;
}

export interface StudentUser extends User {
  role: "student";
  university: string;
  major: string;
  graduationYear: string;
  skills: string[];
  resume?: string;
  completedGigs?: number;
}
