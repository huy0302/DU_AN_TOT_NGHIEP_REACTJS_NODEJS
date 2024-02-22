import PropTypes from "prop-types";
import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import SectionTitleWithText from "../../components/section-title/SectionTitleWithText";
import BannerOne from "../../wrappers/banner/BannerOne";
import TextGridOne from "../../wrappers/text-grid/TextGridOne";
import FunFactOne from "../../wrappers/fun-fact/FunFactOne";
import TeamMemberOne from "../../wrappers/team-member/TeamMemberOne";
import BrandLogoSliderOne from "../../wrappers/brand-logo/BrandLogoSliderOne";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
const About = ({ location }) => {
    const { pathname } = location;

    return (
        <Fragment>
            <MetaTags>
                <title>VITAGREEN</title>
                <meta
                    name="description"
                    content="About page of flone react minimalist eCommerce template."
                />
            </MetaTags>
            <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Trang chủ</BreadcrumbsItem>
            <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
                Giới thiệu
            </BreadcrumbsItem>
            <LayoutOne headerTop="visible">
                {/* breadcrumb */}
                <Breadcrumb />
                <div
                    className={`welcome-area  mt-5 mb-5`}
                >
                    <div className="container">
                        <div className="welcome-content text-center">
                            <h1 className="text-success">Chào Mừng Bạn Đến VitaGreen - Nơi Cung Cấp Trái Cây Tươi Sạch</h1>
                        </div>
                    </div>
                    <div className={'fuild-container'}>

                        {/* <img src={`/assets/ab1.webp`} alt="" className={'w-100'} /> */}
                        <img src="https://traicay.giaodienwebmau.com/wp-content/uploads/2019/07/banner-home-1.png" alt="" className={'w-100'} />

                        <section className="container d-flex mt-3 align-items-end">
                            <div className="col-md-7 d-flex align-items-start flex-column mb-3">
                                <h2 className="text-success">VỀ CHÚNG TÔI</h2>
                                <p>Công ty cổ phần thực phẩm dinh dưỡng  là Công ty chuyên cung cấp các loại trái cây hoa quả, rau sạch. Chúng tôi cam kết chất lượng sản phẩm sạch từ thiên nhiên không quahóa chất.</p>
                                <p className="mb-3">Rau củ quả cảu chúng tôi sẽ mang đến khách hàng một sản phẩm chất lượng, một thương hiệu đáng tin cậy. Công ty chúng tôi mong muốn có cơ hội được phục vụ quý khách và góp phần phát triền ngànhthực phẩm sạch tại Việt Nam</p>
                                <p className="mb-auto p-2"> <Link to="/shop" className="px-5 py-3 mt-3 border rounded-pill bg-success text-white">MUA NGAY</Link> </p>
                            </div>
                            <div className="col-md-5 "><img className="rounded-pill" src="https://vn-live-01.slatic.net/p/130ecf5ee6a8bc1b35898d9bba503284.jpg" width={"100%"} height={"300px"} /></div>

                        </section>
                        <section className="container mt-3 py-4">
                            <div className="row d-flex justify-content-center py-5">
                                <div className="col-md-6 col-6">
                                    <h2 className="mb-0">Theo dõi bản tin của chúng tôi</h2>
                                    <span>Nhận thông tin cập nhật qua email về các ưu đãi đặc biệt của chúng tôi</span>
                                </div>
                                <div className="col-md-6">
                                    <form className="subscribe-form ">
                                        <div className="form-group d-flex align-items-center">
                                            <input type="text border-success" className="form-control col-md-8" placeholder="Nhập email của bạn" />
                                            <input type="submit" className="submit btn-success px-3 col-md-4" value={"Đăng ký"} />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </section>
                        <section className="fluid-container bg-success text-center ">
                            <div className="col-md-12 py-3 text-center ">
                                <h2 className="text-center text-white">VÌ SAO CHỌN SẢN PHẨM CỦA CHÚNG TÔI</h2>
                                <p className="container col-md-12 fs-2 text-white">
                                    Rau củ quả cảu chúng tôi sẽ mang đến khách hàng một sản phẩm chất lượng, một thương hiệu đáng tin cậy. Công ty chúng tôi mong muốn có cơ hội được phục vụ quý khách và góp phần phát triền ngành thực phẩm sạch tại Việt Nam</p>
                            </div>
                            <div className="col-md-12 d-flex justify-content-center py-3 text-center">
                                <div className="col-md-4">
                                    <img src="https://traicay.giaodienwebmau.com/wp-content/uploads/2019/01/q2-2-370x110.png" />
                                    <h3 className="text-white">MIỄN PHÍ VẬN CHUYỂN</h3>
                                    <p className="text-white" >Bán kính 2km</p>
                                </div>
                                <div className="col-md-4">
                                    <img src="https://traicay.giaodienwebmau.com/wp-content/uploads/2019/01/q1-2-370x110.png" />
                                    <h3 className="text-white" >Hỗ trợ 24/7</h3>
                                    <p className="text-white" >Hotline: 0865.405.630</p>
                                </div>
                                <div className="col-md-4">
                                    <img src="https://traicay.giaodienwebmau.com/wp-content/uploads/2019/01/q3-2-370x110.png" />
                                    <h3 className="text-white" >Giờ làm việc</h3>
                                    <p className="text-white" >T2 – CN Giờ hành chính</p>
                                </div>
                            </div>

                        </section>
                        <section className="container ol-md-12 d-flex justify-content-around mt-3">
                            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                                <div className="hovereffect">
                                    <img className="img-responsive" src="https://traicay.giaodienwebmau.com/wp-content/uploads/2019/01/Screenshot_3.png" alt="" />
                                    <div className="overlay">
                                        <p className="fs-1">
                                            <Link to="/lien-he" className="fs-1" href="#">MUA NGAY</Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                                <div className="hovereffect">
                                    <img className="img-responsive" src="https://traicay.giaodienwebmau.com/wp-content/uploads/2019/01/Screenshot_4.png" alt="" />
                                    <div className="overlay">
                                        <p>
                                            <Link to="/lien-he" >MUA NGAY</Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                                <div className="hovereffect">
                                    <img className="img-responsive" src="https://traicay.giaodienwebmau.com/wp-content/uploads/2019/01/Screenshot_2.png" alt="" />
                                    <div className="overlay">
                                        <p>
                                            <Link to="/lien-he" >MUA NGAY</Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                                <div className="hovereffect">
                                    <img className="img-responsive" src="https://traicay.giaodienwebmau.com/wp-content/uploads/2019/01/Screenshot_1.png" alt="" />
                                    <div className="overlay">
                                        <p>
                                            <Link to="/lien-he" >MUA NGAY</Link>
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </section>
                    </div>
                </div>

                {/* brand logo slider */}
                <BrandLogoSliderOne spaceBottomClass="pb-70" />
            </LayoutOne>
        </Fragment>
    );
};

About.propTypes = {
    location: PropTypes.object
};

export default About;
