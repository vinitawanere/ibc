import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import AboutTrainer from "./pages/About/AbouTrainer";
import Aboutus from "./pages/About/Aboutus";
import Home from "./pages/Home/Home";
import YogaTraining from "./pages/Services/yoga/Yoga";
import theme from "./Theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <CssBaseline /> {/* Ensures the theme's background is applied */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/services/yoga-training" element={<YogaTraining />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/abouttrainer" element={<AboutTrainer />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
