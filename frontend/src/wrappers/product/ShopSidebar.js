import PropTypes from "prop-types";
import React from "react";
import ShopSearch from "../../components/product/ShopSearch";
import ShopCategories from "../../components/product/ShopCategories";

const ShopSidebar = (
	{ 
		categories, 
		sideSpaceClass,
		...props 
	}
) =>
{
	const setParamsSearch = (e) => {
		let obj = {...props.params};

		obj.category_id = Number(e);
		props.setParams(obj);
	}


	return (
		<div className={ `sidebar-style ${ sideSpaceClass ? sideSpaceClass : "" }` }>
			{/* shop search */ }
			<ShopSearch params={props.params} setParams={props.setParams}/>

			{/* filter by categories */ }
			<ShopCategories
				categories={ categories }
				params={props.params}
				setParamsSearch={setParamsSearch}
			/>

			{/* filter by color */ }
			{/* <ShopColor colors={uniqueColors} getSortParams={getSortParams} /> */ }

			{/* filter by size */ }
			{/* <ShopSize sizes={uniqueSizes} getSortParams={getSortParams} /> */ }

			{/* filter by tag */ }
			{/* <ShopTag tags={uniqueTags} getSortParams={getSortParams} /> */ }
		</div>
	);
};

ShopSidebar.propTypes = {
	categories: PropTypes.array,
	sideSpaceClass: PropTypes.string
};

export default ShopSidebar;
