import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const BlogPost = () => {
  return (
    <Fragment>
      <div className="blog-details-top">
        <div className="blog-details-img">
          <img
            alt=""
            src={process.env.PUBLIC_URL + "/assets/img/blog/tin_tuc_trong_3.jpg"}
          />
        </div>
        <div className="blog-details-content">
          <div className="blog-meta-2">
            <ul>
              <li>15 tháng 12, 2023</li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                  4 <i className="fa fa-comments-o" />
                </Link>
              </li>
            </ul>
          </div>
          <h3>Na Đài Loan - Vua của các loại Na: Cách nhận biết và cách ăn đúng cách</h3>
          <p>
            Na Đài Loan được mệnh danh là trái cây cho giới nhà giàu - đây là loại trái cây nên thưởng thức một lần. Không chỉ là loại trái cây nhập khẩu đắt đỏ, mà đặc điểm dễ nhận biết nhất đó Na Đài Loan có kích thước rất lớn và có mùi vị đặc biệt thơm ngon mà hiếm có loại trái cây nào có thể so sánh được. Hãy cùng FS tìm hiểu về Na Đài Loan nhé
          </p>
          <blockquote>
         
          </blockquote>
          
          - Những đặc điểm chính về Na Đài Loan bạn cần biết
    <br/>
          *Đặc điểm đầu tiên về ngoại hình dễ nhận thấy nhất đó là Na Đài Loan có trọng lượng to gấp 2 - 3 lần so với các loại na truyền thống khác - Mắt na rời nhau không ghép sát 
          <br/>
          *Trọng lượng trung bình của một trái từ 700gram - 1kg. Trái dài có hình nón , không tròn và ngắn như na ta.
          <br/>
          *Khi trái Chín sẽ có hương thơm nhẹ như mùi của trái dứa, các tép thịt dính liền với nhau không rời
          <br/>
          *Thịt Na có màu trắng ngà ăn dai và ngọt không gắt, ăn có cảm giác mát ở đầu lưỡi
          <br/>
          *Đặc biệt, của giống Na này là có hạt rất bé và rất ít hạt - Tỉ lệ thịt rất cao.
          <br/>
          *Mãng cầu dai đài loan khi chín lớp vỏ vẫn giữ được màu xanh hoặc chỉ hơi ngả vàng có thể vẫn chuyển đi xa rất dễ dàng mà không bị dập nát.
          <br/>
          *Nếu sử dụng lạnh hoặc làm sinh tố với một chút sữa, thạch, trân châu thì chắc chắn sẽ là món ngon giải nhiệt tuyệt vời trong những ngày nắng nóng nhé.

        </div>
      </div>
      <div className="dec-img-wrapper">
        <div className="row">
          <div className="col-md-6">
            <div className="dec-img mb-50">
              <img
                alt=""
                src={
                  process.env.PUBLIC_URL + "/assets/img/blog/tin_tuc_trong_1.jpg"
                }
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="dec-img mb-50">
              <img
                alt=""
                src={
                  process.env.PUBLIC_URL + "/assets/img/blog/tin_tuc_trong_2.jpg"
                }
              />
            </div>
          </div>
        </div>
        <p>
        - Khi ăn Na Đài Loan bạn cần phải dùng dao sắc nhọn để gọt vỏ do lớp vỏ khá mỏng.
<br/>
- Bạn nên cắt Na thành các miếng nhỏ để trong tủ lạnh từ 15 - 20p trước khi thưởng thức để có thể tăng thêm hương vị của Na Đài Loan
        </p>
      </div>
    </Fragment>
  );
};

export default BlogPost;
