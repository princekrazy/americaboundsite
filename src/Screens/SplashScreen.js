import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom"; // React Router
import splashIcon from "../assets/splash-icon.png"; // Adjust path as needed

const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkAndSetValue = () => {
      try {
        const existingValue = localStorage.getItem("agreedToPrivacy");
        if (!existingValue) {
          navigate("/privacy");
        } else {
          navigate("/home");
        }
      } catch (error) {
        console.error("Error checking localStorage:", error);
      }
    };

    // Simulate a short splash delay (optional)
    const timeout = setTimeout(() => {
      checkAndSetValue();
    }, 1000);

    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <div style={styles.container}>
      <img src={splashIcon} alt="Splash" style={styles.image} />
    </div>
  );
};

export default Splash;

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#fbf3e5",
  },
  image: {
    width: 200, // Adjust as needed
    height: 600,
    objectFit: "contain",
  },
};
