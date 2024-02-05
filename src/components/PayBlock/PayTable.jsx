import React from 'react'
import style from './PayBlock.module.scss'

const PayTable = ({items, totalPrice, totalCount}) => {
 
  return (

<>
<div className={style.table}>
   <div className={style.item}>Id</div>
   <div className={style.item}>Photo</div>
   <div className={style.item}>Name</div>
   <div className={style.item}>Size</div>
   <div className={style.item}>Test type</div>
   <div className={style.item} >Number of pieces</div>
   <div className={style.item} >Price for one</div>  
   <div className={style.item}>Cost</div>
  {items.map(item => 
   <>
      <div className={style.item}> 
        {item.id}
      </div>
      <div className={style.item}>
         <img src={item.imageUrl} alt={item.title} />
      </div>
      <div className={style.item}>
        {item.title}
      </div>
       <div className={style.item}>
        {item.sizes}
      </div>
      <div className={style.item}>
        {item.type}
      </div>  
      <div className={style.item}>{item.count}</div>   
         <div className={style.item}>{item.price}</div>
       <div className={style.item}>{item.price * item.count}</div>  
      
   </>
      
   )    }
    
  </div>
  <div className={style.result}>
     <h2>Result:</h2> <br />
  <p>Number of pizzas: <span>{totalCount}</span> </p>
  <p>Order price: <span>{totalPrice}</span></p>
  </div>
 
</>
  
  )
}

export default PayTable