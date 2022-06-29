import React from "react";
import s from "./Header.module.scss";
import logo from "../../assets/tesla-logo.png";
function Header() {
  return (
    <header className={s.header}>
      <span className={s.navStart}>
        <img src={logo} alt="logo" className={s.logo} />
      </span>
      <ul className={s.navCenter}>
        <li className={s.navItem}>Model S</li>
        <li className={s.navItem}>Model 3</li>
        <li className={s.navItem}>Model X</li>
        <li className={s.navItem}>Model Y</li>
        <li className={s.navItem}>Solar Rood</li>
        <li className={s.navItem}>Solar Panels</li>
      </ul>
      <ul className={s.navEnd}>
        <li className={s.navItem}>Shop</li>
        <li className={s.navItem}>Account</li>
        <li className={s.navItem}>Menu</li>
      </ul>
    </header>
  );
}
export default Header;
