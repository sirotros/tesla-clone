import React from 'react'
import s from "./Footer.module.scss"
function Footer() {
  return (
    <footer className={s.footer}>
      <ul className={s.footerList}>
        <li className={s.footerListItem}><a href="#">Tesla &copy; 2022</a></li>
        <li className={s.footerListItem}><a href="#">Privacy &amp; Legal</a></li>
        <li className={s.footerListItem}><a href="#">Vehicle Rcalls</a></li>
        <li className={s.footerListItem}><a href="#">Contact</a></li>
        <li className={s.footerListItem}><a href="#">Carerrs</a></li>
        <li className={s.footerListItem}><a href="#">News</a></li>
        <li className={s.footerListItem}><a href="#">Engage</a></li>
        <li className={s.footerListItem}><a href="#">Locations</a></li>
      </ul>
    </footer>
  )
}

export default Footer