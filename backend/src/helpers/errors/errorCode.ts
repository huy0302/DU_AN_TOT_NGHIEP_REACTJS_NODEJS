export class ErrorCode {
    private static createErrorMap(): Map<string, string> {
        const map = new Map()

        //section for Form
        map.set('F0001', 'Form is required');
        map.set('F0002', 'Form is invalid');

		//Section for error
		map.set('E0001', 'An error occurred, please try again');
		map.set('E0002', 'Not found');

		//Section for user
		map.set('U0001', 'Email existed');
		map.set('U0002', 'Tài khoản không tồn tại!');
		map.set('U0003', 'User id does not exist!');


		//Login
		map.set('LG0401', 'Hết phiên đăng nhập! Vui lòng đăng nhập lại!');
		map.set('LG0403', 'Không có quyền truy cập');
		map.set('LG0401', 'Token không hợp lệ!');
		map.set('LG0002', 'Username or password is error!');


        return map;
    }

    private static errorMap = ErrorCode.createErrorMap();

    static getError(code: string): string {
        if (this.errorMap.has(code)) {
            return this.errorMap.get(code)
        }
        return 'Error code has not been defined';
    }
}
