import defaultUser from '../assets/img/default-avatar.png';
import emptyImg from '../assets/img/logo-empty.png';
import defaultImg from '../assets/img/image_faildoad.png';
import errorImg from '../assets/img/cancel.png';
import success from '../assets/img/success-v2.png';
import messenger from '../assets/img/messenger.jpg';
import zalo from '../assets/img/zalo.jpg';
import banner1 from '../assets/img/shipped.png';
import banner2 from '../assets/img/diet.png';
import banner3 from '../assets/img/award.png';
import banner4 from '../assets/img/support.png';

export const DEFAULT_IMG = defaultUser;
export const MESSENGER = messenger;
export const ZALO = zalo;
export const EMPTY_IMG = emptyImg;
export const DEFAULT_IMAGE = defaultImg;
export const BANNER_1 = banner1;
export const BANNER_2 = banner2;
export const BANNER_3 = banner3;
export const BANNER_4 = banner4;

export const ERROR_PAYMENT = errorImg;
export const SUCCESS_PAYMENT = success;
export const WEB_VALUE = {
	API: `${process.env.REACT_APP_API}`,
	PUBLIC_URL: `${process.env.REACT_APP_PUBLIC_URL}`
}

export const timeDelay = async (delay) => {
	return new Promise(res => setTimeout(res, delay))
}

export const REGEX_EMAIL = /^[a-z][a-z0-9_\.]{0,31}[a-z0-9]{0,}@[a-z0-9\-]{2,}(\.[a-z0-9\-]{2,}){1,4}$/;
export const REGEX_PHONE = /^[0-9]+$/;


export const PAYMENT_TYPE = [
	{ value: 1, label: "Thanh toán Online ( VNPay)" },
	{ value: 2, label: "Tiền mặt" },
]

export const PAYMENT_STATUS = [
	{ value: 0, label: "Chưa thanh toán" },
	{ value: 1, label: "Đã thanh toán" },
]
