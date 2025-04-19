"use client";

import { Avatar } from "@/components/ui/avatar";
import { Message } from "@/hooks/use-senario-analysis";

interface ScenarioConversationProps {
  messages: Message[];
}

export function ScenarioConversation({ messages }: ScenarioConversationProps) {
  return (
    <div className="space-y-4 mb-6">
      {messages.map((message) => (
        <div key={message.id} className={`flex items-start gap-3 ${message.sender === 'user' ? 'justify-end' : ''}`}>
          {message.sender === 'assistant' && (
            <Avatar className="h-8 w-8 bg-primary text-primary-foreground text-xs">
              AI
            </Avatar>
          )}
          
          <div className={`p-3 rounded-lg text-sm max-w-[85%] ${
            message.sender === 'assistant' 
              ? 'bg-muted' 
              : 'bg-primary text-primary-foreground'
          }`}>
            {message.content}
          </div>
          
          {message.sender === 'user' && (
            <Avatar className="h-8 w-8 bg-secondary text-secondary-foreground text-xs">
              You
            </Avatar>
          )}
        </div>
      ))}
    </div>
  );
}