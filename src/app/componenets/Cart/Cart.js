import styles from "./Cart.module.css";
import Modal from "@/app/componenets/UI/Modal";
import { useContext } from "react";
import CartContext from "@/app/componenets/store/Card-context";
import CartItem from "@/app/componenets/Cart/CartItem";

const Cart = (props) => {
  const cartContext = useContext(CartContext);
  const totalAmount = `$${Math.abs(cartContext.totalAmount).toFixed(2)}`;
  const hasItems = cartContext.items.length > 0;
  const removeCartItemHandler = (id) => {
      cartContext.removeItem(id)
  };
  const addCartHandler = (item) => {
      cartContext.addItem({...item,amount:1})
  };
  const cartItems = (
    <ul className={styles["cart-items"]}>
      {cartContext.items.map((item) => (
        <CartItem
          key={item.id}
          onAdd={addCartHandler.bind(null, item)}
          onRemove={removeCartItemHandler.bind(null, item.id)}
          {...item}
        />
      ))}
    </ul>
  );

  return (
    <Modal OnHideCart={props.onHideCart}>
      {cartItems}
      <div className={styles.total}>
        <span>Загалом</span>
        <span>{totalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button onClick={props.onHideCart} className={styles["button-alt"]}>
          Закрити
        </button>
        {hasItems && <button className={styles.button}>Замовити</button>}
      </div>
    </Modal>
  );
};

export default Cart;
