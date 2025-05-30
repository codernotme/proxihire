"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Card, CardBody, Input, Button, RadioGroup, Radio, Divider, Progress } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useAuth } from "../contexts/auth-context";
import { motion } from "framer-motion";

const SignupPage: React.FC = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [role, setRole] = React.useState<"student" | "startup">("student");
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);
  const [agreedToTerms, setAgreedToTerms] = React.useState(false);
  const [step, setStep] = React.useState(1);
  const [skills, setSkills] = React.useState<string[]>([]);
  const [education, setEducation] = React.useState("");
  const [company, setCompany] = React.useState("");
  const [industry, setIndustry] = React.useState("");
  
  const { signup, loading, error } = useAuth();
  const router = useRouter();
  
  const togglePasswordVisibility = () => setIsPasswordVisible(!isPasswordVisible);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreedToTerms) {
      alert("You must agree to the Terms of Service and Privacy Policy");
      return;
    }
    try {
      await signup(name, email, password, role);
      router.replace("/dashboard");
    } catch (err) {
      console.error("Signup failed", err);
    }
  };
  
  const nextStep = () => {
    if (step === 1 && (!name || !email || !password)) {
      alert("Please fill in all required fields");
      return;
    }
    setStep(step + 1);
  };
  
  const prevStep = () => {
    setStep(step - 1);
  };
  
  const toggleSkill = (skill: string) => {
    if (skills.includes(skill)) {
      setSkills(skills.filter(s => s !== skill));
    } else {
      setSkills([...skills, skill]);
    }
  };
  
  const getStepContent = () => {
    switch (step) {
      case 1:
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            <Input
              label="Full Name"
              placeholder="Enter your full name"
              value={name}
              onValueChange={setName}
              isRequired
              startContent={
                <Icon icon="lucide:user" className="text-default-400" width={18} />
              }
            />
            
            <Input
              label="Email"
              placeholder="Enter your email"
              type="email"
              value={email}
              onValueChange={setEmail}
              isRequired
              startContent={
                <Icon icon="lucide:mail" className="text-default-400" width={18} />
              }
            />
            
            <Input
              label="Password"
              placeholder="Create a password"
              type={isPasswordVisible ? "text" : "password"}
              value={password}
              onValueChange={setPassword}
              isRequired
              startContent={
                <Icon icon="lucide:lock" className="text-default-400" width={18} />
              }
              endContent={
                <button 
                  type="button" 
                  onClick={togglePasswordVisibility}
                  className="focus:outline-none"
                >
                  <Icon 
                    icon={isPasswordVisible ? "lucide:eye-off" : "lucide:eye"} 
                    className="text-default-400" 
                    width={18} 
                  />
                </button>
              }
              description="Must be at least 8 characters"
            />
            
            <div>
              <label className="block text-sm font-medium mb-2">I am a:</label>
              <RadioGroup 
                orientation="horizontal" 
                value={role}
                onValueChange={setRole as any}
              >
                <Radio value="student">Student</Radio>
                <Radio value="startup">Startup / Employer</Radio>
              </RadioGroup>
            </div>
            
            <Button 
              color="primary" 
              fullWidth
              className="font-medium"
              onPress={nextStep}
            >
              Continue
            </Button>
          </motion.div>
        );
      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            {role === "student" ? (
              <>
                <Input
                  label="Education"
                  placeholder="University or College"
                  value={education}
                  onValueChange={setEducation}
                  startContent={
                    <Icon icon="lucide:graduation-cap" className="text-default-400" width={18} />
                  }
                />
                
                <div>
                  <label className="block text-sm font-medium mb-2">Skills</label>
                  <div className="flex flex-wrap gap-2">
                    {["React", "JavaScript", "TypeScript", "UI/UX", "Marketing", "Design", "Content", "Social Media"].map((skill) => (
                      <div
                        key={skill}
                        onClick={() => toggleSkill(skill)}
                        className={`px-3 py-1 rounded-full text-sm cursor-pointer transition-colors ${
                          skills.includes(skill) 
                            ? "bg-primary text-white" 
                            : "bg-content2 hover:bg-content3"
                        }`}
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <>
                <Input
                  label="Company Name"
                  placeholder="Your company name"
                  value={company}
                  onValueChange={setCompany}
                  startContent={
                    <Icon icon="lucide:briefcase" className="text-default-400" width={18} />
                  }
                />
                
                <Input
                  label="Industry"
                  placeholder="e.g. Technology, Marketing, etc."
                  value={industry}
                  onValueChange={setIndustry}
                  startContent={
                    <Icon icon="lucide:building" className="text-default-400" width={18} />
                  }
                />
              </>
            )}
            
            <div className="flex gap-3">
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
            className="space-y-4"
          >
            <div className="p-4 bg-content2 rounded-lg">
              <h3 className="text-lg font-medium mb-4">Review Your Information</h3>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-foreground/70">Name:</span>
                  <span className="font-medium">{name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground/70">Email:</span>
                  <span className="font-medium">{email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground/70">Account Type:</span>
                  <span className="font-medium capitalize">{role}</span>
                </div>
                
                {role === "student" && (
                  <>
                    <div className="flex justify-between">
                      <span className="text-foreground/70">Education:</span>
                      <span className="font-medium">{education || "Not provided"}</span>
                    </div>
                    <div>
                      <span className="text-foreground/70">Skills:</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {skills.length > 0 ? skills.map(skill => (
                          <span key={skill} className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">
                            {skill}
                          </span>
                        )) : <span className="text-sm">No skills selected</span>}
                      </div>
                    </div>
                  </>
                )}
                
                {role === "startup" && (
                  <>
                    <div className="flex justify-between">
                      <span className="text-foreground/70">Company:</span>
                      <span className="font-medium">{company || "Not provided"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-foreground/70">Industry:</span>
                      <span className="font-medium">{industry || "Not provided"}</span>
                    </div>
                  </>
                )}
              </div>
            </div>
            
            <div className="flex items-start gap-2">
              <input 
                type="checkbox" 
                id="terms" 
                checked={agreedToTerms}
                onChange={(e) => setAgreedToTerms(e.target.checked)}
                className="mt-1"
              />
              <label htmlFor="terms" className="text-sm text-foreground/70">
                I agree to the <Link href="/terms" className="text-primary hover:underline">Terms of Service</Link> and <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>
              </label>
            </div>
            
            <div className="flex gap-3">
              <Button 
                variant="flat" 
                fullWidth
                className="font-medium"
                onPress={prevStep}
              >
                Back
              </Button>
              <Button 
                type="submit" 
                color="primary" 
                fullWidth
                isLoading={loading}
                className="font-medium"
                isDisabled={!agreedToTerms}
              >
                Create Account
              </Button>
            </div>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <motion.div 
        className="w-full max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-6">
            <div className="w-10 h-10 rounded-md bg-primary flex items-center justify-center">
              <Icon icon="lucide:link" className="text-white" width={20} />
            </div>
            <span className="font-bold text-2xl">ProxiHire</span>
          </Link>
          <h1 className="text-2xl font-bold mb-2">Create an account</h1>
          <p className="text-foreground/70">Join ProxiHire to connect with opportunities</p>
        </div>
        
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium">Step {step} of 3</span>
            <span className="text-sm text-foreground/70">
              {step === 1 ? "Basic Info" : step === 2 ? `${role === "student" ? "Student" : "Startup"} Details` : "Review & Submit"}
            </span>
          </div>
          <Progress 
            value={(step / 3) * 100} 
            color="primary"
            className="h-2"
          />
        </div>
        
        <Card className="border border-divider">
          <CardBody className="p-6 space-y-6">
            {error && (
              <div className="bg-danger/10 text-danger p-3 rounded-md text-sm">
                {error}
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              {getStepContent()}
            </form>
            
            {step === 1 && (
              <>
                <div className="relative">
                  <Divider className="my-4" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="bg-content1 px-2 text-xs text-foreground/50">OR CONTINUE WITH</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <Button 
                    variant="bordered" 
                    startContent={<Icon icon="logos:google-icon" width={18} />}
                    className="font-medium"
                  >
                    Google
                  </Button>
                  <Button 
                    variant="bordered" 
                    startContent={<Icon icon="logos:linkedin-icon" width={18} />}
                    className="font-medium"
                  >
                    LinkedIn
                  </Button>
                </div>
              </>
            )}
            
            <div className="text-center text-sm">
              <span className="text-foreground/70">Already have an account? </span>
              <Link href="/login" className="text-primary font-medium hover:underline">
                Sign in
              </Link>
            </div>
          </CardBody>
        </Card>
      </motion.div>
    </div>
  );
};

export default SignupPage;