import PropTypes from "prop-types";
import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import { connect } from "react-redux";
import { getDiscountPrice } from "../../helpers/product";
import
	{
		addToCart,
		decreaseQuantity,
		deleteFromCart,
		cartItemStock,
		deleteAllFromCart
	} from "../../redux/actions/cartActions";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import { checkTimeNow, customNumber } from "../../helpers/func";
import { buildImage, onErrorImage } from "../../services";

const Cart = ( {
	location,
	cartItems,
	currency,
	decreaseQuantity,
	addToCart,
	deleteFromCart,
	deleteAllFromCart
} ) =>
{
	const [ quantityCount ] = useState( 1 );
	const { addToast } = useToasts();
	const { pathname } = location;
	console.log(cartItems);
	let cartTotalPrice = 0;

	return (
		<Fragment>
			<MetaTags>
				<title>VITAGREEN | Cart</title>
				<meta
					name="description"
					content="Cart page of flone react minimalist eCommerce template."
				/>
			</MetaTags>

			<BreadcrumbsItem to={ process.env.PUBLIC_URL + "/" }>Trang chủ</BreadcrumbsItem>
			<BreadcrumbsItem to={ process.env.PUBLIC_URL + pathname }>
				Giỏ hàng
			</BreadcrumbsItem>

			<LayoutOne headerTop="visible">
				{/* breadcrumb */ }
				<Breadcrumb />
				<div className="cart-main-area pt-90 pb-100">
					<div className="container">
						{ cartItems && cartItems.length >= 1 ? (
							<Fragment>
								<h3 className="cart-page-title">GIỎ HÀNG CỦA BẠN</h3>
								<div className="row">
									<div className="col-12">
										<div className="table-content table-responsive cart-table-content">
											<table>
												<thead>
													<tr>
														<th>HÌNH ẢNH</th>
														<th>TÊN SẢN PHẨM</th>
														<th>GIÁ SẢN PHẨM</th>
														<th>GIẢM GIÁ</th>
														<th>SỐ LƯỢNG</th>
														<th>TỔNG GIÁ</th>
														<th>THAO TÁC</th>
													</tr>
												</thead>
												<tbody>
													{ cartItems.map( ( cartItem, key ) =>
													{
														

														const discountedPrice = (checkTimeNow(cartItem?.sale_to)  && cartItem.sale)? Number(getDiscountPrice(
															cartItem.price,
															cartItem.sale
														)) : null;
														
														const finalProductPrice = (
															cartItem.price * currency.currencyRate
														).toFixed( 0 );
														const finalDiscountedPrice = (
															discountedPrice * currency.currencyRate
														).toFixed( 0 );

														discountedPrice !== null
															? ( cartTotalPrice +=
																finalDiscountedPrice * cartItem.quantity )
															: ( cartTotalPrice +=
																finalProductPrice * cartItem.quantity );
																console.log(cartItem.id, discountedPrice);
														return (
															<tr key={ key }>
																<td className="product-thumbnail">
																	<Link
																		to={
																			process.env.PUBLIC_URL +
																			"/product/" +
																			cartItem.id
																		}
																	>
																		<img
																			className="img-fluid"
																			src={ buildImage( cartItem.avatar ) }
																			alt={ buildImage( cartItem.avatar ) }
																			onError={ onErrorImage }
																		/>
																	</Link>
																</td>

																<td className="product-name">
																	<Link
																		to={
																			process.env.PUBLIC_URL +
																			"/product/" +
																			cartItem.id
																		}
																	>
																		{ cartItem.name }
																	</Link>
																</td>
																

																<td className="product-price-cart">
																	{ discountedPrice !== null ? (
																		<Fragment>
																			<span className="amount old">
																				{
																					customNumber( finalProductPrice, 'đ' ) }
																			</span>
																			<span className="amount">
																				{
																					customNumber( finalDiscountedPrice, 'đ' ) }
																			</span>
																		</Fragment>
																	) : (
																		<span className="amount">
																			{
																				customNumber( finalProductPrice, 'đ' ) }
																		</span>
																	) }
																</td>

																<td>
																	{discountedPrice !== null ? 
																		<span className="amount">
																			{customNumber(finalProductPrice - finalDiscountedPrice), 'đ'}
																		</span>
																	: "0"}
																</td>

																<td className="product-quantity">
																	<div className="cart-plus-minus">
																		<button
																			className="dec qtybutton"
																			onClick={ () =>
																				decreaseQuantity( cartItem, addToast )
																			}
																		>
																			-
																		</button>
																		<input
																			className="cart-plus-minus-box"
																			type="text"
																			value={ cartItem.quantity }
																			readOnly
																		/>
																		<button
																			className="inc qtybutton"
																			onClick={ () =>
																				addToCart(
																					cartItem,
																					addToast,
																					quantityCount
																				)
																			}
																			disabled={
																				cartItem !== undefined &&
																				cartItem.quantity &&
																				cartItem.quantity >=
																				cartItemStock(
																					cartItem,
																					cartItem.selectedProductColor,
																					cartItem.selectedProductSize
																				)
																			}
																		>
																			+
																		</button>
																	</div>
																</td>
																<td className="product-subtotal">
																	{ discountedPrice !== null
																		? customNumber( ( finalDiscountedPrice * cartItem.quantity ).toFixed( 0 ), 'đ' )
																		: customNumber( ( finalProductPrice * cartItem.quantity ).toFixed( 0 ), 'đ' ) }
																</td>

																<td className="product-remove">
																	<button
																		onClick={ () =>
																			deleteFromCart( cartItem, addToast )
																		}
																	>
																		<i className="fa fa-times"></i>
																	</button>
																</td>
															</tr>
														);
													} ) }
												</tbody>
											</table>
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col-lg-12">
										<div className="cart-shiping-update-wrapper">
											<div className="cart-shiping-update">
												<Link
													to={ "/shop" }
												>
													TIẾP TỤC MUA SẮM
												</Link>
											</div>
											<div className="cart-clear">
												<button onClick={ () => deleteAllFromCart( addToast ) }>
													XÓA TOÀN BỘ SẢN PHẨM
												</button>
											</div>
										</div>
									</div>
								</div>

								<div className="row justify-content-end">

									<div className="col-lg-4 col-md-12">
										<div className="grand-totall">
											<div className="title-wrap">
												<h4 className="cart-bottom-title section-bg-gary-cart">
													TỔNG GIỎ HÀNG
												</h4>
											</div>
											<h5>
												TỔNG ĐƠN HÀNG{ " " }
												<span>
													{ customNumber( cartTotalPrice.toFixed( 0 ), 'đ' ) }
												</span>
											</h5>

											<h4 className="grand-totall-title">
												TỔNG CỘNG{ " " }
												<span>
													{ customNumber( cartTotalPrice.toFixed( 0 ), 'đ' ) }
												</span>
											</h4>
											<Link to={ localStorage.getItem( 'access_token' ) ? process.env.PUBLIC_URL + "/checkout" : process.env.PUBLIC_URL + "auth/login" }>
												TIẾN HÀNH THANH TOÁN
											</Link>
										</div>
									</div>
								</div>
							</Fragment>
						) : (
							<div className="row">
								<div className="col-lg-12">
									<div className="item-empty-area text-center">
										<div className="item-empty-area__icon mb-30">
											<i className="pe-7s-cart"></i>
										</div>
										<div className="item-empty-area__text">
											No items found in cart <br />{ " " }
											<Link to={ process.env.PUBLIC_URL + "/shop" }>
												Shop Now
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

Cart.propTypes = {
	addToCart: PropTypes.func,
	cartItems: PropTypes.array,
	currency: PropTypes.object,
	decreaseQuantity: PropTypes.func,
	location: PropTypes.object,
	deleteAllFromCart: PropTypes.func,
	deleteFromCart: PropTypes.func
};

const mapStateToProps = state =>
{
	return {
		cartItems: state.cartData,
		currency: state.currencyData
	};
};

const mapDispatchToProps = dispatch =>
{
	return {
		addToCart: ( item, addToast, quantityCount ) =>
		{
			dispatch( addToCart( item, addToast, quantityCount ) );
		},
		decreaseQuantity: ( item, addToast ) =>
		{
			dispatch( decreaseQuantity( item, addToast ) );
		},
		deleteFromCart: ( item, addToast ) =>
		{
			dispatch( deleteFromCart( item, addToast ) );
		},
		deleteAllFromCart: addToast =>
		{
			dispatch( deleteAllFromCart( addToast ) );
		}
	};
};

export default connect( mapStateToProps, mapDispatchToProps )( Cart );
