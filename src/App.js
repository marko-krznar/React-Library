import React from "react";
import { Route, Routes } from "react-router-dom";
import BooksPage from "./containers/BooksPage/BooksPage";
import Header from "./containers/Header/Header";
import Homepage from "./containers/Homepage/Homepage";
import { BooksProvider } from "./data/BooksContext";

export default function App() {
  return (
    <div>
      <BooksProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/knjige" element={<BooksPage />} />
          <Route path="/*" element={<BooksPage />} />
        </Routes>
      </BooksProvider>
    </div>
  );
}
