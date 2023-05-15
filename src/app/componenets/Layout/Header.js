import sushiImage from '../assets/sushi.jpg'
import Image from "next/image";
import styles from './Header.module.css'
import HeaderCartButton from "@/app/componenets/Layout/HeaderCartButton";
const Header = (props) => {
  return (
    <>
      <header className={styles.header}>
        <h1>Японська Кухня</h1>
          <HeaderCartButton OnClick ={props.onShowCart} className=''>Корзина</HeaderCartButton>
      </header>
      <div className={styles['main-image']}>
          <Image priority={true} src={sushiImage} alt='sushi'/>
      </div>
    </>
  );
};
export default Header;
