import { useEffect, useRef } from "react";
import logo from "../../assets/images/logo.png";
import userImg from "../../assets/images/avatar-icon.png";
import { NavLink, Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";

const navLinks = [
  { path: "/home", display: "Home" },
  { path: "/doctors", display: "Find a Doctor" },
  { path: "/services", display: "Services" },
  { path: "/contact", display: "Contact" },
];

const Header = () => {

  const headerRef= useRef(null)
  const menuRef= useRef(null)

  const handleStickyHeader = () => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('sticky_header');
      } else {
        headerRef.current.classList.remove('sticky_header');
      }
    });
  };

  
  useEffect(() => {
    handleStickyHeader()
    return () =>window.removeEventListener('scroll', handleStickyHeader);
  })

  const toggleMenu =() => menuRef.current.classList.toggle('show_menu')



  return (
    <header className="header flex items-center py-4 shadow-md bg-white" ref={headerRef}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* ==== Logo ==== */}
          <div>
            <img src={logo} alt="Logo" className="w-36 h-auto" />
          </div>

          {/* ==== Menu ==== */}
          <div className="navigation hidden md:block" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu flex items-center gap-8">
              {navLinks.map((item, index) => (
                <li key={index}>
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive
                        ? "text-primaryColor text-[16px] font-semibold"
                        : "text-textColor text-[16px] font-medium hover:text-primaryColor"
                    }
                  >
                    {item.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* ==== Right Section ==== */}
          <div className="flex items-center gap-4">
            {/* Profile Icon */}
            <Link to="/">
              <figure className="hidden">
                <img
                  src={userImg}
                  alt="User Avatar"
                  className="w-full h-full object-cover"
                />
              </figure>
            </Link>
            </div>

            {/* Login Button */}
            <Link to="/login">
              <button className="bg-primaryColor py-2 px-6 text-white font-semibold h-[44px] flex items-center rounded-full shadow-lg">
                Login
              </button>
            </Link>

            {/* Mobile Menu Icon */}
            <span className="md:hidden" onClick={toggleMenu}>
              <BiMenu className="w-6 h-6 cursor-pointer text-gray-700" />
            </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
