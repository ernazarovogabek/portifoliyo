import { useState } from 'react';

function Navbar({ theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">Og'abek</div>
        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={closeMenu}>Bosh sahifa</a></li>
          <li><a href="#about" onClick={closeMenu}>Men haqimda</a></li>
          <li><a href="#skills" onClick={closeMenu}>Ko'nikmalar</a></li>
          <li><a href="#projects" onClick={closeMenu}>Loyihalar</a></li>
          <li><a href="#contact" onClick={closeMenu}>Bog'lanish</a></li>
        </ul>
        <div className="theme-toggle" onClick={toggleTheme}>
          <span className="theme-icon moon">🌙</span>
          <span className="theme-icon sun">☀️</span>
          <div className="theme-toggle-slider"></div>
        </div>
        <div className={`burger ${isOpen ? 'toggle' : ''}`} onClick={toggleMenu}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
