import PropTypes from "prop-types";
import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { ERROR_PAYMENT, SUCCESS_PAYMENT } from "../../helpers/constant";

const PaymentStatus = ( { location } ) =>
{
	const { pathname, search } = location;

	const [ img, setImg ] = useState( null );
	const [ title, setTitle ] = useState( '' );
	const [ content, setContent ] = useState( '' );

	const params = useParams();

	useEffect( () =>
	{
		if ( params.type === 'error' )
		{
			setImg( ERROR_PAYMENT );
			setTitle( 'Failed!' );
		} else if ( params.type === 'success' )
		{
			setImg( SUCCESS_PAYMENT );
			setTitle( 'Successfully!' );
		} else
		{
			setImg( SUCCESS_PAYMENT );
			setContent( 'Payment successfully' );
		}
	}, [ params.type ] );

	// useEffect(() => {
	// 	if(search != null && search)
	// }, [search]);
	return (
		<Fragment>
			<MetaTags>
				<title>Payment</title>
				<meta
					name="description"
					content="404 page of flone react minimalist eCommerce template."
				/>
			</MetaTags>
			<BreadcrumbsItem to={ process.env.PUBLIC_URL + "/" }>Home</BreadcrumbsItem>
			<BreadcrumbsItem to={ process.env.PUBLIC_URL + pathname }>
				Payment
			</BreadcrumbsItem>
			<LayoutOne headerTop="visible">
				{/* breadcrumb */ }
				<Breadcrumb />
				<div className="error-area pt-40 pb-100">
					<div className="container">
						<div className="row justify-content-center">
							<div className="col-xl-7 col-lg-8 text-center">
								{
									img && <img src={ img } width={80} height={80} alt='payment' className="d-block mx-auto" />
								}
								{ content ? (
									<div className="mx-auto">
										<h2 className="text-center">{ content }</h2>
										<div className="text-center mx-auto">
											<img src="https://img001.prntscr.com/file/img001/AezE7Si4RsWGONiW6uBeBA.png" width={ 200 } height={ 200 } />
											<p className="mt-3">Please use QA code to pay order</p>
										</div>

									</div>

								) : (
									<h2 className="text-center">Payment { title }</h2>
								) }
							</div>
						</div>
					</div>
				</div>
			</LayoutOne>
		</Fragment>
	);
};

PaymentStatus.propTypes = {
	location: PropTypes.object
};

export default PaymentStatus;
