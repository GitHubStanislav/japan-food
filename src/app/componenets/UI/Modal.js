import styles from "./Modal.module.css";
const Backdrop = (props) => {
  return <div onClick={props.OnHideCart} className={styles.backdrop}></div>;
};
const ModalWindow = (props) => {
  return (
    <div className={styles.modal}>
      <div>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <>
      <Backdrop OnHideCart={props.OnHideCart}></Backdrop>
      <ModalWindow>{props.children}</ModalWindow>
    </>
  );
};
export default Modal;
