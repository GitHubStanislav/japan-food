import styles from "./MealItem.module.css";
import MealItemForm from "@/app/componenets/Meals/MealItem/MealItemForm";
import {useContext} from "react";
import CartContext from "@/app/componenets/store/Card-context";
const MealItem = (props) => {
  const cartContext = useContext(CartContext)
    const formattedPrice = `$${props.price.toFixed(2)}`;
  const addToCartHandler = (amount)=>{
cartContext.addItem({
    id: props.id,
    name: props.name,
    amount: amount,
    price: props.price,
})
  }
  return (
    <li className={styles.meal}>
      <div>
        <h3 className='font-semibold'>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{formattedPrice}</div>
      </div>
      <div>
        <MealItemForm onAddToCart ={addToCartHandler} {...props}/>
      </div>
    </li>
  );
};
export default MealItem;
