import PropTypes from "prop-types";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import MenuCart from "./sub-components/MenuCart";
import { deleteFromCart } from "../../redux/actions/cartActions";
import { DEFAULT_IMG } from "../../helpers/constant";
import { getItem } from "../../services";

const IconGroup = ( {
	currency,
	cartData,
	wishlistData,
	compareData,
	deleteFromCart,
	iconWhiteClass
} ) =>
{

	const [ activeAccount, setActiveAccount ] = useState( false );
	const [ activeCart, setActiveCart ] = useState( false );
	let avatar = localStorage.getItem( 'avatar' ) || null;
	let token = localStorage.getItem( 'access_token' ) || null;

	if(wishlistData?.length > 0 && token) {
		const userId = getItem('id');
		wishlistData = wishlistData.filter(item => item.user_like === userId);
	}

	const handleClick = ( type ) =>
	{
		if ( type === 1 )
		{
			setActiveAccount( !activeAccount );
			setActiveCart( false );
		} else
		{
			setActiveAccount( false );
			setActiveCart( !activeCart );
		}

	};


	const triggerMobileMenu = () =>
	{
		const offcanvasMobileMenu = document.querySelector(
			"#offcanvas-mobile-menu"
		);
		offcanvasMobileMenu.classList.add( "active" );
	};

	return (
		<div
			className={ `header-right-wrap ${ iconWhiteClass ? iconWhiteClass : "" }` }
		>
			<div className="same-style account-setting d-none d-lg-block">
				<button
					className="account-setting-active"
					onClick={ e => handleClick( 1 ) }
				>
					<i className="pe-7s-user" />
				</button>
				<div className={ `account-dropdown ${ activeAccount ? 'active' : '' }` }>
					<ul className="mb-0">
						{
							!token &&
							<>
								<li>
									<a href="/auth/login">Đăng nhập</a>
								</li>
								<li>
									<a href="/auth/register">Đăng ký</a>
								</li>
							</>
						}
						{ token &&
							<>
								<li>
									<Link to={ "/my-account" }>
										Tài khoản
									</Link>
								</li>
								<li>
									<Link to={ "/my-order" }>
										Đơn hàng
									</Link>
								</li>
								<li>
									<a href="javascript:void(0)" onClick={ e =>
									{
										localStorage.removeItem( 'access_token' );
										localStorage.removeItem( 'name' );
										localStorage.removeItem( 'email' );
										localStorage.removeItem( 'avatar' );
										localStorage.removeItem( 'gender' );
										localStorage.removeItem( 'phone' );
										localStorage.removeItem( 'id' );
										setActiveAccount( false );
										window.location.href = '/';
									} }>Đăng xuất</a>
								</li>
							</>
						}
					</ul>
				</div>
			</div>

			{ token &&
				<div className="same-style header-wishlist">
					<Link to={ process.env.PUBLIC_URL + "/wishlist" }>
						<i className="pe-7s-like" />
						<span className="count-style">
							{ wishlistData && wishlistData.length ? wishlistData.length : 0 }
						</span>
					</Link>
				</div> }


			<div className="same-style cart-wrap d-none d-lg-block">
				<button className="icon-cart" onClick={ e => handleClick( 0 ) }>
					<i className="pe-7s-shopbag" />
					<span className="count-style">
						{ cartData && cartData.length ? cartData.length : 0 }
					</span>
				</button>
				{/* menu cart */ }
				<MenuCart
					cartData={ cartData }
					currency={ currency }
					activeCart={ activeCart }
					deleteFromCart={ deleteFromCart }
				/>
			</div>
			<div className="same-style cart-wrap d-block d-lg-none">
				<Link className="icon-cart" to={ process.env.PUBLIC_URL + "/cart" }>
					<i className="pe-7s-shopbag" />
					<span className="count-style">
						{ cartData && cartData.length ? cartData.length : 0 }
					</span>
				</Link>
			</div>
			<div className="same-style mobile-off-canvas d-block d-lg-none">
				<button
					className="mobile-aside-button"
					onClick={ () => triggerMobileMenu() }
				>
					<i className="pe-7s-menu" />
				</button>
			</div>
		</div>
	);
};

IconGroup.propTypes = {
	cartData: PropTypes.array,
	compareData: PropTypes.array,
	currency: PropTypes.object,
	iconWhiteClass: PropTypes.string,
	deleteFromCart: PropTypes.func,
	wishlistData: PropTypes.array
};

const mapStateToProps = state =>
{
	return {
		currency: state.currencyData,
		cartData: state.cartData,
		wishlistData: state.wishlistData,
		compareData: state.compareData
	};
};

const mapDispatchToProps = dispatch =>
{
	return {
		deleteFromCart: ( item, addToast ) =>
		{
			dispatch( deleteFromCart( item, addToast ) );
		}
	};
};

export default connect( mapStateToProps, mapDispatchToProps )( IconGroup );
