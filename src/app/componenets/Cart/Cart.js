
import styles from "./Cart.module.css";
import Modal from "@/app/componenets/UI/Modal";

const Cart = (props) => {
  const cartItems = (
    <ul className={styles["cart-items"]}>
      {[{ id: "m1", name: "Sushi", amount: 2, price: 10.99 }].map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal OnHideCart={props.onHideCart}>
      {cartItems}
      <div className={styles.total}>
        <span>Загалом</span>
        <span>49.99</span>
      </div>
      <div className={styles.actions}>
        <button onClick={props.onHideCart} className={styles["button-alt"]}>
          Закрити
        </button>
        <button className={styles.button}>Замовити</button>
      </div>
    </Modal>
  );
};

export default Cart;
