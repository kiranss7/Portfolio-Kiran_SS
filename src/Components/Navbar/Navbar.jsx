import { useRef, useState, useEffect } from 'react'
import './Navbar.css'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'
import { Link } from 'react-scroll'

const navLinks = [
  { to: 'home', label: 'Home' },
  { to: 'about', label: 'About Me' },
  { to: 'education', label: 'Education' },
  { to: 'portfolio', label: 'Projects' },
  { to: 'contact', label: 'Contact' },
];

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openMenu = () => {
    if (menuRef.current) {
      menuRef.current.style.right = "0";
    }
  };

  const closeMenu = () => {
    if (menuRef.current) {
      menuRef.current.style.right = "-350px";
    }
  };

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <Link 
        to="home" 
        smooth={true} 
        offset={-100} 
        duration={500} 
        className="nav-logo" 
        onClick={() => setMenu("home")}
      >
        <span>Kiran</span><span className="nav-logo-dot text-purple-500">.</span>
      </Link>
      <img src={menu_open} onClick={openMenu} alt="Open Menu" className='nav-mob-open' />
      <ul ref={menuRef} className='nav-menu'>
        <img src={menu_close} onClick={closeMenu} alt="Close Menu" className="nav-mob-close" />
        {navLinks.map(({ to, label }) => (
          <li key={to}>
            <Link
              to={to}
              spy={true}
              onSetActive={() => setMenu(to)}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={() => { setMenu(to); closeMenu(); }}
              className={`anchor-link nav-link ${menu === to ? "active" : ""}`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  )
}

export default Navbar
