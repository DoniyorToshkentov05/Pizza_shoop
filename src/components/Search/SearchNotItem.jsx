import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setSearchValue } from '../../redux/slices/filterSlice';
import { selectFilter } from '../../redux/slices/filterSlice';
import style from "./search.module.scss"


const SearchNotItem = () => {
   const {searchValue} = useSelector(selectFilter)
   const dispatch = useDispatch()
  console.log(searchValue)
  
  return (
   
      <h1 className={style.search__title}>We didn't find a pizza with the name<span>{searchValue}</span></h1>
    
        
                                     
    
  )
}

export default SearchNotItem