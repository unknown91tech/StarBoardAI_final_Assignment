"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { AnalysisMessage, AnalysisFile, ScenarioData } from '@/types/models';

interface ScenarioContextType {
  messages: AnalysisMessage[];
  files: AnalysisFile[];
  scenarios: ScenarioData[];
  currentScenario: string | null;
  inputValue: string;
  isAnalyzing: boolean;
  setInputValue: (value: string) => void;
  runAnalysis: () => void;
  setCurrentScenario: (id: string) => void;
  clearMessages: () => void;
}

const ScenarioContext = createContext<ScenarioContextType | undefined>(undefined);

export function ScenarioProvider({ children }: { children: React.ReactNode }) {
  const [messages, setMessages] = useState<AnalysisMessage[]>([]);
  const [files, setFiles] = useState<AnalysisFile[]>([]);
  const [scenarios, setScenarios] = useState<ScenarioData[]>([]);
  const [currentScenario, setCurrentScenario] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState<string>("Run a scenario analysis on using the space for Heavy Manufacturing vs Light Manufacturing vs as a Warehouse.");
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);

  // Simulate loading data from API
  useEffect(() => {
    // This would be replaced with an actual API call in a real application
    const mockScenarios: ScenarioData[] = [
      {
        id: 'heavy-manufacturing',
        title: 'Heavy Manufacturing',
        description: 'Analysis for heavy manufacturing use case',
        type: 'manufacturing',
        metrics: {
          roi: 12.5,
          capRate: 6.2,
          irr: 14.3,
          paybackPeriod: 7.5
        }
      },
      {
        id: 'light-manufacturing',
        title: 'Light Manufacturing',
        description: 'Analysis for light manufacturing use case',
        type: 'manufacturing',
        metrics: {
          roi: 14.8,
          capRate: 5.8,
          irr: 15.2,
          paybackPeriod: 6.8
        }
      },
      {
        id: 'warehouse',
        title: 'Warehouse',
        description: 'Analysis for warehouse use case',
        type: 'warehouse',
        metrics: {
          roi: 15.2,
          capRate: 5.0,
          irr: 16.5,
          paybackPeriod: 6.2
        }
      }
    ];
    
    setScenarios(mockScenarios);
  }, []);

  const runAnalysis = async () => {
    if (!inputValue.trim()) return;
    
    // Add user message
    const userMessage: AnalysisMessage = {
      id: Date.now(),
      sender: 'user',
      content: inputValue,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setIsAnalyzing(true);
    
    // Simulate API call with setTimeout
    setTimeout(() => {
      // Add assistant messages
      const newMessages: AnalysisMessage[] = [
        {
          id: Date.now() + 1,
          sender: 'assistant',
          content: "Sure! I'm on it.",
          timestamp: new Date()
        },
        {
          id: Date.now() + 2,
          sender: 'assistant',
          content: "Working...",
          timestamp: new Date()
        },
        {
          id: Date.now() + 3,
          sender: 'assistant',
          content: "I've completed the analysis for the different usage scenarios.",
          timestamp: new Date()
        }
      ];
      
      // Add files
      const newFiles: AnalysisFile[] = [
        {
          id: 1,
          filename: "280 Richards Heavy Manufacturing.xlsx",
          type: 'excel',
          url: '#',
          createdAt: new Date()
        },
        {
          id: 2,
          filename: "280 Richards Light Manufacturing.xlsx",
          type: 'excel',
          url: '#',
          createdAt: new Date()
        },
        {
          id: 3,
          filename: "280 Richards Warehouse.xlsx",
          type: 'excel',
          url: '#',
          createdAt: new Date()
        }
      ];
      
      setMessages(prev => [...prev, ...newMessages]);
      setFiles(newFiles);
      setIsAnalyzing(false);
    }, 2000);
  };

  const clearMessages = () => {
    setMessages([]);
    setFiles([]);
  };

  const value = {
    messages,
    files,
    scenarios,
    currentScenario,
    inputValue,
    isAnalyzing,
    setInputValue,
    runAnalysis,
    setCurrentScenario,
    clearMessages
  };

  return (
    <ScenarioContext.Provider value={value}>
      {children}
    </ScenarioContext.Provider>
  );
}

export function useScenario() {
  const context = useContext(ScenarioContext);
  if (context === undefined) {
    throw new Error('useScenario must be used within a ScenarioProvider');
  }
  return context;
}