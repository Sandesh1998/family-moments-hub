import React, { useState, useEffect } from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from 'next/image';

type Image = {
 _id: string;
 images: {
 filename: string;
 path: string;
 _id: string;
 }[];
 __v: number;
};

function Gallery() {
 const [selectedFile, setSelectedFile] = useState<File | null>(null);
 const [images, setImages] = useState<Image[]>([]);
 const inputRef = React.useRef<HTMLInputElement | null>(null);

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
 fetchImages(); // Refresh the list of images after uploading a new one
 inputRef.current!.value = ''; // Clear the input field
 } else {
 console.error('Failed to upload file');
 }
 };

 const fetchImages = async () => {
 try {
 const res = await fetch('http://localhost:5000/familyMoment/api/photos');
 const data = await res.json();
 setImages(data.gallery);
 } catch (err) {
 console.error(err);
 }
 };

 useEffect(() => {
 fetchImages();
 }, []);

 return (
 <>
 <div className="flex flex-col justify-center items-center gap-1.5">
 <Label htmlFor="picture">Picture of the day</Label>
 <Input
 ref={inputRef}
 id="picture"
 type="file"
 onChange={handleFileChange}
 className="w-[600px] mx-auto file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 file:border file:border-solid file:border-blue-700 file:rounded-md border-blue-600"
 />
 <button type="submit" onClick={handleSubmit} className="bg-green-500 text-white px-4 py-2 rounded">Submit</button>
 </div>
 <div className="grid grid-cols-5 gap-4 gap-y-0.5 px-2">
 {images.map((image) => (
 <div key={image._id}>
 {image.images.map((img) => (
 <img src={ `${img.path}`} key={img._id} alt={img.filename} className="object-contain w-[500px] h-[250px]" />
 ))}
 </div>
 ))}
 </div>
 </>
 );
}

export default Gallery;
