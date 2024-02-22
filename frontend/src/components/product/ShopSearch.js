import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchParamsProduct } from "../../redux/actions/productActions";
import { Form } from "react-bootstrap";

const ShopSearch = ( props
) =>
{
	const [ name, setName ] = useState( '' );

	return (
		<div className="sidebar-widget">
			<div className="pro-sidebar-search">
				<div className="pro-sidebar-search-form">
					<input type="text" value={ name }
						className="form-control"
						onChange={ ( e ) => setName( e.target.value ) }
						placeholder="Tìm kiếm sản phẩm..." />
						<button type="submit" onClick={ () => props.setParams( { ...props.params, name: name } ) }>
						<i className="pe-7s-search" />
					</button>
				</div>
				{/* <Form className="pro-sidebar-search-form">
					<Form.Control type="text" value={ name }
						className="form-control"
						onChange={ ( e ) => setName( e.target.value ) }
						placeholder="Search product name..." />
					
				</Form> */}
			</div>
		</div>
	);
};

export default ShopSearch;
