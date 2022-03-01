import React from "react";
import { Route, Routes } from "react-router-dom";
import BooksPage from "./containers/BooksPage/BooksPage";
import BorrowBookPage from "./containers/BorrowBookPage/BorrowBookPage";
import Header from "./containers/Header/Header";
import Homepage from "./containers/Homepage/Homepage";
import SingleBook from "./containers/SingleBook/SingleBook";
import SingleUser from "./containers/SingleUser/SingleUser";
import UsersPage from "./containers/UsersPage/UsersPage";
import { BooksProvider } from "./data/BooksContext";
import { UsersProvider } from "./data/UsersContext";
import { BorrowBooksProvider } from "./data/BorrowBooksContext";

export default function App() {
  return (
    <div className="d-flex flex-wrap">
      <BorrowBooksProvider>
        <BooksProvider>
          <UsersProvider>
            <Header />
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/knjige" element={<BooksPage />} />
              <Route path="/knjiga/:id" element={<SingleBook />} />
              <Route path="/korisnici" element={<UsersPage />} />
              <Route path="/korisnik/:id" element={<SingleUser />} />
              <Route path="/posudene-knjige" element={<BorrowBookPage />} />
              <Route path="/*" element={<BooksPage />} />
            </Routes>
          </UsersProvider>
        </BooksProvider>
      </BorrowBooksProvider>
    </div>
  );
}
