import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import style from "./main.css"
import { theme } from './theme/Theme.js'
import Navbar from "./components/navbar/navbar.js";
import { Home } from "./components/home/home.js";
import { Login } from "./components/login/Login";
import { Profile } from "./components/profile/profile.js";
import { Account } from "./components/account/account.js";
import { Security } from "./components/security/security.js";
import { ChakraProvider } from '@chakra-ui/react'
export function App() {
    return (
      <BrowserRouter>
          <ChakraProvider>
      {/* <ThemeProvider theme={theme}> */}
      <Navbar/>
      <Routes>
        <Route  exact path="/" element={<Home/>} />
        <Route  exact path="/login" element={<Login/>} />
        <Route  exact path="/profile" element={<Profile/>} />
        <Route  exact path="/account" element={<Account/>} />
        <Route  exact path="/security" element={<Security/>} />
        {/* <Route  exact path="/about" element={} /> */}
      </Routes>
      {/* </ThemeProvider> */}
      </ChakraProvider>
      </BrowserRouter>

    );
  }

