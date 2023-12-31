import { useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../style";
import { getNavLinks } from "../constants";
import { menu, close, Rlogo } from "../assets";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [isActive, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const navLinks= getNavLinks();

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={Rlogo} alt={Rlogo} className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer">
            Ricardo Estrella &nbsp;
            <span className="sm:block hidden">| Web Developer</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                isActive === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
          <li
            onClick={() => {
              changeLanguage("en")
              setToggle(!toggle);
            }}
            className={`${
              i18n.language === "en"
                ? "text-white font-medium"
                : "text-secondary"
            } text-sm hover:underline cursor-pointer self-center font-normal`}
          >
            en
          </li>
          <li
            onClick={() => {
              changeLanguage("es")
              setToggle(!toggle);
            }}
            className={`${
              i18n.language === "es"
                ? "text-white font-medium"
                : "text-secondary"
            } text-sm hover:underline cursor-pointer self-center font-normal`}
          >
            es
          </li>
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              toggle ? "flex" : "hidden"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    isActive === link.title ? "text-white" : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
              <li
                onClick={() => {
                  changeLanguage("en")
                  setToggle(!toggle);
                }}
                className={`${
                  i18n.language === "en"
                    ? "text-white font-medium"
                    : "text-secondary"
                } text-sm self-center font-normal`}
              >
                English
              </li>
              <li
                onClick={() => {
                  changeLanguage("es")
                  setToggle(!toggle);
                }}
                className={`${
                  i18n.language === "es"
                    ? "text-white font-medium"
                    : "text-secondary"
                } text-sm self-center font-normal`}
              >
                Español
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
