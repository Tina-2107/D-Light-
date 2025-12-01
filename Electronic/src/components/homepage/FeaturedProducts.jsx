const FEATURED_PRODUCTS = [
  {
    name: "Havells Gracia Alkaline Water Purifier",
    price: 21998,
    mrp: 32999,
    badge: "Featured",
    img: new URL(
      "../../assets/images/prod/HavellsPurifier.jpeg",
      import.meta.url
    ).href,
  },
  {
    name: "Havells Hyaline Chandelier 10 Lamp",
    price: 199999,
    mrp: 240000,
    badge: "Bestseller",
    img: new URL("../../assets/images/prod/deco.jpeg", import.meta.url).href,
  },
  {
    name: "Havells Sphero Wall Light 1 Lamp",
    price: 2799,
    mrp: 3100,
    badge: "New",
    img: new URL("../../assets/images/prod/HavellsLamp.jpeg", import.meta.url)
      .href,
  },
  {
    name: "Fybros NEX 10 Way SPN DB",
    price: 849,
    mrp: 1590,
    badge: "Top Deal",
    img: new URL("../../assets/images/prod/FybrosDB.jpeg", import.meta.url)
      .href,
  },
];

const currency = (value) => `₹${value.toLocaleString("en-IN")}`;

const FeaturedProducts = () => {
  return (
    <section id="featured" className="bg-gray-900 py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-white">
            Featured Products
          </h2>
          <a
            href="#"
            className="text-sm sm:text-base text-yellow-400 hover:text-yellow-300"
          >
            View all
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {FEATURED_PRODUCTS.map((product) => (
            <div
              key={product.name}
              className="group bg-gray-950 border border-gray-800 rounded-2xl p-4 sm:p-5 flex flex-col hover:border-yellow-400/70 hover:-translate-y-1 transition-all"
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="text-[11px] px-2 py-1 rounded-full bg-yellow-400/15 text-yellow-300 uppercase tracking-wide">
                  {product.badge}
                </span>
                <span className="text-[11px] text-gray-400">In Stock</span>
              </div>

              <div className="h-28 sm:h-32 mb-4 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center text-gray-500 text-xs">
                <img
                  src={product.img}
                  alt={product.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              <h3 className="text-sm sm:text-base font-semibold text-white mb-2 line-clamp-2">
                {product.name}
              </h3>

              <div className="mt-auto">
                <div className="flex items-baseline space-x-2 mb-3">
                  <span className="text-lg sm:text-xl font-bold text-yellow-400">
                    {currency(product.price)}
                  </span>
                  <span className="text-xs sm:text-sm text-gray-500 line-through">
                    {currency(product.mrp)}
                  </span>
                </div>
                <button className="w-full py-2.5 rounded-xl bg-yellow-400 text-gray-900 text-sm font-semibold hover:bg-yellow-300 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
