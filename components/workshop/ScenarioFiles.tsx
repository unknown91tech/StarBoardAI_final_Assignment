"use client";

import { FileSpreadsheet, FileText, Image as ImageIcon } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { ScenarioFile } from "@/hooks/use-senario-analysis";

interface ScenarioFilesProps {
  files: ScenarioFile[];
}

export function ScenarioFiles({ files }: ScenarioFilesProps) {
  const getFileIcon = (type: string) => {
    switch (type) {
      case 'excel':
        return <FileSpreadsheet className="h-5 w-5 text-green-600" />;
      case 'pdf':
        return <FileText className="h-5 w-5 text-red-600" />;
      case 'image':
        return <ImageIcon className="h-5 w-5 text-blue-600" />;
      default:
        return <FileText className="h-5 w-5 text-muted-foreground" />;
    }
  };

  return (
    <div className="space-y-2">
      <div className="flex items-start gap-3">
        <Avatar className="h-8 w-8 bg-primary text-primary-foreground text-xs">
          AI
        </Avatar>
        <div className="space-y-2 max-w-[85%]">
          {files.map((file) => (
            <div 
              key={file.id} 
              className="flex items-center gap-2 p-2 bg-background border rounded-md cursor-pointer hover:bg-muted transition-colors"
            >
              {getFileIcon(file.type)}
              <span className="text-sm text-foreground">{file.filename}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}