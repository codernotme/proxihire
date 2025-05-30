"use client";

import React from "react";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-20 pb-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
      </div>
      
      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Connect Startups with <span className="gradient-text">Student Talent</span>
            </h1>
            <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto lg:mx-0">
              ProxiHire bridges the gap between innovative startups and talented students for internships, event staffing, and brand ambassador roles.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                color="primary" 
                className="font-medium text-base"
                startContent={<Icon icon="lucide:briefcase" width={20} />}
              >
                Post an Opportunity
              </Button>
              <Button 
                size="lg" 
                variant="bordered" 
                className="font-medium text-base"
                startContent={<Icon icon="lucide:search" width={20} />}
              >
                Find Gigs
              </Button>
            </div>
            
            <div className="mt-12 flex items-center justify-center lg:justify-start gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-background overflow-hidden">
                    <img 
                      src={`https://img.heroui.chat/image/avatar?w=80&h=80&u=${i}`} 
                      alt={`User ${i}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="text-sm text-foreground/70">
                <span className="font-semibold text-foreground">500+</span> opportunities posted this month
              </div>
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="relative z-10 bg-content1 border border-divider rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://img.heroui.chat/image/ai?w=600&h=400&u=proxihire-dashboard" 
                alt="ProxiHire Platform" 
                className="w-full h-auto"
              />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 bg-content2 border border-divider p-4 rounded-lg shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <Icon icon="lucide:trending-up" className="text-primary" />
                </div>
                <div>
                  <p className="text-xs text-foreground/70">New Applicants</p>
                  <p className="font-semibold">+27% this week</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-content2 border border-divider p-4 rounded-lg shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Icon icon="lucide:check-circle" className="text-secondary" />
                </div>
                <div>
                  <p className="text-xs text-foreground/70">Successful Matches</p>
                  <p className="font-semibold">2,400+ this month</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};