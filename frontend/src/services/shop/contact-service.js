import { postMethod } from "../api-service"

export const ContactService = {
	store: async (data) => {
		return await postMethod('contact/store', data);
	}
}
