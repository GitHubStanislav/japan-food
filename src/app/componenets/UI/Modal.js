import styles from "./Modal.module.css";
const Backdrop = () => {
  return <div className={styles.backdrop}></div>;
};
const ModalWindow = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <>
      <Backdrop></Backdrop>
      <ModalWindow>{props.children}</ModalWindow>
    </>
  );
};
export default Modal;
