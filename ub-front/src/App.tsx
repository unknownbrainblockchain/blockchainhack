import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import { GlobalStyle, MainWrapper } from "./styles/styled";
import Header from "./components/Header/Header";
import Create from "./pages/create/Create";

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
          <Route path="/create">
            <Route index element={<Create />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MainWrapper>
  );
}

export default App;
