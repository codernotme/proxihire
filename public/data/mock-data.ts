import { User, AdminUser, StartupUser, StudentUser } from "../types/user";
import { Opportunity } from "../types/opportunity";
import { Application } from "../types/application";
import { Conversation, Message } from "../types/message";

// Mock current user (for demo purposes)
export const mockCurrentUser: AdminUser = {
  id: "admin-1",
  name: "Admin User",
  email: "admin@proxihire.com",
  role: "admin",
  avatar: "https://img.heroui.chat/image/avatar?w=200&h=200&u=1",
  createdAt: "2023-01-15T08:00:00Z",
  status: "active",
  permissions: ["*"],
  lastLogin: "2023-06-10T14:30:00Z"
};

// Mock users
export const mockUsers: User[] = [
  mockCurrentUser,
  {
    id: "startup-1",
    name: "John Startup",
    email: "john@techstartup.com",
    role: "startup",
    avatar: "https://img.heroui.chat/image/avatar?w=200&h=200&u=2",
    createdAt: "2023-02-10T10:15:00Z",
    status: "active",
    company: {
      id: "company-1",
      name: "TechStartup Inc.",
      logo: "https://img.heroui.chat/image/ai?w=80&h=80&u=1",
      industry: "Software Development",
      size: "10-50",
      location: "San Francisco, CA",
      website: "https://techstartup.example.com"
    },
    position: "CEO",
    teamMembers: 3
  } as StartupUser,
  {
    id: "startup-2",
    name: "Sarah Manager",
    email: "sarah@innovatech.com",
    role: "startup",
    avatar: "https://img.heroui.chat/image/avatar?w=200&h=200&u=3",
    createdAt: "2023-03-05T09:30:00Z",
    status: "active",
    company: {
      id: "company-2",
      name: "InnovaTech",
      logo: "https://img.heroui.chat/image/ai?w=80&h=80&u=2",
      industry: "AI & Machine Learning",
      size: "50-200",
      location: "Boston, MA",
      website: "https://innovatech.example.com"
    },
    position: "Talent Acquisition Manager",
    teamMembers: 5
  } as StartupUser,
  {
    id: "student-1",
    name: "Alex Student",
    email: "alex@university.edu",
    role: "student",
    avatar: "https://img.heroui.chat/image/avatar?w=200&h=200&u=4",
    createdAt: "2023-01-20T11:45:00Z",
    status: "active",
    university: "Stanford University",
    major: "Computer Science",
    graduationYear: "2024",
    skills: ["JavaScript", "React", "Node.js", "UI/UX Design"],
    resume: "resume-alex.pdf",
    completedGigs: 3
  } as StudentUser,
  {
    id: "student-2",
    name: "Maya Student",
    email: "maya@college.edu",
    role: "student",
    avatar: "https://img.heroui.chat/image/avatar?w=200&h=200&u=5",
    createdAt: "2023-02-15T14:20:00Z",
    status: "active",
    university: "MIT",
    major: "Marketing",
    graduationYear: "2023",
    skills: ["Social Media Marketing", "Content Creation", "Event Planning", "Analytics"],
    resume: "resume-maya.pdf",
    completedGigs: 5
  } as StudentUser,
  {
    id: "admin-2",
    name: "Support Admin",
    email: "support@proxihire.com",
    role: "admin",
    avatar: "https://img.heroui.chat/image/avatar?w=200&h=200&u=6",
    createdAt: "2023-01-10T09:00:00Z",
    status: "active",
    permissions: ["user_management", "content_management", "support"],
    lastLogin: "2023-06-09T16:45:00Z"
  } as AdminUser,
  {
    id: "student-3",
    name: "James Student",
    email: "james@university.edu",
    role: "student",
    avatar: "https://img.heroui.chat/image/avatar?w=200&h=200&u=7",
    createdAt: "2023-03-10T10:30:00Z",
    status: "pending",
    university: "UCLA",
    major: "Business Administration",
    graduationYear: "2025",
    skills: ["Data Analysis", "Excel", "PowerPoint", "Project Management"],
    resume: "resume-james.pdf",
    completedGigs: 0
  } as StudentUser,
];

