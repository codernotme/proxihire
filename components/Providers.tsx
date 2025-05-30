"use client";

import { HeroUIProvider } from "@heroui/react";


export default function Providers({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <HeroUIProvider>
        {children}
        </HeroUIProvider>
      </body>
    </html>
  );
}
