import { Product } from "../types/inedx";
import { useCartStore } from "../store/cart";

const CartItem = ({
  product,
}: {
  product: { product: Product; quantity: number };
}) => {
  const { increaseQuantity, decreaseQuantity, removeItem } = useCartStore();

  return (
    <div className="flex gap-6 mb-6">
      <img
        src={product.product.thumb}
        alt="thumb"
        className="w-32 h-32 rounded-lg"
      />
      <div className="flex flex-col gap-1">
        <p>
          <span className="text-text-sec font-medium me-3">اسم المنتج:</span>
          {product.product.name}
        </p>
        <p>
          <span className="text-text-sec font-medium me-3">
            سعر البيع للقطعة:
          </span>
          {product.product.price} ج.م
        </p>
        <p>
          <span className="text-text-sec font-medium me-3">
            سعة المنتج في المخزون:
          </span>
          {product.product.quantity} قطعة
        </p>
        <div className="flex flex-col sm:flex-row mt-auto justify-between flex-wrap sm:w-60">
          <div className="text-text-primary mt-2 sm:mt-0 flex items-center justify-center w-16 border border-[#E1E1E1] rounded-md">
            <button
              onClick={() => increaseQuantity(product.product.id)}
              className=""
            >
              +
            </button>
            <span className="px-2">{product.quantity}</span>
            <button
              onClick={() => decreaseQuantity(product.product.id)}
              className=""
            >
              -
            </button>
          </div>
          <p className="font-medium mt-2 sm:mt-0">
            {(product.quantity * product.product.price).toFixed(2)} ج.م
          </p>
          <button
            onClick={() => removeItem(product.product.id)}
            className="bg-[#BA2121]/25 text-[#BA2121] px-2 rounded-md mt-2 sm:mt-0 w-14"
          >
            حذف
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
