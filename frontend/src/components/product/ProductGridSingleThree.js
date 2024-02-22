import PropTypes from "prop-types";
import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import { getDiscountPrice } from "../../helpers/product";
import ProductModal from "./ProductModal";
import { buildImage, onErrorImage } from "../../services";
import { checkTimeNow } from "../../helpers/func";

const ProductGridSingleThree = ( {
	product,
	currency,
	addToCart,
	addToWishlist,
	addToCompare,
	cartItem,
	wishlistItem,
	compareItem,
	sliderClassName,
	spaceBottomClass
} ) =>
{
	const [ modalShow, setModalShow ] = useState( false );
	const { addToast } = useToasts();

	const discountedPrice = getDiscountPrice( product.price, product.discount );
	const finalProductPrice = +( product.price * currency.currencyRate ).toFixed( 0 );
	const finalDiscountedPrice = +(
		discountedPrice * currency.currencyRate
	).toFixed( 0 );

	return (
		<Fragment>
			<div
				className={ `custom2-col-5 ${ sliderClassName ? sliderClassName : "" }` }
			>
				<div
					className={ `product-wrap-2 pro-glaucous-color ${ spaceBottomClass ? spaceBottomClass : ""
						}` }
				>
					<div className="product-img">
						<Link to={ process.env.PUBLIC_URL + "/product/" + product.id }>
							<img
								className="default-img"
								src={ buildImage( product.avatar ) }
								alt=""
							/>
							{ product?.product_images?.length > 0 ? (
								<img
									className="hover-img"
									src={buildImage(product.product_images[ 0 ].path)}
									alt={buildImage(product.product_images[ 0 ].path)}
									onError={ onErrorImage}
								/>
							) : (
								""
							) }
						</Link>
						{ product.sale || product.hot === 1 ? (
							<div className="product-img-badges">
								{ product.sale && ( checkTimeNow( product?.sale_to ) && product?.sale ) ? (
									<span className="pink">-{ product.sale }%</span>
								) : (
									""
								) }
								{ product.hot === 1 ? <span className="purple">Hot</span> : "" }
							</div>
						) : (
							""
						) }

						<div className="product-action-2">
							{ product.affiliateLink ? (
								<a
									href={ product.affiliateLink }
									rel="noopener noreferrer"
									target="_blank"
									title="Buy now"
								>
									{ " " }
									<i className="fa fa-shopping-cart"></i>{ " " }
								</a>
							) : product.variation && product.variation.length >= 1 ? (
								<Link
									to={ `${ process.env.PUBLIC_URL }/product/${ product.id }` }
									title="Select options"
								>
									<i class="fa fa-cog"></i>
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
									<i className="fa fa-shopping-cart"></i>{ " " }
								</button>
							) : (
								<button disabled className="active" title="Out of stock">
									<i className="fa fa-shopping-cart"></i>
								</button>
							) }

							{/* <button onClick={() => setModalShow(true)} title="Quick View">
                <i className="fa fa-eye"></i>
              </button> */}

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
								<i className="fa fa-retweet"></i>
							</button>
						</div>
					</div>
					<div className="product-content-2">
						<div className="title-price-wrap-2">
							<h3>
								<Link to={ process.env.PUBLIC_URL + "/product/" + product.id }>
									{ product.name }
								</Link>
							</h3>
							<div className="price-2">
								{ discountedPrice !== null ? (
									<Fragment>
										<span>
											{ currency.currencySymbol + finalDiscountedPrice }
										</span>{ " " }
										<span className="old">
											{ currency.currencySymbol + finalProductPrice }
										</span>
									</Fragment>
								) : (
									<span>{ currency.currencySymbol + finalProductPrice } </span>
								) }
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

ProductGridSingleThree.propTypes = {
	addToCart: PropTypes.func,
	addToCompare: PropTypes.func,
	addToWishlist: PropTypes.func,
	cartItem: PropTypes.object,
	compareItem: PropTypes.object,
	currency: PropTypes.object,
	product: PropTypes.object,
	sliderClassName: PropTypes.string,
	spaceBottomClass: PropTypes.string,
	wishlistItem: PropTypes.object
};

export default ProductGridSingleThree;
