import PropTypes from "prop-types";
import React, { Fragment } from "react";
import { connect } from "react-redux";
import { addToCart } from "../../redux/actions/cartActions";
import { addToWishlist, deleteFromWishlist } from "../../redux/actions/wishlistActions";
import { addToCompare } from "../../redux/actions/compareActions";
import ProductGridListSingle from "../../components/product/ProductGridListSingle";
import { getItem } from "../../services";

const ProductGrid = ( {
	products,
	currency,
	addToCart,
	addToWishlist,
	addToCompare,
	cartItems,
	wishlistItems,
	compareItems,
	sliderClassName,
	spaceBottomClass,
	removeWishList,
	deleteFromWishlist,
} ) =>
{
	const userId = getItem( 'id' )
	return (
		<Fragment>
			{ products.map( product =>
			{
				return (
					<ProductGridListSingle
						sliderClassName={ sliderClassName }
						spaceBottomClass={ spaceBottomClass }
						product={ product }
						currency={ currency }
						addToCart={ addToCart }
						removeWishList={ removeWishList }
						addToWishlist={ addToWishlist }
						addToCompare={ addToCompare }
						deleteFromWishlist={deleteFromWishlist}
						cartItem={
							cartItems.filter( cartItem => cartItem.id === product.id )[ 0 ]
						}
						wishlistItem={
							wishlistItems.filter(
								wishlistItem => wishlistItem.id === product.id && wishlistItem?.user_like === userId
							)[ 0 ]
						}
						compareItem={
							compareItems.filter(
								compareItem => compareItem.id === product.id
							)[ 0 ]
						}
						key={ product.id }
					/>
				);
			} ) }
		</Fragment>
	);
};

ProductGrid.propTypes = {
	addToCart: PropTypes.func,
	addToCompare: PropTypes.func,
	addToWishlist: PropTypes.func,
	cartItems: PropTypes.array,
	compareItems: PropTypes.array,
	currency: PropTypes.object,
	products: PropTypes.array,
	sliderClassName: PropTypes.string,
	spaceBottomClass: PropTypes.string,
	wishlistItems: PropTypes.array,
	deleteFromWishlist: PropTypes.func
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

const mapDispatchToProps = dispatch =>
{
	return {
		addToCart: (
			item,
			addToast,
			quantityCount,
			selectedProductColor,
			selectedProductSize
		) =>
		{
			dispatch(
				addToCart(
					item,
					addToast,
					quantityCount
				)
			);
		},
		addToWishlist: ( item, addToast ) =>
		{
			dispatch( addToWishlist( item, addToast ) );
		},
		addToCompare: ( item, addToast ) =>
		{
			dispatch( addToCompare( item, addToast ) );
		},
		deleteFromWishlist: ( item, addToast ) =>
		{
			dispatch( deleteFromWishlist( item, addToast ) );
		},
	};
};

export default connect( mapStateToProps, mapDispatchToProps )( ProductGrid );
