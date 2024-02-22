// @ts-nocheck
import PropTypes from "prop-types";
import React, { Fragment, useEffect, useState } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import { connect, useDispatch } from "react-redux";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import RelatedProductSlider from "../../wrappers/product/RelatedProductSlider";
import ProductDescriptionTab from "../../wrappers/product/ProductDescriptionTab";
import ProductImageDescription from "../../wrappers/product/ProductImageDescription";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { getProducts, showProduct, showProductDetail } from "../../services";
import { VOTE_SERVICE } from "../../services/shop/vote-service";

const Product = ({ location }) => {
	const { pathname } = location;
	const { id } = useParams()

	const [productData, setProductData] = useState(null);
	const [reviews, setReviews] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [paging, setPaging] = useState({
		page: 1,
		page_size: 5,
		total: 0
	});
	const dispatch = useDispatch();
	useEffect(() => {
		showProductDetail(id, setProductData, dispatch);
		getDataVotes({ ...paging, product_id: id });
	}, [id]);

	useEffect(() => {

	}, [productData]);


	const getDataVotes = async (filters) => {
		try {
			const response = await VOTE_SERVICE.getList(filters);
			if (response?.status === 'success') {
				setPaging(response?.data?.meta);
				setReviews(response?.data?.votes);
			}
		} catch (error) {

		}
	}



	return (
		<Fragment>
			<MetaTags>
				<title>VITAGREEN</title>
				<meta
					name="description"
					content="Cửa hàng trái cây"
				/>
			</MetaTags>

			<BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Trang chủ</BreadcrumbsItem>
			<BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
				Sản phẩm
			</BreadcrumbsItem>
			<LayoutOne headerTop="visible">
				{productData ?
					<>
						<Breadcrumb />

						<ProductImageDescription
							spaceTopClass="pt-100"
							spaceBottomClass="pb-100"
							product={productData}
						/>

						<ProductDescriptionTab
							spaceBottomClass="pb-90"
							productFullDesc={productData}
							reviews={reviews}
							paging={paging}
							setPaging={setPaging}
							getDataVotes={getDataVotes}
						/>

						<RelatedProductSlider
							spaceBottomClass="pb-95"
							category={productData.category_id}
						/>
					</> :
					<span className="text-center fw-700">Không có dữ liệu chi tiết sản phẩm</span>
				}
			</LayoutOne>


		</Fragment>
	);
};

Product.propTypes = {
	location: PropTypes.object,
};

const mapStateToProps = (state, ownProps) => {
};

export default connect(mapStateToProps)(Product);
