import PropTypes from "prop-types";
import React from "react";
import {
  getIndividualCategories,
  getIndividualTags,
  getIndividualColors,
  getProductsIndividualSizes,
  setActiveSort
} from "../../helpers/product";

const ShopTopFilter = (props) => {
  const uniqueCategories = props.categories;
  const uniqueColors = getIndividualColors(props.products);
  const uniqueSizes = getProductsIndividualSizes(props.products);
  const uniqueTags = getIndividualTags(props.products);

  return (
    <div className="product-filter-wrapper" id="product-filter-wrapper">
      <div className="product-filter-wrapper__inner">
        <div className="row">
          {/* Product Filter */}
          <div className="col-md-12 col-sm-6 col-xs-12 mb-30">
            <div className="product-filter">
              <h5>Các danh mục sản phẩm</h5>
              {uniqueCategories ? (
                <ul className="row">
					<li className="col-2">
                        <button
                          onClick={e => {
                            props.setParams({...props.params, category_id: null});
                            setActiveSort(e);
                          }}
                        >
                          Tất cả
                        </button>
                      </li>
                  {uniqueCategories.map((category, key) => {
                    return (
                      <li key={key} className="col-2">
                        <button
                          onClick={e => {
                            props.setParams({...props.params, category_id: category.id});
                            setActiveSort(e);
                          }}
                        >
                          {category.name}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              ) : (
                "No categories found"
              )}
            </div>
          </div>

          {/* Product Filter */}
          {/* <div className="col-md-3 col-sm-6 col-xs-12 mb-30">
            <div className="product-filter">
              <h5>Color</h5>
              {uniqueColors ? (
                <ul>
                  {uniqueColors.map((color, key) => {
                    return (
                      <li key={key}>
                        <button
                          onClick={e => {
                            props.getSortParams("color", color);
                            setActiveSort(e);
                          }}
                        >
                          {color}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              ) : (
                "No colors found"
              )}
            </div>
          </div> */}
          {/* Product Filter */}
          {/* <div className="col-md-3 col-sm-6 col-xs-12 mb-30">
            <div className="product-filter">
              <h5>Size</h5>
              {uniqueSizes ? (
                <ul>
                  {uniqueSizes.map((size, key) => {
                    return (
                      <li key={key}>
                        <button
                          className="text-uppercase"
                          onClick={e => {
                            props.getSortParams("size", size);
                            setActiveSort(e);
                          }}
                        >
                          {size}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              ) : (
                "No sizes found"
              )}
            </div>
          </div> */}
          {/* Product Filter */}
          {/* <div className="col-md-3 col-sm-6 col-xs-12 mb-30">
            <div className="product-filter product-filter--tag">
              <h5>Tag</h5>
              {uniqueTags ? (
                <ul>
                  {uniqueTags.map((tag, key) => {
                    return (
                      <li key={key}>
                        <button
                          onClick={e => {
                            props.getSortParams("tag", tag);
                            setActiveSort(e);
                          }}
                        >
                          {tag}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              ) : (
                "No tags found"
              )}
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

ShopTopFilter.propTypes = {
  getSortParams: PropTypes.func,
  products: PropTypes.array
};

export default ShopTopFilter;
