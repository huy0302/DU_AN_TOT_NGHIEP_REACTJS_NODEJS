import React, { useEffect, useState } from "react";
import { ORDER_SERVICE, buildImage, onErrorImage } from "../../services";
import { Accordion, Card, Table } from "react-bootstrap";
import { customDate, customNumber } from "../../helpers/func";
import { Pagination } from "antd";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch } from "react-redux";
import { toggleShowLoading } from "../../redux/actions/common";

const Order = (props) => {

    const dispatch = useDispatch();
    const [orders, setOrders] = useState([]);
    const [paging, setPaging] = useState({
        page: 1,
        page_size: 10,
        total: 0,
        totalPage: 0
    });

    useEffect(() => {
        getOrders(paging);
    }, []);

    const getOrders = async (params) => {
        let eventKey = 0;
        dispatch(toggleShowLoading(true));
        const response = await ORDER_SERVICE.getList(params);
        if (response?.status == 'success' && response?.data) {
            response.data.orders.map(item => {
                item.eventKey = eventKey;
                eventKey++;
            })
            setOrders(response?.data?.orders);
            setPaging(response?.data?.meta);
            dispatch(toggleShowLoading(false));
        }
    };

	const genStatus = ( status ) =>
	{
		if ( status === 1 ) return <p  className="text-warning mb-0 ">Chờ duyệt</p>;
		else if ( status === 2 ) return <p className="text-primary mb-0">Đã duyệt</p>;
		else if ( status === 3 ) return <p className="text-success mb-0">Hoàn thành</p>;
		else return <p className="text-danger mb-0">Hủy bỏ</p>;
	}

	const genPaymentStatus = ( status ) =>
	{
		if ( status === 1 ) return <span style={{ fontWeight: 600, fontSize: 18 }} className="text-success">Đã thanh toán</span>;
		return <span style={{ fontWeight: 600, fontSize: 18 }} className="text-primary">Chưa thanh toán</span>;
	}

	const genPaymentType = ( status ) =>
	{

		if ( status === 1 ) return <div className="text-secondary" style={{ fontWeight: 600, fontSize: 18 }}>Thanh toán online</div>;
		return <div className="text-primary" style={{ fontWeight: 600, fontSize: 18 }}>Tiền mặt</div>;
	}

	const genShippingStatus = ( status ) =>
	{
		if ( status === 1 ) return <span style={{ fontWeight: 600, fontSize: 18 }} className="text-warning">Chờ giao hàng</span>;
		else if ( status === 2 ) return <span style={{ fontWeight: 600, fontSize: 18 }} className="text-primary">Đang giao</span>;
		else return <span style={{ fontWeight: 600, fontSize: 18 }} className="text-success">Đã giao</span>;
	}

    return (
        <div className="myaccount-area pb-80 pt-100">
                <div className="container">
                    <div className="row">
                        <div className="ml-auto mr-auto col-lg-9">
                            <div className="myaccount-wrapper">
                                <Accordion>
                                    {orders.length > 0 ?
                                        orders.map((item, key1) => (
                                            <div key={key1}>
                                                <Card className="single-my-account mb-20">
                                                    <Card.Header className="panel-heading">
                                                        <Accordion.Toggle variant="link" eventKey={String(item.eventKey)}>
                                                            <h3 className="panel-title">
                                                                <div className="row">
                                                                    <div className="col-sm-6">
                                                                        Đơn hàng {item.id}
                                                                    </div>
                                                                    <div className="col-sm-3 text-right">
                                                                        {customNumber(item.total_price)}
                                                                    </div>
																	<div className="col-sm-3 text-right">
                                                                        {genStatus(item.status)}
                                                                    </div>
                                                                </div>
                                                            </h3>
                                                        </Accordion.Toggle>
                                                    </Card.Header>
                                                    <Accordion.Collapse eventKey={String(item.eventKey)}>
                                                        <Card.Body>
                                                            <div className="myaccount-info-wrapper">
                                                                <div className="mb-5">
                                                                    <h4>Tên người nhận: {item.receiver_name} - {item.receiver_phone}</h4>
                                                                    <p><span style={{ fontWeight: 600 }}>Địa chỉ: </span>{item.receiver_address}</p>
                                                                    <p><span style={{ fontWeight: 600 }}>Email: </span>{item.receiver_email}</p>
                                                                    <p><span style={{ fontWeight: 600 }}>Thời gian tạo: </span>{customDate(item?.created_at, 'DD/MM/yyyy')}</p>
                                                                    <p><span style={{ fontWeight: 600 }}>Thời gian cập nhật: </span>{customDate(item?.updated_at, 'DD/MM/yyyy')}</p>
                                                                </div>
                                                                <div className="text-center">
                                                                    <h4>Sản phẩm</h4>
                                                                </div>
                                                                <Table className={`table-striped table-hover mb-5`} responsive>
                                                                    <thead>
                                                                        <tr>
                                                                            <th>#</th>
                                                                            <th className="text-nowrap">Tên sản phẩm</th>
                                                                            <th className="text-nowrap">Số lượng</th>
                                                                            <th className="text-nowrap">Giá</th>
                                                                            <th className="text-nowrap">Tổng giá</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        {item.transactions.length > 0 &&
                                                                            item.transactions.map((product, key2) => (
                                                                                <tr key={key2}>
                                                                                    <td>
                                                                                        {key2 + 1}
                                                                                    </td>
                                                                                    <td className="d-flex align-items-center">
                                                                                        <img alt={product.name} 
																						src={buildImage(product.avatar)} onError={onErrorImage} width={90} height={90} className="mr-1" />
                                                                                        {product.name}
                                                                                    </td>
                                                                                    <td>{product.quantity}</td>
                                                                                    <td>{customNumber(product.price)}</td>
                                                                                    <td>{customNumber(product.total_price * product.quantity)}</td>
                                                                                </tr>
                                                                            ))
                                                                        }
                                                                    </tbody>
                                                                </Table>
                                                                <div className="border-top pt-md-3">
                                                                    <div className="row mb-md-3">
                                                                        <div className="col-sm-9">
                                                                            <span style={{ fontWeight: 600, fontSize: 16 }}>Giảm giá:</span>
                                                                        </div>
                                                                        <div className="col-sm-3 text-right">
                                                                            <span style={{ fontWeight: 600, fontSize: 16 }}>{customNumber(item.total_discount) || 0}</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="row mb-md-3 pt-md-3">
                                                                        <div className="col-sm-9">
                                                                            <span style={{ fontWeight: 600, fontSize: 18, color: 'red' }}>Tổng giá:</span>
                                                                        </div>
                                                                        <div className="col-sm-3 text-right">
                                                                            <span style={{ fontWeight: 600, fontSize: 18, color: 'red' }}>{customNumber(item.total_price)}</span>
                                                                        </div>
                                                                    </div>
																	<div className="row mb-md-3 pt-md-3">
                                                                        <div className="col-sm-9">
                                                                            <span style={{ fontWeight: 600, fontSize: 18 }}>Loại thanh toán:</span>
                                                                        </div>
                                                                        <div className="col-sm-3 text-right">
                                                                            {genPaymentType(item.payment_type)}
                                                                        </div>
                                                                    </div>
																	<div className="row mb-md-3 pt-md-3">
                                                                        <div className="col-sm-9">
                                                                            <span style={{ fontWeight: 600, fontSize: 18 }}>Trạng thái thanh toán:</span>
                                                                        </div>
                                                                        <div className="col-sm-3 text-right">
                                                                            {genPaymentStatus(item.payment_status)}
                                                                        </div>
                                                                    </div>
																	<div className="row mb-md-3 pt-md-3">
                                                                        <div className="col-sm-9">
                                                                            <span style={{ fontWeight: 600, fontSize: 18 }}>Trạng thái giao hàng:</span>
                                                                        </div>
                                                                        <div className="col-sm-3 text-right">
																		{genShippingStatus(item.shipping_status)}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Card.Body>
                                                    </Accordion.Collapse>
                                                </Card>
                                            </div>
                                        ))
                                        :
                                        <div className="text-center">
                                            Chưa Có Sản Phẩm<br />
                                            <br />
                                            <br />
                                            <br />
                                            <Link to="/" style={{ fontSize: 18, color: '#a771ff' }}>Tiếp Tục Mua Sắm...</Link>
                                        </div>
                                    }
                                </Accordion>
                            </div>
                        </div>
                    </div>
                    {
                        paging.total > 0 &&
                        <div className="mx-auto d-flex justify-content-center my-4">
                            <Pagination
                                onChange={e =>
                                    getOrders({ page: e, page_size:20 })
                                }
                                pageSize={paging.page_size}
                                defaultCurrent={paging.page}
                                total={paging.total}
                            />
                        </div>
                    }
                </div>
            </div>
    );
}

export default Order;