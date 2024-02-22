import { getMethod, postMethod } from "../api-service";
import { buildFilter } from "../common";

export const VOTE_SERVICE = {
	create: async (data) => {
		return await postMethod('vote/store', data);
	},

	getList: async (params) => {
		let filters = await buildFilter(params);
		return await getMethod('vote', filters);
	},

	show: async (id) => {
		return await getMethod('vote/show/' + id);
	}
}