import { getMethod, postMethod } from '../index';

export const ORDER_SERVICE = {
	create: async (data) => {
		return await postMethod('order/store', data);
	},

	getList: async (params) => {
		return await getMethod('order', params);
	},

	show: async (id) => {
		return await getMethod('order/show/' + id);
	}
}