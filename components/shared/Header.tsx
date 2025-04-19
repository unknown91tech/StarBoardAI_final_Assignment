"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

const navItems = [
  { name: "Deal Overview", path: "/" },
  { name: "Workshop", path: "/workshop" },
  { name: "Pipeline", path: "/pipeline" },
  { name: "Settings", path: "/settings" },
];
export function Header() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between max-w-7xl">
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/deal-overview" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Deal Overview
            </Link>
            <Link href="/location-analysis" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Location Analysis
            </Link>
            <Link href="/workshop" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Workshop
            </Link>
            <Link href="/pipeline" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Pipeline
            </Link>
            <Link href="/settings" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Settings
            </Link>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Ask me anything!"
              className="px-4 py-2 w-60 rounded-full border border-border bg-background text-sm"
            />
          </div>
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white">
            <span className="text-xs font-medium">SB</span>
          </div>
        </div>
      </div>
    </header>
  );
}