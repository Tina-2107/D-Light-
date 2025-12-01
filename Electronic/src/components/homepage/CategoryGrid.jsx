// components/homepage/CategoryGrid.jsx
const CATEGORIES = [
  {
    name: "Fans",
    img: new URL("../../assets/images/categories/fan.jpeg", import.meta.url)
      .href,
    products: 250,
  },
  {
    name: "Lighting",
    img: new URL("../../assets/images/categories/lights.jpeg", import.meta.url)
      .href,
    products: 538,
  },
  {
    name: "Switches",
    img: new URL(
      "../../assets/images/categories/switches.jpeg",
      import.meta.url
    ).href,
    products: 760,
  },
  {
    name: "Wires",
    img: new URL("../../assets/images/categories/wires.jpeg", import.meta.url)
      .href,
    products: 154,
  },
  {
    name: "Appliances",
    img: new URL(
      "../../assets/images/categories/appliances.jpeg",
      import.meta.url
    ).href,
    products: 38,
  },
  {
    name: "Decorative Lighting",
    img: new URL(
      "../../assets/images/categories/decorative.jpeg",
      import.meta.url
    ).href,
    products: 121,
  },
  {
    name: "Switch Gear",
    img: new URL("../../assets/images/categories/gear.jpeg", import.meta.url)
      .href,
    products: 969,
  },
  {
    name: "Relays",
    img: new URL("../../assets/images/categories/relays.jpeg", import.meta.url)
      .href,
    products: 112,
  },
];

const CategoryGrid = () => {
  return (
    <section id="categories" className="bg-gray-950 py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-white">
            Shop by Category
          </h2>
          <a
            href="#"
            className="text-sm sm:text-base text-yellow-400 hover:text-yellow-300"
          >
            View all
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {CATEGORIES.map((cat, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 bg-gray-800/40 rounded-xl hover:bg-gray-800/60 transition"
            >
              <img
                src={cat.img}
                alt={cat.name}
                className="w-[8rem] h-16 object-contain mb-3"
              />

              <h3 className="text-white text-sm font-semibold">{cat.name}</h3>

              <p className="text-gray-400 text-xs">{cat.products} products</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
