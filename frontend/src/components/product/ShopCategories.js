import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { setActiveSort } from "../../helpers/product";

const ShopCategories = ( { categories, params, setParamsSearch } ) =>
{

	const [ isSelectAll, setIsSelectAll ] = useState( 'active' );
	useEffect( () =>
	{
		if ( !params.category_id ) setIsSelectAll( 'active' );
		else setIsSelectAll( '' )
	}, [ params.category_id ] )
	return (
		<div className="sidebar-widget">
			<h4 className="pro-sidebar-title">Categories </h4>
			<div className="sidebar-widget-list mt-30">
				{ categories ? (
					<ul>
						<li>
							<div className="sidebar-widget-list-left">
								<button
									className={ isSelectAll }
									onClick={ e => setParamsSearch( 0 ) }
								>
									<span className="checkmark" /> All Categories
								</button>
							</div>
						</li>
						{ categories.map( ( category, key ) =>
						{
							return (
								<li key={ key }>
									<div className="sidebar-widget-list-left">
										<button
											className={ params.category_id === Number( category.id ) ? 'active' : '' }
											onClick={ e => setParamsSearch( category.id ) }
										>
											{ " " }
											<span className="checkmark" /> { category.name }{ " " }
										</button>
									</div>
								</li>
							);
						} ) }
					</ul>
				) : (
					"No categories found"
				) }
			</div>
		</div>
	);
};

ShopCategories.propTypes = {
	categories: PropTypes.array,
	getSortParams: PropTypes.func
};

export default ShopCategories;
