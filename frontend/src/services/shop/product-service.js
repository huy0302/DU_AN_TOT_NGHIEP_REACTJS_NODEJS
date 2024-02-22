import { toggleShowLoading } from '../../redux/actions/common';
import { buildFilter, getMethod } from '../index'

export const getProducts = async ( params ) =>
{
	let filter = buildFilter( params );
	return await getMethod( 'product', filter );
}

export const showProduct = async ( id, params ) =>
{
	return await getMethod( `product/show/${ id }`, params );
}


export const showProductDetail = async ( productId, setProductData, dispatch ) =>
{
	try
	{
		if(dispatch) {
			dispatch(toggleShowLoading(true));
		}
		const response = await showProduct( productId );
		if ( response?.status == 'success' )
		{
			setProductData( response?.data );
		} else
		{
			setProductData( null );
		}
		if(dispatch) {
			dispatch(toggleShowLoading(false));
		}
	} catch ( error )
	{
		console.log( error );
		setProductData( null );
		if(dispatch) {
			dispatch(toggleShowLoading(false));
		}
	}
}

export const getProductsByFilter = async ( params, setProducts ) =>
{
	try
	{
		const response = await getProducts( params );
		if ( response?.status == 'success' )
		{
			setProducts( response?.data?.products );
		} else {
			setProducts( null );
		}
	} catch ( error )
	{
		console.log( error );
		setProducts( null );
	}
}