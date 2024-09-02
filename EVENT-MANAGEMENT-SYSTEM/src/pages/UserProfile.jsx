import React, { useState } from "react";
import { updateProfile } from "firebase/auth";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { auth, storage } from "../firebase";
import { useAuth } from "../context/AuthContext";
import './UserProfile.css';

function UserProfile() {
  const { currentUser } = useAuth();
  const [displayName, setDisplayName] = useState(currentUser?.displayName || "");
  const [photo, setPhoto] = useState(null);
  const [photoURL, setPhotoURL] = useState(currentUser?.photoURL || "");
  const [phoneNumber, setPhoneNumber] = useState(""); 
  const [dni, setDni] = useState(""); 

  const handlePhotoChange = (e) => {
    if (e.target.files[0]) {
      setPhoto(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let updatedPhotoURL = currentUser.photoURL;
    if (photo) {
      const photoRef = ref(storage, `profiles/${currentUser.uid}/${photo.name}`);
      const snapshot = await uploadBytes(photoRef, photo);
      updatedPhotoURL = await getDownloadURL(snapshot.ref);
    }

    try {
      await updateProfile(currentUser, {
        displayName,
        photoURL: updatedPhotoURL,
      });
      setPhotoURL(updatedPhotoURL);
      alert("Profile updated successfully!");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <main className="container">
      <h2>User Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="profile-photo-container">
          <img
            src={photoURL || '/default-profile.png'}
            alt="Profile"
            style={{ maxWidth: "100px", borderRadius: "50%" }}
          />
          <div className="photo-upload-overlay">
            <input
              type="file"
              id="photo-upload"
              onChange={handlePhotoChange}
              style={{ display: 'none' }}
            />
            <label htmlFor="photo-upload" className="photo-upload-label">
              Change Photo
            </label>
          </div>
        </div>
        <input
          type="text"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          placeholder="Display Name"
          required
        />
        <input
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Phone Number"
        />
        <input
          type="text"
          value={dni}
          onChange={(e) => setDni(e.target.value)}
          placeholder="DNI"
        />
        <button type="submit">Update Profile</button>
      </form>
    </main>
  );
}

export default UserProfile;
