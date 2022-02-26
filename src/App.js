import React from "react";
import { Route, Routes } from "react-router-dom";
import BooksPage from "./containers/BooksPage/BooksPage";
import Header from "./containers/Header/Header";
import Homepage from "./containers/Homepage/Homepage";
import SingleBook from "./containers/SingleBook/SingleBook";
import { BooksProvider } from "./data/BooksContext";

export default function App() {
  return (
    <div className="d-flex flex-wrap">
      <BooksProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/knjige" element={<BooksPage />} />
          <Route path="/knjiga/:id" element={<SingleBook />} />
          <Route path="/*" element={<BooksPage />} />
        </Routes>
      </BooksProvider>
    </div>
  );
}
