import PropTypes from "prop-types";
import React from "react";
import { setActiveLayout } from "../../helpers/product";
import { Select } from "antd";

const ORDER_BY = [
	{ value: 0, label: 'Sắp xếp theo' },
	{ value: 1, label: 'Giá cao đến thấp' },
	{ value: 2, label: 'Giá thấp đến cao' },
	{ value: 3, label: 'Mới nhất' }
]
const ShopTopAction = ( props ) =>
{
	return (
		<div className="shop-top-bar mb-35">
			<div className="select-shoing-wrap">
				<div className="shop-select">
					<Select
						options={ ORDER_BY }
						
						style={ { width: '200px' } }
						placeholder="Sắp xếp theo"
						onChange={e => {
							let params = {...props.params};
							params.order = e;
							props.setParams(params)
						}}
					>
					</Select>
				</div>
				<p>
					Hiển thị { props.sortedProductCount } của { props.productCount } kết quả
				</p>
			</div>

			<div className="shop-tab">
				<button
					onClick={ e =>
					{
						props.getLayout( "grid two-column" );
						setActiveLayout( e );
					} }
				>
					<i className="fa fa-th-large" />
				</button>
				<button
					onClick={ e =>
					{
						props.getLayout( "grid three-column" );
						setActiveLayout( e );
					} }
				>
					<i className="fa fa-th" />
				</button>
				<button
					onClick={ e =>
					{
						props.getLayout( "list" );
						setActiveLayout( e );
					} }
				>
					<i className="fa fa-list-ul" />
				</button>
			</div>
		</div>
	);
};

// ShopTopAction.propTypes = {
//   getLayout: PropTypes.func,
//   params: PropTypes.object,

//   productCount: PropTypes.number,
//   sortedProductCount: PropTypes.number
// };

export default ShopTopAction;
