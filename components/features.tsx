"use client";

import React from "react";
import { Card, CardBody } from "@heroui/react";
import { Icon } from "@iconify/react";

export const Features: React.FC = () => {
  const features = [
    {
      icon: "lucide:puzzle",
      title: "Smart Matching",
      description: "Our AI-powered algorithm connects startups with the most suitable candidates based on skills, experience, and preferences."
    },
    {
      icon: "lucide:message-circle",
      title: "Real-time Chat",
      description: "Communicate directly with candidates or employers through our secure messaging system with read receipts and file sharing."
    },
    {
      icon: "lucide:shield-check",
      title: "Secure Payments",
      description: "Handle all financial transactions safely through our platform with escrow protection and automated payment schedules."
    },
    {
      icon: "lucide:calendar",
      title: "Scheduling Tools",
      description: "Coordinate interviews, shifts, and project timelines with our integrated calendar and reminder system."
    },
    {
      icon: "lucide:star",
      title: "Rating System",
      description: "Build reputation through verified reviews and ratings from past collaborations to stand out in the marketplace."
    },
    {
      icon: "lucide:bar-chart-2",
      title: "Performance Analytics",
      description: "Track application success rates, engagement metrics, and other key performance indicators to optimize your approach."
    }
  ];

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>
      
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Our platform is packed with tools designed to make recruitment and job hunting efficient and effective.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border border-divider bg-content1">
              <CardBody className="p-6">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <Icon icon={feature.icon} className="text-primary" width={24} />
                </div>
                <h3 className="font-semibold text-xl mb-2">{feature.title}</h3>
                <p className="text-foreground/70">{feature.description}</p>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};