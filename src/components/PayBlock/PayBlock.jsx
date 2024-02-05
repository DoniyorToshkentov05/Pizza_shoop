import React, { useEffect, useState, useRef, Ref } from 'react'
import style from "./PayBlock.module.scss"
import {useSelector, useDispatch} from 'react-redux'
import { selectCart } from '../../redux/slices/cartSlice'
import PayTable from './PayTable'

const PayBlock = () => {

  const sitys = [{cityName: 'Пятигорск', addressPizza:'Пятигорск Роза-Люксембург 88'},{cityName: 'Мин-Воды', addressPizza:'Мин-Воды Набережная 102'},
  {cityName: 'Ессентуки', addressPizza:'Ессентуки Кирова 90/2'},{cityName: 'Нальчик', addressPizza:'Нальчик Ленина 22'},
]

  const {items, status, totalPrice}= useSelector(selectCart)  
  const totalCount = items.reduce((sum, item) => sum + item.count, 0)


  const [checkedPayCard, setcheckedPayCard] = useState(false);
  const [closeTable, setCloseTable] = useState(false)
  const [delivery, setDelivery] = useState(false)
  const [next, setNext] = useState(false)
  const [examination, setExamination] = useState(false)

  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [tel, setTel] = useState('')
  const [email, setEmail] = useState('')
  const [wishes, setWishes] = useState('')
  const [addressCafe, setAddressCafe] = useState(sitys[0].addressPizza)
  const [addressSity, setAddressSity] = useState(sitys[0].cityName)
  const [time, setTime] = useState('')
 
  const [descOrder, setDescOrder] = useState(false)
  


   const [valueNumber, setValueNumber] = useState("");
   const [dateActiveMonth, setdateActiveMonth] = useState("");
   const [dateActiveYear, setdateActiveYear] = useState("");
   const [code, setCode] = useState("");

   const [nameError, setNameError] = useState('Укажите ваше имя, это поможет улучшить качество нашего сервиса')
   const [nameDirty, setNameDirty] = useState(false)
   const [emailError, setEmailError] = useState('Не коректный email! Пример email: vas9I07@gmail.com')
   const [emailDirty, setEmailDirty] = useState(false)
   const [telError, setTelError] = useState('Вы ввели неверный телефон')
   const [telDirty, setTelDirty] = useState(false)
   const [timeError, setTimeError] =useState('Мы работает с 5:00 до 23:00')
   const [timeDirty, setTimeDirty] = useState(false)

   const [formValid, setFormValid] = useState(false)
   
   

  function testJump(x){
    var ml = ~~x.getAttribute('maxlength');
    if(ml && x.value.length >= ml){
        do{
            x = x.nextSibling;
        }
        while(x && !(/text/.test(x.type)));
        if(x && /text/.test(x.type)){
            x.focus();
        }
    }
  }

  const blurHandler = (e) =>{
  
    switch(e.target.name){
      case 'name':
        setNameDirty(true)
        break
      case 'email':
        setEmailDirty(true)  
        break
      case 'time':
        setTimeDirty(true)  
        break
      case 'tel':
        setTelDirty(true)  
        break
    }
   }

   const hadlerInputName = (e) =>{
     setName(e)
    if(e.length >= 2){
     
     setNameError('')
    }else{
    setNameError('Укажите ваше имя, это поможет улучшить качество нашего сервиса')
      
    }
   }
   const hadlerInputEmail = (e) =>{
   
    setEmail(e)
    console.log(emailDirty, emailError)
    const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    if(!EMAIL_REGEXP.test(String(e).toLowerCase())){
      console.log('errror')
      setEmailError(`Не коректный email! Пример email: vas9I07@gmail.com! Вы должны ввести или телефон или email - это помогает нам улучшать наш сервис`)
    } else{
      
      setEmailError('')
    }

   }
   const hadlerInputTel = (e) =>{
    
    
    setTel(prev => /\d+/.test(Number(e)) ? e.trim() : prev)
    
    if(e.length == 11){
     
     setTelError('') 
    } else{
      setTelError(`Вы ввели не коректный номер! Вы должны ввести или телефон или email - это помогает нам улучшать наш сервис.`)
    }

   } 
   const hadlerTime = (e) =>{
    console.log(e)
    
    const correctlyTime = e.slice(0,2)
    if( correctlyTime > 5 && correctlyTime < 23 ){
      setTime(e)
      setTimeError('')
    }
    else{
      setTime(e)
      setTimeError('Мы работает с 5:00 до 23:00')
    }
   }
   const hadlerwishes = (e) =>{
    
    setWishes(e)
   
    if(e.length >= 140){
      setWishes(wishes.slice(0, 139))
    }
   
   }

  useEffect(()=>{
   
    if(nameError || (emailError && !tel) || timeError  ){
         setFormValid(false)
    }
    else{
      setFormValid(true)
    }
  }, [nameError, emailError, tel, timeError])


   
   const onChangeNumber = (e) => {
          setValueNumber(prev => /\d+/.test(Number(e)) ? e.trim() : prev)    
   };

 


   useEffect(()=>{
    if(valueNumber.length > 16){
      setValueNumber(valueNumber.slice(0,4))
    }
   }, [valueNumber] )

   useEffect(()=>{
    if(dateActiveMonth.length > 2 || dateActiveYear.length > 2){
      setdateActiveMonth(dateActiveMonth.slice(0,1))
      setdateActiveYear(dateActiveYear.slice(0,1))
      
    }
    if(dateActiveMonth > 12){
      setdateActiveMonth(dateActiveYear.slice(0,1))
    }

   }, [dateActiveMonth, dateActiveYear] )

   useEffect(()=>{
    if(code.length > 3 ){
      setCode(code.slice(0,1))
      console.log('fff')
    }
   }, [code] )

  

   const orderPizza = (e) =>{
     e.preventDefault()
    alert('Ты лапочка, спасибо что тестируешь это говно. Люблю тебя ♡')
   
   }
   

   
   const onChangeDateActiveMonth = (e) => setdateActiveMonth(prev => /\d+/.test(Number(e)) ? e.trim() : prev);
   const onChangeDateActiveYear = (e) => setdateActiveYear(prev => /\d+/.test(Number(e)) ? e.trim() : prev);
  
   
  
  
   const onChangeCode = (e) => setCode(prev => /\d+/.test(Number(e)) ? e.trim() : prev);

  return (
    <form className={style.pay} >
        
        <h2 className={style.title}>Payment for the order</h2>
       <p className={style.text}>
       Check your order
       </p>
    
        
        
        {
          closeTable ? null :   <PayTable totalPrice={totalPrice} totalCount={totalCount} items={items}/>

        }
       

        
   

      
      

     {
     
      
      }
     
      <label htmlFor="email">{tel ? '': 
      <>
      {(emailDirty && emailError) && <span className={style.error}> {emailError} </span>  }
      </>
      }
      
    
       
       
        <input onBlur={(e) => blurHandler(e)} name='email' id='email' value={email} onChange={(e) => hadlerInputEmail(e.target.value)}  placeholder='Enter your email' type="email" />
      </label>

      <label htmlFor="tel">
      {email ? '' : <> { (telDirty && telError) && <span className={style.error}> {telError} </span>   }</>  } <br />
      
        <input onBlur={(e) => blurHandler(e)} id='tel' value={tel} onChange={(e) => hadlerInputTel(e.target.value)} name='tel'   placeholder='Enter your phone number' type="tel"  />
      </label>

      <input type='submit' onClick={(e)=> orderPizza(e)} disabled={!formValid}  className="button pay-btn" value={'order pizza!'}  />
       
  
    </form>
  )
}

export default PayBlock