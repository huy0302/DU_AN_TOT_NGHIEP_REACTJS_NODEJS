import { getMethod } from '../index'

export const getCategoryList = async ( params ) =>
{
	return await getMethod( 'category', params );
}

export const showCateGory = async ( id ) =>
{
	await getMethod( `category/show/${ id }` );
}

export const getCategories = async ( filter, setCategories ) =>
{
	try
	{
		const response = await getCategoryList( filter );
		if ( response?.status === 'success' )
		{
			setCategories( response?.data?.categories );
		}
	} catch ( error )
	{
		console.log( error );
	}
}