import React, { useContext } from 'react';
import FilterDialog from './FilterScreen';
import SettingsScreen from './Settings';
import { AppContext } from '../AppContext';
import universities from '../Universities.json';
import { useNavigate } from "react-router-dom";
const HomeScreen = () => {
  const navigate = useNavigate();
  const {
    logos,
    backcol,
    greycol,
    texcol,
    uniname,
    setuniname,
    saveUniList,
    UniList,
    setUniList,
    setuninumber
  } = useContext(AppContext);

  const removeUni = (uniToRemove) => {
    const updated = UniList.filter((uni) => uni !== uniToRemove);
    setUniList(updated);
    saveUniList(updated);
  };

  const handleSearch = () => {
    console.log('Searching for:', uniname);
    navigate('/results');
  };

  const openuni = (idnumber) => {
    setuninumber(idnumber);
    navigate(`/university`);
  };

  const filteredData = universities.filter((item) => UniList.includes(item.id));

  // ---- STYLES ----
const styles = {
  home: {
    minHeight: '100vh',
    padding: 20,
    backgroundColor: greycol,
    boxSizing: 'border-box',
  },
  searchBar: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    flexWrap: 'wrap', // ✅ allows wrapping on mobile
  },
  input: {
    flex: 1,
    minWidth: 200, // ✅ helps mobile layout
    height: 40,
    border: '1px solid #2894f4',
    borderRadius: 5,
    padding: '0 10px',
    backgroundColor: backcol,
    color: texcol,
  },
  button: {
    backgroundColor: '#2894f4',
    color: 'white',
    border: 'none',
    padding: '10px 16px',
    borderRadius: 5,
    cursor: 'pointer',
    flexShrink: 0,
  },
  shortlist: {
    marginTop: 30,
    textAlign: 'center',
  },
  title: {
    fontSize: 28, // ✅ smaller for mobile
    fontWeight: 'bold',
    marginBottom: 10,
    color: texcol,
  },
  uniList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  uniItem: {
    borderRadius: 10,
    margin: '10px auto',
    width: '100%', // ✅ makes it responsive
    maxWidth: 400,
    padding: 15,
    backgroundColor: backcol,
    boxSizing: 'border-box',
  },
  uniHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  uniLogo: {
    width: 60,
    height: 60,
    objectFit: 'contain',
    cursor: 'pointer',
  },
  trashBtn: {
    background: 'none',
    border: 'none',
    fontSize: 24,
    cursor: 'pointer',
  },
  uniName: {
    marginTop: 10,
    fontSize: 18,
    cursor: 'pointer',
    color: texcol,
    wordBreak: 'break-word', // ✅ avoid text overflow
  },
  emptyText: {
    color: texcol,
  },
};


  return (
    <div style={styles.home}>
      {/* Search Bar */}
      <div style={styles.searchBar}>
        <input
          type="text"
          placeholder="ENTER UNIVERSITY NAME"
          value={uniname}
          onChange={(e) => setuniname(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                // Do something here
                handleSearch()

              
              
             }
            }}
          style={styles.input}
        />
        <button style={styles.button} onClick={handleSearch}>
          Go
        </button>
        <FilterDialog />
        <SettingsScreen />
      </div>

      {/* Shortlist Section */}
      <div style={styles.shortlist}>
        <h2 style={styles.title}>MY SHORTLIST</h2>

        {filteredData.length === 0 ? (
          <p style={styles.emptyText}>No Universities have been added to your shortlist.</p>
        ) : (
          <ul style={styles.uniList}>
            {filteredData.map((item) => (
              <li key={item.id} style={styles.uniItem} onClick={() => openuni(item.id)} >
                <div style={styles.uniHeader}>
                  <img
                    src={logos[item.logo] || '/Logos/none.jpeg'}
                    alt={item.university_name}
                    style={styles.uniLogo}
                    onClick={() => openuni(item.id)}
                  />
                  <button style={styles.trashBtn} onClick={(e) => {
            e.stopPropagation(); // 👈 prevents triggering the outer click
            removeUni(item.id);
          }}>
                    🗑️
                  </button>
                </div>
                <div style={styles.uniName} onClick={() => openuni(item.id)}>
                  {item.university_name}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default HomeScreen;
