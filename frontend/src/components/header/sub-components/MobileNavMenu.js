import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { multilanguage } from "redux-multilanguage";

const MobileNavMenu = ( { strings } ) =>
{
	let token = localStorage.getItem( 'access_token' )
	return (
		<nav className="offcanvas-navigation" id="offcanvas-navigation">
			<ul>
				<li className="menu-item-has-children">
					<Link to={ process.env.PUBLIC_URL + "/" }>{ strings[ "home" ] }</Link>
				</li>

				<li className="menu-item-has-children">
					<Link to={ process.env.PUBLIC_URL + "/shop" }>
						{ strings[ "shop" ] }
					</Link>
				</li>
				<li className="menu-item-has-children">
					<Link to={ process.env.PUBLIC_URL + "/" }>{ strings[ "pages" ] }</Link>
					<ul className="sub-menu">
						<li>
							<Link to={ process.env.PUBLIC_URL + "/cart" }>
								{ strings[ "cart" ] }
							</Link>
						</li>
						{ token ?
							<>
								<li>
									<Link to={ process.env.PUBLIC_URL + "/my-account" }>
										{ strings[ "my_account" ] }
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
										window.location.href = '/';
									} }>Logout</a>
								</li>
							</> :
							<>
								<li>
									<Link to={ process.env.PUBLIC_URL + "/auth/login" }>
										Login
									</Link>
								</li>
								<li>
									<Link to={ process.env.PUBLIC_URL + "/auth/register" }>
										Register
									</Link>
								</li>
							</>
						}


					</ul>
				</li>
			</ul>
		</nav>
	);
};

MobileNavMenu.propTypes = {
	strings: PropTypes.object
};

export default multilanguage( MobileNavMenu );
