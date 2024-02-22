import PropTypes from "prop-types";
import React, { Fragment } from "react";
import HeaderOne from "../wrappers/header/HeaderOne";
import FooterOne from "../wrappers/footer/FooterOne";

const LayoutOne = ({
    children,
    headerContainerClass,
    headerTop,
    headerPaddingClass,
    headerPositionClass
}) => {
    return (
        <Fragment>
            <div className="topbar topbar_temp02" id="topbar" style={{ backgroundColor: "#16a637", color: "white" }}>
                <div className="container-fluid">
                    <div className="topbar-content text-center">
                        <p style={{ padding: '4px 0', color: 'white', fontSize: '12px' }}>MIỄN PHÍ VẬN CHUYỂN ĐỐI VỚI ĐƠN HÀNG 100k</p>
                    </div>
                </div>
            </div>
            <HeaderOne
                layout={headerContainerClass}
                top={headerTop}
                headerPaddingClass={headerPaddingClass}
                headerPositionClass={headerPositionClass}
            />
            {children}
            <FooterOne
                backgroundColorClass="bg-gray"
                spaceTopClass="pt-100"
                spaceBottomClass="pb-10"
            />
        </Fragment>
    );
};

LayoutOne.propTypes = {
    children: PropTypes.any,
    headerContainerClass: PropTypes.string,
    headerPaddingClass: PropTypes.string,
    headerPositionClass: PropTypes.string,
    headerTop: PropTypes.string
};

export default LayoutOne;
