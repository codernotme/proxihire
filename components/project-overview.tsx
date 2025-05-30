"use client";
import React from "react";
import { Card, CardBody, Button, Chip, Avatar, Divider, Tabs, Tab } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useRouter, useParams } from "next/navigation";
import { motion } from "framer-motion";

// Mock project data
const mockProject = {
  id: "proj123",
  title: "Frontend Developer for AI-Powered Analytics Dashboard",
  company: "DataViz AI",
  logo: "https://img.heroui.chat/image/avatar?w=100&h=100&u=company1",
  location: "San Francisco, CA (Remote)",
  type: "Internship",
  duration: "3 months",
  compensation: "$20-25/hour",
  skills: ["React", "TypeScript", "CSS", "Data Visualization", "UI/UX"],
  postedDate: "2 days ago",
  deadline: "June 15, 2023",
  applicants: 12,
  views: 145,
  description: `
    <p>DataViz AI is looking for a talented Frontend Developer intern to join our team and help build our next-generation analytics dashboard. This is an opportunity to work with cutting-edge AI technology and gain valuable experience in a fast-growing startup.</p>
    
    <h3>Responsibilities:</h3>
    <ul>
      <li>Implement responsive UI components using React and TypeScript</li>
      <li>Collaborate with designers to translate wireframes into functional interfaces</li>
      <li>Integrate with backend APIs to display real-time data</li>
      <li>Optimize application performance and user experience</li>
      <li>Participate in code reviews and team meetings</li>
    </ul>
    
    <h3>Requirements:</h3>
    <ul>
      <li>Strong knowledge of React, TypeScript, and modern CSS</li>
      <li>Experience with data visualization libraries (e.g., D3.js, Chart.js)</li>
      <li>Understanding of responsive design principles</li>
      <li>Ability to work independently and as part of a team</li>
      <li>Currently enrolled in a Computer Science or related program</li>
    </ul>
    
    <h3>Benefits:</h3>
    <ul>
      <li>Competitive hourly rate ($20-25/hour)</li>
      <li>Flexible remote work schedule</li>
      <li>Mentorship from experienced developers</li>
      <li>Possibility of full-time employment after internship</li>
      <li>Exposure to cutting-edge AI and data visualization technologies</li>
    </ul>
  `,
  companyInfo: {
    name: "DataViz AI",
    size: "15-30 employees",
    founded: "2020",
    industry: "Software / AI",
    website: "https://dataviz-ai.example.com",
    about: "DataViz AI is transforming how businesses understand and visualize their data through intuitive, AI-powered analytics tools. Our platform helps companies of all sizes make data-driven decisions without requiring technical expertise."
  }
};

// Similar projects
const similarProjects = [
  {
    id: "proj124",
    title: "UI/UX Design Intern",
    company: "DesignHub",
    logo: "https://img.heroui.chat/image/avatar?w=100&h=100&u=company4",
    location: "Seattle, WA (Remote)",
    compensation: "$22/hour",
    skills: ["Figma", "UI Design", "Prototyping"]
  },
  {
    id: "proj125",
    title: "Frontend Developer (Part-time)",
    company: "TechStart",
    logo: "https://img.heroui.chat/image/avatar?w=100&h=100&u=company1",
    location: "New York, NY (Hybrid)",
    compensation: "$25/hour",
    skills: ["React", "JavaScript", "CSS"]
  }
];

