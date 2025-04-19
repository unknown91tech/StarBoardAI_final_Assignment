"use client";

import { cn } from "@/lib/utils";

type SettingsSection = "account" | "deal-criteria" | "models";

interface SettingsSidebarProps {
  activeSection: SettingsSection;
  onSectionChange: (section: SettingsSection) => void;
}

export function SettingsSidebar({ 
  activeSection, 
  onSectionChange 
}: SettingsSidebarProps) {
  const menuItems = [
    { id: "account" as SettingsSection, label: "Account" },
    { id: "deal-criteria" as SettingsSection, label: "Deal Criteria" },
    { id: "models" as SettingsSection, label: "Models" },
  ];

  return (
    <aside className="w-full md:w-64 mb-6">
      <nav className="space-y-1">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onSectionChange(item.id)}
            className={cn(
              "w-full text-left px-4 py-2 rounded-md text-sm transition-colors",
              activeSection === item.id
                ? "bg-muted font-medium"
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
            )}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </aside>
  );
}