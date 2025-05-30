"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Card, CardBody, Input, Button, Checkbox, Divider } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useAuth } from "../contexts/auth-context";

const LoginPage: React.FC = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [rememberMe, setRememberMe] = React.useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);

  const { login, loading, error } = useAuth();
  const router = useRouter();

  const togglePasswordVisibility = () => setIsPasswordVisible(!isPasswordVisible);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password);
      router.replace("/dashboard");
    } catch (err) {
      console.error("Login failed", err);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-6">
            <div className="w-10 h-10 rounded-md bg-primary flex items-center justify-center">
              <Icon icon="lucide:link" className="text-white" width={20} />
            </div>
            <span className="font-bold text-2xl">ProxiHire</span>
          </Link>
          <h1 className="text-2xl font-bold mb-2">Welcome back</h1>
          <p className="text-foreground/70">Sign in to access your account</p>
        </div>
        <Card className="border border-divider">
          <CardBody className="p-6 space-y-6">
            {error && (
              <div className="bg-danger/10 text-danger p-3 rounded-md text-sm">
                {error}
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
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
                placeholder="Enter your password"
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
              />
              <div className="flex items-center justify-between">
                <Checkbox 
                  isSelected={rememberMe}
                  onValueChange={setRememberMe}
                  size="sm"
                >
                  Remember me
                </Checkbox>
                <Link href="/forgot-password" className="text-sm text-primary hover:underline">
                  Forgot password?
                </Link>
              </div>
              <Button 
                type="submit" 
                color="primary" 
                fullWidth
                isLoading={loading}
                className="font-medium"
              >
                Sign In
              </Button>
            </form>
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
            <div className="text-center text-sm">
              <span className="text-foreground/70">Don't have an account? </span>
              <Link href="/signup" className="text-primary font-medium hover:underline">
                Sign up
              </Link>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;