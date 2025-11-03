import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import sampleVideo from "../assets/sample.mp4"; // Adjust path

const Tutorial = () => {
  const videoRef = useRef(null);
  const navigate = useNavigate();

  const handlePlay = () => {
    videoRef.current?.play();
  };

  const handlePause = () => {
    videoRef.current?.pause();
  };

  return (
    <div style={styles.container}>
      <video
        ref={videoRef}
        src={sampleVideo}
        style={styles.video}
        controls={false}
        loop
      />
      <div style={styles.controls}>
        <button onClick={handlePause}>Pause</button>
        <button onClick={handlePlay} style={{ marginLeft: 10 }}>
          Play
        </button>
      </div>
      <button
        onClick={() => navigate("/home")}
        style={{ marginTop: 20, padding: "10px 20px" }}
      >
        Close Tutorial
      </button>
    </div>
  );
};

export default Tutorial;

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px 50px",
    height: "100vh",
    boxSizing: "border-box",
  },
  video: {
    width: "100%",
    maxWidth: "500px",
    aspectRatio: "9 / 16",
    marginBottom: "20px",
  },
  controls: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
};
