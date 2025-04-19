"use client";

import { useState } from 'react';

export interface Message {
  id: number;
  sender: 'user' | 'assistant';
  content: string;
}

export interface ScenarioFile {
  id: number;
  filename: string;
  type: 'excel' | 'pdf' | 'image';
  url: string;
}

export function useScenarioAnalysis() {
  const [inputValue, setInputValue] = useState<string>('Run a scenario analysis on using the space for Heavy Manufacturing vs Light Manufacturing vs as a Warehouse.');
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [files, setFiles] = useState<ScenarioFile[]>([]);
  
  const runAnalysis = async () => {
    if (!inputValue.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now(),
      sender: 'user',
      content: inputValue
    };
    
    setMessages(prev => [...prev, userMessage]);
    setIsAnalyzing(true);
    
    // Simulate API call with setTimeout
    setTimeout(() => {
      // Add assistant messages
      const newMessages: Message[] = [
        {
          id: Date.now() + 1,
          sender: 'assistant',
          content: "Sure! I'm on it."
        },
        {
          id: Date.now() + 2,
          sender: 'assistant',
          content: "Working..."
        },
        {
          id: Date.now() + 3,
          sender: 'assistant',
          content: "Rehan, the models are now ready for you to analyze!"
        }
      ];
      
      // Add files
      const newFiles: ScenarioFile[] = [
        {
          id: 1,
          filename: "280 Richards Heavy Manufacturing.xlsx",
          type: 'excel',
          url: '#'
        },
        {
          id: 2,
          filename: "280 Richards Light Manufacturing.xlsx",
          type: 'excel',
          url: '#'
        },
        {
          id: 3,
          filename: "280 Richards Warehouse.xlsx",
          type: 'excel',
          url: '#'
        }
      ];
      
      setMessages(prev => [...prev, ...newMessages]);
      setFiles(newFiles);
      setIsAnalyzing(false);
    }, 2000);
  };
  
  return {
    inputValue,
    setInputValue,
    isAnalyzing,
    messages,
    files,
    runAnalysis
  };
}