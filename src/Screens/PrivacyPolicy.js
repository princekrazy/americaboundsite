import React from "react";
import { useNavigate } from "react-router-dom";

const Privacy = () => {
  const navigate = useNavigate();

  const handleAgree = () => {
    try {
      localStorage.setItem("agreedToPrivacy", "true");
      navigate("/home"); // Navigate to Home page
    } catch (error) {
      console.error("Error saving agreement:", error);
    }
  };

  const handleDisagree = () => {
    alert("You must agree to the privacy policy to use this website.");
  };

  return (
    <div style={styles.container}>
      <div style={styles.scrollContainer}>
        <h1 style={styles.title}>PRIVACY POLICY AND TERMS & CONDITIONS</h1>

        <p style={styles.text}>
          <strong>Privacy Policy for AmericaBound</strong>
          <br /><br />
          Last updated: July 25, 2025
          <br /><br />
          This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service...
          {/* Keep the rest of your privacy text here */}
        </p>

        <div style={styles.buttonRow}>
          <button style={styles.agreeButton} onClick={handleAgree}>
            Agree
          </button>
          <button style={styles.disagreeButton} onClick={handleDisagree}>
            Disagree
          </button>
        </div>
      </div>
    </div>
  );
};

export default Privacy;

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    padding: "20px",
    backgroundColor: "#f8f9fa",
    height: "100vh",
    overflow: "hidden",
  },
  scrollContainer: {
    overflowY: "scroll",
    paddingRight: "10px",
    height: "90vh",
    backgroundColor: "#fff",
    borderRadius: "10px",
    padding: "20px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
    textAlign: "center",
  },
  text: {
    fontSize: "16px",
    lineHeight: "1.6",
    whiteSpace: "pre-wrap",
    textAlign: "justify",
  },
  buttonRow: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "20px",
  },
  agreeButton: {
    flex: 1,
    margin: "0 5px",
    padding: "12px 0",
    borderRadius: "5px",
    backgroundColor: "#4CAF50",
    color: "white",
    fontWeight: "600",
    border: "none",
    cursor: "pointer",
  },
  disagreeButton: {
    flex: 1,
    margin: "0 5px",
    padding: "12px 0",
    borderRadius: "5px",
    backgroundColor: "#e74c3c",
    color: "white",
    fontWeight: "600",
    border: "none",
    cursor: "pointer",
  },
};
