import styles from "./topNavigationBar.module.css";
import { Link } from "react-router-dom";

export const TopNavigationBar = ({cart}) => {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link to="/">
          <h1 className={styles.logo}>
            <img src="/images/logo.png" alt="logo" style={{width:'180px', height:'65px'}} />
          </h1>
        </Link>
        <div className={styles.input_wrap}>
          <input type="text" placeholder="상품을 검색해보세요!" />
          <img src="/images/search.gif" alt="search" />
        </div>
      </div>

      <div className={styles.menu}>
        <Link to="/cart">
          <div className={styles.shopping_cart}>
            <img src="/images/cart.gif" alt="cart" />
            <span>장바구니</span>
            {/* 장바구니의 길이가 1이상이면 */}
            {cart.length >= 1 ? (
              <div className={styles.new_shopping_cart}>
                <p>{cart.length}</p>
              </div>
            ) : (
              ""
            )}
          </div>
        </Link>
        <Link to="">
          <div className={styles.mypage}>
            <img src="/images/login.gif" alt="user" style={{width:'38px', height:'32px'}}/>
            <span>로그인</span>
          </div>
        </Link>
      </div>
    </header>
  );
};
