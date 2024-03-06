import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import { Link } from "react-router-dom";
import { useTheme } from "next-themes";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { useState, useEffect } from "react";

const NavbarMaker = () => {
  const textStyle = "text-gray-800 dark:text-gray-100";
  const { theme, setTheme } = useTheme();
  const [selectedItem, setSelectedItem] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <Navbar isBlurred={true} className="justify-center">
      <NavbarContent>
        <NavbarBrand className={`text-lg med:text-3xl  font-sans ${textStyle}`}>
          Prices Nearby
        </NavbarBrand>
        <NavbarItem
          className={`mx-4 text-lg ${textStyle} hidden md:flex ${selectedItem === 0 ? "font-bold" : ""}`}
        >
          <Link to="/" onClick={() => setSelectedItem(0)}>
            Discover
          </Link>
        </NavbarItem>
        <NavbarItem
          className={`mx-4 text-lg ${textStyle} hidden md:flex ${selectedItem === 1 ? "font-bold" : ""}`}
        >
          <Link to="/test" onClick={() => setSelectedItem(1)}>
            Contribute
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button className="flex text-lg" variant="flat">
            <Link to="/">{isLoggedIn ? 'Log Out':'Log In'}</Link>
          </Button>
        </NavbarItem>
        <NavbarItem>
          {theme === "dark" ? (
            <Button
              className="text-2xl flex"
              onClick={() => setTheme("light")}
              variant="light"
            >
              <MdOutlineDarkMode />
            </Button>
          ) : (
            <Button
              className="text-2xl flex"
              onClick={() => setTheme("dark")}
              variant="light"
            >
              <MdOutlineLightMode />
            </Button>
          )}
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default NavbarMaker;
