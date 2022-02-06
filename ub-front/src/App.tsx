import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import { GlobalStyle, MainWrapper } from "./styles/styled";
import Header from "./components/Header/Header";

function App() {
  return (
    <MainWrapper>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MainWrapper>
  );
}

export default App;
