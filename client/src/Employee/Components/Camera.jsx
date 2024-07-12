// src/components/Camera.jsx
import React, { useRef, useState } from "react";
import Webcam from "react-webcam";

const Camera = () => {
  const webcamRef = useRef(null);
  const [imageSrc, setImageSrc] = useState(null);

  const captureImage = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImageSrc(imageSrc);
  };

  return (
    <div className="flex items-start bg-gray-200 p-4 rounded-lg">
      <div className="flex flex-col items-center">
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          className="mb-4"
        />
        <button
          onClick={captureImage}
          className="bg-indigo-600 text-white p-2 rounded-lg"
        >
          Click
        </button>
      </div>
      {imageSrc && (
        <div className="ml-4">
          <h3>Captured Image:</h3>
          <img src={imageSrc} alt="Captured" className="mt-2 rounded-lg" />
        </div>
      )}
    </div>
  );
};

export default Camera;