// Mock opportunities
export const mockOpportunities: Opportunity[] = [
  {
    id: "opp-1",
    title: "Frontend Developer Intern",
    company: {
      id: "company-1",
      name: "TechStartup Inc.",
      logo: "https://img.heroui.chat/image/ai?w=80&h=80&u=1"
    },
    type: "internship",
    description: "We're looking for a passionate frontend developer intern to join our team and help build our new product features.",
    requirements: [
      "Currently enrolled in Computer Science or related field",
      "Knowledge of JavaScript, HTML, CSS",
      "Familiarity with React is a plus"
    ],
    location: "San Francisco, CA",
    isRemote: true,
    compensation: {
      type: "hourly",
      amount: 25,
      currency: "USD"
    },
    startDate: "2023-07-01T00:00:00Z",
    endDate: "2023-09-30T00:00:00Z",
    duration: "3 months",
    hoursPerWeek: 20,
    status: "open",
    skills: ["JavaScript", "React", "HTML", "CSS"],
    applicationsCount: 12,
    createdAt: "2023-05-15T14:30:00Z",
    updatedAt: "2023-05-15T14:30:00Z",
    createdBy: "startup-1"
  },
  {
    id: "opp-2",
    title: "Event Staff for Tech Conference",
    company: {
      id: "company-2",
      name: "InnovaTech",
      logo: "https://img.heroui.chat/image/ai?w=80&h=80&u=2"
    },
    type: "event",
    description: "Seeking energetic students to help staff our annual tech conference. Responsibilities include registration, attendee assistance, and general support.",
    requirements: [
      "Excellent communication skills",
      "Previous event experience preferred",
      "Available for all event dates"
    ],
    location: "Boston, MA",
    isRemote: false,
    compensation: {
      type: "fixed",
      amount: 500,
      currency: "USD"
    },
    startDate: "2023-08-15T00:00:00Z",
    endDate: "2023-08-17T00:00:00Z",
    duration: "3 days",
    hoursPerWeek: 30,
    status: "open",
    skills: ["Customer Service", "Event Management", "Communication"],
    applicationsCount: 8,
    createdAt: "2023-06-01T09:45:00Z",
    updatedAt: "2023-06-01T09:45:00Z",
    createdBy: "startup-2"
  },
  {
    id: "opp-3",
    title: "Social Media Marketing Assistant",
    company: {
      id: "company-1",
      name: "TechStartup Inc.",
      logo: "https://img.heroui.chat/image/ai?w=80&h=80&u=1"
    },
    type: "internship",
    description: "Join our marketing team to help manage our social media presence and create engaging content for our audience.",
    requirements: [
      "Marketing or Communications major",
      "Experience with social media platforms",
      "Creative content creation skills"
    ],
    location: "San Francisco, CA",
    isRemote: true,
    compensation: {
      type: "hourly",
      amount: 22,
      currency: "USD"
    },
    startDate: "2023-07-15T00:00:00Z",
    endDate: "2023-10-15T00:00:00Z",
    duration: "3 months",
    hoursPerWeek: 15,
    status: "filled",
    skills: ["Social Media Marketing", "Content Creation", "Copywriting"],
    applicationsCount: 20,
    createdAt: "2023-05-20T11:15:00Z",
    updatedAt: "2023-06-10T16:30:00Z",
    createdBy: "startup-1"
  },
  {
    id: "opp-4",
    title: "Campus Brand Ambassador",
    company: {
      id: "company-2",
      name: "InnovaTech",
      logo: "https://img.heroui.chat/image/ai?w=80&h=80&u=2"
    },
    type: "promotion",
    description: "Represent our brand on your campus, organize promotional events, and help increase our visibility among students.",
    requirements: [
      "Currently enrolled student",
      "Strong campus network",
      "Outgoing personality"
    ],
    location: "Multiple Locations",
    isRemote: false,
    compensation: {
      type: "range",
      amount: 20,
      maxAmount: 30,
      currency: "USD"
    },
    startDate: "2023-09-01T00:00:00Z",
    endDate: "2023-12-15T00:00:00Z",
    duration: "Fall Semester",
    hoursPerWeek: 10,
    status: "open",
    skills: ["Event Planning", "Public Speaking", "Networking"],
    applicationsCount: 5,
    createdAt: "2023-06-05T13:20:00Z",
    updatedAt: "2023-06-05T13:20:00Z",
    createdBy: "startup-2"
  },
  {
    id: "opp-5",
    title: "UI/UX Design Project",
    company: {
      id: "company-1",
      name: "TechStartup Inc.",
      logo: "https://img.heroui.chat/image/ai?w=80&h=80&u=1"
    },
    type: "project",
    description: "Short-term project to redesign our mobile app interface. Looking for fresh ideas and modern design sensibilities.",
    requirements: [
      "Design portfolio",
      "Experience with Figma or similar tools",
      "Understanding of mobile design principles"
    ],
    location: "Remote",
    isRemote: true,
    compensation: {
      type: "fixed",
      amount: 2000,
      currency: "USD"
    },
    startDate: "2023-07-01T00:00:00Z",
    endDate: "2023-07-31T00:00:00Z",
    duration: "1 month",
    status: "open",
    skills: ["UI Design", "UX Design", "Figma", "Mobile Design"],
    applicationsCount: 15,
    createdAt: "2023-06-10T10:00:00Z",
    updatedAt: "2023-06-10T10:00:00Z",
    createdBy: "startup-1"
  }
];

