import React from 'react'
import { IoIosCloseCircleOutline } from "react-icons/io";

const BookModal = ({ book, onClose }) => {
  return (
    <>
    <div
      className='fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center'
      onClick={onClose}
    >
      <div onClick={(event) => event.stopPropagation()} className='bg-white p-5 rounded'>
        <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
        <h3 className='font-semibold'>{book.volumeInfo.title}</h3>
        <p className='text-sm'> by {book.volumeInfo.authors && book.volumeInfo.authors.join(', ')}</p>
        <p className='text-slate-500 text-sm'>{book.volumeInfo.publisher}</p>
        <IoIosCloseCircleOutline className='flex content-center' onClick={onClose} />
      </div>
    </div>
    
    </>

  )
}

export default BookModal