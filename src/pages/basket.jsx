import { Cart } from "../components/cart/cart";

const Basket = ({convertPrice, cart, setCart}) => {
  return <Cart convertPrice={convertPrice} cart={cart} setCart={setCart}/>;
};

export default Basket;