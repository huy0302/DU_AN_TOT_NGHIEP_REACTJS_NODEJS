// @ts-nocheck
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import Swiper from "react-id-swiper";
import SectionTitle from "../../components/section-title/SectionTitle";
import ProductGrid from "./ProductGrid";
import { getProductsByFilter } from "../../services";



const RelatedProductSlider = ( { spaceBottomClass, category } ) =>
{
	const settings = {
		loop: false,
		slidesPerView: 4,
		grabCursor: true,
		with:100,
		breakpoints: {
			1024: {
				slidesPerView: 4
			},
			768: {
				slidesPerView: 3
			},
			640: {
				slidesPerView: 2
			},
			320: {
				slidesPerView: 1
			}
		}
	};
	const [ products, setProducts ] = useState( null );

	useEffect( () =>
	{
		if ( category )
		{
			getProductsByFilter( { page: 1, page_size: 4, category_id: category }, setProducts );
		}
	}, [ category ] );

	return (
		<div className={ `related-product-area ${ spaceBottomClass ? spaceBottomClass : "" }` }>
			<div className="container">
				<SectionTitle
					titleText="Các Sản Phẩm Tương Tự"
					positionClass="text-center"
					spaceClass="mb-50"
				/>
				<div className="row">
					{
						products && <Swiper { ...settings }>
							<ProductGrid
								products={ products }
								sliderClassName="swiper-slide"
							/>
						</Swiper>
					}
				</div>
			</div>
		</div>
	);
};

RelatedProductSlider.propTypes = {
	category: PropTypes.number,
	spaceBottomClass: PropTypes.string
};

export default RelatedProductSlider;
