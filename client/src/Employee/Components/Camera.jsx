// src/components/Camera.jsx
import React, { useState, useEffect, useRef } from "react";

const Camera = ({ onCapture }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const getUserMedia = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        videoRef.current.srcObject = stream;
      } catch (error) {
        console.error("Error accessing media devices.", error);
      }
    };
    getUserMedia();
  }, []);

  const handleCapture = () => {
    const video = videoRef.current;
    const canvas = document.createElement("canvas");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    const image = canvas.toDataURL("image/png");
    const timestamp = new Date().toLocaleString();

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        if (onCapture) {
          onCapture({ image, timestamp, latitude, longitude });
        }
      },
      (error) => {
        console.error("Error getting location.", error);
      }
    );
  };

  return (
    <div className="flex flex-col items-center">
      <video ref={videoRef} autoPlay playsInline className="w-full rounded-lg"></video>
      <button onClick={handleCapture} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg">
        Capture
      </button>
    </div>
  );
};

export default Camera;
