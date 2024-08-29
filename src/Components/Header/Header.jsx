import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import logo from "../../assets/logo.jpg";

const Header = () => {
  const [sidebar, setSidebar] = useState(false);

  const changeSize = () => {
    if (window.innerWidth >= 768) setSidebar(false);
  };

  useEffect(() => {
    window.addEventListener('resize', changeSize);
    return () => window.removeEventListener('resize', changeSize);
  }, []);

  return (
    <>
      <header className="h-20 w-full shadow-md z-50 fixed top-0 left-0 font-texts flex justify-between items-center px-4 md:px-8 bg-background text-typography">
        {/* FOR LARGE SCREEN DEVICES */}
        <nav className="flex justify-between items-center w-full">
          {/* Logo Section */}
          <div className="flex items-center h-full">
            <Link to="/" className="flex items-center h-full">
              <img 
                src={logo} 
                alt="Kura Fashion Logo" 
                className="h-full max-h-16 w-auto object-contain" 
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <ul className="hidden md:flex justify-between items-center font-semibold text-lg space-x-6">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `relative transition duration-300 ease-in-out after:transition after:duration-300 after:ease-in-out ${
                    isActive
                      ? 'after:content-[""] after:w-2/3 after:absolute after:h-[0.13rem] text-primary after:bg-primary after:bottom-0 after:left-0'
                      : 'hover:after:content-[""] hover:after:w-2/3 hover:after:absolute hover:after:h-[0.13rem] hover:text-primary hover:after:bg-primary hover:after:bottom-0 hover:after:left-0'
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/shop"
                className={({ isActive }) =>
                  `relative transition duration-300 ease-in-out after:transition after:duration-300 after:ease-in-out ${
                    isActive
                      ? 'after:content-[""] after:w-2/3 after:absolute after:h-[0.13rem] text-primary after:bg-primary after:bottom-0 after:left-0'
                      : 'hover:after:content-[""] hover:after:w-2/3 hover:after:absolute hover:after:h-[0.13rem] hover:text-primary hover:after:bg-primary hover:after:bottom-0 hover:after:left-0'
                  }`
                }
              >
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `relative transition duration-300 ease-in-out after:transition after:duration-300 after:ease-in-out ${
                    isActive
                      ? 'after:content-[""] after:w-2/3 after:absolute after:h-[0.13rem] text-primary after:bg-primary after:bottom-0 after:left-0'
                      : 'hover:after:content-[""] hover:after:w-2/3 hover:after:absolute hover:after:h-[0.13rem] hover:text-primary hover:after:bg-primary hover:after:bottom-0 hover:after:left-0'
                  }`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/cart"
                className={({ isActive }) =>
                  `transition duration-300 hover:text-primary ${
                    isActive ? 'text-primary' : ''
                  }`
                }
              >
                <ShoppingBagOutlinedIcon />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/account"
                className={({ isActive }) =>
                  `transition duration-300 hover:text-primary ${
                    isActive ? 'text-primary' : ''
                  }`
                }
              >
                <AccountCircleOutlinedIcon />
              </NavLink>
            </li>
          </ul>

          {/* Hamburger Icon for Small Screens */}
          <div
            className="md:hidden cursor-pointer transition-transform duration-300 transform hover:scale-110"
            onClick={() => setSidebar(true)}
          >
            <MenuIcon />
          </div>
        </nav>

        {/* FOR SMALL SCREEN DEVICES, THE SIDEBAR IS USED */}
        {sidebar && (
          <div className="fixed inset-0 bg-background/60 z-40">
            <div
              className="w-2/3 h-full fixed top-0 right-0 bg-background shadow-lg p-6 z-50"
              onClick={() => setSidebar(false)}
            >
              <div className="text-primary text-3xl absolute top-4 right-4 cursor-pointer transition-transform duration-300 transform hover:scale-110">
                <CloseIcon />
              </div>
              <nav className="flex flex-col items-start mt-16 space-y-8">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block text-lg font-semibold transition duration-300 ${
                      isActive ? 'text-primary' : ''
                    } hover:text-primary`
                  }
                  onClick={() => setSidebar(false)}
                >
                  Home
                </NavLink>
                <NavLink
                  to="/shop"
                  className={({ isActive }) =>
                    `block text-lg font-semibold transition duration-300 ${
                      isActive ? 'text-primary' : ''
                    } hover:text-primary`
                  }
                  onClick={() => setSidebar(false)}
                >
                  Shop
                </NavLink>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block text-lg font-semibold transition duration-300 ${
                      isActive ? 'text-primary' : ''
                    } hover:text-primary`
                  }
                  onClick={() => setSidebar(false)}
                >
                  About
                </NavLink>
                <NavLink
                  to="/cart"
                  className={({ isActive }) =>
                    `block text-lg font-semibold transition duration-300 ${
                      isActive ? 'text-primary' : ''
                    } hover:text-primary`
                  }
                  onClick={() => setSidebar(false)}
                >
                  Cart
                </NavLink>
                <NavLink
                  to="/account"
                  className={({ isActive }) =>
                    `block text-lg font-semibold transition duration-300 ${
                      isActive ? 'text-primary' : ''
                    } hover:text-primary`
                  }
                  onClick={() => setSidebar(false)}
                >
                  Account
                </NavLink>
              </nav>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
