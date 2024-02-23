import { Main } from "../components/main/main";

const Home = ({ products, setProducts, convertPrice }) => {
  // 받아서 다시 main으로 넘겨줌
  return <Main
    products={products}
    setProducts={setProducts}
    convertPrice={convertPrice} />;
};

export default Home;