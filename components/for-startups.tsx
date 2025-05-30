"use client";

import React from "react";
import { Button, Card, CardBody } from "@heroui/react";
import { Icon } from "@iconify/react";

export const ForStartups: React.FC = () => {
  const benefits = [
    {
      icon: "lucide:clock",
      title: "Save Time",
      description: "Find qualified candidates quickly without sifting through hundreds of irrelevant applications."
    },
    {
      icon: "lucide:wallet",
      title: "Reduce Costs",
      description: "Flexible hiring options for short-term projects without the overhead of traditional recruitment."
    },
    {
      icon: "lucide:target",
      title: "Find Specialists",
      description: "Access students with specific skills, from design and development to marketing and event management."
    },
    {
      icon: "lucide:refresh-cw",
      title: "Scale Flexibly",
      description: "Quickly scale your team up or down based on project needs and business cycles."
    }
  ];

  return (
    <section id="for-startups" className="section-padding bg-content1">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">For Startups & Entrepreneurs</h2>
              <p className="text-foreground/70">
                Find talented, motivated students to help grow your business without the traditional hiring hassles.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex-shrink-0 flex items-center justify-center">
                    <Icon icon={benefit.icon} className="text-primary" width={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{benefit.title}</h3>
                    <p className="text-sm text-foreground/70">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <Button 
              color="primary" 
              size="lg"
              className="font-medium"
              startContent={<Icon icon="lucide:plus" width={18} />}
            >
              Post Your First Opportunity
            </Button>
          </div>
          
          <div className="relative">
            <Card className="border border-divider bg-content2 overflow-visible">
              <CardBody className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold">Post a New Opportunity</h3>
                  <div className="bg-primary/20 text-primary text-xs font-medium px-3 py-1 rounded-full">
                    Premium
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium mb-1">Position Title</label>
                    <div className="h-10 rounded-md bg-content3 px-3 flex items-center">
                      Marketing Intern
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Category</label>
                    <div className="h-10 rounded-md bg-content3 px-3 flex items-center">
                      Marketing & Social Media
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Duration</label>
                    <div className="h-10 rounded-md bg-content3 px-3 flex items-center">
                      3 months (Part-time)
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Compensation</label>
                    <div className="h-10 rounded-md bg-content3 px-3 flex items-center">
                      $18/hour + Performance Bonus
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-3 mb-4">
                  <div className="flex-1 h-1 rounded-full bg-primary"></div>
                  <div className="flex-1 h-1 rounded-full bg-primary"></div>
                  <div className="flex-1 h-1 rounded-full bg-content3"></div>
                  <div className="flex-1 h-1 rounded-full bg-content3"></div>
                </div>
                
                <div className="text-xs text-foreground/60 mb-6">
                  Step 2 of 4: Position Details
                </div>
                
                <div className="flex gap-3">
                  <Button variant="flat" color="default" className="flex-1">
                    Back
                  </Button>
                  <Button color="primary" className="flex-1">
                    Continue
                  </Button>
                </div>
              </CardBody>
            </Card>
            
            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 bg-content2 border border-divider p-3 rounded-lg shadow-lg">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-success/20 flex items-center justify-center">
                  <Icon icon="lucide:zap" className="text-success" width={16} />
                </div>
                <div>
                  <p className="text-xs">Average response time</p>
                  <p className="font-semibold text-sm">Under 24 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};