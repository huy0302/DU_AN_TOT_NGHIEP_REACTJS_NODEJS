import { Tab } from "react-bootstrap";
import React, { Fragment } from "react";
import { useForm } from "antd/es/form/Form";
import { onFieldsChange, validateMessages } from "../../services";
import { Form, Input, message } from "antd";
import { Auth_Service } from "../../services/shop/auth-service";
import { useDispatch } from "react-redux";
import { toggleShowLoading } from "../../redux/actions/common";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export const LoginForm = ( props ) =>
{
	const [ form ] = useForm();
	const dispatch = useDispatch();

	const submitForm = async ( e ) =>
	{
		dispatch( toggleShowLoading( true ) );
		const response = await Auth_Service.login( e );
		if ( response?.status == 'success' )
		{
			localStorage.setItem( 'access_token', response?.data?.token_info?.access_token );
			localStorage.setItem( 'name', response?.data?.user?.name );
			localStorage.setItem( 'email', response?.data?.user?.email );
			localStorage.setItem( 'phone', response?.data?.user?.phone );
			localStorage.setItem( 'gender', response?.data?.user?.gender );
			localStorage.setItem( 'avatar', response?.data?.user?.avatar );
			localStorage.setItem( 'id', response?.data?.user?.id );
			message.success("Đăng nhập thành công")
			window.location.href = '/';
		} else
		{
			message.error( response?.message || 'error' );
		}
		dispatch( toggleShowLoading( false ) );
	}

	return (
		<div className="login-form-container">
			<h2 className="text-center">Đăng nhập</h2>
			<div className="login-register-form">
				<Form
					className='p-3'
					name='nest-messages form'
					form={ form }
					onFinish={ submitForm }
					onFieldsChange={ ( e ) => onFieldsChange( e, form ) }
					validateMessages={ validateMessages }
				>
					<div className='mb-3'>
						<Form.Item name="username"
							rules={ [ { required: true } ] }
							className=' d-block'>
							<Input className='mb-0' placeholder='Nhập username hoặc mail' />
						</Form.Item>
					</div>
					<div className="mt-5 mb-3">
						<Form.Item name="password"
							rules={ [ { required: true } ] }
							className=' d-block '>
							<Input.Password type="password" className='mb-0' placeholder='Nhập mật khẩu' />
						</Form.Item>

					</div>

					<div className='button-box d-flex'>
						<button type="submit" className="w-100" style={ { padding: '15px 50px', fontSize: "16px", borderRadius: "10px" } }>
							Đăng nhập
						</button>
					</div>
				</Form>
				<div className="p-3 d-md-flex d-block justify-content-md-between">
					<h4>
						<Link to={ "/reset-password/send-mail" } className="text-primary mt-2">
							Quên mật khẩu?
						</Link>
					</h4>
					<h4>
						<Link to={ "/auth/register" } className="text-primary  mt-2">
							Tạo tài khoản
						</Link>
					</h4>
				</div>

			</div>

		</div>
	);
}
