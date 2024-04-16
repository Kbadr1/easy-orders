import { CartItem } from "../types/inedx";

const OrderSummary = ({ products }: { products: CartItem[] }) => {
  const totalSum = products
    .map((product) => product.product.price * product.quantity)
    .reduce((a, b) => a + b, 0);

  const profit = 3000;
  const deliveryFees = 100;

  return (
    <div className="col-span-12 md:col-span-4 lg:col-span-4 xl:col-span-6 ">
      <h6 className="font-medium text-lg text-center">ملخص الطلب</h6>
      <div className="flex justify-between items-center border-dashed border-b py-4 border-black">
        <div className="flex flex-col gap-2">
          <p>عدد المنتجات</p>
          <p>سعر المنتجات</p>
          <p>صافي الربح</p>
          <p>سعر الشحن</p>
        </div>
        <div className="flex items-end flex-col gap-2 font-medium">
          <p>{products.length} منتجات</p>
          <p>{totalSum} ج.م</p>
          <p>{profit} ج.م</p>
          <p>{deliveryFees} ج.م</p>
        </div>
      </div>
      <div className="flex items-center justify-between py-4">
        <p>اجمالي المستحق</p>
        <p className="font-medium">{totalSum + profit + deliveryFees} ج.م</p>
      </div>
      <div className="flex justify-center items-center">
        <button className="bg-primary rounded-md font-medium text-white px-4 py-2">
          اكمال الطلب
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