// Mock applications
export const mockApplications: Application[] = [
  {
    id: "app-1",
    opportunityId: "opp-1",
    opportunity: {
      id: "opp-1",
      title: "Frontend Developer Intern",
      company: {
        id: "company-1",
        name: "TechStartup Inc.",
        logo: "https://img.heroui.chat/image/ai?w=80&h=80&u=1"
      }
    },
    applicant: {
      id: "student-1",
      name: "Alex Student",
      email: "alex@university.edu",
      avatar: "https://img.heroui.chat/image/avatar?w=200&h=200&u=4",
      university: "Stanford University",
      major: "Computer Science"
    },
    status: "interview_scheduled",
    appliedAt: "2023-05-16T09:30:00Z",
    updatedAt: "2023-05-20T14:15:00Z",
    coverLetter: "I am excited to apply for this position...",
    resume: "resume-alex.pdf",
    notes: "Strong JavaScript skills, good cultural fit",
    interviewDate: "2023-05-25T15:00:00Z"
  },
  {
    id: "app-2",
    opportunityId: "opp-2",
    opportunity: {
      id: "opp-2",
      title: "Event Staff for Tech Conference",
      company: {
        id: "company-2",
        name: "InnovaTech",
        logo: "https://img.heroui.chat/image/ai?w=80&h=80&u=2"
      }
    },
    applicant: {
      id: "student-2",
      name: "Maya Student",
      email: "maya@college.edu",
      avatar: "https://img.heroui.chat/image/avatar?w=200&h=200&u=5",
      university: "MIT",
      major: "Marketing"
    },
    status: "accepted",
    appliedAt: "2023-06-02T11:45:00Z",
    updatedAt: "2023-06-10T16:30:00Z",
    coverLetter: "With my experience in event management...",
    resume: "resume-maya.pdf",
    notes: "Has previous event experience, very professional"
  },
  {
    id: "app-3",
    opportunityId: "opp-1",
    opportunity: {
      id: "opp-1",
      title: "Frontend Developer Intern",
      company: {
        id: "company-1",
        name: "TechStartup Inc.",
        logo: "https://img.heroui.chat/image/ai?w=80&h=80&u=1"
      }
    },
    applicant: {
      id: "student-3",
      name: "James Student",
      email: "james@university.edu",
      avatar: "https://img.heroui.chat/image/avatar?w=200&h=200&u=7",
      university: "UCLA",
      major: "Business Administration"
    },
    status: "pending",
    appliedAt: "2023-05-18T13:20:00Z",
    updatedAt: "2023-05-18T13:20:00Z",
    coverLetter: "Although my major is Business Administration, I have been learning web development...",
    resume: "resume-james.pdf"
  },
  {
    id: "app-4",
    opportunityId: "opp-3",
    opportunity: {
      id: "opp-3",
      title: "Social Media Marketing Assistant",
      company: {
        id: "company-1",
        name: "TechStartup Inc.",
        logo: "https://img.heroui.chat/image/ai?w=80&h=80&u=1"
      }
    },
    applicant: {
      id: "student-2",
      name: "Maya Student",
      email: "maya@college.edu",
      avatar: "https://img.heroui.chat/image/avatar?w=200&h=200&u=5",
      university: "MIT",
      major: "Marketing"
    },
    status: "offered",
    appliedAt: "2023-05-22T10:15:00Z",
    updatedAt: "2023-06-05T09:30:00Z",
    coverLetter: "My marketing background and social media experience make me a perfect fit...",
    resume: "resume-maya.pdf",
    notes: "Excellent portfolio of previous social media work",
    interviewDate: "2023-05-30T14:00:00Z",
    feedback: [
      {
        rating: 5,
        comment: "Outstanding interview performance, showed great knowledge of social media strategies",
        createdAt: "2023-05-30T15:30:00Z",
        createdBy: "startup-1"
      }
    ]
  },
  {
    id: "app-5",
    opportunityId: "opp-4",
    opportunity: {
      id: "opp-4",
      title: "Campus Brand Ambassador",
      company: {
        id: "company-2",
        name: "InnovaTech",
        logo: "https://img.heroui.chat/image/ai?w=80&h=80&u=2"
      }
    },
    applicant: {
      id: "student-1",
      name: "Alex Student",
      email: "alex@university.edu",
      avatar: "https://img.heroui.chat/image/avatar?w=200&h=200&u=4",
      university: "Stanford University",
      major: "Computer Science"
    },
    status: "shortlisted",
    appliedAt: "2023-06-07T15:40:00Z",
    updatedAt: "2023-06-09T11:20:00Z",
    coverLetter: "I have a large network on campus and am involved in several student organizations...",
    resume: "resume-alex.pdf",
    notes: "Good campus connections, enthusiastic about the brand"
  }
];

