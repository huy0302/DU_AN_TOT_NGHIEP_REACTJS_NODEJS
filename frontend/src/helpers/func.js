import * as moment from 'moment';
export const customNumber = (number, valueCustom) => {
	// return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + valueCustom;
	return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + ' ₫';
}

export const customDate = ( date, formatValue ) =>
{
	return moment( date ).format( formatValue );
}


export const checkTimeNow = (time) => {
	// return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + valueCustom;
	if(!time) return true;
	return moment().endOf('days').isAfter(moment(time).endOf('days'));

}
