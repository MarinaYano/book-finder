import React from 'react'
import BookCard from "./BookCard";
import Category from "./Category";
import { useState } from "react"

const Home = () => {
  const [query, setQuery] = useState([])
  const [books, setBooks] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("")
  const [error, setError] = useState(null)

  const searchBooks = async () => {
    try {
      let apiURL = `https://www.googleapis.com/books/v1/volumes?q=${query}`

      if (selectedCategory) {
        apiURL = `https://www.googleapis.com/books/v1/volumes?q=subject:${selectedCategory}`
      }

      const res = await fetch(apiURL)

      const data = await res.json()
      setBooks(data.items)

    } catch(error) {
      if (error.response.status === 404) {
        setError('Resource not found')
      } else if (error.response.status === 429) {
        setError('Too many request. Please try again later')
      } else {
        setError('An unexpected error occurred')
      }
      console.log('ERROR:', error)
    }
  }

  const handleCategoryClick = (category) => {
    setSelectedCategory(category)
    setQuery("")
    searchBooks()
  }

  
  return (
    <div className='home'>
      <div className="search">
        <input
          type="text"
          placeholder="search for books"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={searchBooks}>Search</button>
      </div>

      <Category onCategoryClick={handleCategoryClick} />

      {error ? (
        <p>{error}</p>
      ) : (
        <BookCard books={books} />
      )
      }
    </div>
  )
}

export default Home