// Mock conversations
export const mockConversations: Conversation[] = [
  {
    id: "conv-1",
    participants: [
      {
        id: "startup-1",
        name: "John Startup",
        avatar: "https://img.heroui.chat/image/avatar?w=200&h=200&u=2",
        role: "startup"
      },
      {
        id: "student-1",
        name: "Alex Student",
        avatar: "https://img.heroui.chat/image/avatar?w=200&h=200&u=4",
        role: "student"
      }
    ],
    lastMessage: {
      content: "Can we schedule an interview for next Tuesday?",
      createdAt: "2023-05-19T14:30:00Z",
      senderId: "startup-1"
    },
    unreadCount: 1,
    updatedAt: "2023-05-19T14:30:00Z",
    relatedTo: {
      type: "application",
      id: "app-1",
      title: "Frontend Developer Intern Application"
    }
  },
  {
    id: "conv-2",
    participants: [
      {
        id: "startup-2",
        name: "Sarah Manager",
        avatar: "https://img.heroui.chat/image/avatar?w=200&h=200&u=3",
        role: "startup"
      },
      {
        id: "student-2",
        name: "Maya Student",
        avatar: "https://img.heroui.chat/image/avatar?w=200&h=200&u=5",
        role: "student"
      }
    ],
    lastMessage: {
      content: "Thank you for accepting the offer! I'll send over the details shortly.",
      createdAt: "2023-06-10T16:45:00Z",
      senderId: "startup-2"
    },
    unreadCount: 0,
    updatedAt: "2023-06-10T16:45:00Z",
    relatedTo: {
      type: "application",
      id: "app-2",
      title: "Event Staff Application"
    }
  },
  {
    id: "conv-3",
    participants: [
      {
        id: "admin-1",
        name: "Admin User",
        avatar: "https://img.heroui.chat/image/avatar?w=200&h=200&u=1",
        role: "admin"
      },
      {
        id: "startup-1",
        name: "John Startup",
        avatar: "https://img.heroui.chat/image/avatar?w=200&h=200&u=2",
        role: "startup"
      }
    ],
    lastMessage: {
      content: "Your new job posting has been approved and is now live.",
      createdAt: "2023-06-10T10:15:00Z",
      senderId: "admin-1"
    },
    unreadCount: 0,
    updatedAt: "2023-06-10T10:15:00Z",
    relatedTo: {
      type: "opportunity",
      id: "opp-5",
      title: "UI/UX Design Project"
    }
  }
];

