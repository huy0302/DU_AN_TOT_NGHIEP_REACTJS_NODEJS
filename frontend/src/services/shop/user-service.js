import { getMethod } from '../index'

export const sd = async ( params) =>
{
	await getMethod('product/list', params);
}

export const ds = async ( id, params ) =>
{
	await getMethod(`product/list/${id}`, params);
}