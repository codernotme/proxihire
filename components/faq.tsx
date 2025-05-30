"use client";

import React from "react";
import { Accordion, AccordionItem } from "@heroui/react";
import { Icon } from "@iconify/react";

export const FAQ: React.FC = () => {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["1"]));
  
  const faqItems = [
    {
      key: "1",
      title: "How does ProxiHire match startups with students?",
      content: "ProxiHire uses a sophisticated matching algorithm that considers skills, experience, availability, location preferences, and career goals. Startups can browse student profiles that match their requirements, while students can discover opportunities aligned with their interests and qualifications."
    },
    {
      key: "2",
      title: "What types of opportunities can be posted on ProxiHire?",
      content: "Startups can post a variety of opportunities including internships (paid or for credit), part-time roles, event staffing positions, brand ambassador programs, and short-term project-based work. All opportunities must comply with labor laws and provide fair compensation."
    },
    {
      key: "3",
      title: "How does payment work on the platform?",
      content: "ProxiHire offers secure payment processing through our platform. Startups can set up hourly rates or fixed project fees. Funds are held in escrow until work is completed and approved, protecting both parties. Students receive payments directly to their linked bank accounts or payment services."
    },
    {
      key: "4",
      title: "Is ProxiHire available for international opportunities?",
      content: "Currently, ProxiHire supports opportunities in the United States, Canada, and the United Kingdom. We're actively expanding to more countries. Remote work opportunities can be available to international students as long as they comply with relevant work authorization requirements."
    },
    {
      key: "5",
      title: "What fees does ProxiHire charge?",
      content: "ProxiHire operates on a tiered subscription model for startups, with plans starting at $49/month for basic access. Students can use the platform for free. There's also a 5% service fee on all payments processed through the platform to cover payment processing and platform maintenance."
    },
    {
      key: "6",
      title: "How does ProxiHire verify student credentials?",
      content: "Students must verify their academic email addresses and upload proof of enrollment. We also integrate with major university systems where possible. For certain high-demand skills, we offer optional skills assessments that students can complete to stand out to potential employers."
    }
  ];

  return (
    <section id="faq" className="section-padding relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>
      
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Find answers to common questions about using ProxiHire for both startups and students.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion 
            selectedKeys={selectedKeys}
            onSelectionChange={setSelectedKeys as any}
            variant="splitted"
            className="gap-4"
          >
            {faqItems.map((item) => (
              <AccordionItem
                key={item.key}
                aria-label={item.title}
                title={item.title}
                classNames={{
                  title: "text-lg font-medium",
                  content: "text-foreground/70",
                  trigger: "px-6 py-4 data-[hover=true]:bg-content2",
                }}
              >
                {item.content}
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-foreground/70 mb-4">
            Still have questions? Contact our support team.
          </p>
          <a 
            href="#contact" 
            className="text-primary font-medium inline-flex items-center gap-1 hover:underline"
          >
            Get in touch
            <Icon icon="lucide:arrow-right" width={16} />
          </a>
        </div>
      </div>
    </section>
  );
};