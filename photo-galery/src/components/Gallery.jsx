import React, { useState, useEffect } from 'react';
import { storage } from '../firebase.js';
import { ref, uploadBytes, getDownloadURL, listAll } from 'firebase/storage';
import './Gallery.css';

const Gallery = () => {
  const [image, setImage] = useState(null);
  const [imageName, setImageName] = useState('');
  const [gallery, setGallery] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    const imagesListRef = ref(storage, 'images/');
    try {
      const response = await listAll(imagesListRef);
      const itemsWithUrls = await Promise.all(
        response.items.map(async (item) => {
          const url = await getDownloadURL(item);
          const name = item.name.split('/')[0];
          return { url, name };
        })
      );
      setGallery(itemsWithUrls);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  const handleUpload = async () => {
    if (!image || !imageName) return;

    setUploading(true);
    try {
      const transformedImage = await applyTransformation(image);
      const imageRef = ref(storage, `images/${imageName}`);
      await uploadBytes(imageRef, transformedImage);
      await fetchImages();
    } catch (error) {
      console.error('Error uploading image:', error);
    } finally {
      setUploading(false);
      setImage(null);
      setImageName('');
    }
  };

  const applyTransformation = async (imageFile) => {
    return imageFile;
  };

  const openModal = (url) => setSelectedImage(url);
  const closeModal = () => setSelectedImage(null);

  const filteredGallery = gallery.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="gallery-container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="upload-section">
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <input
          type="text"
          placeholder="Enter image name"
          value={imageName}
          onChange={(e) => setImageName(e.target.value)}
        />
        <button onClick={handleUpload} disabled={uploading}>
          {uploading ? 'Uploading...' : 'Upload'}
        </button>
      </div>
      <div className="gallery-grid">
        {filteredGallery.map((item, index) => (
          <div key={index} className="gallery-item">
            <img
              src={item.url}
              alt={`Uploaded ${item.name}`}
              className="gallery-image"
              onClick={() => openModal(item.url)}
            />
            <p>{item.name}</p>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <span className="close">&times;</span>
          <img className="modal-content" src={selectedImage} alt="Selected" />
        </div>
      )}
    </div>
  );
};

export default Gallery;
