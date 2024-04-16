import { Link } from "react-router-dom";
import CartItem from "../componetns/CartItem";
import OrderSummary from "../componetns/OrderSummary";
import { useCartStore } from "../store/cart";

const Cart = () => {
  const { products } = useCartStore();

  return (
    <div className="container mx-auto px-4 text-text-primary">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-8 lg:col-span-8 xl:col-span-6">
          {products.map((product) => (
            <CartItem key={product.product.id} product={product} />
          ))}
        </div>
        {products.length > 0 && <OrderSummary products={products} />}
      </div>
      {products.length === 0 && (
        <div className="flex items-center justify-center flex-col gap-6">
          <h3 className="font-semibold text-3xl">Cart is Empty</h3>
          <Link
            className="bg-primary rounded-lg text-white py-2 px-4 font-medium"
            to={"/"}
          >
            Continue shopping
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