const ProjectOverview: React.FC = () => {
  const params = useParams();
  const router = useRouter();
  const [selectedTab, setSelectedTab] = React.useState("description");
  const [isApplying, setIsApplying] = React.useState(false);

  // In a real app, you would fetch the project data based on the ID
  const project = mockProject;

  const handleApply = () => {
    setIsApplying(true);
    setTimeout(() => {
      router.push(`/dashboard/apply/${params?.id ?? project.id}`);
    }, 500);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="mb-6">
        <button 
          onClick={() => router.back()}
          className="flex items-center gap-1 text-foreground/70 hover:text-foreground transition-colors mb-4"
        >
          <Icon icon="lucide:arrow-left" width={16} />
          <span>Back to opportunities</span>
        </button>
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <h1 className="text-2xl font-bold">{project.title}</h1>
          <Button 
            color="primary" 
            className="font-medium"
            startContent={<Icon icon="lucide:send" width={18} />}
            onPress={handleApply}
            isLoading={isApplying}
          >
            Apply Now
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card className="border border-divider">
            <CardBody className="p-6">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-md overflow-hidden flex-shrink-0">
                  <img 
                    src={project.logo} 
                    alt={project.company} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex-1">
                  <h2 className="text-xl font-semibold mb-1">{project.title}</h2>
                  <div className="flex items-center gap-1 text-foreground/70">
                    <span>{project.company}</span>
                    <span className="text-foreground/40 mx-1">•</span>
                    <span>{project.location}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-3">
                    <Chip size="sm" color="primary" variant="flat">{project.type}</Chip>
                    <Chip size="sm" variant="flat">{project.duration}</Chip>
                    <Chip size="sm" variant="flat">{project.compensation}</Chip>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-y-3 gap-x-6 text-sm text-foreground/70 mb-6">
                <div className="flex items-center gap-1">
                  <Icon icon="lucide:calendar" width={16} />
                  <span>Posted {project.postedDate}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Icon icon="lucide:clock" width={16} />
                  <span>Apply by {project.deadline}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Icon icon="lucide:users" width={16} />
                  <span>{project.applicants} applicants</span>
                </div>
                <div className="flex items-center gap-1">
                  <Icon icon="lucide:eye" width={16} />
                  <span>{project.views} views</span>
                </div>
              </div>
              
              <Divider className="my-4" />
              
              <Tabs 
                aria-label="Project details" 
                selectedKey={selectedTab} 
                onSelectionChange={setSelectedTab as any}
                color="primary"
                variant="underlined"
                classNames={{
                  tabList: "gap-6",
                  cursor: "bg-primary",
                  tab: "px-0 h-12",
                }}
              >
                <Tab 
                  key="description" 
                  title={
                    <div className="flex items-center gap-2">
                      <Icon icon="lucide:file-text" width={18} />
                      <span>Description</span>
                    </div>
                  }
                >
                  <div 
                    className="prose prose-sm dark:prose-invert max-w-none"
                    dangerouslySetInnerHTML={{ __html: project.description }}
                  />
                </Tab>
                <Tab 
                  key="company" 
                  title={
                    <div className="flex items-center gap-2">
                      <Icon icon="lucide:building" width={18} />
                      <span>Company</span>
                    </div>
                  }
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-md overflow-hidden">
                        <img 
                          src={project.logo} 
                          alt={project.companyInfo.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">{project.companyInfo.name}</h3>
                        <p className="text-foreground/70">{project.companyInfo.industry}</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-4">
                      <div>
                        <p className="text-sm text-foreground/70">Company Size</p>
                        <p className="font-medium">{project.companyInfo.size}</p>
                      </div>
                      <div>
                        <p className="text-sm text-foreground/70">Founded</p>
                        <p className="font-medium">{project.companyInfo.founded}</p>
                      </div>
                      <div>
                        <p className="text-sm text-foreground/70">Website</p>
                        <a 
                          href={project.companyInfo.website} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary hover:underline font-medium"
                        >
                          Visit Website
                        </a>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">About</h4>
                      <p className="text-foreground/80">{project.companyInfo.about}</p>
                    </div>
                  </div>
                </Tab>
              </Tabs>
            </CardBody>
          </Card>
          
          <div className="flex justify-between items-center">
            <Button 
              variant="flat" 
              startContent={<Icon icon="lucide:bookmark" width={18} />}
            >
              Save
            </Button>
            <Button 
              variant="flat" 
              startContent={<Icon icon="lucide:share" width={18} />}
            >
              Share
            </Button>
            <Button 
              variant="flat" 
              color="danger" 
              startContent={<Icon icon="lucide:flag" width={18} />}
            >
              Report
            </Button>
          </div>
        </div>
        
        <div className="space-y-6">
          <Card className="border border-divider">
            <CardBody className="p-6">
              <h3 className="text-lg font-semibold mb-4">Required Skills</h3>
              <div className="flex flex-wrap gap-2">
                {project.skills.map(skill => (
                  <Chip key={skill} variant="flat">{skill}</Chip>
                ))}
              </div>
            </CardBody>
          </Card>
          
          <Card className="border border-divider">
            <CardBody className="p-6">
              <h3 className="text-lg font-semibold mb-4">Hiring Team</h3>
              <div className="space-y-4">
                {[
                  { name: "Sarah Chen", role: "Founder & CEO", avatar: "https://img.heroui.chat/image/avatar?w=100&h=100&u=founder1" },
                  { name: "Michael Lee", role: "Lead Developer", avatar: "https://img.heroui.chat/image/avatar?w=100&h=100&u=dev1" }
                ].map((person, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Avatar src={person.avatar} name={person.name} />
                    <div>
                      <p className="font-medium">{person.name}</p>
                      <p className="text-sm text-foreground/70">{person.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardBody>
          </Card>
          
          <Card className="border border-divider">
            <CardBody className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Similar Opportunities</h3>
                <Button 
                  variant="light" 
                  endContent={<Icon icon="lucide:arrow-right" width={16} />}
                  size="sm"
                >
                  View All
                </Button>
              </div>
              
              <div className="space-y-4">
                {similarProjects.map(project => (
                  <div 
                    key={project.id}
                    className="p-3 border border-divider rounded-lg hover:bg-content2 transition-colors cursor-pointer"
                    onClick={() => router.push(`/dashboard/project/${project.id}`)}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-md overflow-hidden">
                        <img 
                          src={project.logo} 
                          alt={project.company} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium line-clamp-1">{project.title}</h4>
                        <p className="text-xs text-foreground/70">{project.company}</p>
                      </div>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-foreground/70">{project.location}</span>
                      <span className="font-medium">{project.compensation}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectOverview;