import addIcon from "../assets/add-cart-icon.svg";
import Vector from "../assets/Vector.png";
import { useCartStore } from "../store/cart";
import { Product } from "../types/inedx";
import darkCartIcon from "../assets/dark-cart.svg";
import plus from "../assets/plus.svg";
import minus from "../assets/minus.svg";

const ProductCard = ({ product }: { product: Product }) => {
  const { addItem, products, increaseQuantity, decreaseQuantity } =
    useCartStore();

  return (
    <div className="border w-full relative sm:w-52 2xl:w-full border-[#f1f1f1] rounded-lg col-span-2 xl:col-span-2">
      <img
        src={product.thumb}
        alt="thumb"
        className="h-52 w-full sm:w-52 2xl:w-full rounded-t-lg "
      />
      <div
        className={`absolute top-4 left-4 text-white  rounded-full px-2 py-0.5 flex items-center ${
          product.quantity > 0 ? "bg-[#21BA39]" : "bg-[#BA2121]"
        }`}
      >
        {product.quantity > 0 ? "متوفرة" : "غير متوفرة"}
      </div>
      <div className="px-4 py-2  gap-2 flex flex-col">
        <p className="leading-6 h-12 overflow-hidden">{product.name}</p>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
          <p className="font-semibold">{product.price} ج.م</p>
          <p className="text-sm">
            أقل ربح <span className="text-primary font-semibold">30 ج.م</span>
          </p>
        </div>
        <div className="flex justify-between items-center gap-2 my-2">
          {products.find((p) => p.product.id === product.id)?.quantity ? (
            <div className="flex items-center justify-center text-sm sm:text-base px-2 sm:px-0 py-2 sm:py-1 rounded-lg flex-1 border">
              <button
                className="px-2"
                onClick={() => increaseQuantity(product.id)}
              >
                <img src={plus} alt="plus" />
              </button>{" "}
              <img src={darkCartIcon} alt="add" className="me-1" />
              {products.find((p) => p.product.id === product.id)?.quantity}
              <button
                className="px-2"
                onClick={() => decreaseQuantity(product.id)}
              >
                <img src={minus} alt="minus" />
              </button>
            </div>
          ) : (
            <button
              onClick={() => addItem({ product, quantity: 1 })}
              className="bg-primary border border-primary text-white flex items-center justify-center text-sm sm:text-base px-2 sm:px-0 py-2 sm:py-1 rounded-lg flex-1"
            >
              <img src={addIcon} alt="add" className="me-2" />
              اضافة للعربة
            </button>
          )}
          <img src={Vector} alt="fav" className="p-2 hidden sm:block" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
