import React from 'react'

const Detail = ({ book, onClose }) => {
  return (
    <div>
      <h2>{book.volumeInfo.title}</h2>
      <p>{book.volumeInfo.authors}</p>
      <button onClick={onClose}>Close</button>
    </div>
  )
}

export default Detail