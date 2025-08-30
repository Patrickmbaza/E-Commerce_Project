import React from "react";

function App() {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-600">ShopEase</h1>
          <nav className="space-x-6">
            <a href="#home" className="hover:text-indigo-600">Home</a>
            <a href="#shop" className="hover:text-indigo-600">Shop</a>
            <a href="#about" className="hover:text-indigo-600">About</a>
            <a href="#contact" className="hover:text-indigo-600">Contact</a>
          </nav>
          <button className="relative">
            🛒
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2">
              2
            </span>
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Discover Your Next Favorite Product
          </h2>
          <p className="mb-8 text-lg md:text-xl">
            Premium products at unbeatable prices — delivered to your door.
          </p>
          <a
            href="#shop"
            className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-200"
          >
            Shop Now
          </a>
        </div>
      </section>

      {/* Products */}
      <section id="shop" className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-12">Featured Products</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                img: "https://source.unsplash.com/400x300/?shoes",
                name: "Stylish Sneakers",
                desc: "Comfort meets fashion.",
                price: "$59.99",
              },
              {
                img: "https://source.unsplash.com/400x300/?watch",
                name: "Luxury Watch",
                desc: "Timeless elegance.",
                price: "$199.99",
              },
              {
                img: "https://source.unsplash.com/400x300/?headphones",
                name: "Wireless Headphones",
                desc: "Crystal clear sound.",
                price: "$89.99",
              },
            ].map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
              >
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-2">{product.name}</h4>
                  <p className="text-gray-600 mb-4">{product.desc}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-indigo-600 font-bold">
                      {product.price}
                    </span>
                    <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-8 mt-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2025 ShopEase. All rights reserved.</p>
          <div className="space-x-4 mt-4 md:mt-0">
            <a href="#privacy" className="hover:text-white">Privacy Policy</a>
            <a href="#terms" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
