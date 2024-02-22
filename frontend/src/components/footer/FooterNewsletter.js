import PropTypes from "prop-types";
import React from "react";
import SubscribeEmail from "./sub-components/SubscribeEmail";

const FooterNewsletter = ({
  spaceBottomClass,
  spaceLeftClass,
  sideMenu,
  colorClass,
  widgetColorClass
}) => {
  // Tạo đối tượng style để chứa CSS
  const buttonStyle = {
    display: "inline-block",
    padding: "10px 20px",
    backgroundColor: "#4CAF50",
    color: "#fff",
    textDecoration: "none",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease"
  };

  return (
    <div
      className={`footer-widget ${spaceBottomClass ? spaceBottomClass : ""} ${sideMenu ? "ml-ntv5" : spaceLeftClass ? spaceLeftClass : ""
        } ${widgetColorClass ? widgetColorClass : ""}`}
    >
      <div className="footer-title">
        <h3>LIÊN VỚI CHÚNG TÔI</h3>
      </div>
      <div className={`subscribe-style ${colorClass ? colorClass : ""}`}>

        <p style={{ width: "500px" }}> <i class="fa fa-map-marker" aria-hidden="true"></i> &nbsp;
          Công viên phần mềm Quang Trung, Q.12, Thành phố Hồ Chí Minh</p>
        <p> <i class="fa fa-phone" aria-hidden="true"></i> &nbsp; 0865.405.630</p>
        <p> <i class="fa fa-envelope" aria-hidden="true"></i> &nbsp; huynguyen03022003@gmail.com</p>
        <a href="/lien-he" style={buttonStyle}>Liên hệ</a>
      </div>
    </div>
  );
};
FooterNewsletter.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceLeftClass: PropTypes.string,
  colorClass: PropTypes.string,
  widgetColorClass: PropTypes.string
};

export default FooterNewsletter;
