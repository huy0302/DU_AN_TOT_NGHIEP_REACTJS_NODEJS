import PropTypes from "prop-types";
import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BANNER_1, BANNER_2, BANNER_3, BANNER_4 } from "../../helpers/constant";

const BannerPage = () =>
{
	return (
		<Container>
			<div className="row pt-100 product-area">
				<div className="col-12 col-md-3 my-3">
					<div className="icon-banner text-center bg-1 d-flex 
					justify-content-center align-items-center">
						<img src={ BANNER_1 } width={ 40 } height={ 40 } />
					</div>
					<div className="banner-content text-center">
						<h4>GIAO HÀNG MIỄN PHÍ</h4>
						<p>CHO DƠN HÀNG TỪ 100K</p>
					</div>
				</div>
				<div className="col-12 col-md-3 my-3">
					<div className="icon-banner text-center  bg-2 d-flex 
					justify-content-center align-items-center">
						<img src={ BANNER_2 } width={ 40 } height={ 40 } />
					</div>
					<div className="banner-content text-center">
						<h4>LUÔN TƯƠI MỚI</h4>
						<p>GÓI SẢN PHẨM TỐT</p>
					</div>
				</div>
				<div className="col-12 col-md-3 my-3">
					<div className="icon-banner text-center bg-3 d-flex 
					justify-content-center align-items-center">
						<img src={ BANNER_3 } width={ 40 } height={ 40 } />
					</div>
					<div className="banner-content text-center">
						<h4>CHẤT LƯỢNG CAO</h4>
						<p>CHẤT LƯỢNG SẢN PHẨM</p>
					</div>
				</div>
				<div className="col-12 col-md-3 my-3">
					<div className="icon-banner text-center bg-4 d-flex 
					justify-content-center align-items-center">
						<img src={ BANNER_4 } width={ 40 } height={ 40 } />
					</div>
					<div className="banner-content text-center">
						<h4>HỖ TRỢ</h4>
						<p>HỖ TRỢ 24/7</p>
					</div>
				</div>
			</div>
		</Container>
	);
};

export default BannerPage;
