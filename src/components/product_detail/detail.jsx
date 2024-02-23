import { useParams } from "react-router-dom";
import styles from "./detail.module.css";
import { useEffect, useState } from "react";
import { getProducts } from "../../service/fetcher";

export const Detail = ({ convertPrice, cart, setCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [count, setCount] = useState(1); // 갯수는 최소 1개.

  // 상세페이지에서 물건 수량 조절
  const handleQuantity = (type) => {
    if (type === "plus") {
      setCount(count + 1);
    } else {
      if (count === 1) return;
      setCount(count - 1);
    }
  };

  // 중복된 장바구니 물건
  const setQuantity = (id, quantity) => {
    const found = cart.filter((el) => el.id === id)[0];
    const idx = cart.indexOf(found);
    const cartItem = {
      id: product.id,
      image: product.image,
      name: product.name,
      price: product.price,
      provider: product.provider,
      quantity: quantity,
    };
    setCart([...cart.slice(0, idx), cartItem, ...cart.slice(idx + 1)]);
  };

  // 장바구니. 내가 고른 물건의 정보를 모두 담아와야한다.
  const handleCart = () => {
    const cartItem = {
      id: product.id,
      image: product.image,
      name: product.name,
      price: product.price,
      provider: product.provider,
      quantity: count,
    };

    const found = cart.find((el) => el.id === cartItem.id);
    if (found) setQuantity(cartItem.id, found.quantity + count);
    else
      setCart([...cart, cartItem]);
  };

  useEffect(() => {
    getProducts().then((data) => {
      setProduct(
        data.data.products.find((product) => product.id === parseInt(id))
      );
    });
  }, [id, product.price]);

  return (
    product && ( // product가 들어와야 실행
      <>
        <main className={styles.main}>
          <section className={styles.product}>
            <div className={styles.product_img}>
              <img src={product.image} alt="product" />
            </div>
          </section>
          <section className={styles.product}>
            <div className={styles.product_info}>
              <p className={styles.seller_store}>{product.provider}</p>
              <p className={styles.product_name}>{product.name}</p>
              <span className={styles.price}>
                {convertPrice(product.price + "")}
                <span className={styles.unit}>원</span>
              </span>
            </div>

            <div className={styles.delivery}>
              <p>택배배송 / 무료배송</p>
            </div>

            <div className={styles.line}></div>

            <div className={styles.amount}>
              <img
                className={styles.minus}
                src="/images/minus.png"
                alt="minus"
                onClick={() => handleQuantity("minus")}
              />

              <div className={styles.count}>
                <span>{count}</span>
              </div>

              <img
                className={styles.plus}
                src="/images/plus.png"
                alt="plus"
                style={{ width: '20px', height: '20px' }}
                onClick={() => handleQuantity("plus")}
              />
            </div>

            <div className={styles.line}></div>

            <div className={styles.sum}>
              <div>
                <span className={styles.sum_price}>총 상품 금액</span>
              </div>

              <div className={styles.total_info}>
                <span className={styles.total}>
                  총 수량 <span className={styles.total_count}>{count}개</span>
                </span>
                <span className={styles.total_price}>
                  {convertPrice(product.price * count)}
                  <span className={styles.total_unit}>원</span>
                </span>
              </div>
            </div>

            <div className={styles.btn}>
              <button className={styles.btn_buy}>바로 구매</button>
              <button
                className={styles.btn_cart}
                onClick={() => {
                  handleCart();
                }}
              >
                장바구니
              </button>
            </div>
          </section>
        </main>
      </>
    )
  );
};