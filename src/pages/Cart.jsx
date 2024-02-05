import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'

import CartItems from '../components/CartItems/CartItems'
import {clearItems} from '../redux/slices/cartSlice'
import CartEmpty from '../components/CartEmpty/CartEmpty'
import cartImage from '../pages/cart (2).png';
import cartImagenot from '../pages/Notifications none.png';
import cartImageper from '../pages/unsplash_WNoLnJo7tS8.png';
import {selectCart} from "../redux/slices/cartSlice"
import Modal from '../components/Modal/Modal'
import PayBlock from '../components/PayBlock/PayBlock'

const Cart = () => {

  const dispatch = useDispatch()
  const {items, totalPrice} = useSelector(selectCart)
  const totalCount = items.reduce((sum, item) => sum + item.count, 0)
  const [modalOpen, setModalOpen] = useState(false)

   const navigate = useNavigate()
   const goBack =()=>  navigate(-1)

  


  return (
   <>
   
   {

    items.length === 0
    ?   <CartEmpty/>
    : <>
       <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}><PayBlock/></Modal>
    <div className="container content container--cart">
   <div className="cart">
    <div className='boxim'>
    <img width="50" height="50" src={cartImageper} alt="" /> <h2>John Smith</h2>    <img className='not' width="35" height="35" src={cartImagenot} alt="" />
    </div>
  
   <img width="442" height="250" src={cartImage} alt="" />
     <div className="cart__top">
       <h2 className="content__title"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
  
</svg>
<br />
Order Menu</h2>
       

     </div>
     <div className="content__items--cart">
      {
        items.map(item =>   <CartItems key={item.id} {...item}/>
)
      }
    
     </div>
     <div className="cart__bottom">
       <div className="cart__bottom-details">
         <span> Total pizzas: <b>{totalCount} pc.</b> </span>
         <span> Order price: <b>{totalPrice} ₽</b> </span>
       </div>
       <div className="cart__bottom-buttons">
      

         <div  onClick={()=> setModalOpen(!modalOpen) } className="button pay-btn">
           <span >Checkout</span>
       
         </div>
       </div>
     </div>
   </div>
      </div>
    </>
    
    
   }</>
  
  )
}

export default Cart