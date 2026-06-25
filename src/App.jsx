import "leaflet/dist/leaflet.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { grey, blueGrey, deepOrange } from "@mui/material/colors";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import EstimateDialog from "./components/EstimateDialog";
import DriverApplicationSection from "./components/DriverApplicationSection";
import { Routes, Route } from "react-router-dom";
import { CustomProvider } from "./contexts/CustomContext";
import ServiceDetail from "./components/ServiceDetail";
import DriveForUsDialog from "./components/DriveForUsDialog";

const App = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: blueGrey[900],
      },

      secondary: {
        main: deepOrange[500],
      },

      text: {
        primary: grey[100],
        secondary: grey[400],
      },
    },
  });
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CustomProvider>
          <EstimateDialog />
          <DriveForUsDialog />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route
              path="/drive-for-us"
              element={<DriverApplicationSection />}
            />
            <Route
              path="/amazon-linehaul"
              element={<ServiceDetail id="amazon-linehaul" />}
            />
            <Route
              path="/box-trucks"
              element={<ServiceDetail id="box-trucks" />}
            />
            <Route
              path="/drayage-intermodal"
              element={<ServiceDetail id="drayage-intermodal" />}
            />
            <Route
              path="/reefer-solutions"
              element={<ServiceDetail id="reefer-solutions" />}
            />
            <Route
              path="/otr-dry-van"
              element={<ServiceDetail id="otr-dry-van" />}
            />
          </Routes>
          <Footer />
        </CustomProvider>
      </ThemeProvider>
    </div>
  );
};

export default App;
