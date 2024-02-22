export const SIDE_BARS = [
	{
		path: '/dashboard',
		icon: 'eva eva-home-outline',
		title: 'Bảng Điều Khiển ',
		key: -1 
	},
	{
		path: '/user',
		icon: 'eva eva-people',
		title: 'Người Dùng',
		children: [
			{
				path: '/user/list',
				title: 'Danh sách ',
				icon: '',
			},
			{
				path: '/user/create',
				icon: '',
				title: 'Thêm mới',
			},
		]
	},
	{
		path: '/product',
		icon: 'eva eva-list',
		title: 'Sản Phẩm',
		children: [
			{
				path: '/product/list',
				title: 'Danh sách',
				icon: '',
			},
			{
				path: '/product/create',
				icon: '',
				title: 'Thêm mới',
			},
		]
	},
	{
		path: '/category',
		icon: 'eva eva-sun',
		title: 'Loại Sản Phẩm',
		children: [
			{
				path: '/category/list',
				title: 'Danh sách ',
				icon: '',
			},
			{
				path: '/category/create',
				icon: '',
				title: 'Thêm mới',
			},
		]
	},
	{
		path: '/slide',
		icon: 'eva eva-menu',
		title: 'Slide',
		children: [
			{
				path: '/slide/list',
				title: 'Danh Sách ',
				icon: '',
			},
			{
				path: '/slide/create',
				icon: '',
				title: 'Thêm mới',
			},
		]
	},
	{
		path: '/order',
		icon: 'eva eva-grid',
		title: 'Đơn Hàng',
		children: [
			{
				path: '/order/list',
				title: 'Danh sách',
				icon: '',
			}
		]
	},
	{
		path: '/setting',
		icon: 'eva eva-settings',
		title: 'Cài Đặt',
		children: [
			{
				path: '/setting/role/list',
				title: 'Roles',
				icon: '',
			},
			{
				path: '/setting/permission/list',
				icon: '',
				title: 'Permissions',
			},
		]
	},

	{
		path: '/reviews',
		icon: 'eva eva-star',
		title: 'Đánh Giá',
		key: -2
	},

	{
		path: '/contact',
		icon: 'eva eva-inbox',
		title: 'Liên Hệ',
		key: -3
	},
]
