import React, { useEffect, useRef, useState } from 'react';
import * as faceapi from 'face-api.js';
import { Link } from 'react-router-dom';

// import './styles.css';

function SessionInProgress() {
  const webCamRef = useRef();
  const canvasRef = useRef();
  const [captureVideo, setCaptureVideo] = useState(false);
  const [video, setVideo] = useState("");

  const expressionMap = {
    neutral: "😶",
    happy: "😄",
    sad: "😞",
    angry: "🤬",
    fearful: "😖",
    disgusted: "🤢",
    surprised: "😲"
  };
  const emotionMap = {
    neutral: "white",
    happy: "blue",
    sad: "grey",
    angry: "red",
    fearful: "green",
    disgusted: "purple",
    surprised: "yellow"
  };

  const [expression, setExpression] = useState([]);
  const [emotionBG, setEmotionBG] = useState([]);

  const videoRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      startVideo();
      webCamRef && loadModels();
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    startVideo();
    webCamRef && loadModels();
  }, []);

  const startVideo = () => {
    setCaptureVideo(true)
    navigator.mediaDevices.getUserMedia({ video: true })
      .then((currentStream) => {
        webCamRef.current.srcObject = currentStream;
      }).catch((err) => {
        console.error(err)
      });
  }

  const loadModels = () => {
    Promise.all([
      faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
      faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
      faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
      faceapi.nets.faceExpressionNet.loadFromUri('/models'),
    ]).then(() => {
      faceDetection();
    })
  };

  const faceDetection = async () => {
    // console.log(captureVideo);
    // if (captureVideo) {
    console.log('video');
    setInterval(async () => {
      const options = new faceapi.TinyFaceDetectorOptions({
        inputSize: 512,
        scoreThreshold: 0.5
      });

      const result = await faceapi
        .detectSingleFace(webCamRef.current, options)
        .withFaceExpressions();

      if (result) {
        const Expressions = result.expressions.asSortedArray();
        console.log(Expressions[0]);
        const expressions = Expressions.reduce(
          (acc, { expression, probability }) => {
            acc.push([expression]);
            return acc;
          },
          []
        );
        let a = expressions.shift();
        setExpression(expressionMap[a])
        setEmotionBG(emotionMap[a])
      }
    }, 1000);
    // }
    // else {
    //   console.log('non video')
    // }
  }

  const closeWebcam = () => {
    webCamRef.current.pause();
    webCamRef.current.srcObject.getTracks()[0].stop();
    setCaptureVideo(false);
  }


  return (
    <div className='site-content'>
      <h1>Extrait : Alien, le huitième passager</h1>
      <div className='text-center'>
        <div className='video-wrapper'>
          <div className='emoticon-wrapper' style={{ backgroundColor: emotionBG }}>
            <p>{expression}</p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', padding: '10px' }}>
            <video
              autoPlay={false}
              ref={videoRef}
              width="100%"
              height="100%"
              controls
              className='video'
            >
              <source src="assets/video/alien.mp4" type="video/mp4" />
            </video>
            <video crossOrigin='anonymous' ref={webCamRef} autoPlay className='webcam'>
            </video>

            {/* <canvas ref={canvasRef} width="640" height="480" /> */}
          </div>
        </div>
      </div>
      <Link to="/data" className='btn'>
        Commencer l'expérience
      </Link>
    </div>
  )
}

export default SessionInProgress