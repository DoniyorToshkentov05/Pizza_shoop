import React, {memo, useMemo, useState} from 'react'

const Category = memo(  ({value, onClickCategory  })  => {

  
  const categories = [
    'All',
    'Meat',
    'Vegetarian',
    'Grill',
    'Spicy',
    
  ]

  
  return (
   <div className="categories">
      <ul>
      {categories.map((categorie, index) =>
      <li key={categorie}
        onClick={() => onClickCategory(index)}
        className={value === index ? 'active'
        : ''}>
        {categorie}
      </li>)}
      </ul>
   </div>
  )
})

export default Category