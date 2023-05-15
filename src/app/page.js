'use client';
import {useState} from "react";
import Header from "@/app/componenets/Layout/Header";
import Meals from "@/app/componenets/Meals/Meals";
import Cart from "@/app/componenets/Cart/Cart";


function Home() {
 const [cartIsVisible, setCartVisible] = useState(false)
    const showCartHandler = ()=>{
     setCartVisible(true)
    }
    const hideCartHandler = ()=>{
        setCartVisible(true)
    }
  return (
    <>
        {cartIsVisible && <Cart />}
      <Header onShowCart ={showCartHandler} />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default Home;
