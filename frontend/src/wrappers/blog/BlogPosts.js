import React, { Fragment } from "react";
import { Link } from "react-router-dom";
const BlogPosts = () => {
    return (
        <Fragment>
            
            <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="blog-wrap-2 mb-30">
                    <div className="blog-img-2">
                        <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                            <img
                                src={process.env.PUBLIC_URL + "/assets/img/blog/na.jpg"}
                                alt=""
                            />
                        </Link>
                    </div>
                    <div className="blog-content-2">
                        <div className="blog-meta-2">
                            <ul>
                                <li>15/12/2023</li>
                                <li>
                                    <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                                        4 <i className="fa fa-comments-o" />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <h4>
                            <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                            Na Đài Loan - Vua của các loại Na: Cách nhận biết và cách ăn đúng cách
                            </Link>
                        </h4>
                        <p>
                        Na Đài Loan được mệnh danh là trái cây cho giới nhà giàu - đây là loại trái cây nên thưởng thức một lần. Không...
                        </p>
                        <div className="blog-share-comment">
                            <div className="blog-btn-2">
                                <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                                    Xem thêm
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="blog-wrap-2 mb-30">
                    <div className="blog-img-2">
                        <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                            <img
                                src={process.env.PUBLIC_URL + "/assets/img/blog/tin_tuc_2.jpg"}
                                alt=""
                            />
                        </Link>
                    </div>
                    <div className="blog-content-2">
                        <div className="blog-meta-2">
                            <ul>
                                <li>22/12/2023</li>
                                <li>
                                    <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                                        4 <i className="fa fa-comments-o" />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <h4>
                            <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                            VITA GREEN TRÁI CÂY TƯƠI NHANH KỊP THỜI ĐÚNG LÚC
                            </Link>
                        </h4>
                        <p>
                        Đến với FS bạn sẽ được trải nghiệm những thứ tốt nhất+ Sản phẩm tốt nhất+ Giao hàng nhanh nhất+ Giao hàng kịp lúc nhất+...
                        </p>
                        <div className="blog-share-comment">
                            <div className="blog-btn-2">
                                <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                                    Xem thêm
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         
            <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="blog-wrap-2 mb-30">
                    <div className="blog-img-2">
                        <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                            <img
                                src={process.env.PUBLIC_URL + "/assets/img/blog/tin_tuc_3.jpg"}
                                alt=""
                            />
                        </Link>
                    </div>
                    <div className="blog-content-2">
                        <div className="blog-meta-2">
                            <ul>
                                <li>07/12/2023</li>
                                <li>
                                    <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                                        4 <i className="fa fa-comments-o" />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <h4>
                            <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                            ĂN TRÁI CÂY ĐÚNG CÁCH DỄ MÀ KHÓ?
                            </Link>
                        </h4>
                        <p>
                        Trái cây là nguồn dinh dưỡng tự nhiên tốt nhất bổ sung sức khỏe và sức đề kháng.Tuy nhiên để có thể có thể...
                        </p>
                        <div className="blog-share-comment">
                            <div className="blog-btn-2">
                                <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                                    Xem thêm
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
             
             <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="blog-wrap-2 mb-30">
                    <div className="blog-img-2">
                        <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                            <img
                                src={process.env.PUBLIC_URL + "/assets/img/blog/tin_tuc_4.jpg"}
                                alt=""
                            />
                        </Link>
                    </div>
                    <div className="blog-content-2">
                        <div className="blog-meta-2">
                            <ul>
                                <li>02/12/2023</li>
                                <li>
                                    <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                                        4 <i className="fa fa-comments-o" />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <h4>
                            <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                            Xúc tiến Hôm Nay - Lợi ích Dài Lâu
                            </Link>
                        </h4>
                        <p>
                        Sau khoảng thời gian dài “ngủ đông” do dịch Covid. Đất nước đang dần thích nghi với trạng thái bình thường mới, mọi hoạt động...
                        </p>
                        <div className="blog-share-comment">
                            <div className="blog-btn-2">
                                <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                                    Xem thêm
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
             <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="blog-wrap-2 mb-30">
                    <div className="blog-img-2">
                        <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                            <img
                                src={process.env.PUBLIC_URL + "/assets/img/blog/tin_tuc_6.jpg"}
                                alt=""
                            />
                        </Link>
                    </div>
                    <div className="blog-content-2">
                        <div className="blog-meta-2">
                            <ul>
                                <li>24/02/2023</li>
                                <li>
                                    <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                                        4 <i className="fa fa-comments-o" />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <h4>
                            <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                            TOP 5 QUÀ TẶNG NHỮNG "NGƯỜI THƯƠNG" MỪNG 8/3
                            </Link>
                        </h4>
                        <p>
                        8/3 Ngày lễ đặc biệt để dành những lời yêu thương tri ân, những người phụ nữ của bạn. Là cơ hội để bạn thể...
                        </p>
                        <div className="blog-share-comment">
                            <div className="blog-btn-2">
                                <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                                    Xem thêm
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
             <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="blog-wrap-2 mb-30">
                    <div className="blog-img-2">
                        <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                            <img
                                src={process.env.PUBLIC_URL + "/assets/img/blog/tin_tuc_5.webp"}
                                alt=""
                            />
                        </Link>
                    </div>
                    <div className="blog-content-2">
                        <div className="blog-meta-2">
                            <ul>
                                <li>15/12/2023</li>
                                <li>
                                    <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                                        4 <i className="fa fa-comments-o" />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <h4>
                            <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                            Chương trình khách hàng thân thiết của VITA GREEN TRÁI CÂY TƯƠI
                            </Link>
                        </h4>
                        <p>
                        VITA GREEN TRÁI CÂY TƯƠI cảm ơn quý khách hàng tin tưởng sử dụng sản phẩm và dịch vụ của FS. Phụng sự cung cấp cho...
                        </p>
                        <div className="blog-share-comment">
                            <div className="blog-btn-2">
                                <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                                    Xem thêm
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
          
        </Fragment>
    );
};

export default BlogPosts;
