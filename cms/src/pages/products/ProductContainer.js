// @ts-nocheck
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getProductsByFilter } from "../../services/productService.js";
import { Products } from "../../components/Products/Products.js";
import Breadcrumbs from "../../components/Breadbrumbs/Breadcrumbs.js";

export const ProductContainer = () =>
{

	const [ products, setProducts ] = useState( [] );
	const [ paging, setPaging ] = useState( {
		page: 1,
		page_size: 20
	} );
	const [ params, setParams ] = useState( {} );
	const dispatch = useDispatch();

	useEffect( () =>
	{
		getProductsByFilters( paging, setProducts, setPaging );
	}, [] );

	const getProductsByFilters = ( filter, setProduct, setPage ) =>
	{
		getProductsByFilter( filter, setProducts, setPaging, dispatch );
	}

	const routes = [
		{
			name: 'Sản phẩm',
			route: '/product/list'
		},
		{
			name: 'Danh sách',
			route: ''
		}
	]

	return (
		<>
			<Breadcrumbs routes={ routes } title={ "Sản phẩm" } /> <Products
				products={ products }
				paging={ paging }
				params={ params }
				getProductsByFilters={ getProductsByFilters }
				setParams={ setParams }
				setPaging={ setPaging }
				setProducts={ setProducts }
			/></> )
};
