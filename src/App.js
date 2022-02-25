import React from "react";
import BooksPage from "./containers/BooksPage";
import { BooksProvider } from "./data/BooksContext";

export default function App() {
  return (
    <div>
      <BooksProvider>
        <h2>Knjižnica</h2>
        <BooksPage />
      </BooksProvider>
    </div>
  );
}
