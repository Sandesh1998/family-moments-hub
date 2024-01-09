import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function Gallery() {
 const [selectedFile, setSelectedFile] = useState<File | null>(null);

 const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
 setSelectedFile(e.target.files ? e.target.files[0] : null);
 };

 const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
 e.preventDefault();

 if (!selectedFile) {
   return;
 }

 const formData = new FormData();
 formData.append('photos', selectedFile);

 const response = await fetch('http://localhost:5000/familyMoment/api/upload', {
   method: 'POST',
   body: formData,
 });

 if (response.ok) {
   console.log('File uploaded successfully');
 } else {
   console.error('Failed to upload file');
 }
 };

 return (
 <>
   <div className="grid w-full lg:max-w-sm items-center gap-1.5">
     <Label htmlFor="picture">Picture of the day</Label>
     <Input
       id="picture"
       type="file"
       onChange={handleFileChange}
       className="file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 file:border file:border-solid file:border-blue-700 file:rounded-md border-blue-600"
     />
     <button type="submit" onClick={handleSubmit}>Submit</button>
   </div>
 </>
 );
}

export default Gallery;
