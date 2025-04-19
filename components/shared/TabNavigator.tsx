"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ReactNode } from "react";

interface Tab {
  value: string;
  label: string;
  content: ReactNode;
}

interface TabNavigatorProps {
  tabs: Tab[];
  defaultValue?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export function TabNavigator({ tabs, defaultValue, value, onChange }: TabNavigatorProps) {
  return (
    <Tabs 
      defaultValue={defaultValue || tabs[0].value} 
      value={value}
      onValueChange={onChange}
      className="w-full"
    >
      <TabsList className="w-full justify-start border-b rounded-none px-0">
        {tabs.map((tab) => (
          <TabsTrigger 
            key={tab.value}
            value={tab.value} 
            className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary"
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
      
      {tabs.map((tab) => (
        <TabsContent key={tab.value} value={tab.value}>
          {tab.content}
        </TabsContent>
      ))}
    </Tabs>
  );
}