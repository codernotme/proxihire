"use client";
import React from "react";
import Link from "next/link";
import { Card, CardBody, Button, Divider } from "@heroui/react";
import { Icon } from "@iconify/react";

const AuthPage: React.FC = () => {
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
          <h1 className="text-2xl font-bold mb-2">Welcome to ProxiHire</h1>
          <p className="text-foreground/70">Sign in or create an account to get started</p>
        </div>
        <Card className="border border-divider">
          <CardBody className="p-6 space-y-6">
            <Button 
              as={Link}
              href="/login"
              color="primary"
              fullWidth
              className="font-medium"
              startContent={<Icon icon="lucide:log-in" width={18} />}
            >
              Sign In
            </Button>
            <Button 
              as={Link}
              href="/signup"
              variant="flat"
              fullWidth
              className="font-medium"
              startContent={<Icon icon="lucide:user-plus" width={18} />}
            >
              Create Account
            </Button>
            <Divider className="my-4" />
            <div className="flex flex-col gap-3">
              <Button 
                variant="bordered" 
                startContent={<Icon icon="logos:google-icon" width={18} />}
                className="font-medium"
                fullWidth
              >
                Continue with Google
              </Button>
              <Button 
                variant="bordered" 
                startContent={<Icon icon="logos:linkedin-icon" width={18} />}
                className="font-medium"
                fullWidth
              >
                Continue with LinkedIn
              </Button>
            </div>
          </CardBody>
        </Card>
        <div className="text-center text-xs text-foreground/50 mt-6">
          By continuing, you agree to our{" "}
          <Link href="/terms" className="text-primary hover:underline">Terms of Service</Link> and{" "}
          <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>.
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
