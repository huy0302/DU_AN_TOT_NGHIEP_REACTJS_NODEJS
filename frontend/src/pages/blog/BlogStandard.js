import PropTypes from "prop-types";
import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import BlogSidebar from "../../wrappers/blog/BlogSidebar";
import BlogPagination from "../../wrappers/blog/BlogPagination";
import BlogPosts from "../../wrappers/blog/BlogPosts";

const BlogStandard = ({ location }) => {
    const { pathname } = location;
    return (
        <Fragment>
            <MetaTags>
                <title>VITAGREEN</title>
                <meta
                    name="description"
                    content="Tin tức"
                />
            </MetaTags>
            <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Trang chủ</BreadcrumbsItem>
            <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
                Tin tức
            </BreadcrumbsItem>
            <LayoutOne headerTop="visible">
                {/* breadcrumb */}
                <Breadcrumb />
                <div className="blog-area pt-100 pb-100">
                    <div className="container">
                        <div className="row flex-row-reverse">
                            <div className="col-lg-9">
                                <div className="ml-20">
                                    <div className="row">
                                        <BlogPosts />
                                    </div>
                                    {/*<BlogPagination />*/}
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

BlogStandard.propTypes = {
    location: PropTypes.object
};

export default BlogStandard;
