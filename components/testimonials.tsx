import React from "react";
import { Card, CardBody, Button } from "@heroui/react";
import { Icon } from "@iconify/react";

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      type: "startup",
      name: "Sarah Chen",
      position: "Founder, DataViz AI",
      image: "https://img.heroui.chat/image/avatar?w=100&h=100&u=founder1",
      content: "ProxiHire has been a game-changer for our startup. We found three incredible student developers who brought fresh perspectives and energy to our team. The platform made it easy to find exactly the skills we needed.",
      logo: "logos:google"
    },
    {
      id: 2,
      type: "student",
      name: "Marcus Johnson",
      position: "Computer Science Major, Stanford",
      image: "https://img.heroui.chat/image/avatar?w=100&h=100&u=student2",
      content: "Through ProxiHire, I landed an internship at a fintech startup that turned into a part-time role throughout my senior year. The experience was invaluable and gave me real-world skills that my classes couldn't provide.",
      logo: "logos:stanford-university"
    },
    {
      id: 3,
      type: "startup",
      name: "David Park",
      position: "CEO, EventFlow",
      image: "https://img.heroui.chat/image/avatar?w=100&h=100&u=founder2",
      content: "We needed 15 brand ambassadors for our product launch event with just two weeks' notice. ProxiHire delivered with qualified, enthusiastic students who represented our brand perfectly.",
      logo: "logos:airbnb"
    },
    {
      id: 4,
      type: "student",
      name: "Aisha Patel",
      position: "Marketing Major, NYU",
      image: "https://img.heroui.chat/image/avatar?w=100&h=100&u=student3",
      content: "I've worked with three different startups through ProxiHire, each offering unique experiences that have shaped my career path. The flexible hours allowed me to earn while maintaining my academic performance.",
      logo: "logos:nyu"
    }
  ];

  const [activeIndex, setActiveIndex] = React.useState(0);
  const testimonialsPerView = 2;
  const maxIndex = Math.ceil(testimonials.length / testimonialsPerView) - 1;

  const handleNext = () => {
    setActiveIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const visibleTestimonials = React.useMemo(() => {
    const start = activeIndex * testimonialsPerView;
    return testimonials.slice(start, start + testimonialsPerView);
  }, [activeIndex, testimonials]);

  return (
    <section className="section-padding bg-content1">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Hear from startups and students who have found success through ProxiHire.
          </p>
        </div>
        
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {visibleTestimonials.map((testimonial) => (
              <Card key={testimonial.id} className="border border-divider bg-content2">
                <CardBody className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <p className="text-sm text-foreground/70">{testimonial.position}</p>
                    </div>
                    <div className="ml-auto">
                      <Icon icon={testimonial.logo} width={24} height={24} />
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <Icon icon="lucide:quote" className="text-primary/40" width={32} />
                  </div>
                  
                  <p className="text-foreground/80 mb-4">
                    {testimonial.content}
                  </p>
                  
                  <div className="flex items-center">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Icon 
                          key={star} 
                          icon="lucide:star" 
                          className="text-warning" 
                          width={16} 
                        />
                      ))}
                    </div>
                    <div className="ml-auto">
                      <div className={`px-3 py-1 rounded-full text-xs ${
                        testimonial.type === "startup" 
                          ? "bg-primary/20 text-primary" 
                          : "bg-secondary/20 text-secondary"
                      }`}>
                        {testimonial.type === "startup" ? "Startup" : "Student"}
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
          
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  activeIndex === index ? "w-6 bg-primary" : "bg-foreground/30"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-6">
            <Button
              isIconOnly
              variant="flat"
              className="rounded-full bg-content3/50 backdrop-blur-md"
              onPress={handlePrev}
              aria-label="Previous testimonials"
            >
              <Icon icon="lucide:chevron-left" width={20} />
            </Button>
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-6">
            <Button
              isIconOnly
              variant="flat"
              className="rounded-full bg-content3/50 backdrop-blur-md"
              onPress={handleNext}
              aria-label="Next testimonials"
            >
              <Icon icon="lucide:chevron-right" width={20} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};