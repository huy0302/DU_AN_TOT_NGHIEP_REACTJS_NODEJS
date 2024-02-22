import PropTypes from "prop-types";
import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import MetaTags from "react-meta-tags";
import { connect } from "react-redux";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import { getDiscountPrice } from "../../helpers/product";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import { checkTimeNow, customNumber } from "../../helpers/func";
import { CheckoutForm } from "../../components/checkout/checkoutForm";
import { SUCCESS_PAYMENT } from "../../helpers/constant";

const Checkout = ( { location, cartItems, currency } ) =>
{
	const { pathname } = location;
	let cartTotalPrice = 0;

	const [ submit, setSubmit ] = useState( false );
	const [ paymentType, setPaymentType ] = useState( 1 );
	const [ form, setForm ] = useState( {} );


	return (
		<Fragment>
			<MetaTags>
				<title>VITAGREEN Checkout</title>
				<meta
					name="description"
					content="Checkout page of shop react minimalist eCommerce template."
				/>
			</MetaTags>
			<BreadcrumbsItem to={ process.env.PUBLIC_URL + "/" }>Trang chủ</BreadcrumbsItem>
			<BreadcrumbsItem to={ process.env.PUBLIC_URL + pathname }>
			Thủ tục thanh toán
			</BreadcrumbsItem>
			<LayoutOne headerTop="visible">
				{/* breadcrumb */ }
				<Breadcrumb />
				<div className="checkout-area pt-95 pb-100">
					<div className="container">
						{ cartItems && cartItems.length >= 1 ? (
							<div className="row">
								<div className="col-lg-7">
									<div className="billing-info-wrap">
										<h3>Chi tiết đơn hàng</h3>
										<CheckoutForm paymentType={ paymentType } submit={ submit } setSubmit={ setSubmit } cartItem={ cartItems } />
									</div>
								</div>

								<div className="col-lg-5">
									<div className="your-order-area">
										<h3>Đơn hàng</h3>
										<div className="your-order-wrap gray-bg-4">
											<div className="your-order-product-info">
												<div className="your-order-top">
													<ul>
														<li>Sản phẩm</li>
														<li>Giá</li>
													</ul>
												</div>
												<div className="your-order-middle">
													<ul>
														{ cartItems.map( ( cartItem, key ) =>
														{
															const discountedPrice = ( checkTimeNow( cartItem?.sale_to ) && cartItem.sale ) ? Number( getDiscountPrice(
																cartItem.price,
																cartItem.sale
															) ) : null;
															const finalProductPrice = Number( (
																cartItem.price
															).toFixed( 0) );
															const finalDiscountedPrice = Number( (
																discountedPrice * currency.currencyRate
															).toFixed( 0 ) );
															discountedPrice != null && discountedPrice != 0
																? ( cartTotalPrice +=
																	finalDiscountedPrice * cartItem.quantity )
																: ( cartTotalPrice +=
																	finalProductPrice * cartItem.quantity );
															return (
																<li key={ key }>
																	<span className="order-middle-left">
																		{ cartItem.name } X { cartItem.quantity }
																	</span>{ " " }
																	<span className="order-price">
																		{ discountedPrice !== null && discountedPrice != 0
																			? customNumber( ( finalDiscountedPrice * cartItem.quantity ).toFixed( 0 ), '₫' )
																			: customNumber( ( finalProductPrice * cartItem.quantity ).toFixed( 0 ), '₫' ) }
																	</span>
																</li>
															);
														} ) }
													</ul>
												</div>
												<div className="your-order-bottom">
													<ul>
														<li className="your-order-shipping">Phí giao hàng</li>
														<li>Miễn phí</li>
													</ul>
												</div>
												<div className="your-order-total">
													<ul>
														<li className="order-total">Giá trị đơn hàng</li>
														<li>
															{ customNumber( cartTotalPrice.toFixed( 2 ), '₫' ) }
														</li>
													</ul>
												</div>
											</div>
											<div className="payment-method"></div>
										</div>
										<div className="place-order mt-25">
											<button className="btn-hover" onClick={ e =>
											{
												setSubmit( true );
												setPaymentType( 0 );
											} }>
												Tiền mặt
											</button>
										</div>
										<div className="place-order mt-25">
											<button className="btn-hover btn-danger"
												onClick={ e =>
												{
													setSubmit( true );
													setPaymentType( 1 );
												} }>Thanh toán online(VNPay)</button>
										</div>
									</div>
								</div>
							</div>
						) : (
							<div className="row">
								<div className="col-lg-12">
									<div className="item-empty-area text-center">
										<div className="item-empty-area__icon mb-30">
											<img src={ SUCCESS_PAYMENT } width={80} height={80} alt='payment' className="d-block mx-auto" />
										</div>
										<div className="item-empty-area__text">
											Đơn hàng đặt thành công <br />{ " " }
											<Link to={ process.env.PUBLIC_URL + "/shop" }>
												TIẾP MỤC MUA SẮM
											</Link>
										</div>
									</div>
								</div>
							</div>
						) }
					</div>
				</div>
			</LayoutOne>
		</Fragment>
	);
};

Checkout.propTypes = {
	cartItems: PropTypes.array,
	currency: PropTypes.object,
	location: PropTypes.object
};

const mapStateToProps = state =>
{
	return {
		cartItems: state.cartData,
		currency: state.currencyData
	};
};

export default connect( mapStateToProps )( Checkout );
