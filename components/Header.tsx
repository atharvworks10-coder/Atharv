import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Code2 } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-accent p-2 rounded-lg text-white group-hover:bg-accentHover transition-colors">
            <Code2 size={24} />
          </div>
          <span className={`text-xl font-bold tracking-tight ${scrolled ? 'text-primary' : 'text-slate-800'}`}>
            Atharv Web Studio
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`font-medium text-sm hover:text-accent transition-colors ${
                location.pathname === link.path ? 'text-accent' : (scrolled ? 'text-secondary' : 'text-slate-700')
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-accent hover:bg-accentHover text-white px-5 py-2.5 rounded-full font-medium text-sm transition-all transform hover:scale-105 shadow-lg shadow-blue-500/30"
          >
            Get a Quote
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-secondary p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white shadow-lg transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96 border-t' : 'max-h-0'}`}>
        <div className="flex flex-col p-6 gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`font-medium text-lg ${location.pathname === link.path ? 'text-accent' : 'text-secondary'}`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-accent text-white text-center py-3 rounded-lg font-medium mt-2"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;