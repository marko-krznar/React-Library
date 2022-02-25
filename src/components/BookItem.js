import React from "react";

export default function BookItem({ book }) {
  return (
    <div className="block--book-item">
      <p>{book.name}</p>
      <p>{book.author}</p>
    </div>
  );
}
