import { HttpStatus } from "@nestjs/common";

export class Paging {
    private readonly page: number;
    private readonly page_size: number;
    private readonly total_page: number;
    private readonly total: number;

    constructor(page: number, page_size: number, total: number) {
        this.page = Number(page);
        this.page_size = Number(page_size);
        this.total = total;
		this.total_page = Math.ceil(total % page_size === 0 ? total / page_size + 1 : total / page_size)
    }
}

export class Response {
    readonly status: string | number;
    readonly message: string;
    readonly data: any;
    readonly code?: any;

    constructor(status: string | number, data: any, message?: string, code?: string) {
        this.status = status;
        this.message = message;
        this.data = data;
        this.code = code;
    }
}

export const BaseResponse = (status: string | number, data:any, code?: string, message?: string,) => {
	if(status == 'success' || status == 'fail' || status == HttpStatus.BAD_REQUEST) {
		let newData = ((status == 'fail' || status == HttpStatus.BAD_REQUEST) && data?.data) || data;
		
		let statusRs = status == 'success' ? 'success': 'fail';
		return new Response(statusRs, newData, message, data?.code || code);
	} else {
		return new Response('error', data?.data || null, message, data?.code || code );
	}
}