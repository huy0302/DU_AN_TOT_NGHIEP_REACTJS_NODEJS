import React from "react";
import { Link } from "react-router-dom";

const BlogSidebar = () => {
    return (
        <div className="sidebar-style">
            <div className="sidebar-widget">
                <h4 className="pro-sidebar-title">Bài viết liên khác</h4>
                <div className="sidebar-project-wrap mt-30">
                    <div className="single-sidebar-blog">
                        <div className="sidebar-blog-img">
                            <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                                <img
                                    src={
                                        process.env.PUBLIC_URL + "/assets/img/blog/lq1.jpg"
                                    }
                                    alt=""
                                />
                            </Link>
                        </div>
                        <div className="sidebar-blog-content">
                            <span>Ngũ quả chưng Tết</span>
                            <h4>
                                <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                                    22.01.2021
                                </Link>
                            </h4>
                        </div>
                    </div>
                    <div className="single-sidebar-blog">
                        <div className="sidebar-blog-img">
                            <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                                <img
                                    src={
                                        process.env.PUBLIC_URL + "/assets/img/blog/lq2.jpg"
                                    }
                                    alt=""
                                />
                            </Link>
                        </div>
                        <div className="sidebar-blog-content">
                            <span>Cherry Úc </span>
                            <h4>
                                <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                                    16.06.2023
                                </Link>
                            </h4>
                        </div>
                    </div>
                    <div className="single-sidebar-blog">
                        <div className="sidebar-blog-img">
                            <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                                <img
                                    src={
                                        process.env.PUBLIC_URL + "/assets/img/blog/lq3.jpg"
                                    }
                                    alt=""
                                />
                            </Link>
                        </div>
                        <div className="sidebar-blog-content">
                            <span> Trái cây tháng 12</span>
                            <h4>
                                <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                                    02.12.2023
                                </Link>
                            </h4>
                        </div>
                    </div>
                    <div className="single-sidebar-blog">
                        <div className="sidebar-blog-img">
                            <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                                <img
                                    src={
                                        process.env.PUBLIC_URL + "/assets/img/blog/lq4.jpg"
                                    }
                                    alt=""
                                />
                            </Link>
                        </div>
                        <div className="sidebar-blog-content">
                            <span>Lợi ích của bơ</span>
                            <h4>
                                <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                                    30.10.2023
                                </Link>
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogSidebar;
