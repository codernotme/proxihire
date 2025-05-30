"use client";

import React from "react";
import { Card, CardBody, Tabs, Tab } from "@heroui/react";
import { Icon } from "@iconify/react";

export const HowItWorks: React.FC = () => {
  const [selected, setSelected] = React.useState("startups");
  
  const startupSteps = [
    {
      icon: "lucide:clipboard-list",
      title: "Create a Job Posting",
      description: "Describe your opportunity, requirements, and compensation in minutes."
    },
    {
      icon: "lucide:users",
      title: "Review Applicants",
      description: "Browse profiles, portfolios, and reviews of interested students."
    },
    {
      icon: "lucide:message-square",
      title: "Connect & Discuss",
      description: "Chat directly with candidates to find the perfect match."
    },
    {
      icon: "lucide:check-circle",
      title: "Hire & Manage",
      description: "Onboard talent and manage payments securely through our platform."
    }
  ];
  
  const studentSteps = [
    {
      icon: "lucide:user-plus",
      title: "Create Your Profile",
      description: "Showcase your skills, experience, and availability to stand out."
    },
    {
      icon: "lucide:search",
      title: "Discover Opportunities",
      description: "Browse and filter gigs that match your interests and schedule."
    },
    {
      icon: "lucide:send",
      title: "Apply & Connect",
      description: "Submit applications and communicate directly with startups."
    },
    {
      icon: "lucide:dollar-sign",
      title: "Work & Get Paid",
      description: "Complete tasks and receive secure payments through our platform."
    }
  ];

  return (
    <section id="how-it-works" className="section-padding bg-content1">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            ProxiHire makes connecting startups and students simple, transparent, and effective.
          </p>
        </div>
        
        <Tabs 
          aria-label="User options" 
          selectedKey={selected} 
          onSelectionChange={setSelected as any}
          color="primary"
          variant="underlined"
          classNames={{
            tabList: "mx-auto gap-6 w-full max-w-md mb-12",
            cursor: "bg-primary",
            tab: "max-w-fit px-0 h-12",
          }}
        >
          <Tab 
            key="startups"
            title={
              <div className="flex items-center gap-2">
                <Icon icon="lucide:briefcase" width={20} />
                <span>For Startups</span>
              </div>
            }
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {startupSteps.map((step, index) => (
                <Card key={index} className="border border-divider bg-content2">
                  <CardBody className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                        <Icon icon={step.icon} className="text-primary" width={24} />
                      </div>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-xs font-bold text-white">
                          {index + 1}
                        </div>
                        <h3 className="font-semibold text-lg">{step.title}</h3>
                      </div>
                      <p className="text-foreground/70 text-sm">{step.description}</p>
                    </div>
                  </CardBody>
                </Card>
              ))}
            </div>
          </Tab>
          <Tab 
            key="students"
            title={
              <div className="flex items-center gap-2">
                <Icon icon="lucide:graduation-cap" width={20} />
                <span>For Students</span>
              </div>
            }
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {studentSteps.map((step, index) => (
                <Card key={index} className="border border-divider bg-content2">
                  <CardBody className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center mb-4">
                        <Icon icon={step.icon} className="text-secondary" width={24} />
                      </div>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center text-xs font-bold text-white">
                          {index + 1}
                        </div>
                        <h3 className="font-semibold text-lg">{step.title}</h3>
                      </div>
                      <p className="text-foreground/70 text-sm">{step.description}</p>
                    </div>
                  </CardBody>
                </Card>
              ))}
            </div>
          </Tab>
        </Tabs>
      </div>
    </section>
  );
};