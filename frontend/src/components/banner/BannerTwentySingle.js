import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { buildImage, onErrorImage } from "../../services";

const BannerTwentySingle = ({ data, spaceBottomClass }) => {
    return (
        <div className="col-lg-4 col-md-4">
            <div
                className={`single-banner-2 ${
                    spaceBottomClass ? spaceBottomClass : ""
                } ${data.textAlign === "right" ? "align_right" : ""}`}
            >
                <Link to={{pathname: '/shop', search: `?category_id=${data.id}`}} qu>
                    <img style={{objectFit: "cover", maxHeight: "450px"}}
                         src={buildImage(data.avatar)} alt={data.name} onError={onErrorImage} />
                </Link>
                {/*<div className="banner-content-2 banner-content-2--style2 banner-content-2--style2--pink">*/}
                {/*    <h3>{data.name}</h3>*/}
                {/*    <h4>*/}
                {/*        {data.description}*/}
                {/*    </h4>*/}
                {/*    <Link to={`/shop?category_id=${data.id}`}>*/}
                {/*        <i className="fa fa-long-arrow-right" />*/}
                {/*    </Link>*/}
                {/*</div>*/}
            </div>
        </div>
    );
};

BannerTwentySingle.propTypes = {
    data: PropTypes.object,
    spaceBottomClass: PropTypes.string
};

export default BannerTwentySingle;
