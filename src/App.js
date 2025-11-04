import React, { useContext } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom"; // <-- changed BrowserRouter to HashRouter

// Screens
import HomeScreen from "./Screens/HomeScreen";
import Results from "./Screens/Results";
import UniversityScreen from "./Screens/University";
import FilterDialog from "./Screens/FilterScreen";
import FilterResults from "./Screens/FilterResults";
import SortDialog from "./Screens/Sorting";
import Splash from "./Screens/SplashScreen";
import Privacy from "./Screens/PrivacyPolicy";
import SettingsScreen from "./Screens/Settings";
import Tutorial from "./Screens/Tutorial";

// Context
import { AppProvider, AppContext } from "./AppContext";

function AppRoutes() {
  const { backcol, greycol, texcol } = useContext(AppContext);

  const pageStyle = {
    backgroundColor: greycol,
    color: texcol,
    minHeight: "100vh",
    padding: "20px",
  };

  return (
    <div style={pageStyle}>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/tutorial" element={<Tutorial />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/results" element={<Results />} />
        <Route path="/university" element={<UniversityScreen />} />
        <Route path="/filters" element={<FilterDialog />} />
        <Route path="/filter-results" element={<FilterResults />} />
        <Route path="/sorting" element={<SortDialog />} />
        <Route path="/settings" element={<SettingsScreen />} />
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <Router>
        <AppRoutes />
      </Router>
    </AppProvider>
  );
}