// Mock messages
export const mockMessages: Record<string, Message[]> = {
  "conv-1": [
    {
      id: "msg-1-1",
      conversationId: "conv-1",
      senderId: "startup-1",
      senderName: "John Startup",
      senderAvatar: "https://img.heroui.chat/image/avatar?w=200&h=200&u=2",
      recipientId: "student-1",
      content: "Hi Alex, I've reviewed your application for the Frontend Developer Intern position and I'm impressed with your skills.",
      createdAt: "2023-05-18T10:30:00Z",
      readAt: "2023-05-18T10:35:00Z"
    },
    {
      id: "msg-1-2",
      conversationId: "conv-1",
      senderId: "student-1",
      senderName: "Alex Student",
      senderAvatar: "https://img.heroui.chat/image/avatar?w=200&h=200&u=4",
      recipientId: "startup-1",
      content: "Thank you! I'm really excited about the opportunity to work with TechStartup Inc.",
      createdAt: "2023-05-18T10:40:00Z",
      readAt: "2023-05-18T10:42:00Z"
    },
    {
      id: "msg-1-3",
      conversationId: "conv-1",
      senderId: "startup-1",
      senderName: "John Startup",
      senderAvatar: "https://img.heroui.chat/image/avatar?w=200&h=200&u=2",
      recipientId: "student-1",
      content: "Great! Would you be available for an interview sometime next week?",
      createdAt: "2023-05-18T10:45:00Z",
      readAt: "2023-05-18T11:00:00Z"
    },
    {
      id: "msg-1-4",
      conversationId: "conv-1",
      senderId: "student-1",
      senderName: "Alex Student",
      senderAvatar: "https://img.heroui.chat/image/avatar?w=200&h=200&u=4",
      recipientId: "startup-1",
      content: "Yes, I'm available Monday through Thursday next week, preferably in the afternoon.",
      createdAt: "2023-05-18T11:05:00Z",
      readAt: "2023-05-18T11:10:00Z"
    },
    {
      id: "msg-1-5",
      conversationId: "conv-1",
      senderId: "startup-1",
      senderName: "John Startup",
      senderAvatar: "https://img.heroui.chat/image/avatar?w=200&h=200&u=2",
      recipientId: "student-1",
      content: "Can we schedule an interview for next Tuesday?",
      createdAt: "2023-05-19T14:30:00Z"
    }
  ],
  "conv-2": [
    {
      id: "msg-2-1",
      conversationId: "conv-2",
      senderId: "startup-2",
      senderName: "Sarah Manager",
      senderAvatar: "https://img.heroui.chat/image/avatar?w=200&h=200&u=3",
      recipientId: "student-2",
      content: "Hello Maya, I'm pleased to inform you that we'd like to offer you the Event Staff position for our upcoming tech conference.",
      createdAt: "2023-06-09T15:20:00Z",
      readAt: "2023-06-09T15:30:00Z"
    },
    {
      id: "msg-2-2",
      conversationId: "conv-2",
      senderId: "student-2",
      senderName: "Maya Student",
      senderAvatar: "https://img.heroui.chat/image/avatar?w=200&h=200&u=5",
      recipientId: "startup-2",
      content: "That's fantastic news! I'm very excited to accept the offer.",
      createdAt: "2023-06-10T09:15:00Z",
      readAt: "2023-06-10T09:30:00Z"
    },
    {
      id: "msg-2-3",
      conversationId: "conv-2",
      senderId: "startup-2",
      senderName: "Sarah Manager",
      senderAvatar: "https://img.heroui.chat/image/avatar?w=200&h=200&u=3",
      recipientId: "student-2",
      content: "Thank you for accepting the offer! I'll send over the details shortly.",
      createdAt: "2023-06-10T16:45:00Z",
      readAt: "2023-06-10T17:00:00Z"
    }
  ],
  "conv-3": [
    {
      id: "msg-3-1",
      conversationId: "conv-3",
      senderId: "startup-1",
      senderName: "John Startup",
      senderAvatar: "https://img.heroui.chat/image/avatar?w=200&h=200&u=2",
      recipientId: "admin-1",
      content: "I've just submitted a new job posting for a UI/UX Design Project. Could you please review it when you have a chance?",
      createdAt: "2023-06-10T09:50:00Z",
      readAt: "2023-06-10T10:00:00Z"
    },
    {
      id: "msg-3-2",
      conversationId: "conv-3",
      senderId: "admin-1",
      senderName: "Admin User",
      senderAvatar: "https://img.heroui.chat/image/avatar?w=200&h=200&u=1",
      recipientId: "startup-1",
      content: "I'll take a look at it right away.",
      createdAt: "2023-06-10T10:05:00Z",
      readAt: "2023-06-10T10:07:00Z"
    },
    {
      id: "msg-3-3",
      conversationId: "conv-3",
      senderId: "admin-1",
      senderName: "Admin User",
      senderAvatar: "https://img.heroui.chat/image/avatar?w=200&h=200&u=1",
      recipientId: "startup-1",
      content: "Your new job posting has been approved and is now live.",
      createdAt: "2023-06-10T10:15:00Z",
      readAt: "2023-06-10T10:30:00Z"
    }
  ]
};

