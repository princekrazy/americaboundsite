import React, { useState, useContext } from "react";
import { AppContext } from "../AppContext";
import { useNavigate } from "react-router-dom";
export default function FilterDialog() {
  const navigate = useNavigate();
  const {
    backcol, greycol, texcol,
    modalVisible, setModalVisible,
    open, setOpen,
    selectedStates, setSelectedStates,
    pickedstates, setpickedstates,
    csscheckbox, setcsscheckbox,
    rollingcheckbox, setrollingcheckbox,
    tutionmin, settutionmin,
    tuitionmax, settuitionmax,
    maximumaccept, setmaximumaccept,
    minimumaccept, setminimumaccept
  } = useContext(AppContext);

  const clearFilters = () => {
    setSelectedStates([]);
    setcsscheckbox(false);
    setrollingcheckbox(false);
    settutionmin(0);
    settuitionmax(150000);
    setminimumaccept(0);
    setmaximumaccept(100);
  };

  const handleApply = () => {
    console.log("Filters applied:", {
      selectedStates,
      csscheckbox,
      rollingcheckbox,
      tuitionmax,
      tutionmin,
      maximumaccept,
      minimumaccept
    });
    setModalVisible(false);
    navigate("/filter-results")
  };

  return (
    <div style={styles.container}>
      <button onClick={() => setModalVisible(true)} style={styles.filterButton}>
        Open Filters
      </button>

      {modalVisible && (
        <div style={styles.modalBackground}>
          <div style={{ ...styles.modalContainer, backgroundColor: backcol }}>
            <h2 style={{ ...styles.title, color: texcol }}>Filter Options</h2>

            {/* States Dropdown */}
<label style={{ ...styles.label, color: texcol }}>Select States:</label>
<div style={{ ...styles.select, display: 'flex', flexDirection: 'column', gap: '4px', padding: '8px' }}>
  {pickedstates.map((s, i) => (
    <label key={i} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
      <input
        type="checkbox"
        value={s.value}
        checked={selectedStates.includes(s.value)}
        onChange={(e) => {
          if (e.target.checked) {
            setSelectedStates([...selectedStates, s.value]);
          } else {
            setSelectedStates(selectedStates.filter(val => val !== s.value));
          }
        }}
      />
      {s.label}
    </label>
  ))}
</div>


            {/* Checkboxes */}
            <label style={{ ...styles.label, color: texcol }}>Checkboxes:</label>
            <div style={styles.checkboxContainer}>
              <input
                type="checkbox"
                checked={csscheckbox}
                onChange={() => setcsscheckbox(!csscheckbox)}
              />
              <span style={{ color: texcol, marginLeft: 8 }}>CSS</span>
            </div>

            <div style={styles.checkboxContainer}>
              <input
                type="checkbox"
                checked={rollingcheckbox}
                onChange={() => setrollingcheckbox(!rollingcheckbox)}
              />
              <span style={{ color: texcol, marginLeft: 8 }}>Rolling Admissions</span>
            </div>

            {/* Tuition Sliders */}
            <label style={{ ...styles.label, color: texcol }}>
              Minimum Annual Tuition: ${tutionmin.toFixed(0)}
            </label>
            <input
              type="range"
              min="0"
              max="120000"
              step="1000"
              value={tutionmin}
              onChange={(e) => settutionmin(Number(e.target.value))}
              style={styles.slider}
            />

            <label style={{ ...styles.label, color: texcol }}>
              Maximum Annual Tuition: ${tuitionmax.toFixed(0)}
            </label>
            <input
              type="range"
              min={tutionmin}
              max="120000"
              step="1000"
              value={tuitionmax}
              onChange={(e) => settuitionmax(Number(e.target.value))}
              style={styles.slider}
            />

            {/* Acceptance sliders */}
            <label style={{ ...styles.label, color: texcol }}>
              Minimum Acceptance Rate: {minimumaccept.toFixed(0)}%
            </label>
            <input
              type="range"
              min="0"
              max="100"
              step="1"
              value={minimumaccept}
              onChange={(e) => setminimumaccept(Number(e.target.value))}
              style={styles.slider}
            />

            <label style={{ ...styles.label, color: texcol }}>
              Maximum Acceptance Rate: {maximumaccept.toFixed(0)}%
            </label>
            <input
              type="range"
              min={minimumaccept}
              max="100"
              step="1"
              value={maximumaccept}
              onChange={(e) => setmaximumaccept(Number(e.target.value))}
              style={styles.slider}
            />

            {/* Buttons */}
            <div style={styles.buttonRow}>
              <button
                onClick={handleApply}
                style={{ ...styles.button, backgroundColor: "#4CAF50" }}
              >
                Apply
              </button>
              <button
                onClick={clearFilters}
                style={{ ...styles.button, backgroundColor: "#f39c12" }}
              >
                Clear
              </button>
              <button
                onClick={() => setModalVisible(false)}
                style={{ ...styles.button, backgroundColor: "#e74c3c" }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    padding: 20,
    textAlign: "center",
  },
  filterButton: {
    padding: "10px 20px",
    fontSize: 16,
    borderRadius: 5,
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
  modalBackground: {
    position: "fixed",
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 999,
  },
  modalContainer: {
    borderRadius: 8,
    padding: 20,
    width: "90%",
    maxWidth: 500,
    maxHeight: "80vh",
    overflowY: "auto",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
  },
  label: {
    display: "block",
    fontWeight: "600",
    marginTop: 10,
    marginBottom: 6,
  },
  select: {
    width: "100%",
    padding: 8,
    borderRadius: 5,
    border: "1px solid #ccc",
    marginBottom: 15,
  },
  checkboxContainer: {
    display: "flex",
    alignItems: "center",
    marginBottom: 10,
  },
  slider: {
    width: "100%",
    marginBottom: 15,
  },
  buttonRow: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: 15,
  },
  button: {
    flex: 1,
    margin: "0 5px",
    padding: "10px 0",
    color: "white",
    border: "none",
    borderRadius: 5,
    cursor: "pointer",
    fontWeight: 600,
  },
};
