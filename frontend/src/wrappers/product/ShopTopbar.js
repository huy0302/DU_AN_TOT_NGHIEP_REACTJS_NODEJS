import PropTypes from "prop-types";
import React, { Fragment } from "react";
import ShopTopAction from "../../components/product/ShopTopAction";

const ShopTopbar = (props) =>
{
	return (
		<Fragment>
			{/* shop top action */ }
			<ShopTopAction {...props}/>
		</Fragment>
	);
};
export default ShopTopbar;
