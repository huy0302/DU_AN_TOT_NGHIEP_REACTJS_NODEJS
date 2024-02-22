import { Tab } from "react-bootstrap";
import React, { Fragment, useState } from "react";
import { useForm } from "antd/es/form/Form";
import { onFieldsChange, resetForm, validateMessages } from "../../services";
import { Form, Input, Select, message } from "antd";
import { useDispatch } from "react-redux";
import { Auth_Service } from "../../services/shop/auth-service";
import { toggleShowLoading } from "../../redux/actions/common";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export const RegisterForm = ( props ) =>
{
	const [ form ] = useForm();
	const [ genderConfig, setGenderConfig ] = useState( [
		{
			value: 'male',
			label: 'Male'
		},
		{
			value: 'female',
			label: 'Female'
		},
		{
			value: 'other',
			label: 'Other'
		}
	] );
	const [ error, setError ] = useState( [] );
	const dispatch = useDispatch();
	const submitForm = async ( e ) =>
	{
		if ( e.password?.trim() !== e.password_cf?.trim() )
		{
			message.error( 'Password does not match' );
		}
		dispatch( toggleShowLoading( true ) );
		const result = await Auth_Service.register( { ...e, type: 2 } );
		if ( result?.status === 'success' )
		{
			resetForm(form)
			message.success("Tạo tài khoản thành công")
			// window.location.href = 'login';
		} else if ( result?.status === 'failed' )
		{
			setError( result.data );
			message.error( result.message );
		} else
		{
			message.error( result.message );
		}
		dispatch( toggleShowLoading( false ) );
	}

	return (
		<div className="login-form-container">
			<h2 className="text-center">Tạo tài khoản</h2>
			<div className="login-register-form">
				<Form
					className='p-3'
					name='form'
					form={ form }
					onFinish={ submitForm }
					onFieldsChange={ ( e ) => onFieldsChange( e, form ) }
					validateMessages={ validateMessages }
				>
					<Form.Item name="name" label="Tên"
						rules={ [ { required: true } ] }
						className=' d-block text-left' >
						<Input className=' mb-0' placeholder='Nhập dữ liệu' />
					</Form.Item>
					<div className="row">
						<div className='col-md-6'>
							<Form.Item name="username" label="Tên tài khoản"
								rules={ [ { required: true } ] }
								className=' d-block'>
								<Input className=' mb-0' placeholder='Nhập tên tài khoản' />
							</Form.Item>
						</div>
						<div className='col-md-6'>
							<Form.Item name="email" label="Email"
								rules={ [ { required: true } ] }
								className=' d-block'>
								<Input className=' mb-0' placeholder='Nhập email' />
							</Form.Item>
						</div>
						<div className="col-md-6">
							<Form.Item name="password" label="Mật khẩu"
								rules={ [ { required: true } ] }
								className=' d-block '>
								<Input.Password type="password" className=' mb-0' placeholder='Nhập mật khẩu' />
							</Form.Item>
						</div>
						<div className="col-md-6">
							<Form.Item name="password_cf" label="Nhập lại mật khẩu"
								rules={ [ { required: true } ] }
								className=' d-block '>
								<Input.Password type="password" className=' mb-0' placeholder='Nhập lại mật khẩu' />
							</Form.Item>
						</div>
						<div className="col-md-6">
							<Form.Item name="phone" label="Số điện thoại"
								rules={ [ { required: true } ] }
								className=' d-block '>
								<Input className=' mb-0' placeholder='Nhập số điện thoại' />
							</Form.Item>
						</div>
						<div className="col-md-6">
							<Form.Item name="gender" label="Giới tính"
								rules={ [ { required: true } ] } className='d-block'>
								<Select
									placeholder="Chọn giới tính"
									size="large"
									style={ { width: '100%' } }
									options={ genderConfig }
								/>
							</Form.Item>
						</div>
					</div>

					<div className='button-box d-flex'>
						<button type="submit" className="mx-auto" style={ { padding: '15px 50px', fontSize: "16px", borderRadius: "10px" } }>
							Tạo tài khoản
						</button>
					</div>
				</Form>
				<p className="text-center">--------------------------------------------------------------</p>
				<h4 className="text-center">
					<Link to={ "/auth/login" } className="text-primary  mt-2">
						Đăng nhập
					</Link>
				</h4>
			</div>
		</div>
	);
}
