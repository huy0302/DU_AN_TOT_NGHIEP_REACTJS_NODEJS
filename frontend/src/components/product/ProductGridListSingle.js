// @ts-nocheck
import PropTypes from "prop-types";
import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import { getDiscountPrice } from "../../helpers/product";
import Rating from "./sub-components/ProductRating";
import ProductModal from "./ProductModal";
import { checkTimeNow, customNumber } from "../../helpers/func";
import { buildImage, getItem, onErrorImage } from "../../services";
import { timeDelay } from "../../helpers/constant";

const ProductGridListSingle = ( {
	product,
	currency,
	addToCart,
	addToWishlist,
	addToCompare,
	cartItem,
	wishlistItem,
	compareItem,
	sliderClassName,
	spaceBottomClass,
	removeWishList,
	deleteFromWishlist,
} ) =>
{
	const [ modalShow, setModalShow ] = useState( false );
	const { addToast } = useToasts();

	const discountedPrice = ( checkTimeNow( product?.sale_to ) && product?.sale ) ? getDiscountPrice( product.price, product.sale ) : null;
	const finalProductPrice = +( product.price * currency.currencyRate ).toFixed( 0 );
	const finalDiscountedPrice = +( discountedPrice * currency.currencyRate ).toFixed( 0 );
	const userId = getItem( 'id' );
	const actionWishList = async () =>
	{
		if ( removeWishList == true )
		{
			deleteFromWishlist( wishlistItem, addToast );
			window.location.href = '/wishlist';
		} else
		{
			addToWishlist( { ...product, user_like: userId }, addToast )

		}
	}
	return (
		<Fragment>
			<div
				className={ `col-lg-3 col-sm-4 ${ sliderClassName ? sliderClassName : ""
					}` }
			>
				<div
					className={ `product-wrap ${ spaceBottomClass ? spaceBottomClass : "" }` }
				>
					<div className="product-img">
						<Link to={ process.env.PUBLIC_URL + "/product/" + product.id }>
							<img
								className="default-img"
								src={ buildImage( product.avatar ) }
								alt={ buildImage( product.avatar ) }
								style={ { width: "100%", height: "270px", objectFit: "cover" } }
								onError={ onErrorImage }
							/>
							{ product?.product_images?.length > 0 ? (
								<img
									className="hover-img"
									src={buildImage(product.product_images[ 0 ].path)}
									alt={buildImage(product.product_images[ 0 ].path)}
									onError={ onErrorImage }
								/>
							) : (
								""
							) }
						</Link>
						{ product.sale && ( checkTimeNow( product?.sale_to ) && product?.sale ) ? (
							<div className="product-img-badges"><span className="pink">-{ product.sale }%</span>
								{/* {product.new ? <span className="purple">New</span> : ""} */ }
							</div>
						) : (
							""
						) }

						<div className="product-action">
							{
								userId != null && <div className="pro-same-action pro-wishlist">
									<button
										className={ wishlistItem !== undefined ? "active" : "" }
										disabled={ wishlistItem !== undefined && !removeWishList }
										title={
											wishlistItem !== undefined
												? ( removeWishList ? 'Remove from wishlist' : "Added to wishlist" )
												: "Add to wishlist"
										}
										onClick={ () => actionWishList() }
									>
										{ removeWishList ? <i className="fa fa-times" /> : <i className="pe-7s-like" /> }

									</button>
								</div>
							}
							<div className="pro-same-action pro-cart">
								{ product.affiliateLink ? (
									<a
										href={ product.affiliateLink }
										rel="noopener noreferrer"
										target="_blank"
									>
										{ " " }
										Buy now{ " " }
									</a>
								) : product?.variation && product?.variation?.length >= 1 ? (
									<Link to={ `${ process.env.PUBLIC_URL }/product/${ product.id }` }>
										Select Option
									</Link>
								) : product.number && product.number > 0 ? (
									<button
										onClick={ () => addToCart( product, addToast ) }
										className={
											cartItem !== undefined && cartItem.quantity > 0
												? "active"
												: ""
										}
										disabled={ cartItem !== undefined && cartItem.quantity > 0 }
										title={
											cartItem !== undefined ? "Added to cart" : "Thêm giỏ hàng"
										}
									>
										{ " " }
										<i className="pe-7s-cart"></i>{ " " }
										{ cartItem !== undefined && cartItem.quantity > 0
											? "Added"
											: "Thêm giỏ hàng" }
									</button>
								) : (
									<button disabled className="active">
										Out of Stock
									</button>
								) }
							</div>
							{/* <div className="pro-same-action pro-quickview">
								<button onClick={ () => setModalShow( true ) } title="Quick View">
									<i className="pe-7s-look" />
								</button>
							</div> */}
						</div>
					</div>
					<div className="product-content text-center">
						<h3>
							<Link to={ process.env.PUBLIC_URL + "/product/" + product.id }>
								{ product.name }
							</Link>
						</h3>
						{ product.rating && product.rating > 0 ? (
							<div className="product-rating">
								<Rating ratingValue={ product.rating } />
							</div>
						) : (
							""
						) }
						<div className="product-price">
							{ discountedPrice !== null ? (
								<Fragment>
									<span>{ customNumber( finalDiscountedPrice, 'đ' ) }</span>{ " " }
									<span className="old">
										{ customNumber( finalProductPrice, 'đ' ) }
									</span>
								</Fragment>
							) : (
								<span>{ customNumber( finalProductPrice, 'đ' ) } </span>
							) }
						</div>
					</div>
				</div>
				<div className="shop-list-wrap mb-30">
					<div className="row">
						<div className="col-xl-4 col-md-5 col-sm-6">
							<div className="product-list-image-wrap">
								<div className="product-img">
									<Link to={ process.env.PUBLIC_URL + "/product/" + product.id }>
										<img
											className="default-img"
											src={ buildImage( product.avatar ) }
											alt={ buildImage( product.avatar ) }
											onError={ onErrorImage }
										/>
										{ product?.product_images?.length > 0 ? (
											<img
												className="hover-img"
												src={buildImage(product.product_images[ 0 ].path)}
												alt={buildImage(product.product_images[ 0 ].path)}
												onError={ onErrorImage }
											/>
										) : (
											""
										) }
									</Link>
									{ product.sale || product.new ? (
										<div className="product-img-badges">
											{ product.sale && ( checkTimeNow( product?.sale_to ) && product?.sale ) ? (
												<span className="pink">-{ product.sale }%</span>
											) : (
												""
											) }
											{ product.new ? <span className="purple">New</span> : "" }
										</div>
									) : (
										""
									) }
								</div>
							</div>
						</div>
						<div className="col-xl-8 col-md-7 col-sm-6">
							<div className="shop-list-content">
								<h3>
									<Link to={ process.env.PUBLIC_URL + "/product/" + product.id }>
										{ product.name }
									</Link>
								</h3>
								<div className="product-list-price">
									{ discountedPrice !== null ? (
										<Fragment>
											<span>
												{ customNumber( finalDiscountedPrice, 'đ' ) }
											</span>{ " " }
											<span className="old">
												{ customNumber( finalProductPrice, 'đ' ) }
											</span>
										</Fragment>
									) : (
										<span>{ customNumber( finalProductPrice, 'đ' ) } </span>
									) }
								</div>
								{ product.rating && product.rating > 0 ? (
									<div className="rating-review">
										<div className="product-list-rating">
											<Rating ratingValue={ product.rating } />
										</div>
									</div>
								) : (
									""
								) }
								{ product.description ? (
									<p>{ product.description }</p>
								) : (
									""
								) }

								<div className="shop-list-actions d-flex align-items-center">
									<div className="shop-list-btn btn-hover">
										{ product.affiliateLink ? (
											<a
												href={ product.affiliateLink }
												rel="noopener noreferrer"
												target="_blank"
											>
												{ " " }
												Buy now{ " " }
											</a>
										) : product?.variation && product?.variation?.length >= 1 ? (
											<Link
												to={ `${ process.env.PUBLIC_URL }/product/${ product.id }` }
											>
												Select Option
											</Link>
										) : product.number && product.number > 0 ? (
											<button
												onClick={ () => addToCart( product, addToast ) }
												className={
													cartItem !== undefined && cartItem.quantity > 0
														? "active"
														: ""
												}
												disabled={
													cartItem !== undefined && cartItem.quantity > 0
												}
												title={
													cartItem !== undefined
														? "Added to cart"
														: "Thêm giỏ hàng"
												}
											>
												{ " " }
												<i className="pe-7s-cart"></i>{ " " }
												{ cartItem !== undefined && cartItem.quantity > 0
													? "Added"
													: "Thêm giỏ hàng" }
											</button>
										) : (
											<button disabled className="active">
												Out of Stock
											</button>
										) }
									</div>

									{/* <div className="shop-list-wishlist ml-10">
										<button
											className={ wishlistItem !== undefined ? "active" : "" }
											disabled={ wishlistItem !== undefined }
											title={
												wishlistItem !== undefined
													? "Added to wishlist"
													: "Add to wishlist"
											}
											onClick={ () => addToWishlist( product, addToast ) }
										>
											<i className="pe-7s-like" />
										</button>
									</div>
									<div className="shop-list-compare ml-10">
										<button
											className={ compareItem !== undefined ? "active" : "" }
											disabled={ compareItem !== undefined }
											title={
												compareItem !== undefined
													? "Added to compare"
													: "Add to compare"
											}
											onClick={ () => addToCompare( product, addToast ) }
										>
											<i className="pe-7s-shuffle" />
										</button>
									</div> */}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* product modal */ }
			<ProductModal
				show={ modalShow }
				onHide={ () => setModalShow( false ) }
				product={ product }
				currency={ currency }
				discountedprice={ discountedPrice }
				finalproductprice={ finalProductPrice }
				finaldiscountedprice={ finalDiscountedPrice }
				cartitem={ cartItem }
				wishlistitem={ wishlistItem }
				compareitem={ compareItem }
				addtocart={ addToCart }
				addtowishlist={ addToWishlist }
				addtocompare={ addToCompare }
				addtoast={ addToast }
			/>
		</Fragment>
	);
};

ProductGridListSingle.propTypes = {
	addToCart: PropTypes.func,
	addToCompare: PropTypes.func,
	addToWishlist: PropTypes.func,
	cartItem: PropTypes.object,
	compareItem: PropTypes.object,
	currency: PropTypes.object,
	product: PropTypes.object,
	sliderClassName: PropTypes.string,
	spaceBottomClass: PropTypes.string,
	wishlistItem: PropTypes.object,
	deleteFromWishlist: PropTypes.func
};

export default ProductGridListSingle;
