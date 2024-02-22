// @ts-nocheck
import PropTypes from "prop-types";
import React, { useEffect, Suspense, lazy } from "react";
import ScrollToTop from "./helpers/scroll-top";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";
import { multilanguage, loadLanguages } from "redux-multilanguage";
import { connect } from "react-redux";
import { BreadcrumbsProvider } from "react-breadcrumbs-dynamic";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import Contact from "./pages/other/Contact";
import BlogFeaturedSingle from "./components/blog-featured/BlogFeaturedSingle";
import BlogFeaturedThreeSingle from "./components/blog-featured/BlogFeaturedThreeSingle";

const BlogDetailsStandard = lazy(() =>
	import("./pages/blog/BlogDetailsStandard")
);

// home pages


const HomeCakeShop = lazy( () => import( "./pages/home/HomeCakeShop" ) );

// shop pages
const ShopGridStandard = lazy( () => import( "./pages/shop/ShopGridStandard" ) );

// product pages
const Product = lazy( () => import( "./pages/shop-product/Product" ) );

// blog pages
const BlogStandard = lazy( () => import( "./pages/blog/BlogStandard" ) );


// other pages
const About = lazy( () => import( "./pages/other/About" ) );
// const Contact = lazy(() => import("./pages/other/Contact"));
const MyAccount = lazy( () => import( "./pages/other/MyAccount" ) );
const LoginRegister = lazy( () => import( "./pages/other/LoginRegister" ) );
const resetPassword = lazy( () => import( "./pages/other/resetPassword" ) );

const Cart = lazy( () => import( "./pages/other/Cart" ) );
const Wishlist = lazy( () => import( "./pages/other/Wishlist" ) );
const Compare = lazy( () => import( "./pages/other/Compare" ) );
const Checkout = lazy( () => import( "./pages/other/Checkout" ) );
const MyOrder = lazy( () => import( "./pages/other/MyOrder" ) );

const NotFound = lazy( () => import( "./pages/other/NotFound" ) );
const PaymentStatus = lazy( () => import( "./pages/other/PaymentStatus" ) );

const App = ( props ) =>
{
	useEffect( () =>
	{
		props.dispatch(
			loadLanguages( {
				languages: {
					en: require( "./translations/english.json" ),
					fn: require( "./translations/french.json" ),
					de: require( "./translations/germany.json" )
				}
			} )
		);
	} );
	return (
		<ToastProvider placement="bottom-left">
			<BreadcrumbsProvider>
				<Router>
					<ScrollToTop>
						<Suspense
							fallback={
								<div className="flone-preloader-wrapper">
									<div className="flone-preloader">
										<span></span>
										<span></span>
									</div>
								</div>
							}
						>
							<Switch>
								<Route
									exact
									path={ process.env.PUBLIC_URL + '/' }
									component={ HomeCakeShop }
								/>

								{/* Homepages */ }

								<Route
									path={ "/home" }
									component={ HomeCakeShop }
								/>

								{/* Shop pages */ }
								<Route
									path={ "/shop" }
									component={ ShopGridStandard }
								/>

								{/* Shop product pages */ }
								<Route
									path={ process.env.PUBLIC_URL + "/product/:id" }
									render={ ( routeProps ) => (
										<Product { ...routeProps } key={ routeProps.match.params.id } />
									) }
								/>

								{/* Blog pages */ }
								<Route
									path={ process.env.PUBLIC_URL + "/blog-standard" }
									component={ BlogStandard }
								/>
								<Route
									path={ process.env.PUBLIC_URL + "/blog-details-standard" }
									component={ BlogDetailsStandard }
									// component={ BlogFeaturedSingle }
								/>

								{/* Other pages */ }
								<Route
									path={ process.env.PUBLIC_URL + "/gioi-thieu" }
									component={ About }
								/>
								<Route
									path={ process.env.PUBLIC_URL + "/lien-he" }
									component={ Contact
								}
								/>
								<Route
									path={ process.env.PUBLIC_URL + "/my-order" }
									component={ MyOrder }
								/>
								<Route
									path={ process.env.PUBLIC_URL + "/payment/:type" }
									component={ PaymentStatus }
								/>
								<Route
									path={ process.env.PUBLIC_URL + "/reset-password/:type" }
									component={ resetPassword }
								/>
								<Route
									path={ process.env.PUBLIC_URL + "/reset-password" }
									component={ resetPassword }
								/>
								<Route
									path={ process.env.PUBLIC_URL + "/payment" }
									component={ PaymentStatus }
								/>
								<Route
									path={ process.env.PUBLIC_URL + "/my-account" }
									component={ MyAccount }
								/>
								<Route
									path={ process.env.PUBLIC_URL + "/auth/:type" }
									component={ LoginRegister }
								/>

								<Redirect from="/auth" to="auth/login" />

								<Route
									path={ process.env.PUBLIC_URL + "/cart" }
									component={ Cart }
								/>
								<Route
									path={ process.env.PUBLIC_URL + "/wishlist" }
									component={ Wishlist }
								/>
								<Route
									path={ process.env.PUBLIC_URL + "/compare" }
									component={ Compare }
								/>
								<Route
									path={ process.env.PUBLIC_URL + "/checkout" }
									component={ Checkout }
								/>

								<Route
									path={ process.env.PUBLIC_URL + "/not-found" }
									component={ NotFound }
								/>

								<Route exact component={ NotFound } />
							</Switch>
						</Suspense>
					</ScrollToTop>
				</Router>
			</BreadcrumbsProvider>
		</ToastProvider>
	);
};

App.propTypes = {
	dispatch: PropTypes.func
};

export default connect()( multilanguage( App ) );
