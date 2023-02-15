import React, { useState, useRef } from 'react';

function Video() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleProgress = () => {
    const duration = videoRef.current.duration;
    const currentTime = videoRef.current.currentTime;
    const progress = (currentTime / duration) * 100;
    setProgress(progress);
  };
  return (
    <div>
      <video
        autoPlay={true}
        onTimeUpdate={handleProgress}
        ref={videoRef}
        width="100%"
        height="100%"
        controls
      >
        <source src="assets/video/sample-webcam.mp4" type="video/mp4" />
      </video>
    </div>
  )
}

export default Video