import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

const Logo = ({ imageUrl, logoClass }) => {
    return (
        <div className={`${logoClass ? logoClass : ""}`}>
            <Link to={process.env.PUBLIC_URL + "/"}>
                <h2 className="text-nowrap font-weight-bold">
                    <img className={'w-100'} src="/assets/logo.jpg" alt="logo"/>
                </h2>
            </Link>
        </div>
    );
};

Logo.propTypes = {
    imageUrl: PropTypes.string,
    logoClass: PropTypes.string
};

export default Logo;
