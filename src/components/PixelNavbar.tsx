import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "HOME", href: "#home" },
  { label: "SERVICES", href: "#services" },
  { label: "PORTFOLIO", href: "#portfolio" },
  { label: "ABOUT", href: "#about" },
  { label: "CONTACT", href: "#contact" },
];

const PixelNavbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 border-b-4 border-black bg-black/90 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <a href="#home" className="font-pixel text-sm" style={{ color: '#70ff00', textShadow: '0 0 8px #70ff0066' }}>
          LF<span style={{ color: '#f500ff' }}>.</span>
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-pixel text-[10px] tracking-wider transition-colors hover:text-neon-magenta"
                style={{ color: '#70ff00' }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="hidden md:block pixel-btn !py-2 !px-4 !text-[9px]">
          HIRE US
        </a>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden" style={{ color: '#70ff00' }}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t-4 border-neon-green bg-black/95 px-4 pb-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block font-pixel text-[10px] py-3 tracking-wider"
              style={{ color: '#70ff00' }}
            >
              {item.label}
            </a>
          ))}
          <a href="#contact" className="pixel-btn !py-2 !px-4 !text-[9px] mt-2 block text-center">
            HIRE US
          </a>
        </div>
      )}
    </nav>
  );
};

export default PixelNavbar;
