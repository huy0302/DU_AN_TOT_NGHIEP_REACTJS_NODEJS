import { getMethod } from '../index'

export const sda = async ( params) =>
{
	await getMethod('product', params);
}

export const sad = async ( id, params ) =>
{
	await getMethod(`product/show/${id}`, params);
}