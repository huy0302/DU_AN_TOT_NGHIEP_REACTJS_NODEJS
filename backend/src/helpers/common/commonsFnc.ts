import * as _ from 'lodash'
export const newArrayError = (arr: any, message: string) => {
		if(!_.isEmpty(arr)) {
			return arr.push(message);
		}
		return [message];
}

export function getSecond() {
	let currentTime = new Date();
	return Math.floor(currentTime.getTime() / 1000);
}

export const makeId = (length) => {
	let result = '';
	let characters =
		'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	let charactersLength = characters.length;
	for ( let i = 0; i < length; i++ )
	{
		result += characters.charAt( Math.floor( Math.random() * charactersLength ) );
	}
	return result;
}