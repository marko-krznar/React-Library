import React from "react";
import { BooksProvider } from "./data/BooksContext";

export default function App() {
  return (
    <div>
      <BooksProvider>
        <h2>Knjižnica</h2>
      </BooksProvider>
    </div>
  );
}
