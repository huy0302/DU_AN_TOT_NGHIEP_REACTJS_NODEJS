import { HttpException, HttpStatus } from "@nestjs/common";
import { ErrorCode } from "../errors/errorCode";

export class BadRequestException extends HttpException {
    constructor({ code, message, data }: { code?: string; message?: string, data?: any }) {
        super(
            HttpException.createBody({
                code,
                message: message || ErrorCode.getError(code),
                error: 'Bad Request',
                status: "fail",
				data: {...data}
            }),
            HttpStatus.BAD_REQUEST,
        )
    }
}