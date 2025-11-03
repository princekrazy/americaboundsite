import React, { useContext } from "react";
import { AppContext } from "../AppContext";
import universities from "../Universities.json";

const UniversityScreen = () => {
  const {
    backcol,
    texcol,
    logos,
    uninumber,
    UniList,
    setUniList,
    saveUniList,
  } = useContext(AppContext);

  const getUniById = (id) => universities.find((uni) => uni.id === id);

  const university = getUniById(uninumber);
  const exists = UniList.includes(uninumber);

  return (
    <div style={{ ...styles.container, backgroundColor: backcol }}>
      <div style={styles.headerRow}>
        <img
          src={logos[university.logo] || "/Logos/none.jpeg"}
          alt={university.university_name}
          style={styles.logo}
        />
        <h1 style={{ ...styles.title, color: texcol }}>
          {university.university_name}
        </h1>
      </div>

      <p style={{ ...styles.infoText, color: texcol }}>
        <strong>State:</strong> {university.state}
      </p>
      <p style={{ ...styles.infoText, color: texcol }}>
        <strong>International Price:</strong> ${university.international_price}
      </p>
      <p style={{ ...styles.infoText, color: texcol }}>
        <strong>CSS:</strong> {university.CSS}
      </p>
      <p style={{ ...styles.infoText, color: texcol }}>
        <strong>Acceptance Rate:</strong> {university.acceptance_rate}%
      </p>
      <p style={{ ...styles.infoText, color: texcol }}>
        <strong>Rolling Admission:</strong> {university.rolling_admission}
      </p>

      {!exists && (
        <button
          style={styles.button}
          onClick={() => {
            const newList = [...UniList, university.id];
            setUniList(newList);
            saveUniList(newList);
            console.log(newList);
          }}
        >
          Add To ShortList
        </button>
      )}
    </div>
  );
};

export default UniversityScreen;

const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  logo: {
    width: "80px",
    height: "80px",
    objectFit: "contain",
    marginRight: "10px",
  },
  headerRow: {
    display: "flex",
    alignItems: "center",
    marginBottom: "20px",
    flexWrap: "wrap",
  },
  title: {
    fontSize: "30px",
    fontWeight: "bold",
    flexShrink: 1,
  },
  infoText: {
    fontSize: "20px",
    marginBottom: "8px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#3498db",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};
