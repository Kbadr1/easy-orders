import { useEffect } from "react";
import { useProductsStore } from "../store/api";
import ProductCard from "../componetns/ProductCard";
import { Product } from "../types/inedx";

const Products = () => {
  const { fetch, data, isLoading } = useProductsStore() as {
    fetch: () => void;
    data: Product[];
    isLoading: boolean;
  };

  useEffect(() => {
    fetch();
  }, []);

  if (isLoading) {
    return <p className="text-center text-3xl">Loading</p>;
  }

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-8">
        {data.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
