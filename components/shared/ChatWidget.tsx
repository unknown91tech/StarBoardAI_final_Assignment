"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageSquare, X, Minimize2, Maximize2, Send } from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi there! I'm your AI assistant. How can I help you with this property?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
    if (isMinimized) setIsMinimized(false);
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  const handleSendMessage = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    
    if (!inputValue.trim()) return;
    
    // Add user message
    const userMsg: Message = {
      id: Date.now(),
      text: inputValue,
      isUser: true,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMsg]);
    setInputValue("");
    
    // Simulate AI response with a typing delay
    setTimeout(() => {
      // Mock responses based on input content
      let aiResponse = "";
      const lowerCaseInput = inputValue.toLowerCase();
      
      if (lowerCaseInput.includes("price") || lowerCaseInput.includes("cost") || lowerCaseInput.includes("worth")) {
        aiResponse = "This property is offered at $143,000,000, which works out to approximately $23.92 per square foot with a 5.0% cap rate.";
      } else if (lowerCaseInput.includes("tenant") || lowerCaseInput.includes("amazon")) {
        aiResponse = "The property is fully leased to Amazon (S&P: AA) with 13 years remaining on the lease through September 2037, and includes four 5-year renewal options at market rate.";
      } else if (lowerCaseInput.includes("financing") || lowerCaseInput.includes("loan") || lowerCaseInput.includes("debt")) {
        aiResponse = "The property comes with assumable in-place debt of $72.9 million at 3.85% through February 2028.";
      } else if (lowerCaseInput.includes("location") || lowerCaseInput.includes("where")) {
        aiResponse = "280 Richards is located on Brooklyn's waterfront in the Red Hook logistics submarket, minutes from Downtown Manhattan and with access to 2.8 million Brooklyn consumers.";
      } else if (lowerCaseInput.includes("size") || lowerCaseInput.includes("square feet") || lowerCaseInput.includes("sqft")) {
        aiResponse = "The property is 312,000 square feet total, featuring 36-foot clear heights and 393 parking spaces across rooftop and ground level.";
      } else if (lowerCaseInput.includes("tour") || lowerCaseInput.includes("visit") || lowerCaseInput.includes("see")) {
        aiResponse = "I'd be happy to arrange a property tour. Please contact your Newmark representative to schedule a visit.";
      } else {
        aiResponse = "Thanks for your question. This property is a new construction logistics facility in Brooklyn's Red Hook submarket, fully leased to Amazon with 13 years remaining term. Can I provide any specific details about the property, lease terms, or market conditions?";
      }
      
      const botMsg: Message = {
        id: Date.now(),
        text: aiResponse,
        isUser: false,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMsg]);
    }, 1000);
  };

  // Scroll to the bottom when messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  function formatTime(date: Date) {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  return (
    <div className="fixed right-4 bottom-4 z-50 flex flex-col items-end">
      {isOpen && (
        <div className={cn(
          "bg-white rounded-lg shadow-xl border transition-all overflow-hidden w-80",
          isMinimized ? "h-14" : "h-96"
        )}>
          <div className="bg-primary text-primary-foreground p-3 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <MessageSquare size={18} />
              <span className="font-medium">Property Assistant</span>
            </div>
            <div className="flex items-center gap-1">
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-6 w-6 text-primary-foreground rounded-sm hover:bg-primary/80" 
                onClick={toggleMinimize}
              >
                {isMinimized ? <Maximize2 size={14} /> : <Minimize2 size={14} />}
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-6 w-6 text-primary-foreground rounded-sm hover:bg-primary/80" 
                onClick={toggleOpen}
              >
                <X size={14} />
              </Button>
            </div>
          </div>
          
          {!isMinimized && (
            <>
              <div className="flex-1 overflow-y-auto p-3 h-[calc(100%-7.5rem)] space-y-4">
                {messages.map((message) => (
                  <div 
                    key={message.id} 
                    className={cn(
                      "max-w-[80%] rounded-lg p-3 mb-2",
                      message.isUser 
                        ? "bg-primary/10 ml-auto" 
                        : "bg-muted mr-auto"
                    )}
                  >
                    <div className="text-sm">{message.text}</div>
                    <div className="text-xs text-muted-foreground mt-1 text-right">
                      {formatTime(message.timestamp)}
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
              
              <div className="border-t p-3">
                <form onSubmit={handleSendMessage} className="flex gap-2">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1"
                  />
                  <Button type="submit" size="icon" disabled={!inputValue.trim()}>
                    <Send size={18} />
                  </Button>
                </form>
              </div>
            </>
          )}
        </div>
      )}
      
      {!isOpen && (
        <Button
          onClick={toggleOpen}
          className="rounded-full h-12 w-12 bg-primary hover:bg-primary/90 shadow-lg"
        >
          <MessageSquare />
        </Button>
      )}
    </div>
  );
}