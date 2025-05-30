"use client";

import { HeroUIProvider } from "@heroui/react";
import { AuthProvider } from "../contexts/auth-context";


export default function Providers({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <HeroUIProvider>
          <AuthProvider>
            {children}
          </AuthProvider>
        </HeroUIProvider>
  );
}
