import styles from "./cart.module.css";

export const CartList = ({ cart, convertPrice, checkLists, handleQuantity, handleRemove, handleCheckList }) => {
    return(
        <section className={styles.cart_product_list}>
        <input
            type="checkbox"
            id={cart.id}
            onChange={(e) => {
                handleCheckList(e.currentTarget.checked, `${cart.id}`);
            }}
            checked={checkLists.includes(`${cart.id}`) ? true : false}
        />
        <div className={styles.cart_product_wrap}>
          <div className={styles.cart_product_image}>
            <img src={cart.image} alt="product-img" />
          </div>

          <div className={styles.cart_product_info}>
            <p className={styles.seller_store}>{cart.provider}</p>
            <p className={styles.product_name}>{cart.name}</p>
            {/* <p className={styles.price}>{convertPrice(cart.price * cart.quantity)}원</p> */}
            <p className={styles.price}>{convertPrice(cart.price)}원</p>
            <p className={styles.delivery}>택배배송 / 무료배송</p>
          </div>
        </div>

        <div className={styles.cart_product_count}>
          <img
            className={styles.minus}
            src="/images/minus.png"
            alt="minus"
            style={{width:'20px', height:'20px'}}
            onClick={() => handleQuantity("minus", cart.id, cart.quantity - 1)}
          />

          <div className={styles.count}>
            <span>{cart.quantity}</span>
          </div>
          <img
            className={styles.plus}
            src="/images/plus.png"
            alt="plus"
            style={{width:'20px', height:'20px'}}
            onClick={() => handleQuantity("plus", cart.id, cart.quantity + 1)}
          />
        </div>

        <div className={styles.cart_product_price}>
          <p className={styles.total_price}></p>
          <button className={styles.btn_submit}>주문하기</button>
        </div>

        <div 
            className={styles.product_remove}
            onClick={() => handleRemove(cart.id)}>
          <img src="/images/x.png" alt="delete" style={{width:'30px', height:'25px'}}/>
        </div>
      </section>
    );
};