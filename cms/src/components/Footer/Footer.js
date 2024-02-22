import React from "react";
import FooterIcon from "../Icons/FooterIcon";
import s from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={s.footer}>
      <span className={s.footerLabel}>
        <strong style={{ color: 'green', fontSize: '25px' }}>2023 &copy; TRANG QUẢN TRỊ CỦA VITAGREEN</strong>
      </span>
      <FooterIcon />
    </div>
  )
}
export default Footer;