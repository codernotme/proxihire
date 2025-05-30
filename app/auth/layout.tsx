import Providers from "@/components/Providers";
import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <Providers>
      {children}
      </Providers>
    </div>
  );
}
