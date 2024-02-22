// @ts-nocheck
import PropTypes, { string } from "prop-types";
import React, { Fragment, useEffect, useState } from "react";
import { LightgalleryProvider, LightgalleryItem } from "react-lightgallery";
import Swiper from "react-id-swiper";
import { propTypes } from "react-bootstrap/esm/Image";
import { buildImage, onErrorImage } from "../../services";
import { checkTimeNow } from "../../helpers/func";

const ProductImageGallery = ( { product, images } ) =>
{
	const [ gallerySwiper, getGallerySwiper ] = useState( null );
	const [ thumbnailSwiper, getThumbnailSwiper ] = useState( null );

	const [ loop, setLoop ] = useState( 4 );

	useEffect( () =>
	{
		// setLoop(images?.length >= 4 ? 4: 0)

	}, [ images ] )


	// effect for swiper slider synchronize
	useEffect( () =>
	{
		if (
			gallerySwiper !== null &&
			gallerySwiper.controller &&
			thumbnailSwiper !== null &&
			thumbnailSwiper.controller
		)
		{
			gallerySwiper.controller.control = thumbnailSwiper;
			thumbnailSwiper.controller.control = gallerySwiper;
		}
	}, [ gallerySwiper, thumbnailSwiper ] );

	// swiper slider settings
	const gallerySwiperParams = {
		getSwiper: getGallerySwiper,
		spaceBetween: 10,
		loopedSlides: 4,
		loop: true,
		effect: "fade"
	};

	const thumbnailSwiperParams = {
		getSwiper: getThumbnailSwiper,
		spaceBetween: 10,
		slidesPerView: loop,
		loopedSlides: 4,
		touchRatio: 0.2,
		freeMode: true,
		loop: true,
		slideToClickedSlide: true,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev"
		},
		renderPrevButton: () => (
			<button className="swiper-button-prev ht-swiper-button-nav">
				<i className="pe-7s-angle-left" />
			</button>
		),
		renderNextButton: () => (
			<button className="swiper-button-next ht-swiper-button-nav">
				<i className="pe-7s-angle-right" />
			</button>
		)
	};

	return (
		<Fragment>
			<div className="product-large-image-wrapper">
				{ product.sale || product.hot === 1 ? (
					<div className="product-img-badges">
						{ product.sale && (checkTimeNow(product?.sale_to) && product?.sale) ? (
							<span className="pink">-{ product.sale }%</span>
						) : (
							""
						) }
						{ product.hot === 1 ? <span className="purple">Hot</span> : "" }
					</div>
				) : (
					""
				) }
				<LightgalleryProvider>
					<Swiper { ...gallerySwiperParams }>
						{ images &&
							images.map( ( single, key ) =>
							{
								return (
									<div key={ key }>
										<LightgalleryItem
											group="any"
											src={ buildImage( single ) }
											alt={ buildImage( single ) }
											onError={ onErrorImage }
										>
											<button>
												<i className="pe-7s-expand1"></i>
											</button>
										</LightgalleryItem>
										<div className="single-image">
											<img
												className="img-fluid"
												src={ buildImage( single ) }
												alt={ buildImage( single ) }
												onError={ onErrorImage }
											/>
										</div>
									</div>
								);
							} )
						}

					</Swiper>
				</LightgalleryProvider>
			</div>
			<div className="product-small-image-wrapper mt-15">
				<Swiper { ...thumbnailSwiperParams }>
					{ images &&
						images.map( ( single, key ) =>
						{
							return (
								<div key={ key }>
									<div className="single-image">
										<img
											className="img-fluid"
											src={ buildImage( single ) }
											alt={ buildImage( single ) }
											onError={ onErrorImage }

										/>
									</div>

								</div>
							);
						} )
					}

				</Swiper>
			</div>
		</Fragment>
	);
};

ProductImageGallery.propTypes = {
	product: PropTypes.object,
	images: PropTypes.arrayOf( string )
};

export default ProductImageGallery;
