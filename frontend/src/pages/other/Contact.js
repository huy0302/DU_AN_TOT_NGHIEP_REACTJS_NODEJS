import PropTypes from "prop-types";
import React, { Fragment, useState } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import { ContactService } from "../../services/shop/contact-service";
import { useDispatch } from "react-redux";
import { toggleShowLoading } from "../../redux/actions/common";
import { message } from "antd";
import { timeDelay } from "../../helpers/constant";

const Contact = ({ location }) => {
    const { pathname } = location;
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const dispatch = useDispatch();

    const loginSubmit = (e) => {
        e.preventDefault();
        handleValidation().then(r => { });
    }

    const handleValidation = async (event) => {

        try {
            let data = {
                name: name,
                email: email,
                title: title,
                content: content
            };

            console.log('--------- data: ', data);
            dispatch(toggleShowLoading(true));
            let results = await ContactService.store(data);
            dispatch(toggleShowLoading(false));

            if (results.status === 'success') {
                message.success(
                    'Gửi thành công!', 1, () => { window.location.href = '/lien-he' });

                // window.location.reload();
            } else {
                message.error(results?.message)
            }
        } catch (error) {
            message.error('Có lỗi xảy ra!')
            dispatch(toggleShowLoading(false));
        }
    }

    return (
        <Fragment>
            <MetaTags>
                <title>VITAGREEN</title>
                <meta
                    name="description"
                    content="Contact of flone react minimalist eCommerce template."
                />
            </MetaTags>
            <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Trang chủ</BreadcrumbsItem>
            <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
                Liên hệ
            </BreadcrumbsItem>
            <LayoutOne headerTop="visible">
                {/* breadcrumb */}
                <Breadcrumb />
                <div className="contact-area pt-100 pb-100">
                    <div className="container">
                        <div className="custom-row-2">
                            <div className="col-lg-4 col-md-5">
                                <div className="contact-info-wrap">
                                    <div className="single-contact-info">
                                        <div className="contact-icon">
                                            <i className="fa fa-phone" />
                                        </div>
                                        <div className="contact-info-dec">
                                            <p>+84 865 405 630</p>
                                            <p>+84 123 456 789</p>
                                        </div>
                                    </div>
                                    <div className="single-contact-info">
                                        <div className="contact-icon">
                                            <i className="fa fa-globe" />
                                        </div>
                                        <div className="contact-info-dec">
                                            <p>
                                                <a href="mailto:huynguyen03022003@gmail.com">
                                                    huynguyen0302003@gmail.com
                                                </a>
                                            </p>
                                            <p>
                                                <a href="https://yourwebsitename.com">
                                                    vitagreen.id.vn
                                                </a>
                                                
                                            </p>
                                        </div>
                                    </div>
                                    <div className="single-contact-info">
                                        <div className="contact-icon">
                                            <i className="fa fa-map-marker" />
                                        </div>
                                        <div className="contact-info-dec" style={{ width: '500px' }}>
                                            <p>Công viên phần mềm </p>
                                            <p>Quang Trung Q.12 HCM</p>
                                        </div>
                                    </div>
                                    {/* <div className="contact-social text-center">
                                        <h3>Follow Us</h3>
                                        <ul>
                                            <li>
                                                <a href="//facebook.com">
                                                    <i className="fa fa-facebook" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="//pinterest.com">
                                                    <i className="fa fa-pinterest-p" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="//thumblr.com">
                                                    <i className="fa fa-tumblr" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="//vimeo.com">
                                                    <i className="fa fa-vimeo" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="//twitter.com">
                                                    <i className="fa fa-twitter" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div> */}
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-7">
                                <div className="contact-form">
                                    <div className="contact-title mb-30">
                                        <h2>Thông tin liên hệ</h2>
                                    </div>
                                    <form className="contact-form-style" method={'POST'} onSubmit={loginSubmit}>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <input name="name" required
                                                    placeholder="Họ và Tên*" type="text"
                                                    onChange={(event) => setName(event.target.value)} />
                                            </div>
                                            <div className="col-lg-6">
                                                <input name="email" required placeholder="Email*"
                                                    type="email" onChange={(event) => setEmail(event.target.value)} />
                                            </div>
                                            <div className="col-lg-12">
                                                <input
                                                    required
                                                    name="title"
                                                    placeholder="Tiêu đề*"
                                                    type="text"

                                                    onChange={(event) => setTitle(event.target.value)}
                                                />
                                            </div>
                                            <div className="col-lg-12">
                                                <textarea
                                                    required
                                                    name="message"
                                                    placeholder="Tin nhắn của bạn*"
                                                    maxLength={300}
                                                    defaultValue={""}
                                                    onChange={(event) => setContent(event.target.value)}
                                                />
                                                <button className="submit" type="submit" style={{ backgroundColor: 'green' }}>
                                                    Gửi
                                                </button>

                                            </div>
                                        </div>
                                    </form>
                                    <p className="form-message" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutOne>
        </Fragment>
    );
};

Contact.propTypes = {
    location: PropTypes.object
};

export default Contact;
