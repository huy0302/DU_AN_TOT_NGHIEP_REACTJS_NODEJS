// @ts-nocheck
import PropTypes from "prop-types";
import React, { Fragment } from "react";
import ShopTopActionFilter from "../../components/product/ShopTopActionFilter";

const ShopTopbar = (props) => {
  return (
    <Fragment>
      {/* shop top actions */}
      <ShopTopActionFilter
       {...props}
      />
    </Fragment>
  );
};

ShopTopbar.propTypes = {
  getFilterSortParams: PropTypes.func,
  getLayout: PropTypes.func,
  getSortParams: PropTypes.func,
  productCount: PropTypes.number,
  products: PropTypes.array,
  sortedProductCount: PropTypes.number
};

export default ShopTopbar;
