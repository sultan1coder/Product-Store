import { useEffect } from "react";
import { useProductStore } from "../store/useProductStore";
import { PackageIcon, PlusCircleIcon, RefreshCwIcon } from "lucide-react";
import ProductCard from "../components/ProductCard";
import AddProductModal from "../components/AddProductModal";

function HomePage() {
  const { products, loading, error, fetchProducts } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <main className="max-w-6xl px-4 py-8 mx-auto ">
      <div className="flex items-center justify-between mb-8">
        <button
          className="btn btn-primary"
          onClick={() => document.getElementById("add_product_modal").showModal()}
        >
          <PlusCircleIcon className="mr-2 size-5" />
          Add Product
        </button>
        <button className="btn btn-ghost btn-circle" onClick={fetchProducts}>
          <RefreshCwIcon className="size-5" />
        </button>
      </div>

      <AddProductModal />

      {error && <div className="mb-8 alert alert-error">{error}</div>}

      {products.length === 0 && !loading && (
        <div className="flex flex-col items-center justify-center space-y-4 h-96">
          <div className="p-6 rounded-full bg-base-100">
            <PackageIcon className="size-12" />
          </div>
          <div className="space-y-2 text-center">
            <h3 className="text-2xl font-semibold ">No products found</h3>
            <p className="max-w-sm text-gray-500">
              Get started by adding your first product to the inventory
            </p>
          </div>
        </div>
      )}

      {loading ? (
        <div className="flex items-center justify-center h-64">
          <div className="loading loading-spinner loading-lg" />
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </main>
  );
}
export default HomePage;
