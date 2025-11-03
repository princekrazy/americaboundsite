import React, { useState, useContext } from "react";
import { AppContext } from "../AppContext";

const SettingsScreen = () => {
  const { saveColor, backcol, texcol } = useContext(AppContext);
  const [modalVisible, setModalVisible] = useState(false);

  const handleEmailPress = () => {
    window.location.href = "mailto:primkuzisystems@gmail.com?subject=AmericaBound";
  };

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  return (
    <div style={{ ...styles.container, backgroundColor: "#3498db" }}>
      {/* ⚙️ Settings Button */}
      <button onClick={openModal} style={styles.gearButton}>
        ⚙️
      </button>

      {/* Modal Overlay */}
      {modalVisible && (
        <div style={styles.modalOverlay}>
          <div style={{ ...styles.modalContainer, backgroundColor: backcol }}>
            <h2 style={{ ...styles.modalTitle, color: texcol }}>Select Theme</h2>

            {/* Theme Buttons */}
            <button
              style={styles.optionButton}
              onClick={() => saveColor("#FFFFFF", "#000000", "#F8F4F4")}
            >
              🌞 Light Mode
            </button>

            <button
              style={styles.optionButton}
              onClick={() => saveColor("#000000", "#FFFFFF", "#222222")}
            >
              🌙 Dark Mode
            </button>

            {/* Email Contact */}
            <a onClick={handleEmailPress} style={styles.emailText}>
              Contact Support
            </a>

            {/* Close Button */}
            <button style={styles.closeButton} onClick={closeModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SettingsScreen;

const styles = {
  container: {
    height: 40,
    width: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    cursor: "pointer",
  },
  gearButton: {
    fontSize: 28,
    background: "none",
    border: "none",
    cursor: "pointer",
  },
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    height: "100vh",
    width: "100vw",
    backgroundColor: "rgba(0,0,0,0.4)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  modalContainer: {
    width: 300,
    padding: 24,
    borderRadius: 12,
    border: "3px solid #3498db",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
  },
  modalTitle: {
    fontSize: 18,
    marginBottom: 20,
    fontWeight: "bold",
  },
  optionButton: {
    padding: 10,
    margin: "6px 0",
    borderRadius: 6,
    backgroundColor: "#eee",
    width: "100%",
    cursor: "pointer",
    fontSize: 16,
    border: "none",
    transition: "0.2s",
  },
  emailText: {
    color: "#3498db",
    textDecoration: "underline",
    marginTop: 20,
    marginBottom: 20,
    cursor: "pointer",
  },
  closeButton: {
    backgroundColor: "#3498db",
    color: "white",
    padding: "8px 16px",
    borderRadius: 6,
    border: "none",
    cursor: "pointer",
  },
};