// Mock analytics data
export const mockAnalytics = {
  platformStats: {
    totalUsers: 1250,
    activeUsers: 875,
    totalOpportunities: 320,
    activeOpportunities: 180,
    totalApplications: 2450,
    successfulPlacements: 210,
    averageApplicationsPerOpportunity: 7.6,
    averageTimeToFill: 14.3, // days
  },
  userGrowth: [
    { month: "Jan", users: 650 },
    { month: "Feb", users: 720 },
    { month: "Mar", users: 800 },
    { month: "Apr", users: 880 },
    { month: "May", users: 950 },
    { month: "Jun", users: 1050 },
    { month: "Jul", users: 1150 },
    { month: "Aug", users: 1250 }
  ],
  opportunityBreakdown: [
    { type: "Internship", count: 140 },
    { type: "Event", count: 85 },
    { type: "Promotion", count: 65 },
    { type: "Project", count: 30 }
  ],
  applicationStatus: [
    { status: "Pending", count: 980 },
    { status: "Reviewed", count: 620 },
    { status: "Shortlisted", count: 410 },
    { status: "Interview", count: 280 },
    { status: "Offered", count: 160 }
  ],
  topSkills: [
    { skill: "JavaScript", count: 320 },
    { skill: "Marketing", count: 280 },
    { skill: "Design", count: 240 },
    { skill: "Event Planning", count: 190 },
    { skill: "Content Creation", count: 170 },
    { skill: "React", count: 150 },
    { skill: "Social Media", count: 140 },
    { skill: "Data Analysis", count: 120 }
  ],
  startupActivity: [
    { company: "TechStartup Inc.", opportunities: 12, applications: 85, hires: 7 },
    { company: "InnovaTech", opportunities: 8, applications: 64, hires: 5 },
    { company: "DesignWorks", opportunities: 6, applications: 42, hires: 3 },
    { company: "MarketBoost", opportunities: 5, applications: 38, hires: 4 },
    { company: "DataDrive", opportunities: 4, applications: 29, hires: 2 }
  ]
};

