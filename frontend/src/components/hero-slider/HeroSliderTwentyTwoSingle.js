import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { buildImage } from "../../services";

const HeroSliderTwentyTwoSingle = ({ data, sliderClass }) => {
    return (
        <div
            className={`single-slider-2 slider-height-2 d-flex align-items-center bg-img ${sliderClass ? sliderClass : ""
                }`}
            style={{ backgroundImage: `url(${buildImage(data.avatar)})`, height: '60vh' }}
        >
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-7 col-md-8 col-12">
                        <div className="slider-content-2 slider-content-2--style2 slider-content-2--style2--white slider-animated-1">
                            
                            {/* <h1
                className="animated"
                dangerouslySetInnerHTML={{ __html: data.subtitle }}
              /> */}
                            {/* <p className="animated">{data.text}</p> */}
                            <div className="slider-btn btn-hover ">
                                <Link
                                    className="animated rounden-btn bg-primary"
                                    to={process.env.PUBLIC_URL + '/shop'}
                                >
                                    MUA NGAY
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

HeroSliderTwentyTwoSingle.propTypes = {
    data: PropTypes.object,
    sliderClass: PropTypes.string
};

export default HeroSliderTwentyTwoSingle;
