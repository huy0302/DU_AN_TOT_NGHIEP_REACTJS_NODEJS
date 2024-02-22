// @ts-nocheck
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getCategoriesByFilter } from "../../services/categoryService";
import { Categories } from "../../components/Category/Category";
import { timeDelay } from "../../services/common";
import { toggleShowLoading } from "../../redux/actions/common";
import Breadcrumbs from "../../components/Breadbrumbs/Breadcrumbs";

export const CategoryContainer = () =>
{

	const [ datas, setDatas ] = useState( [] );
	const [ paging, setPaging ] = useState( {
		page: 1,
		page_size: 20
	} );
	const [ params, setParams ] = useState( {} );
	const dispatch = useDispatch();

	useEffect( () =>
	{
		getDatasByFilter( paging );
	}, [] );

	const getDatasByFilter = async ( filter ) =>
	{
		const rs = await getCategoriesByFilter( filter, dispatch );
		await timeDelay( 1500 );

		dispatch( toggleShowLoading( false ) );
		if ( rs )
		{
			setDatas( rs.categories );
			setPaging( rs.meta );
		}
	}

	const routes = [
		{
			name: 'Danh mục',
			route: '/category'
		},
		{
			name: 'Danh sách',
			route: '/category/list'
		}
	]
	return ( <>
		<Breadcrumbs routes={routes} title={"Danh mục"} />
		<Categories
			datas={ datas }
			paging={ paging }
			params={ params }
			getDatasByFilter={ getDatasByFilter }
			setParams={ setParams }
			setPaging={ setPaging }
			setDatas={ setDatas }
		/>
	</> )
};
