"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FileDown, Loader2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { 
  Dialog, 
  DialogContent, 
  DialogTitle, 
  DialogHeader,
  DialogFooter,
  DialogDescription
} from "@/components/ui/dialog";

interface LocationPDFExportProps {
  propertyName: string;
  propertyLocation: string;
}

export function LocationPDFExport({ propertyName, propertyLocation }: LocationPDFExportProps) {
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [showDialog, setShowDialog] = useState<boolean>(false);
  const [exportProgress, setExportProgress] = useState<number>(0);

  const handleGeneratePDF = async () => {
    // Show the dialog
    setShowDialog(true);
    setIsGenerating(true);
    setExportProgress(0);
    
    // Simulate progress updates
    const interval = setInterval(() => {
      setExportProgress((prev) => {
        if (prev >= 95) {
          clearInterval(interval);
          return 100;
        }
        return prev + 15;
      });
    }, 600);
    
    // Simulate PDF generation completion
    setTimeout(() => {
      setExportProgress(100);
      
      setTimeout(() => {
        setIsGenerating(false);
        
        // Show success toast
        toast({
          title: "PDF Report Ready",
          description: `Location analysis for ${propertyName} has been prepared.`,
        });
      }, 600);
    }, 3000);
  };
  
  const handleDownload = () => {
    // In a real implementation, we'd either:
    // 1. Use a library like jsPDF to generate the PDF client-side
    // 2. Provide a direct download link to a server-generated PDF
    
    const samplePdfUrl = "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";
    
    const link = document.createElement("a");
    link.href = samplePdfUrl;
    link.setAttribute("download", `${propertyName.replace(/\s+/g, "-")}-location-analysis.pdf`);
    link.setAttribute("target", "_blank");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    setShowDialog(false);
  };

  const handleClose = () => {
    setShowDialog(false);
    setIsGenerating(false);
    setExportProgress(0);
  };

  return (
    <>
      <Button 
        variant="outline" 
        className="flex items-center gap-2"
        onClick={handleGeneratePDF}
      >
        <FileDown className="h-4 w-4" />
        Export to PDF
      </Button>
      
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Export Location Analysis</DialogTitle>
            <DialogDescription>
              {isGenerating 
                ? "Generating comprehensive PDF report with all location data..." 
                : "Your PDF report is ready to download."}
            </DialogDescription>
          </DialogHeader>
          
          <div className="py-4">
            {isGenerating ? (
              <div className="space-y-4">
                <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary transition-all duration-300 ease-in-out" 
                    style={{ width: `${exportProgress}%` }}
                  ></div>
                </div>
                <div className="text-xs text-muted-foreground text-center">
                  {exportProgress < 40 && "Collecting location data..."}
                  {exportProgress >= 40 && exportProgress < 70 && "Generating visualizations..."}
                  {exportProgress >= 70 && exportProgress < 95 && "Formatting report..."}
                  {exportProgress >= 95 && "Finalizing document..."}
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="rounded-md border p-4">
                  <div className="flex items-center space-x-2">
                    <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <FileDown className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{propertyName} Location Analysis.pdf</p>
                      <p className="text-xs text-muted-foreground">15 pages • 2.4 MB • April 19, 2025</p>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  This report includes demographic data, market trends, risk analysis, and all location insights for {propertyName}, {propertyLocation}.
                </p>
              </div>
            )}
          </div>
          
          <DialogFooter className="flex justify-between sm:justify-between">
            <Button 
              variant="outline" 
              onClick={handleClose}
              disabled={isGenerating}
            >
              Cancel
            </Button>
            <Button 
              onClick={handleDownload}
              disabled={isGenerating}
            >
              Download PDF
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}