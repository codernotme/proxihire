"use client";
import React from "react";
import { Card, CardBody, Button, Input, Textarea, Chip, Progress } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useRouter, useParams } from "next/navigation";
import { motion } from "framer-motion";

// Mock project data (simplified from project-overview)
const mockProject = {
  id: "proj123",
  title: "Frontend Developer for AI-Powered Analytics Dashboard",
  company: "DataViz AI",
  logo: "https://img.heroui.chat/image/avatar?w=100&h=100&u=company1",
  location: "San Francisco, CA (Remote)",
  type: "Internship",
  compensation: "$20-25/hour"
};

const ApplyProject: React.FC = () => {
  const params = useParams();
  const router = useRouter();
  const [step, setStep] = React.useState(1);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [formData, setFormData] = React.useState({
    coverLetter: "",
    availability: "",
    portfolioUrl: "",
    resumeFile: null as File | null,
    questions: {
      experience: "",
      motivation: "",
      availability: ""
    }
  });
  
  const handleChange = (field: string, value: string) => {
    if (field.includes('.')) {
      const [parent, child] = field.split('.');
      setFormData({
        ...formData,
        [parent]: {
          ...formData[parent as keyof typeof formData] as Record<string, any>,
          [child]: value
        }
      });
    } else {
      setFormData({
        ...formData,
        [field]: value
      });
    }
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        resumeFile: e.target.files[0]
      });
    }
  };
  
  const nextStep = () => {
    setStep(step + 1);
    window.scrollTo(0, 0);
  };
  
  const prevStep = () => {
    setStep(step - 1);
    window.scrollTo(0, 0);
  };
  
  const handleSubmit = () => {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setStep(4); // Success step
    }, 1500);
  };
  
  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <div>
              <label className="block text-sm font-medium mb-2">Resume/CV</label>
              <div className="border-2 border-dashed border-divider rounded-lg p-6 text-center">
                {formData.resumeFile ? (
                  <div className="flex items-center justify-center gap-2">
                    <Icon icon="lucide:file-text" className="text-primary" width={24} />
                    <span>{formData.resumeFile.name}</span>
                    <Button 
                      size="sm" 
                      variant="light" 
                      color="danger"
                      isIconOnly
                      onPress={() => setFormData({ ...formData, resumeFile: null })}
                    >
                      <Icon icon="lucide:x" width={16} />
                    </Button>
                  </div>
                ) : (
                  <div>
                    <div className="flex justify-center mb-3">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                        <Icon icon="lucide:upload" className="text-primary" width={24} />
                      </div>
                    </div>
                    <p className="text-foreground/70 mb-2">Drag and drop your resume here or</p>
                    <label className="cursor-pointer text-primary hover:underline">
                      Browse files
                      <input 
                        type="file" 
                        accept=".pdf,.doc,.docx" 
                        className="hidden" 
                        onChange={handleFileChange}
                      />
                    </label>
                    <p className="text-xs text-foreground/50 mt-2">Supported formats: PDF, DOC, DOCX (Max 5MB)</p>
                  </div>
                )}
              </div>
            </div>
            
            <Textarea
              label="Cover Letter"
              placeholder="Introduce yourself and explain why you're a good fit for this position..."
              value={formData.coverLetter}
              onValueChange={(value) => handleChange("coverLetter", value)}
              minRows={5}
            />
            
            <Input
              label="Portfolio URL (Optional)"
              placeholder="https://your-portfolio.com"
              value={formData.portfolioUrl}
              onValueChange={(value) => handleChange("portfolioUrl", value)}
              startContent={<Icon icon="lucide:link" className="text-default-400" width={18} />}
            />
            
            <div className="flex gap-3 pt-4">
              <Button 
                variant="flat" 
                fullWidth
                className="font-medium"
                onPress={() => router.back()}
              >
                Cancel
              </Button>
              <Button 
                color="primary" 
                fullWidth
                className="font-medium"
                onPress={nextStep}
                isDisabled={!formData.resumeFile}
              >
                Continue
              </Button>
            </div>
          </motion.div>
        );
      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <h3 className="font-medium">Please answer the following questions:</h3>
            
            <Textarea
              label="What relevant experience do you have for this role?"
              placeholder="Describe your experience..."
              value={formData.questions.experience}
              onValueChange={(value) => handleChange("questions.experience", value)}
              minRows={3}
            />
            
            <Textarea
              label="Why are you interested in working with DataViz AI?"
              placeholder="Share your motivation..."
              value={formData.questions.motivation}
              onValueChange={(value) => handleChange("questions.motivation", value)}
              minRows={3}
            />
            
            <Textarea
              label="What is your availability for the next 3 months?"
              placeholder="Describe your availability..."
              value={formData.questions.availability}
              onValueChange={(value) => handleChange("questions.availability", value)}
              minRows={3}
            />
            
            <div className="flex gap-3 pt-4">
              <Button 
                variant="flat" 
                fullWidth
                className="font-medium"
                onPress={prevStep}
              >
                Back
              </Button>
              <Button 
                color="primary" 
                fullWidth
                className="font-medium"
                onPress={nextStep}
                isDisabled={!formData.questions.experience || !formData.questions.availability}
              >
                Continue
              </Button>
            </div>
          </motion.div>
        );
      case 3:
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <h3 className="font-medium">Review Your Application</h3>
            
            <div className="space-y-4">
              <div className="p-4 bg-content2 rounded-lg">
                <h4 className="text-sm font-medium mb-2">Resume/CV</h4>
                <div className="flex items-center gap-2">
                  <Icon icon="lucide:file-text" className="text-primary" width={20} />
                  <span>{formData.resumeFile?.name}</span>
                </div>
              </div>
              
              <div className="p-4 bg-content2 rounded-lg">
                <h4 className="text-sm font-medium mb-2">Cover Letter</h4>
                <p className="text-sm text-foreground/80">{formData.coverLetter || "No cover letter provided."}</p>
              </div>
              
              {formData.portfolioUrl && (
                <div className="p-4 bg-content2 rounded-lg">
                  <h4 className="text-sm font-medium mb-2">Portfolio URL</h4>
                  <a 
                    href={formData.portfolioUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    {formData.portfolioUrl}
                  </a>
                </div>
              )}
              
              <div className="p-4 bg-content2 rounded-lg">
                <h4 className="text-sm font-medium mb-2">Additional Questions</h4>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium">What relevant experience do you have for this role?</p>
                    <p className="text-sm text-foreground/80">{formData.questions.experience}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Why are you interested in working with DataViz AI?</p>
                    <p className="text-sm text-foreground/80">{formData.questions.motivation || "No answer provided."}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">What is your availability for the next 3 months?</p>
                    <p className="text-sm text-foreground/80">{formData.questions.availability}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex gap-3 pt-4">
              <Button 
                variant="flat" 
                fullWidth
                className="font-medium"
                onPress={prevStep}
              >
                Back
              </Button>
              <Button 
                color="primary" 
                fullWidth
                className="font-medium"
                onPress={handleSubmit}
                isLoading={isSubmitting}
              >
                Submit Application
              </Button>
            </div>
          </motion.div>
        );
      case 4:
        return (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="text-center py-8"
          >
            <div className="w-20 h-20 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-6">
              <Icon icon="lucide:check" className="text-success" width={40} />
            </div>
            <h2 className="text-2xl font-bold mb-2">Application Submitted!</h2>
            <p className="text-foreground/70 mb-6">
              Your application for <span className="font-medium">{mockProject.title}</span> has been successfully submitted to {mockProject.company}.
            </p>
            <p className="text-foreground/70 mb-8">
              You can track the status of your application in the Application Tracker.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button 
                variant="flat" 
                startContent={<Icon icon="lucide:clipboard-list" width={18} />}
                onPress={() => router.push("/dashboard/applications")}
              >
                View Applications
              </Button>
              <Button 
                color="primary" 
                startContent={<Icon icon="lucide:search" width={18} />}
                onPress={() => router.push("/dashboard/browse")}
              >
                Browse More Opportunities
              </Button>
            </div>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="mb-6">
        <button 
          onClick={() => router.back()}
          className="flex items-center gap-1 text-foreground/70 hover:text-foreground transition-colors mb-4"
        >
          <Icon icon="lucide:arrow-left" width={16} />
          <span>Back</span>
        </button>
        
        <h1 className="text-2xl font-bold mb-2">Apply for Position</h1>
        <p className="text-foreground/70">Complete the application form for {mockProject.title}</p>
      </div>
      
      {step < 4 && (
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium">Step {step} of 3</span>
            <span className="text-sm text-foreground/70">
              {step === 1 ? "Resume & Cover Letter" : step === 2 ? "Additional Questions" : "Review & Submit"}
            </span>
          </div>
          <Progress 
            value={(step / 3) * 100} 
            color="primary"
            className="h-2"
          />
        </div>
      )}
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="border border-divider">
            <CardBody className="p-6">
              {renderStepContent()}
            </CardBody>
          </Card>
        </div>
        
        <div>
          <Card className="border border-divider sticky top-4">
            <CardBody className="p-6">
              <h3 className="text-lg font-semibold mb-4">About This Position</h3>
              
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-md overflow-hidden flex-shrink-0">
                  <img 
                    src={mockProject.logo} 
                    alt={mockProject.company} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div>
                  <h4 className="font-medium">{mockProject.title}</h4>
                  <p className="text-sm text-foreground/70">{mockProject.company}</p>
                </div>
              </div>
              
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <Icon icon="lucide:map-pin" className="text-foreground/70" width={16} />
                  <span>{mockProject.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon icon="lucide:briefcase" className="text-foreground/70" width={16} />
                  <span>{mockProject.type}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon icon="lucide:dollar-sign" className="text-foreground/70" width={16} />
                  <span>{mockProject.compensation}</span>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-divider">
                <h4 className="font-medium mb-2">Application Tips</h4>
                <ul className="space-y-2 text-sm text-foreground/70">
                  <li className="flex items-start gap-2">
                    <Icon icon="lucide:check" className="text-success mt-1" width={14} />
                    <span>Tailor your resume to highlight relevant skills</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon icon="lucide:check" className="text-success mt-1" width={14} />
                    <span>Be specific about your experience and achievements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon icon="lucide:check" className="text-success mt-1" width={14} />
                    <span>Proofread your application before submitting</span>
                  </li>
                </ul>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ApplyProject;