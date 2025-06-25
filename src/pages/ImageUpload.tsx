
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const ImageUpload = () => {
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);
  const [uploading, setUploading] = useState(false);
  const { toast } = useToast();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFiles(event.target.files);
  };

  const handleUpload = async () => {
    if (!selectedFiles || selectedFiles.length === 0) {
      toast({
        title: "No files selected",
        description: "Please select at least one image to upload.",
        variant: "destructive",
      });
      return;
    }

    setUploading(true);

    try {
      // TODO: Implement actual AWS S3 upload logic here
      // This would typically involve calling an API endpoint that handles the upload
      console.log("Files to upload:", selectedFiles);
      
      // Simulate upload delay
      await new Promise(resolve => setTimeout(resolve, 2000));

      toast({
        title: "Upload successful",
        description: `${selectedFiles.length} file(s) uploaded to AWS S3.`,
      });

      // Reset form
      setSelectedFiles(null);
      const fileInput = document.getElementById('file-input') as HTMLInputElement;
      if (fileInput) fileInput.value = '';

    } catch (error) {
      toast({
        title: "Upload failed",
        description: "There was an error uploading your files.",
        variant: "destructive",
      });
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">Image Upload</h1>
            <Link to="/">
              <Button variant="outline" className="flex items-center">
                <Home className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Upload className="h-5 w-5 mr-2" />
                Upload Images to AWS S3
              </CardTitle>
              <CardDescription>
                Select one or more images to upload to your AWS S3 bucket
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="file-input">Select Images</Label>
                <Input
                  id="file-input"
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleFileChange}
                  className="mt-1"
                />
              </div>

              {selectedFiles && selectedFiles.length > 0 && (
                <div className="text-sm text-gray-600">
                  {selectedFiles.length} file(s) selected
                </div>
              )}

              <Button 
                onClick={handleUpload} 
                disabled={!selectedFiles || uploading}
                className="w-full"
              >
                {uploading ? "Uploading..." : "Upload to AWS S3"}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ImageUpload;
