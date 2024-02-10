import React from 'react'

const BookCard = ({ books }) => {

  return (
    <div className="container">
      <div className="books">
        {books ? (
          <ul>
            {books.map((book) => (
              <div key={book.id}>
                {book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail && (
                <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
                )}
                <h3>{book.volumeInfo.title}</h3>
                <p>{book.volumeInfo.authors && book.volumeInfo.authors.join(', ')}</p>
                <p>{book.volumeInfo.publisher}</p>
                <button>Detail</button>
              </div>
            ))}
          </ul>
        ) : (
          <p>Loading...</p>
        )
        }
      </div>
    </div>
  )
}

export default BookCard