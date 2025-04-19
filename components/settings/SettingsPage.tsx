"use client";

import { useState } from "react";
import { Header } from "@/components/shared/Header";
import { SettingsSidebar } from "@/components/settings/SettingsSidebar";
import { AccountSettings } from "@/components/settings/sections/AccountSettings";
import { DealCriteriaSettings } from "@/components/settings/sections/DealCriteriaSettings";
import { ModelsSettings } from "@/components/settings/sections/ModelsSettings";

type SettingsSection = "account" | "deal-criteria" | "models";

export function SettingsPage() {
  const [activeSection, setActiveSection] = useState<SettingsSection>("account");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        <h1 className="text-3xl font-bold mb-2">Settings</h1>
        <p className="text-muted-foreground mb-8">
          Manage your account settings and set deal criteria.
        </p>
        
        <div className="flex flex-col md:flex-row gap-8">
          <SettingsSidebar activeSection={activeSection} onSectionChange={setActiveSection} />
          
          <div className="flex-1">
            {activeSection === "account" && <AccountSettings />}
            {activeSection === "deal-criteria" && <DealCriteriaSettings />}
            {activeSection === "models" && <ModelsSettings />}
          </div>
        </div>
      </main>
    </div>
  );
}