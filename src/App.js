import React from "react";
import { Route, Routes } from "react-router-dom";
import BooksPage from "./containers/BooksPage";
import Header from "./containers/Header/Header";
import { BooksProvider } from "./data/BooksContext";

export default function App() {
  return (
    <div>
      <BooksProvider>
        <Header />
        <Routes>
          <Route path="/" element={<BooksPage />} />
          <Route path="/knjige" element={<BooksPage />} />
          <Route path="/*" element={<BooksPage />} />
        </Routes>
      </BooksProvider>
    </div>
  );
}
