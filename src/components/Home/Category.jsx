import React from 'react'

const Category = ({ onCategoryClick }) => {
  const categories = ["Art & Photography", "Biography & Memoir", "Business & Economics", "Computer & Technology", "Cooking", "Health & Fitness", "History", "Philosophy", "Psychology", "Science", "Social Science", "Travel"]

  return (
    <div className='categories'>
      <h2>Featured Categories</h2>
      <ul>
        {categories.map((category) => (
          <li key={category} onClick={() => onCategoryClick(category)}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Category