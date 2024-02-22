// @ts-nocheck
import PropTypes from "prop-types";
import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import { connect } from "react-redux";
import { getDiscountPrice } from "../../helpers/product";
import
{
	addToWishlist,
	deleteFromWishlist,
	deleteAllFromWishlist
} from "../../redux/actions/wishlistActions";
import { addToCart } from "../../redux/actions/cartActions";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import { customNumber } from "../../helpers/func";
import { getItem } from "../../services";
import ShopProducts from "../../wrappers/product/ShopProducts";
import { Pagination } from "antd";

const Wishlist = ( {
	location,
	cartItems,
	currency,
	addToCart,
	wishlistItems,
	deleteFromWishlist,
	deleteAllFromWishlist
} ) =>
{
	const { addToast } = useToasts();
	const { pathname } = location;

	const [ layout, setLayout ] = useState( 'grid three-column' );
	const [ products, setProducts ] = useState( [] );
	const [ paging, setPaging ] = useState( { page: 1, page_size: 20, total: 0 } );
	const userId = getItem( 'id' ) || null;
	const [ isReload, setIsReload ] = useState( true );

	useEffect( () =>
	{
		if ( isReload )
		{
			getProductList( paging )
		}
	}, [isReload] );
	const getProductList = ( filter ) =>
	{
		if ( !userId || userId === undefined || userId === "undefined" )
		{
			setProducts( [] );
			setPaging( { page: 1, page_size: 20, total: 0 } )
		} else if ( wishlistItems?.length > 0 )
		{
			let data = wishlistItems.filter( ( item, index ) => item && index < ( paging.page * paging.page_size ) );
			setProducts( data );
			setPaging( { ...paging, total: wishlistItems?.length } )
		}
		setIsReload(false)
	}
	return (
		<Fragment>
			<MetaTags>
				<title>VITAGREEN| Sản phẩm yêu thích</title>
				<meta
					name="description"
					content="Wishlist page of flone react minimalist eCommerce template."
				/>
			</MetaTags>

			<BreadcrumbsItem to={ process.env.PUBLIC_URL + "/" }>Trang chủ</BreadcrumbsItem>
			<BreadcrumbsItem to={ process.env.PUBLIC_URL + pathname }>
				Sản phẩm yêu thích
			</BreadcrumbsItem>


			<LayoutOne headerTop="visible">
				<Breadcrumb />

				<div className="shop-area pt-95 pb-100">
					<div className="container">
						<div className="row">
							<div className="col-12 order-1 order-lg-2">

								{
									products?.length > 0 ?
										<>
											<p>
												Hiển thị { products.length } của { paging.total } kết quả
											</p>
											<ShopProducts layout={ layout } 
											products={ products } 
											removeWishList={ true } />
											<div className="mx-auto d-flex justify-content-center my-4">
												<Pagination
													onChange={ e =>
														getProductList( { page: e, page_size: 20 } )
													}
													pageSize={ paging.page_size }
													defaultCurrent={ paging.page }
													total={ paging.total }
												/>
											</div>
										</>
										: <div className="row">
											<div className="col-lg-12">
												<div className="item-empty-area text-center">
													<div className="item-empty-area__icon mb-30">
														<i className="pe-7s-like"></i>
													</div>
													<div className="item-empty-area__text">
													Không có sản phẩm nào trong danh mục yêu thích<br />{ " " }
														<Link to={ process.env.PUBLIC_URL + "/shop" }>
														Thêm Sản Phẩm
														</Link>
													</div>
												</div>
											</div>
										</div>
								}
							</div>
						</div>
					</div>
				</div>
			</LayoutOne>
		</Fragment>
	);
};

Wishlist.propTypes = {
	addToCart: PropTypes.func,
	cartItems: PropTypes.array,
	currency: PropTypes.object,
	location: PropTypes.object,
	deleteAllFromWishlist: PropTypes.func,
	deleteFromWishlist: PropTypes.func,
	wishlistItems: PropTypes.array
};

const mapStateToProps = state =>
{
	let userId = getItem( "id" ) || null;
	let wishlistData = [];
	if ( userId != null && state.wishlistData?.length > 0 )
	{
		wishlistData = state.wishlistData.filter( item => item.user_like === userId )
	}
	return {
		cartItems: state.cartData,
		wishlistItems: wishlistData,
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
		addToWishlist: ( item, addToast, quantityCount ) =>
		{
			dispatch( addToWishlist( item, addToast, quantityCount ) );
		},
		deleteFromWishlist: ( item, addToast, quantityCount ) =>
		{
			dispatch( deleteFromWishlist( item, addToast, quantityCount ) );
		},
		deleteAllFromWishlist: addToast =>
		{
			dispatch( deleteAllFromWishlist( addToast ) );
		}
	};
};

export default connect( mapStateToProps, mapDispatchToProps )( Wishlist );
