import React from "react";
import { Link, Divider } from "@heroui/react";
import { Icon } from "@iconify/react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Press", href: "#" },
        { name: "Blog", href: "#" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "For Startups", href: "#for-startups" },
        { name: "For Students", href: "#for-students" },
        { name: "Success Stories", href: "#" },
        { name: "Help Center", href: "#" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Terms of Service", href: "#" },
        { name: "Privacy Policy", href: "#" },
        { name: "Cookie Policy", href: "#" },
        { name: "Accessibility", href: "#" }
      ]
    }
  ];

  return (
    <footer className="bg-content1 border-t border-divider">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center">
                <Icon icon="lucide:link" className="text-white" width={18} />
              </div>
              <p className="font-bold text-xl">ProxiHire</p>
            </div>
            
            <p className="text-foreground/70 mb-6 max-w-md">
              Connecting innovative startups with talented students for internships, event staffing, and brand ambassador roles.
            </p>
            
            <div className="flex gap-4">
              {["lucide:twitter", "lucide:linkedin", "lucide:instagram", "lucide:facebook"].map((icon, index) => (
                <a 
                  key={index}
                  href="#"
                  className="w-8 h-8 rounded-full bg-content2 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors"
                >
                  <Icon icon={icon} width={16} />
                </a>
              ))}
            </div>
          </div>
          
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="font-semibold mb-4">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="text-foreground/70 hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <Divider className="my-6" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-foreground/60">
            © {currentYear} ProxiHire. All rights reserved.
          </p>
          
          <div className="flex items-center gap-2">
            <span className="text-sm text-foreground/60">Made with</span>
            <Icon icon="lucide:heart" className="text-danger" width={16} />
            <span className="text-sm text-foreground/60">in San Francisco</span>
          </div>
        </div>
      </div>
    </footer>
  );
};