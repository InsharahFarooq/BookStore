// Books.jsx
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BookCard from './BookCard';
import '../css/Book.css';

const Books = ({ role }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/book/books')
      .then(res => {
        setBooks(res.data);
        console.log(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  // Group books into rows with a maximum of 4 books per row
  const bookRows = [];
  for (let i = 0; i < books.length; i += 4) {
    bookRows.push(books.slice(i, i + 4));
  }

  return (
    <div className='book-list'>
      {bookRows.map((row, rowIndex) => (
        <div className='book-row' key={rowIndex}>
          {row.map(book => (
            <BookCard key={book._id} book={book} role={role} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Books;
