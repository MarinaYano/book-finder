import React from 'react'

const Category = ({ onCategoryClick }) => {
  const categories = ["Art & Photography", "Biography & Memoir", "Business & Economics", "Computer & Technology", "Cooking", "Health & Fitness", "History", "Philosophy", "Psychology", "Science", "Social Science", "Travel"]

  return (
    <div className="categories my-8">
      <h2 className='text-2xl my-8 font-bold'>Featured Categories</h2>
      <ul className='grid grid-cols-6 grid-rows-2 gap-3 text-center'>
        {categories.map((category) => (
          <li className='bg-neutral-300 rounded cursor-pointer flex justify-center items-center' key={category} onClick={() => onCategoryClick(category)}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Category