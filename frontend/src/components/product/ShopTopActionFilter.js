import PropTypes from "prop-types";
import React, { Fragment } from "react";
import ShopTopFilter from "./ShopTopFilter";
import { toggleShopTopFilter } from "../../helpers/product";
import { Select } from "antd";
import ShopSearch from "./ShopSearch";
const ORDER_BY = [
	{ value: 0, label: 'Sắp xếp theo' },
	{ value: 1, label: 'Giá cao đến thấp' },
	{ value: 2, label: 'Giá thấp đến cao' },
	{ value: 3, label: 'Mới nhất' }
]
const ShopTopActionFilter = ( props ) =>
{
	return (
		<Fragment>
			<div className="shop-top-bar mb-35">
				<div className="select-shoing-wrap">
					<div className="shop-select">
						<ShopSearch params={ props.params } setParams={ props.setParams } />
					</div>
					<div className="shop-select">
						<Select
							options={ ORDER_BY }

							style={ { width: '200px' } }
							placeholder="Sắp xếp theo"
							size="large"
							onChange={ e =>
							{
								let params = { ...props.params };
								params.order = e;
								props.setParams( params )
							} }
						>
						</Select>
					</div>
				</div>

				<div className="filter-active">
					<button onClick={ e => toggleShopTopFilter( e ) }>
						<i className="fa fa-plus"></i> Lọc sản phẩm
					</button>
				</div>
			</div>

			{/* shop top filter */ }
			<ShopTopFilter {...props} />
		</Fragment>
	);
};

ShopTopActionFilter.propTypes = {
	getFilterSortParams: PropTypes.func,
	getSortParams: PropTypes.func,
	productCount: PropTypes.number,
	products: PropTypes.array,
	sortedProductCount: PropTypes.number
};

export default ShopTopActionFilter;
