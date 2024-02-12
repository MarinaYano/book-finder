import { Link } from 'react-router-dom';

const BookCard = ({ books }) => {

  return (
    <div className="container">
      <div className="books my-12">
        {books ? (
          <ul className='grid grid-cols-6 grid-rows-2 gap-6'>
            {books.map((book) => (
              <div key={book.id}>
                {book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail && (
                <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} className='w-full' />
                )}
                <h3 className='font-semibold'>{book.volumeInfo.title}</h3>
                <p className='text-sm'> by {book.volumeInfo.authors && book.volumeInfo.authors.join(', ')}</p>
                <p className='text-slate-500 text-sm'>{book.volumeInfo.publisher}</p>
                <Link to='detail'>
                  <button>Detail</button>
                </Link>
              </div>
            ))}
          </ul>
        ) : (
          <p className='text-center'>No Book Data Found</p>
        )
        }
      </div>
    </div>
  )
}

export default BookCard