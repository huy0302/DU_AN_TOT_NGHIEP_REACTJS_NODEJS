import { CategoryForm } from "./components/Category/CategoryForm";
import { ContactPage } from "./components/Contact/Contact";
import { OrderForm } from "./components/Order/OrderForm";
import { ProductForm } from "./components/Products/ProductForm";
import { Permissions } from "./components/Settings/Permission/Permissions";
import { RoleForm } from "./components/Settings/Role/RoleForm";
import { Roles } from "./components/Settings/Role/Roles";
import { SlideForm } from "./components/Slide/SlideForm";
import { UserForm } from "./components/User/UserForm";
import {PageVoting} from "./components/vote/voteList";
import { CategoryContainer } from "./pages/category/CategoryContainer";
import Dashboard from "./pages/dashboard/Dashboard";
import { OrderContainer } from "./pages/order/OrderContainer";
import { ProductContainer } from "./pages/products/ProductContainer";
import { ProfileContainer } from "./pages/profile/ProfileContainer";
import { SlidesContainer } from "./pages/slides/SlidesContainer";
import { UserContainer } from "./pages/user/UserContainer";

export const ROUTERS = [
	{
		path: '/dashboard',
		exact: true,
		title: 'Dashboard',
		redirectFrom: '/', 
		component: Dashboard
	},
	{
		path: '/product/list',
		exact: true,
		redirectFrom: '/product', 
		title: 'List product',
		component: ProductContainer,
	},
	{
		path: '/product/create',
		exact: true,
		title: 'Add new product',
		redirectFrom: null, 
		component: ProductForm,
	},
	{
		path: '/product/edit/:id',
		exact: true,
		redirectFrom: null, 
		title: 'Edit product',
		component: ProductForm,
	},
	{
		path: '/user/list',
		exact: true,
		redirectFrom: '/user', 
		title: 'User',
		component: UserContainer,
	},
	{
		path: '/user/create',
		exact: true,
		redirectFrom: '/user', 
		title: 'Create',
		component: UserForm,
	},
	{
		path: '/user/edit/:id',
		exact: true,
		redirectFrom: '/user', 
		title: 'Edit',
		component: UserForm,
	},
	{
		path: '/category/list',
		exact: true,
		redirectFrom: '/category', 
		title: 'List',
		component: CategoryContainer,
	},
	{
		path: '/category/create',
		exact: true,
		redirectFrom: '/category', 
		title: 'Create',
		component: CategoryForm,
	},
	{
		path: '/category/edit/:id',
		exact: true,
		redirectFrom: '/category', 
		title: 'Edit',
		component: CategoryForm,
	},
	{
		path: '/slide/list',
		exact: true,
		redirectFrom: '/slide', 
		title: 'List',
		component: SlidesContainer,
	},
	{
		path: '/slide/create',
		exact: true,
		redirectFrom: '/slide', 
		title: 'Create',
		component: SlideForm,
	},
	{
		path: '/slide/edit/:id',
		exact: true,
		redirectFrom: '/slide', 
		title: 'Edit',
		component: SlideForm,
	},
	{
		path: '/order/list',
		exact: true,
		redirectFrom: '/order', 
		title: 'List',
		component: OrderContainer,
	},
	
	{
		path: '/order/view/:id',
		exact: true,
		redirectFrom: '/order', 
		title: 'Chi tiết',
		component: OrderForm,
	},
	{
		path: '/order/edit/:id',
		exact: true,
		redirectFrom: '/order', 
		title: 'Chỉnh sửa',
		component: OrderForm,
	},
	{
		path: '/setting/permission/list',
		exact: true,
		redirectFrom: '/permission', 
		title: 'Danh sách',
		component: Permissions,
	},
	{
		path: '/setting/role/list',
		exact: true,
		redirectFrom: '/role', 
		title: 'Danh sách',
		component: Roles,
	},

	{
		path: '/setting/role/create',
		exact: true,
		redirectFrom: '/role', 
		title: 'Tạo mới',
		component: RoleForm,
	},

	{
		path: '/setting/role/edit/:id',
		exact: true,
		redirectFrom: '/role', 
		title: 'Chỉnh sửa',
		component: RoleForm,
	},

	{
		path: '/profile',
		exact: true,
		// redirectFrom: '/role', 
		title: 'Profile',
		component: ProfileContainer,
	},

	{
		path: '/reviews',
		exact: true,
		// redirectFrom: '/role', 
		title: 'Reviews',
		component: PageVoting,
	},

	{
		path: '/contact',
		exact: true,
		// redirectFrom: '/role', 
		title: 'Contacts',
		component: ContactPage,
	},
]