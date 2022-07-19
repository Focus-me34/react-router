import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const params = useParams();
  const product = DUMMY_DATA.find(item => item.id === +params.productId )

  return (
    <section>
      <h1>Product Detail</h1>
      <p>Product id: {product.id}</p>
      <p>{product.name}: {product.price}</p>
    </section>
  );
}

export default ProductDetail;

// URL: http://localhost:3000/products/1
// In console: { productId: '1' }


const DUMMY_DATA = [
  {id: 1, name: "MacBook", price: "1700£"},
  {id: 2, name: "iPhone", price: "1000£"},
  {id: 3, name: "iPad", price: "700£"},
]
