import { useContext, useEffect, useState } from "react";
import CartIcon from "@/app/componenets/Cart/CartIcon";
import styles from "./HeaderCartButton.module.css";
import CartContext from "@/app/componenets/store/Card-context";

const HeaderCartButton = (props) => {
  const [buttonIsAnimated, setButtonIsAnimated] = useState(false);

  const cartContext = useContext(CartContext);
  const cartItemsNumber = cartContext.items.reduce((currentValue, item) => {
    return currentValue + item.amount;
  }, 0);

  const buttonClasses = `${styles.button} ${
    buttonIsAnimated ? styles.bump : ""
  }`;

  useEffect(() => {
    if (cartContext.items.length === 0) {
      return;
    }
    setButtonIsAnimated(true);
    const timer = setTimeout(() => {
      setButtonIsAnimated(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [cartContext.items]);

  return (
    <button className={buttonClasses} onClick={props.OnClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span> Корзина</span>
      <span className={styles.badge}> {cartItemsNumber}</span>
    </button>
  );
};
export default HeaderCartButton;
