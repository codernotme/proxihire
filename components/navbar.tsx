import React from "react";
import { Navbar as HeroNavbar, NavbarBrand, NavbarContent, NavbarItem, Link as HeroLink, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@heroui/react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useAuth } from "../contexts/auth-context";

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { isAuthenticated, logout } = useAuth();

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "For Startups", href: "#for-startups" },
    { name: "For Students", href: "#for-students" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <HeroNavbar 
      onMenuOpenChange={setIsMenuOpen}
      isMenuOpen={isMenuOpen}
      maxWidth="xl"
      className="bg-content1/50 backdrop-blur-md border-b border-divider"
      classNames={{
        wrapper: "px-4 sm:px-6"
      }}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center">
              <Icon icon="lucide:link" className="text-white" width={18} />
            </div>
            <p className="font-bold text-xl">ProxiHire</p>
          </div>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-6" justify="center">
        {menuItems.slice(0, 4).map((item) => (
          <NavbarItem key={item.name}>
            <HeroLink 
              color="foreground" 
              as={Link}
              href={item.href}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              {item.name}
            </HeroLink>
          </NavbarItem>
        ))}
      </NavbarContent>
      
      <NavbarContent justify="end">
        {isAuthenticated ? (
          <>
            <NavbarItem className="hidden sm:flex">
              <HeroLink as={Link} href="/dashboard" color="foreground">Dashboard</HeroLink>
            </NavbarItem>
            <NavbarItem>
              <Button 
                color="primary" 
                variant="flat"
                className="font-medium"
                onPress={logout}
              >
                Log Out
              </Button>
            </NavbarItem>
          </>
        ) : (
          <>
            <NavbarItem className="hidden sm:flex">
              <HeroLink as={Link} href="/auth" color="foreground">Login</HeroLink>
            </NavbarItem>
            <NavbarItem>
              <Button 
                as={Link} 
                color="primary" 
                href="/auth" 
                variant="flat"
                className="font-medium"
              >
                Sign Up
              </Button>
            </NavbarItem>
          </>
        )}
      </NavbarContent>
      
      <NavbarMenu className="bg-content1/95 backdrop-blur-md pt-6">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <HeroLink
              as={Link}
              className="w-full text-lg py-2"
              href={item.href}
              color="foreground"
              size="lg"
            >
              {item.name}
            </HeroLink>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem>
          <HeroLink
            as={Link}
            className="w-full text-lg py-2"
            href="/login"
            color="foreground"
            size="lg"
          >
            Login
          </HeroLink>
        </NavbarMenuItem>
      </NavbarMenu>
    </HeroNavbar>
  );
};