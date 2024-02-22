import { getMethod, postMethod, putMethod } from "../api-service"

export const Auth_Service = {
	login: async (data) => {
		return await postMethod('auth/login', data);
	},
	resetPassword: async (data) => {
		return await postMethod('auth/reset-password', data);
	},
	register: async (data) => {
		return await postMethod('auth/register', data);
	},
	profile: async () => {
		return await getMethod('auth/profile');
	},
	updateProfile: async (data) => {
		return await putMethod('auth/profile', data);
	},
	changePassword: async (data) => {
		return await putMethod('auth/change-password', data);
	},
	reset: async (data) => {
		return await putMethod('auth/password/reset', data);
	}
}