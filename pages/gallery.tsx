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
  } else {
    console.error('Failed to upload file');
  }
 };

 const fetchImages = async () => {
  try {
    const res = await fetch('http://localhost:5000/familyMoment/api/photos');
    const data = await res.json();
    console.log("first", data.gallery)
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
    {images.map((image) => (
      <div key={image._id}>
        {image.images.map((img) => (
          <img src={ `${img.path}`} key={img._id} alt={img.filename} />
        ))}
      </div>
    ))}
  </>
 );
}

export default Gallery;
