import React from 'react'
import { useParams, Link, useNavigate} from 'react-router-dom'

import style from './NotFoundBlock.module.scss'

const NotFoundBlock = () => {
   const navigate = useNavigate()
   const goBack =()=>  navigate(-1)
   
  return (
    <div className={style.root}>
     
      <br />
      
    
    </div>
    

  )
}

export default NotFoundBlock