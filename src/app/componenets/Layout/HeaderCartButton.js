

import { useContext } from "react";
import CartIcon from "@/app/componenets/Cart/CartIcon";
import styles from "./HeaderCartButton.module.css";
import CartContext from "@/app/componenets/store/Card-context";


const HeaderCartButton = (props) => {
    const cartContext = useContext(CartContext);
    const cartItemsNumber = cartContext.items.reduce((currentValue, item) => {
        return currentValue + item.amount;
    }, 0);

  return (
    <button className={styles.button} onClick={props.OnClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span> Корзина</span>
      <span className={styles.badge}> {cartItemsNumber}</span>
    </button>
  );
};
export default HeaderCartButton;
