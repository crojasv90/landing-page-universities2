import React from 'react';
import '../../style/app.css';
import Header from "./header";
import Footer from "./footer";
import {Container} from "@mui/material";
import Box from '@mui/material/Box';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import HomePage from "../pages/home";
import UniversitiesPage from "../pages/university";
import PageNotFound from "../error/PageNotFound";

function App() {
  return (
      <div className="App">
        <Header/>
        <Container id="content">
            <Box m={2} pt={3}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<HomePage/>}/>
                        <Route path="university/:country" element={<UniversitiesPage/>}/>
                        <Route path='*' element={<PageNotFound/>} />
                    </Routes>
                </BrowserRouter>
            </Box>
        </Container>
        <Footer/>
      </div>
  );
}

export default App;
