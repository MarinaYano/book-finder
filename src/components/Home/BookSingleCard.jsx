import React from 'react'
import { useState } from 'react'
import BookModal from './BookModal'

const BookSingleCard = ({ book }) => {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <div className='p-3 rounded hover:shadow-xl'>
        <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} className='w-full' />
        <h3 className='font-semibold'>{book.volumeInfo.title}</h3>
        <p className='text-sm'> by {book.volumeInfo.authors && book.volumeInfo.authors.join(', ')}</p>
        <p className='text-slate-500 text-sm'>{book.volumeInfo.publisher}</p>
        <button onClick={() => {setShowModal(true)}}>Detail Info</button>
        {showModal && (<BookModal book={book} onClose={() => setShowModal(false)} />)}
      </div>
    </>
  )
}

export default BookSingleCard