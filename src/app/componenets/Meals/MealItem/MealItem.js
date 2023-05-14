import styles from "./MealItem.module.css";
import MealItemForm from "@/app/componenets/Meals/MealItem/MealItemForm";
const MealItem = (props) => {
  const formattedPrice = `$${props.price.toFixed(2)}`;
  return (
    <li className={styles.meal}>
      <div>
        <h3 className='font-semibold'>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{formattedPrice}</div>
      </div>
      <div>
        <MealItemForm {...props}/>
      </div>
    </li>
  );
};
export default MealItem;