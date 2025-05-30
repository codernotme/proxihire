"use client";

import React from "react";
import { Button, Card, CardBody } from "@heroui/react";
import { Icon } from "@iconify/react";

export const ForStudents: React.FC = () => {
  const benefits = [
    {
      icon: "lucide:briefcase",
      title: "Real Experience",
      description: "Build your resume with meaningful work at innovative startups and growing businesses."
    },
    {
      icon: "lucide:clock",
      title: "Flexible Schedule",
      description: "Find opportunities that fit around your classes and other commitments."
    },
    {
      icon: "lucide:users",
      title: "Network Growth",
      description: "Connect with entrepreneurs and industry professionals to expand your professional network."
    },
    {
      icon: "lucide:dollar-sign",
      title: "Competitive Pay",
      description: "Earn fair compensation for your skills and time with transparent payment terms."
    }
  ];

  const popularCategories = [
    { name: "Software Development", count: 124 },
    { name: "Marketing", count: 98 },
    { name: "Design", count: 87 },
    { name: "Event Staffing", count: 76 },
    { name: "Content Creation", count: 65 },
    { name: "Data Analysis", count: 54 }
  ];

  return (
    <section id="for-students" className="section-padding relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 relative">
            <Card className="border border-divider bg-content1 overflow-visible">
              <CardBody className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img 
                      src="https://img.heroui.chat/image/avatar?w=100&h=100&u=student1" 
                      alt="Student Profile" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">Alex Johnson</h3>
                    <p className="text-sm text-foreground/70">Computer Science • UC Berkeley</p>
                  </div>
                  <div className="ml-auto">
                    <div className="bg-success/20 text-success text-xs font-medium px-3 py-1 rounded-full">
                      Available
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-sm font-medium mb-2">Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {["React", "TypeScript", "UI/UX", "Node.js", "Figma"].map((skill) => (
                      <div 
                        key={skill}
                        className="bg-content2 text-xs px-3 py-1 rounded-full"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-sm font-medium mb-2">Recent Applications</h4>
                  <div className="space-y-3">
                    {[
                      { company: "TechStart", role: "Frontend Developer", status: "Interview" },
                      { company: "GrowthLabs", role: "UI/UX Intern", status: "Applied" }
                    ].map((app, i) => (
                      <div key={i} className="flex items-center justify-between p-3 bg-content2 rounded-md">
                        <div>
                          <p className="font-medium text-sm">{app.company}</p>
                          <p className="text-xs text-foreground/70">{app.role}</p>
                        </div>
                        <div className="text-xs px-2 py-1 rounded bg-primary/20 text-primary">
                          {app.status}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <Button color="secondary" fullWidth className="font-medium">
                  View Available Opportunities
                </Button>
              </CardBody>
            </Card>
            
            {/* Floating elements */}
            <div className="absolute -bottom-6 -left-6 bg-content2 border border-divider p-3 rounded-lg shadow-lg">
              <div className="flex items-center gap-3">
                <Icon icon="lucide:trending-up" className="text-success" width={18} />
                <div>
                  <p className="text-xs">Profile views</p>
                  <p className="font-semibold text-sm">+43% this week</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">For Students</h2>
              <p className="text-foreground/70">
                Kickstart your career with meaningful work experiences that fit your schedule and build your professional portfolio.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex-shrink-0 flex items-center justify-center">
                    <Icon icon={benefit.icon} className="text-secondary" width={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{benefit.title}</h3>
                    <p className="text-sm text-foreground/70">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mb-8">
              <h3 className="font-semibold text-lg mb-4">Popular Categories</h3>
              <div className="flex flex-wrap gap-3">
                {popularCategories.map((category) => (
                  <div 
                    key={category.name}
                    className="bg-content2 px-4 py-2 rounded-full flex items-center gap-2"
                  >
                    <span>{category.name}</span>
                    <span className="bg-content3 text-xs px-2 py-0.5 rounded-full">
                      {category.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            <Button 
              color="secondary" 
              size="lg"
              className="font-medium"
              startContent={<Icon icon="lucide:user-plus" width={18} />}
            >
              Create Student Profile
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};