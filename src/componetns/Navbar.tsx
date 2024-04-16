import { Link } from "react-router-dom";
import cartIcon from "../assets/cart-icon.svg";
import { useCartStore } from "../store/cart";

const Navbar = () => {
  const { products } = useCartStore();

  return (
    <nav className="container mx-auto px-4 flex justify-end items-center py-6">
      <Link to={"/cart"} className="bg-secondary p-2 rounded-full relative">
        <img src={cartIcon} alt="cart" className="" />
        <div
          className={`${
            products.length ? "absolute" : "hidden"
          } w-2 h-2 bg-primary/50 top-1/3 left-1/4 rounded-full`}
        ></div>
      </Link>
    </nav>
  );
};

export default Navbar;
