// Navbar.jsx - Mobile + Tablet + Desktop Responsive
import { useState } from "react";
import { Disclosure, Menu } from "@headlessui/react";
import Logo from "../../assets/images/LOGO.png";
import {
  Bars3Icon,
  XMarkIcon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

const Navbar = () => {
  const [cartCount] = useState(3);

  const navigation = [
    { name: "Home", href: "#", current: true },
    { name: "Deals", href: "#deals", current: false },
    { name: "Categories", href: "#", current: false },
    { name: "Brands", href: "#brands", current: false },
    { name: "Contact", href: "#contact", current: false },
  ];

  const categories = [
    "Fans",
    "Lighting",
    "Switches",
    "Cables",
    "Appliances",
    "Switch Gear",
    "Wires",
    "Decorative Lighting",
  ];

  return (
    <Disclosure
      as="nav"
      className="bg-gray-900/95 backdrop-blur-md sticky top-0 z-50 border-b border-gray-800/50"
    >
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-2 lg:py-3">
            <div className="flex justify-between items-center h-16 lg:h-20">
              {/* LOGO */}
              <a href="/" className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                  <img src={Logo} alt="Dlight Logo" />
                </div>
                <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent hidden sm:block">
                  D-Light
                </span>
              </a>

              {/* DESKTOP NAV (Only >=1024px) */}
              <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
                {/* Navigation Links */}
                <div className="flex items-center space-x-2">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                        item.current
                          ? "bg-yellow-400/10 text-yellow-400 border border-yellow-400/30"
                          : "text-gray-300 hover:text-white hover:bg-gray-800/50"
                      }`}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>

                {/* Search Bar */}
                <div className="relative ml-4 xl:ml-6">
                  <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search electrical products..."
                    className="w-56 md:w-64 lg:w-72 xl:w-80 pl-10 pr-12 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-400/50"
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                    <kbd className="px-2 py-1 text-xs font-semibold text-gray-400 bg-gray-700 rounded">
                      Enter
                    </kbd>
                  </div>
                </div>

                {/* Cart + User */}
                <div className="flex items-center space-x-4">
                  {/* Cart */}
                  <button className="p-2 text-gray-400 hover:text-yellow-400 hover:bg-gray-800/50 rounded-xl relative">
                    <ShoppingBagIcon className="h-6 w-6" />
                    {cartCount > 0 && (
                      <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
                        {cartCount}
                      </span>
                    )}
                  </button>

                  {/* User */}
                  <Menu as="div" className="relative">
                    <Menu.Button className="p-2 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-xl transition">
                      <svg
                        className="w-7 h-7"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Menu.Button>
                  </Menu>
                </div>
              </div>

              {/* MOBILE & TABLET MENU BUTTON */}
              <Disclosure.Button className="lg:hidden p-2 rounded-xl text-gray-400 hover:text-white hover:bg-gray-800/50">
                {open ? (
                  <XMarkIcon className="h-6 w-6" />
                ) : (
                  <Bars3Icon className="h-6 w-6" />
                )}
              </Disclosure.Button>
            </div>
          </div>

          {/* MOBILE + TABLET MENU PANEL (visible <1024px) */}
          <Disclosure.Panel className="lg:hidden bg-gray-900/95 border-t border-gray-800/50">
            <div className="px-3 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={`block px-3 py-2 rounded-xl text-base font-medium ${
                    item.current
                      ? "bg-yellow-400/20 text-yellow-400"
                      : "text-gray-300 hover:text-white hover:bg-gray-800/50"
                  }`}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>

            {/* Search + Categories */}
            <div className="border-t border-gray-800/50 px-4 pb-4 space-y-3">
              {/* Mobile Search */}
              <div className="relative">
                <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white"
                />
              </div>

              {/* Categories Dropdown */}
              <Disclosure as="div">
                <Disclosure.Button className="w-full flex justify-between items-center px-4 py-3 bg-gray-800/50 rounded-xl text-gray-300">
                  Categories
                  <ChevronDownIcon className="h-5 w-5 text-gray-400" />
                </Disclosure.Button>

                <Disclosure.Panel className="mt-2 px-2 pt-2 pb-4 space-y-1">
                  {categories.map((category) => (
                    <a
                      key={category}
                      href="#"
                      className="block px-3 py-2 rounded-lg text-sm text-gray-300 hover:text-yellow-400 hover:bg-gray-800/50"
                    >
                      {category}
                    </a>
                  ))}
                </Disclosure.Panel>
              </Disclosure>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
