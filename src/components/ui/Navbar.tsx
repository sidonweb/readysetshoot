import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ["Features", "Why Us", "Testimonials", "FAQs", "Get App"];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xs text-white px-6 py-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">readysetshoot</h1>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium">
          {navItems.map((item) => (
            <li key={item} className="cursor-pointer hover:text-indigo-300 transition-all duration-200">
              <a href={`#${item.replace(/\s+/g, '').toLowerCase()}`}>{item}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Icon */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4">
          <ul className="flex flex-col space-y-4 text-lg font-extralight">
            {navItems.map((item) => (
              <li key={item} className="cursor-pointer hover:text-indigo-300 transition-all duration-200">
                <a href={`#${item.replace(/\s+/g, '').toLowerCase()}`} onClick={() => setIsOpen(false)}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
