import React from "react";
import BooksPage from "./containers/BooksPage";
import Header from "./containers/Header/Header";
import { BooksProvider } from "./data/BooksContext";

export default function App() {
  return (
    <div>
      <Header />
      <BooksProvider>
        <BooksPage />
      </BooksProvider>
    </div>
  );
}
