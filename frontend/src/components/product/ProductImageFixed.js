import PropTypes from "prop-types";
import React from "react";
import { buildImage } from "../../services";
import { checkTimeNow } from "../../helpers/func";

const ProductImageFixed = ({ product }) => {
  return (
    <div className="product-large-image-wrapper">
      {product.sale || product.hot === 1 ? (
        <div className="product-img-badges">
          {product.sale && (checkTimeNow(product?.sale_to) && product?.sale) ? (
            <span className="pink">-{product.sale}%</span>
          ) : (
            ""
          )}
          {product.hot === 1 ? <span className="purple">Hot</span> : ""}
        </div>
      ) : (
        ""
      )}

      <div className="product-fixed-image">
        {buildImage(product.avatar) ? (
          <img
            src={buildImage(product.avatar)}
            alt=""
            className="img-fluid"
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

ProductImageFixed.propTypes = {
  product: PropTypes.object
};

export default ProductImageFixed;
