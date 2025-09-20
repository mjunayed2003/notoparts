import { useState, useEffect } from "react";
import MainHeader from "./MainHeader";
import SearchBar from "./SearchBar";
import TopBar from "./TopBar";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      // Scroll down 
      setShow(false);
    } else {
      // Scroll up 
      setShow(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`sticky top-0 z-50 bg-white shadow-md transition-transform duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <TopBar />
      <MainHeader />
      <SearchBar />
    </header>
  );
};

export default Navbar;
