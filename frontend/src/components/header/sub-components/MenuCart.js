// @ts-nocheck
import PropTypes from "prop-types";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import { getDiscountPrice } from "../../../helpers/product";
import { customNumber } from "../../../helpers/func";
import { buildImage, onErrorImage } from "../../../services";

const MenuCart = ({ cartData, currency, deleteFromCart, activeCart }) => {
    let cartTotalPrice = 0;
    const { addToast } = useToasts();
    return (
        <div className={`shopping-cart-content ${activeCart ? 'active' : ''}`}>
            {cartData && cartData.length > 0 ? (
                <Fragment>
                    <ul>
                        {cartData.map((single, key) => {
                            const discountedPrice = getDiscountPrice(
                                single.price,
                                single.sale
                            );
                            const finalProductPrice = (single.price).toFixed(2);
                            const finalDiscountedPrice = (discountedPrice)?.toFixed(2);
                            discountedPrice != null
                                ? (cartTotalPrice += finalDiscountedPrice * single.quantity)
                                : (cartTotalPrice += finalProductPrice * single.quantity);

                            return (
                                <li className="single-shopping-cart" key={key}>
                                    <div className="shopping-cart-img">
                                        <Link to={process.env.PUBLIC_URL + "/product/" + single.id}>
                                            <img
                                                alt={single.avatar}
                                                src={buildImage(single.avatar)}
												onError={onErrorImage}
                                                className="img-fluid"
                                            />
                                        </Link>
                                    </div>
                                    <div className="shopping-cart-title">
                                        <h4>
                                            <Link
                                                to={process.env.PUBLIC_URL + "/product/" + single.id}
                                            >
                                                {" "}
                                                {single.name}{" "}
                                            </Link>
                                        </h4>
                                        <h6>Số lượng: {single.quantity}</h6>
                                        <span>
                                            {discountedPrice !== null
                                                ? customNumber(finalDiscountedPrice)
                                                : customNumber(finalProductPrice)}
                                        </span>
                                        {/* {single.selectedProductColor &&
                                            single.selectedProductSize ? (
                                            <div className="cart-item-variation">
                                                <span>Color: {single.selectedProductColor}</span>
                                                <span>Size: {single.selectedProductSize}</span>
                                            </div>
                                        ) : (
                                            ""
                                        )} */}
                                    </div>
                                    <div className="shopping-cart-delete">
                                        <button onClick={() => deleteFromCart(single, addToast)}>
                                            <i className="fa fa-times-circle" />
                                        </button>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                    <div className="shopping-cart-total">
                        <h4>
                            Tổng cộng: {" "}
                            <span className="shop-total">
                                {customNumber(cartTotalPrice.toFixed(2))}
                            </span>
                        </h4>
                    </div>
                    <div className="shopping-cart-btn btn-hover text-center">
                        <Link className="default-btn" to={process.env.PUBLIC_URL + "/cart"}>
                            GIỎ HÀNG
                        </Link>
                        <Link
                            className="default-btn"
                            to={localStorage.getItem('access_token') ? process.env.PUBLIC_URL + "/checkout" : process.env.PUBLIC_URL + "auth/login"}
                        >
                            THANH TOÁN
                        </Link>
                    </div>
                </Fragment>
            ) : (
                <p className="text-center">Chưa có sản phẩm trong giỏ hàng</p>
            )}
        </div>
    );
};

MenuCart.propTypes = {
    cartData: PropTypes.array,
    currency: PropTypes.object,
    deleteFromCart: PropTypes.func
};

export default MenuCart;
