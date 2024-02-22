import PropTypes from "prop-types";
import React, { Fragment, useEffect, useState } from "react";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import { Link, Redirect, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useForm } from "antd/es/form/Form";
import { onFieldsChange, resetForm, validateMessages } from "../../services";
import { Form, Input, message } from "antd";
import { useDispatch } from "react-redux";
import { toggleShowLoading } from "../../redux/actions/common";
import { Auth_Service } from "../../services/shop/auth-service";

const LoginRegister = ( { location } ) =>
{
	const { pathname } = location;
	const param = useParams();

	const [ type, setType ] = useState( param.type );
	const [ error, setError ] = useState( false );


	useEffect( () =>
	{
		if ( param )
		{
			setType( param.type );
		}
	}, [ param ] );

	const [ form ] = useForm();
	const dispatch = useDispatch();

	const submitForm = async ( e ) =>
	{
		dispatch( toggleShowLoading( true ) );
		let response;
		let messageSuccess = "Thao tác thành công! Vui lòng kiểm tra mail của bạn";
		if ( type === "change" )
		{
			if ( !checkPassword( e?.password, e?.retypeNewPassword ) )
			{
				message.error( "Mật khẩu không đồng nhất" );
				dispatch( toggleShowLoading( false ) );
				return;
			}
			response = await Auth_Service.reset( { ...e, link: `${ window.location.origin }/reset-password/change` } );
			messageSuccess = "Đổi mật khẩu thành công";
		} else
		{
			response = await Auth_Service.resetPassword( { ...e, link: `${ window.location.origin }/reset-password/change` } );
		}
		dispatch( toggleShowLoading( false ) );
		if ( response?.status == 'success' )
		{
			resetForm( form );
			if ( type === "change" )
			{
				
				message.success( messageSuccess );
				window.location.href = '/auth/login'
			} else
			{
				message.success( messageSuccess );
				window.location.href = '/reset-password/change'
			}

		} else
		{
			message.error( response?.message || 'error' );
		}

	}

	const checkPassword = ( newPass, retypePass ) =>
	{
		return newPass === retypePass;
	}

	return (
		<div>
			<BreadcrumbsItem to={ process.env.PUBLIC_URL + "/" }>Trang chủ</BreadcrumbsItem>
			<BreadcrumbsItem to={ process.env.PUBLIC_URL + "/auth/login" }>Đăng nhập</BreadcrumbsItem>
			<BreadcrumbsItem to={ process.env.PUBLIC_URL + pathname }>
				Quên mật khẩu
			</BreadcrumbsItem>
			<LayoutOne headerTop="visible">
				{/* breadcrumb */ }
				<Breadcrumb />
				<div className="login-register-area pt-100 pb-100">
					<div className="container">
						<div className="row">
							<div className={ type === 'login' ? 'col-lg-7 ml-auto mr-auto' : 'col-md-12 ml-auto mr-auto' }>
								<div className="login-register-wrapper">
									<div className="login-form-container">
										<h2 className="text-center">{ type === "change" ? "Thay đổi mật khẩu" : "Lấy Lại Mật Khẩu" }</h2>
										<div className="login-register-form">
											<Form
												className='p-3'
												name='nest-messages form'
												form={ form }
												onFinish={ submitForm }
												onFieldsChange={ ( e ) => onFieldsChange( e, form ) }
												validateMessages={ validateMessages }
											>
												<div className='mb-3 w-50 mx-auto'>
													<Form.Item name="email" label="Email"
														rules={ [ { required: true } ] }
														className=' d-block'>
														<Input className='mb-0' placeholder='Nhập vào email' />
													</Form.Item>
												</div>
												{
													type == 'change' &&
													<>
														<div className="mt-5 mb-3 w-50 mx-auto">
															<Form.Item name="old_password"
																rules={ [ { required: true } ] }
																className=' d-block'
																label="Mật khẫu cũ"
															>
																<Input.Password type="password" className=' mb-0' placeholder='Nhập mật khẩu cũ' />
															</Form.Item>
														</div>
														<div className="mt-5 mb-3 w-50 mx-auto">
															<Form.Item name="password"
																rules={ [ { required: true } ] }
																className=' d-block'
																label="Mật khẩu mới"
															>
																<Input.Password type="password" className=' mb-0' placeholder='Nhập mật khẩu mới' />
															</Form.Item>
														</div>
														<div className="mt-5 mb-3 w-50 mx-auto">
															<Form.Item name="retypeNewPassword"
																rules={ [ { required: true } ] }
																className="d-block"
																label="Nhập lại mật khẩu mới"
															>
																<Input.Password type="password" className={ ` mb-0 ${ error == true ? "borderError" : "" }` } placeholder='Nhập lại mật khẩu mới' onChange={ () => setError( false ) } />
															</Form.Item>
														</div>
													</>
												}

												<div className='button-box d-flex justify-content-center'>
													<button type="submit" className="mr-2" style={ { padding: '15px 25px', fontSize: "16px", borderRadius: "10px" } }>
														{ type === "change" ? "Đổi mật khẩu" : "Gửi mail" }
													</button>

												</div>
											</Form>
										</div>

									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</LayoutOne>
		</div>
	);
};

LoginRegister.propTypes = {
	location: PropTypes.object
};

export default LoginRegister;
