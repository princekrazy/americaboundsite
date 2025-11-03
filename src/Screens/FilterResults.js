import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "../AppContext";
import SortDialog from "./Sorting"; // you can later convert this too
import universities from "../Universities.json";
import { useNavigate } from "react-router-dom";
export default function FilterResults() {
  const navigate = useNavigate();
  const {
    logos,
    greycol,
    backcol,
    texcol,
    currentSort,
    selectedStates,
    csscheckbox,
    rollingcheckbox,
    tutionmin,
    tuitionmax,
    maximumaccept,
    minimumaccept,
    setuninumber,
  } = useContext(AppContext);

  const [sortmessage, setsortmessage] = useState("No Sorting has been applied");
  const [shownUniversities, setshownUniversities] = useState(universities);

  useEffect(() => {
    let filtered = universities;

    // Filtering logic
    if (selectedStates && selectedStates.length > 0) {
      filtered = filtered.filter((item) => selectedStates.includes(item.state));
    }
    if (minimumaccept !== null) {
      filtered = filtered.filter((item) => item.acceptance_rate >= minimumaccept);
    }
    if (maximumaccept !== null) {
      filtered = filtered.filter((item) => item.acceptance_rate <= maximumaccept);
    }
    if (tutionmin !== null) {
      filtered = filtered.filter((item) => item.international_price >= tutionmin);
    }
    if (tuitionmax !== null) {
      filtered = filtered.filter((item) => item.international_price <= tuitionmax);
    }
    if (csscheckbox) {
      filtered = filtered.filter((item) => item.CSS === "yes");
    }
    if (rollingcheckbox) {
      filtered = filtered.filter((item) => item.rolling_admission === "yes");
    }

    // Sorting logic
    let sorted = [...filtered];
    switch (currentSort) {
      case "descending":
        setsortmessage("Arranged in descending order of name");
        sorted.sort((a, b) => b.university_name.localeCompare(a.university_name));
        break;
      case "ascending":
        setsortmessage("Arranged in ascending order of name");
        sorted.sort((a, b) => a.university_name.localeCompare(b.university_name));
        break;
      case "lowest_price":
        setsortmessage("Arranged in ascending order of price");
        sorted.sort((a, b) => a.international_price - b.international_price);
        break;
      case "highest_price":
        setsortmessage("Arranged in descending order of price");
        sorted.sort((a, b) => b.international_price - a.international_price);
        break;
      case "lowest_acceptance":
        setsortmessage("Arranged in ascending order of acceptance rate");
        sorted.sort((a, b) => a.acceptance_rate - b.acceptance_rate);
        break;
      case "highest_acceptance":
        setsortmessage("Arranged in descending order of acceptance rate");
        sorted.sort((a, b) => b.acceptance_rate - a.acceptance_rate);
        break;
      default:
        setsortmessage("No Sorting has been applied");
    }

    setshownUniversities(sorted);
  }, [
    currentSort,
    selectedStates,
    minimumaccept,
    maximumaccept,
    tutionmin,
    tuitionmax,
    csscheckbox,
    rollingcheckbox,
  ]);

  const openuni = (idnumber) => {
    setuninumber(idnumber);
    navigate("/university"); // mimic React Native navigation
  };

  // Inline styles
  const styles = {
    container: {
      backgroundColor: greycol,
      minHeight: "100vh",
      padding: 20,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    item: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 12,
      backgroundColor: backcol,
      padding: 8,
      borderRadius: 10,
      width: "100%",
      maxWidth: 700,
      cursor: "pointer",
      transition: "transform 0.2s",
    },
    itemHover: {
      transform: "scale(1.02)",
    },
    logo: {
      width: 60,
      height: 60,
      objectFit: "contain",
      marginRight: 12,
    },
    text: {
      fontSize: 18,
      color: texcol,
      fontWeight: 500,
    },
    sortMessage: {
      color: texcol,
      marginBottom: 15,
      fontStyle: "italic",
    },
    emptyText: {
      color: texcol,
      marginTop: 20,
    },
  };

  return (
    <div style={styles.container}>
      <SortDialog sortmessage={sortmessage} />
      <p style={styles.sortMessage}>{sortmessage}</p>

      {shownUniversities.length > 0 ? (
        shownUniversities.map((item) => (
          <div
            key={item.id}
            style={styles.item}
            onClick={() => openuni(item.id)}
          >
            <img
              src={logos[item.logo] || "/Logos/none.jpeg"}
              alt={item.university_name}
              style={styles.logo}
            />
            <span style={styles.text}>{item.university_name}</span>
          </div>
        ))
      ) : (
        <p style={styles.emptyText}>No results found. Change Filters.</p>
      )}
    </div>
  );
}
