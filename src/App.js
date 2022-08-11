import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import style from "./main.css"
import { theme } from './theme/Theme.js'
import Navbar from "./components/navbar/navbar.js";
import { Home } from "./components/home/home.js";
import { Footer } from "./components/footer/footer.js";
import { Faq } from "./components/faq/faq";
import { Pink } from "./components/pink/pink";
import Section4 from "./components/section4/section4";
import Section5 from "./components/section5/section5";


export function App() {
    return (
      <BrowserRouter>
      <ThemeProvider theme={theme}>
      <Navbar/>
      <Routes>
        {/* <Route  exact path="/" element={<Home/>} /> */}
        {/* <Route  exact path="/about" element={} /> */}
      </Routes>
      <Pink/>
      <Section4/>
      <Section5/>
      <Faq/>
      <Footer/>
      </ThemeProvider>
      </BrowserRouter>
    );
  }

