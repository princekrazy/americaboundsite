import React, { useState, useContext } from "react";
import { AppContext } from "../AppContext";

const SortDialog = ({ sortmessage }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const { currentSort, setCurrentSort, texcol, greycol, backcol } = useContext(AppContext);

  const sortingOptions = [
    { label: "Highest Acceptance Rate", value: "highest_acceptance" },
    { label: "Lowest Acceptance Rate", value: "lowest_acceptance" },
    { label: "Highest Price", value: "highest_price" },
    { label: "Lowest Price", value: "lowest_price" },
    { label: "Ascending", value: "ascending" },
    { label: "Descending", value: "descending" },
    { label: "Clear Sorting Arrangement", value: "None" },
  ];

  const handleSortSelection = (value) => {
    setCurrentSort(value);
    setModalVisible(false);
  };

  return (
    <div style={{ padding: 20 }}>
      {/* Sort Button */}
      <button
        style={styles.sortButton}
        onClick={() => setModalVisible(true)}
      >
        Sort
      </button>

      {/* Modal Overlay */}
      {modalVisible && (
        <div style={styles.modalOverlay}>
          <div style={{ ...styles.modalContent, backgroundColor: backcol }}>
            {sortingOptions.map((option) => (
              <button
                key={option.value}
                style={{ ...styles.optionButton, color: texcol }}
                onClick={() => handleSortSelection(option.value)}
              >
                {option.label}
              </button>
            ))}

            <button
              style={{ ...styles.optionButton, backgroundColor: greycol, marginTop: 10 }}
              onClick={() => setModalVisible(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <p style={{ marginTop: 20, fontSize: 16, color: texcol }}>
        Current Arrangement: {sortmessage}
      </p>
    </div>
  );
};

export default SortDialog;

const styles = {
  sortButton: {
    backgroundColor: "#007bff",
    padding: "12px 20px",
    borderRadius: 8,
    color: "#fff",
    fontWeight: "bold",
    border: "none",
    cursor: "pointer",
  },
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    height: "100vh",
    width: "100vw",
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  modalContent: {
    width: "80%",
    borderRadius: 10,
    padding: 20,
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
  },
  optionButton: {
    padding: "12px",
    border: "none",
    borderRadius: 8,
    marginBottom: 6,
    cursor: "pointer",
    backgroundColor: "transparent",
    textAlign: "left",
  },
};
