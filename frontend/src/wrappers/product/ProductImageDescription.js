// @ts-nocheck
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useToasts } from "react-toast-notifications";
import { getDiscountPrice } from "../../helpers/product";
import ProductImageGallery from "../../components/product/ProductImageGallery";
import ProductDescriptionInfo from "../../components/product/ProductDescriptionInfo";
import ProductImageGallerySideThumb from "../../components/product/ProductImageGallerySideThumb";
import ProductImageFixed from "../../components/product/ProductImageFixed";
import { checkTimeNow } from "../../helpers/func";
import { getItem } from "../../services";

const ProductImageDescription = ( {
	spaceTopClass,
	spaceBottomClass,
	galleryType,
	product,
	currency,
	cartItems,
	wishlistItems,
	compareItems
} ) =>
{
	const [ images, setImages ] = useState( null );
	const userId = getItem('id')


	const wishlistItem = wishlistItems.filter(
		wishlistItem => wishlistItem.id === product.id && wishlistItem.user_like === userId
	)[ 0 ];
	const compareItem = compareItems.filter(
		compareItem => compareItem.id === product.id
	)[ 0 ];
	const { addToast } = useToasts();


	const discountedPrice = (checkTimeNow(product?.sale_to) && product?.sale) ? getDiscountPrice( product.price, product.sale ) : null;
	const finalProductPrice = +( product.price * currency.currencyRate ).toFixed( 0 );
	const finalDiscountedPrice = +(discountedPrice * currency.currencyRate).toFixed( 0 );

	useEffect( () =>
	{
		let img = [];
		if ( product.avatar )
		{
			img.push( product.avatar );
		}
		if ( product?.product_images )
		{
			img = product.product_images.reduce( ( arr, e ) =>
			{
				arr.push( e.path );
				return arr
			}, img );
			console.log(img);
		}
		setImages( img );
		
	}, [] );

	return (
		<div
			className={ `shop-area ${ spaceTopClass ? spaceTopClass : "" } ${ spaceBottomClass ? spaceBottomClass : ""
				}` }
		>
			{
				product &&
				<div className="container">
					<div className="row">
						<div className="col-lg-6 col-md-6">
							{/* product image gallery */ }
							{
								images && <ProductImageGallery images={ images } product={product} />
							}
						</div>
						<div className="col-lg-6 col-md-6">
							{/* product description info */ }
							<ProductDescriptionInfo
								product={ product }
								discountedPrice={ discountedPrice }
								currency={ currency }
								finalDiscountedPrice={ finalDiscountedPrice }
								finalProductPrice={ finalProductPrice }
								cartItems={ cartItems }
								wishlistItem={ wishlistItem }
								compareItem={ compareItem }
								addToast={ addToast }
							/>
						</div>
					</div>
				</div>
			}

			{
				!product && <span>Lỗi dữ liệu</span>
			}

		</div>
	);
};

ProductImageDescription.propTypes = {
	cartItems: PropTypes.array,
	compareItems: PropTypes.array,
	currency: PropTypes.object,
	galleryType: PropTypes.string,
	product: PropTypes.object,
	spaceBottomClass: PropTypes.string,
	spaceTopClass: PropTypes.string,
	wishlistItems: PropTypes.array
};

const mapStateToProps = state =>
{
	return {
		currency: state.currencyData,
		cartItems: state.cartData,
		wishlistItems: state.wishlistData,
		compareItems: state.compareData
	};
};

export default connect( mapStateToProps )( ProductImageDescription );
