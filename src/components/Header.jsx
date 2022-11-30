import React from "react";
import "../assets/css/header.scss";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import Ramanalogo from "./Ramanalogo";
const Header = () => {
  document.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    window.pageYOffset > 10
      ? header.classList.add("header__active")
      : header.classList.remove("header__active");
  });
  return (
    <div className="header ">
      <div className="header__container container">
        <div className="header__container__row row">
          <div className="header__container__row__logo col-6">
            <Ramanalogo />
          </div>
          <div className="header__container__row__navs col-6">
            <ul className="header__container__row__navs__ul">
              <li>
                <Link className="nav__links">products</Link>
              </li>
              <li>
                <Link className="nav__links">about</Link>
              </li>
              <li>
                <Link className="nav__links">contact</Link>
              </li>
            </ul>
            <ul className="header__container__row__navs__icons">
              <li>
                <Link className="nav__icons__link">
                  <CiSearch />
                </Link>
              </li>
              <li>
                <Link className="nav__icons__link">
                  <CiSearch />
                </Link>
              </li>
              <li>
                <Link className="nav__icons__link">
                  <CiSearch />
                </Link>
              </li>
              <li>
                <Link className="nav__icons__link">
                  <CiSearch />
                </Link>
              </li>
              <li>
                <Link className="nav__icons__link">
                  <CiSearch />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
