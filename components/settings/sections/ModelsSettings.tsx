"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/hooks/use-toast";
import { FileUp, Edit, Trash2, MoreVertical } from "lucide-react";
import { 
  DropdownMenu,
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface ModelFile {
  id: string;
  name: string;
  uploadDate: string;
}

export function ModelsSettings() {
  const [modelFiles, setModelFiles] = useState<ModelFile[]>([
    {
      id: "1",
      name: "Industrial.Template.v2.4.xlsx",
      uploadDate: "July 22nd, 2024"
    },
    {
      id: "2",
      name: "CONFIDENTIAL.xlsx",
      uploadDate: "June 9th, 2024"
    }
  ]);
  
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [currentFile, setCurrentFile] = useState<ModelFile | null>(null);
  const [editFileName, setEditFileName] = useState("");

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      const currentDate = new Date();
      
      // Format the date similar to the examples
      const month = currentDate.toLocaleString('en-US', { month: 'long' });
      const day = currentDate.getDate();
      const dayWithSuffix = day + getDaySuffix(day);
      const year = currentDate.getFullYear();
      const formattedDate = `${month} ${dayWithSuffix}, ${year}`;
      
      const newFile: ModelFile = {
        id: Date.now().toString(),
        name: file.name,
        uploadDate: formattedDate
      };
      
      setModelFiles([...modelFiles, newFile]);
      
      toast({
        title: "File uploaded",
        description: `${file.name} has been uploaded successfully.`
      });
    }
  };
  
  const handleEditClick = (file: ModelFile) => {
    setCurrentFile(file);
    setEditFileName(file.name);
    setEditDialogOpen(true);
  };
  
  const handleDeleteClick = (file: ModelFile) => {
    setCurrentFile(file);
    setDeleteDialogOpen(true);
  };
  
  const handleEditSave = () => {
    if (currentFile && editFileName.trim()) {
      setModelFiles(modelFiles.map(file => 
        file.id === currentFile.id ? { ...file, name: editFileName } : file
      ));
      
      toast({
        title: "File renamed",
        description: `File has been renamed successfully.`
      });
      
      setEditDialogOpen(false);
    }
  };
  
  const handleDeleteConfirm = () => {
    if (currentFile) {
      setModelFiles(modelFiles.filter(file => file.id !== currentFile.id));
      
      toast({
        title: "File deleted",
        description: `${currentFile.name} has been deleted successfully.`
      });
      
      setDeleteDialogOpen(false);
    }
  };
  
  const getDaySuffix = (day: number): string => {
    if (day > 3 && day < 21) return 'th';
    switch (day % 10) {
      case 1: return 'st';
      case 2: return 'nd';
      case 3: return 'rd';
      default: return 'th';
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Models</h2>
        <p className="text-muted-foreground">
          Upload your underwriting models here.
        </p>
      </div>
      
      <Separator />
      
      <div className="space-y-4">
        {modelFiles.map((file) => (
          <Card key={file.id}>
            <CardContent className="p-4">
              <div className="flex justify-between items-center">
                <div className="flex flex-col">
                  <h3 className="font-medium">{file.name}</h3>
                  <p className="text-sm text-muted-foreground">Uploaded {file.uploadDate}</p>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreVertical className="h-4 w-4" />
                      <span className="sr-only">Open menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => handleEditClick(file)}>
                      <Edit className="h-4 w-4 mr-2" />
                      Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem 
                      onClick={() => handleDeleteClick(file)}
                      className="text-destructive focus:text-destructive"
                    >
                      <Trash2 className="h-4 w-4 mr-2" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="pt-4">
        <h3 className="text-lg font-medium mb-2">Upload New Model</h3>
        <div className="flex items-center gap-2">
          <input
            type="file"
            id="model-upload"
            className="hidden"
            accept=".xlsx,.xls,.csv"
            onChange={handleFileUpload}
          />
          <Button 
            variant="outline" 
            onClick={() => document.getElementById('model-upload')?.click()}
            className="gap-2"
          >
            <FileUp className="h-4 w-4" />
            Select file...
          </Button>
          <span className="text-sm text-muted-foreground">
            Accepted formats: .xlsx, .xls, .csv
          </span>
        </div>
      </div>
      
      {/* Edit Dialog */}
      <Dialog open={editDialogOpen} onOpenChange={setEditDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit File Name</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <Label htmlFor="fileName">File Name</Label>
            <Input 
              id="fileName" 
              value={editFileName} 
              onChange={(e) => setEditFileName(e.target.value)} 
              className="mt-2"
            />
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setEditDialogOpen(false)}>Cancel</Button>
            <Button onClick={handleEditSave}>Save</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      {/* Delete Confirmation Dialog */}
      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete File</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <p>Are you sure you want to delete <span className="font-medium">{currentFile?.name}</span>?</p>
            <p className="text-sm text-muted-foreground mt-2">This action cannot be undone.</p>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeleteDialogOpen(false)}>Cancel</Button>
            <Button variant="destructive" onClick={handleDeleteConfirm}>Delete</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}