// Mock notifications
export const mockNotifications = [
  {
    id: "notif-1",
    type: "application",
    title: "New Application",
    message: "Alex Student has applied for Frontend Developer Intern",
    createdAt: "2023-06-10T09:30:00Z",
    isRead: false,
    link: "/applications/app-1"
  },
  {
    id: "notif-2",
    type: "message",
    title: "New Message",
    message: "Sarah Manager sent you a message",
    createdAt: "2023-06-10T10:15:00Z",
    isRead: true,
    link: "/messages/conv-2"
  },
  {
    id: "notif-3",
    type: "opportunity",
    title: "Opportunity Approved",
    message: "Your UI/UX Design Project posting has been approved",
    createdAt: "2023-06-10T10:30:00Z",
    isRead: false,
    link: "/opportunities/opp-5"
  },
  {
    id: "notif-4",
    type: "application_status",
    title: "Application Status Updated",
    message: "Your application for Event Staff has been accepted",
    createdAt: "2023-06-10T11:45:00Z",
    isRead: false,
    link: "/applications/app-2"
  },
  {
    id: "notif-5",
    type: "system",
    title: "System Maintenance",
    message: "ProxiHire will be undergoing maintenance on June 15th from 2-4 AM EST",
    createdAt: "2023-06-09T14:00:00Z",
    isRead: true,
    link: "/announcements"
  }
];

// Mock audit logs
export const mockAuditLogs = [
  {
    id: "log-1",
    action: "user_login",
    user: {
      id: "admin-1",
      name: "Admin User",
      role: "admin"
    },
    timestamp: "2023-06-10T08:30:00Z",
    details: {
      ip: "192.168.1.1",
      device: "Chrome / Windows"
    }
  },
  {
    id: "log-2",
    action: "opportunity_create",
    user: {
      id: "startup-1",
      name: "John Startup",
      role: "startup"
    },
    timestamp: "2023-06-10T09:45:00Z",
    details: {
      opportunityId: "opp-5",
      opportunityTitle: "UI/UX Design Project"
    }
  },
  {
    id: "log-3",
    action: "opportunity_approve",
    user: {
      id: "admin-1",
      name: "Admin User",
      role: "admin"
    },
    timestamp: "2023-06-10T10:15:00Z",
    details: {
      opportunityId: "opp-5",
      opportunityTitle: "UI/UX Design Project"
    }
  },
  {
    id: "log-4",
    action: "application_status_change",
    user: {
      id: "startup-2",
      name: "Sarah Manager",
      role: "startup"
    },
    timestamp: "2023-06-10T11:30:00Z",
    details: {
      applicationId: "app-2",
      oldStatus: "offered",
      newStatus: "accepted"
    }
  },
  {
    id: "log-5",
    action: "user_create",
    user: {
      id: "admin-2",
      name: "Support Admin",
      role: "admin"
    },
    timestamp: "2023-06-09T14:20:00Z",
    details: {
      newUserId: "student-3",
      newUserEmail: "james@university.edu",
      newUserRole: "student"
    }
  }
];
