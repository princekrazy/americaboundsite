import React, { useContext } from "react";
import Fuse from "fuse.js";
import { AppContext } from "../AppContext";
import universities from "../Universities.json";
import { useNavigate } from "react-router-dom";
const Results = () => {
  const navigate = useNavigate();
  const {
    logos,
    greycol,
    texcol,
    backcol,
    uniname,
    setuniname,
    uninumber,
    setuninumber,
  } = useContext(AppContext);

  const options = {
    keys: ["university_name"],
    threshold: 0.3,
  };

  const fuse = new Fuse(universities, options);
  const uniresults = fuse.search(uniname);
  const dataToShow = uniname ? uniresults.map((r) => r.item) : [];

  const openUni = (idnumber) => {
    setuninumber(idnumber);
    if (navigate) navigate("/university");
    else alert(`Opening University ID: ${idnumber}`);
  };

  return (
    <div style={{ ...styles.container, backgroundColor: greycol }}>
      {dataToShow.length > 0 ? (
        dataToShow.map((item) => (
          <div
            key={item.id}
            style={{ ...styles.item, backgroundColor: backcol }}
            onClick={() => openUni(item.id)}
          >
            <img
              src={logos[item.logo] || "/Logos/none.jpeg"}
              alt={item.university_name}
              style={styles.logo}
            />
            <span style={{ ...styles.text, color: texcol }}>
              {item.university_name}
            </span>
          </div>
        ))
      ) : (
        <p style={{ color: texcol }}>No results found.</p>
      )}
    </div>
  );
};

export default Results;

const styles = {
  container: {
    padding: 20,
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  item: {
    display: "flex",
    alignItems: "center",
    width: "90%",
    maxWidth: "700px",
    marginBottom: 12,
    padding: 10,
    borderRadius: 10,
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    cursor: "pointer",
    transition: "transform 0.2s ease",
  },
  logo: {
    width: 60,
    height: 60,
    objectFit: "contain",
    marginRight: 12,
  },
  text: {
    fontSize: 22,
    fontWeight: 500,
  },
};
