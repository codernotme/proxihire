import React from "react";
import { Button, Card, CardBody, Input, Textarea } from "@heroui/react";
import { Icon } from "@iconify/react";

export const Contact: React.FC = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (key: string, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the data to your backend
    alert("Thanks for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactMethods = [
    {
      icon: "lucide:mail",
      title: "Email Us",
      value: "hello@proxihire.com",
      link: "mailto:hello@proxihire.com"
    },
    {
      icon: "lucide:phone",
      title: "Call Us",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: "lucide:map-pin",
      title: "Visit Us",
      value: "123 Startup Ave, San Francisco, CA",
      link: "https://maps.google.com"
    }
  ];

  return (
    <section id="contact" className="section-padding bg-content1">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Have questions or need assistance? Our team is here to help you make the most of ProxiHire.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <Card className="border border-divider bg-content2">
              <CardBody className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <Input
                    label="Name"
                    placeholder="Your name"
                    value={formData.name}
                    onValueChange={(value) => handleChange("name", value)}
                    isRequired
                  />
                  
                  <Input
                    label="Email"
                    placeholder="your.email@example.com"
                    type="email"
                    value={formData.email}
                    onValueChange={(value) => handleChange("email", value)}
                    isRequired
                  />
                  
                  <Input
                    label="Subject"
                    placeholder="How can we help you?"
                    value={formData.subject}
                    onValueChange={(value) => handleChange("subject", value)}
                    isRequired
                  />
                  
                  <Textarea
                    label="Message"
                    placeholder="Tell us more about your inquiry..."
                    value={formData.message}
                    onValueChange={(value) => handleChange("message", value)}
                    minRows={4}
                    isRequired
                  />
                  
                  <Button 
                    type="submit" 
                    color="primary" 
                    className="w-full font-medium"
                  >
                    Send Message
                  </Button>
                </form>
              </CardBody>
            </Card>
          </div>
          
          <div className="flex flex-col justify-between">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
              <p className="text-foreground/70 mb-6">
                Our team is available Monday through Friday, 9am to 5pm PT. We strive to respond to all inquiries within 24 hours.
              </p>
              
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex-shrink-0 flex items-center justify-center">
                      <Icon icon={method.icon} className="text-primary" width={20} />
                    </div>
                    <div>
                      <h4 className="font-medium">{method.title}</h4>
                      <a 
                        href={method.link} 
                        className="text-foreground/70 hover:text-primary transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {method.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
              <div className="flex gap-4">
                {["lucide:twitter", "lucide:linkedin", "lucide:instagram", "lucide:facebook"].map((icon, index) => (
                  <a 
                    key={index}
                    href="#"
                    className="w-10 h-10 rounded-full bg-content3 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors"
                  >
                    <Icon icon={icon} width={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};