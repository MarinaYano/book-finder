import BookSingleCard from './BookSingleCard';

const BookCard = ({ books }) => {

  return (
    <div className="container">
      <div className="books my-12">
        {books ? (
          <div className='grid grid-cols-6 grid-rows-2 gap-6'>
            {books.map((book) => (
              <BookSingleCard key={book.id} book={book} />
            ))}
          </div>
        ) : (
          <p className='text-center'>No Book Data Found</p>
        )
        }
      </div>
    </div>
  )
}

export default BookCard