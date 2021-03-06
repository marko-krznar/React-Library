import React from "react";

import { Route, Routes } from "react-router-dom";

import BooksPage from "./pages/BooksPage/BooksPage";
import BorrowBookPage from "./pages/BorrowBookPage/BorrowBookPage";
import Header from "./components/Header/Header";
import Homepage from "./pages/Homepage/Homepage";
import SingleBook from "./pages/SingleBook/SingleBook";
import SingleUser from "./pages/SingleUser/SingleUser";
import UsersPage from "./pages/UsersPage/UsersPage";
import { BooksProvider } from "./contexts/BooksContext";
import { UsersProvider } from "./contexts/UsersContext";
import { BorrowBooksProvider } from "./contexts/BorrowBooksContext";
import NothingFoundPage from "./pages/NothingFoundPage/NothingFoundPage";
import AddNewBook from "./pages/AddNewBook/AddNewBook";
import AddUser from "./pages/AddUser/AddUser";

export default function App() {
  return (
    <div className="d-flex flex-wrap">
      <BooksProvider>
        <UsersProvider>
          <BorrowBooksProvider>
            <Header />
            <Routes>
              <Route path="/React-Library" element={<Homepage />} />
              <Route path="/books" element={<BooksPage />} />
              <Route path="/add-book" element={<AddNewBook />} />
              <Route path="/book/:id" element={<SingleBook />} />
              <Route path="/users" element={<UsersPage />} />
              <Route path="/add-user" element={<AddUser />} />
              <Route path="/korisnik/:id" element={<SingleUser />} />
              <Route path="/borrowed-books" element={<BorrowBookPage />} />
              <Route path="/*" element={<NothingFoundPage />} />
            </Routes>
          </BorrowBooksProvider>
        </UsersProvider>
      </BooksProvider>
    </div>
  );
}
