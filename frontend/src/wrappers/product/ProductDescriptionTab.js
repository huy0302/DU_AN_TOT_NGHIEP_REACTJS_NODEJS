import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import { StarIcons } from "../../components/common/star";
import { useForm } from "antd/es/form/Form";
import { useDispatch } from "react-redux";
import { Form, Input, Pagination, message } from "antd";
import { buildImage, getItem, onFieldsChange, validateMessages } from "../../services";
import TextArea from "antd/es/input/TextArea";
import { toggleShowLoading } from "../../redux/actions/common";
import { VOTE_SERVICE } from "../../services/shop/vote-service";
import Paginator from "react-hooks-paginator";

const ProductDescriptionTab = ( props ) =>
{
	const [ form ] = useForm();
	const [ voteNumber, setVoteNumber ] = useState( 0 );
	useEffect( () =>
	{
		form.setFieldsValue( {
			number: 0,
			content: null
		} )
	}, [] );

	useEffect( () =>
	{

		form.setFieldValue( 'number', voteNumber );
	}, [ voteNumber ] );

	const dispatch = useDispatch();

	const submitForm = async ( e ) =>
	{
		try
		{
			dispatch( toggleShowLoading( true ) );
			const response = await VOTE_SERVICE.create( {
				content: form.getFieldValue( 'content' ),
				number: voteNumber,
				product_id: props.productFullDesc.id
			} );
			if ( response?.status === 'success' )
			{
				form.resetFields();
				setVoteNumber( 0 );
				props.getDataVotes({page: 1, page_size: 5, product_id: props.productFullDesc.id});
				window.location.reload();
				message.success( 'Đánh giá sản phẩm thành công' );
			} else
				message.error( 'Đánh giá sản phẩm không thành công!' );
			dispatch( toggleShowLoading( false ) );
		} catch ( error )
		{
			message.error( 'Đánh giá sản phẩm không thành công!' );
			dispatch( toggleShowLoading( false ) );
		}

	}

	return (
		<div className={ `description-review-area ${ props.spaceBottomClass }` }>
			<div className="container">
				<div className="description-review-wrapper">
					<Tab.Container defaultActiveKey="productDescription">
						<Nav variant="pills" className="description-review-topbar">
							{/* <Nav.Item>
                <Nav.Link eventKey="additionalInfo">
                  Additional Information
                </Nav.Link>
              </Nav.Item> */}
							<Nav.Item>
								<Nav.Link eventKey="productDescription">Mô Tả</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link eventKey="productReviews">Đánh giá {props?.paging?.total ? `(${props?.paging?.total})` : ''}</Nav.Link>
							</Nav.Item>
						</Nav>
						<Tab.Content className="description-review-bottom">
							{/* <Tab.Pane eventKey="additionalInfo">
                <div className="product-anotherinfo-wrapper">
                  <ul>
                    <li>
                      <span>Weight</span> 400 g
                    </li>
                    <li>
                      <span>Dimensions</span>10 x 10 x 15 cm{" "}
                    </li>
                    <li>
                      <span>Materials</span> 60% cotton, 40% polyester
                    </li>
                    <li>
                      <span>Other Info</span> American heirloom jean shorts pug
                      seitan letterpress
                    </li>
                  </ul>
                </div>
              </Tab.Pane> */}
							<Tab.Pane eventKey="productDescription">
								{ props.productFullDesc?.content }
							</Tab.Pane>
							<Tab.Pane eventKey="productReviews">
								<div className="row">
									<div className={ `col-12 col-lg-${ getItem( 'access_token' ) ? 7 : 12 }` }>
										<div className="review-wrapper">
											{
												props.reviews?.length > 0 &&
												props.reviews.map( ( item, index ) =>
												{
													return (
														<div className="single-review" key={index}>
															<div className="review-img">
																<img width={80} height={80}
																	src={buildImage(item?.user?.avatar, true)}
																	alt={item?.user?.avatar}
																/>
															</div>
															<div className="review-content">
																<div className="review-top-wrap">
																	<div className="review-left d-block">
																		<div className="review-name">
																			<h4>{item?.user?.name || 'N/A'}</h4>
																		</div>
																		<div className="review-rating mt-2">
																			<StarIcons vote_number={ item?.number } />
																		</div>
																	</div>
																	{/* <div className="review-left">
																		<button>Reply</button>
																	</div> */}
																</div>
																<div className="review-bottom">
																	<p className="w-100">
																		{item?.content}
																	</p>
																</div>
															</div>
														</div>
													)
												} )
											}
											{/* <div className="single-review child-review">
												<div className="review-img">
													<img
														src={
															process.env.PUBLIC_URL +
															"/assets/img/testimonial/2.jpg"
														}
														alt=""
													/>
												</div>
												<div className="review-content">
													<div className="review-top-wrap">
														<div className="review-left">
															<div className="review-name">
																<h4>White Lewis</h4>
															</div>
															<div className="review-rating">
																<StarIcons vote_number={ 4 } />
															</div>
														</div>
														<div className="review-left">
															<button>Reply</button>
														</div>
													</div>
													<div className="review-bottom">
														<p>
															Vestibulum ante ipsum primis aucibus orci
															luctustrices posuere cubilia Curae Suspendisse
															viverra ed viverra. Mauris ullarper euismod
															vehicula. Phasellus quam nisi, congue id nulla.
														</p>
													</div>
												</div>
											</div> */}
										</div>
										{
											props.paging.total > props?.paging?.page_size &&
											<div className="mx-auto d-flex justify-content-center my-4">
												<Pagination
													onChange={ e =>
														props.getDataVotes( { ...props.paging, page: e, ...props.params } )
													}
													pageSize={ props.paging.page_size }
													defaultCurrent={ props.paging.page }
													total={ props.paging.total }
												/>
											</div>
										}
									</div>
									{
										getItem( 'access_token' ) && <div className="col-lg-5">
											<div className="ratting-form-wrapper pl-50">
												<h2>Đánh giá sản phẩm</h2>
												<div className="ratting-form">
													<Form
														name='nest-messages form'
														form={ form }
														onFinish={ submitForm }
														onFieldsChange={ ( e ) => onFieldsChange( e, form ) }
														validateMessages={ validateMessages }
													>
														<div className="star-box d-block">
															<h4>Đánh giá của bạn:</h4>
															<StarIcons setVoteNumber={ setVoteNumber } vote_number={ voteNumber } form={ form } is_form={ true } />

														</div>
														<div className='mb-3'>
															<Form.Item name="content"
																rules={ [ { required: true } ] }
																className=' d-block'>
																<TextArea className='mb-0 rating-form-style'
																	rows={ 5 }
																	maxLength={ 300 } placeholder='Nhập nội dung' />
															</Form.Item>
														</div>
														<div className='rating-form-style form-submit'>
															<input type="submit" defaultValue="Submit" />
														</div>
													</Form>
													{/* <form action="#">


													<div className="row">
														<div className="col-md-6">
															<div className="rating-form-style mb-10">
																<input placeholder="Name" type="text" />
															</div>
														</div>
														<div className="col-md-6">
															<div className="rating-form-style mb-10">
																<input placeholder="Email" type="email" />
															</div>
														</div>
														<div className="col-md-12">
															<div className="rating-form-style form-submit">
																<textarea
																	name="Your Review"
																	placeholder="Message"
																	defaultValue={ "" }
																/>
																<input type="submit" defaultValue="Submit" />
															</div>
														</div>
													</div>
												</form> */}
												</div>
											</div>
										</div>
									}
								</div>
							</Tab.Pane>
						</Tab.Content>
					</Tab.Container>
				</div>
			</div>
		</div>
	);
};

ProductDescriptionTab.propTypes = {
	productFullDesc: PropTypes.object,
	spaceBottomClass: PropTypes.string
};

export default ProductDescriptionTab;
