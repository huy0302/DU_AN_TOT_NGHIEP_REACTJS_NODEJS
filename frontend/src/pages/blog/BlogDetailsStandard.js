import PropTypes from "prop-types";
import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import BlogSidebar from "../../wrappers/blog/BlogSidebar";
import BlogPost from "../../wrappers/blog/BlogPost";

const BlogDetailsStandard = ({ location }) => {
    const { pathname } = location;

    return (
        <Fragment>
            <MetaTags>
                <title>VITAGREEN</title>
                <meta
                    name="description"
                    content="Blog post page of flone react minimalist eCommerce template."
                />
            </MetaTags>
            <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Trang chủ</BreadcrumbsItem>
            <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
                Bài Viết Trên Blog
            </BreadcrumbsItem>
            <LayoutOne headerTop="visible">
                {/* breadcrumb */}
                <Breadcrumb />
                <div className="blog-area pt-100 pb-100">
                    <div className="container">
                        <div className="row flex-row-reverse">
                            <div className="col-lg-9">
                                <div className="blog-details-wrapper ml-20">
                                    <BlogPost />
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <BlogSidebar />
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutOne>
        </Fragment>
    );
};

BlogDetailsStandard.propTypes = {
    location: PropTypes.object
};

export default BlogDetailsStandard;
