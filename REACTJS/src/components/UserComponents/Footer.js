import React from 'react';
import './Footer.scss';
import logo from '../../img/headerImg/logo.png';


const Footer = () => {
    return (
        <footer className="footer" >
            <div className="footer-left">
                <div className="newsletter">
                    <h4>ĐĂNG KÝ NHẬN BẢN TIN 
                    <input type="email" placeholder="Nhập địa chỉ email của bạn" />
                    <button>Đăng ký</button></h4>
            </div>
            <div className="address">
                <img width="300px" src={logo}/>

                    <p>Lầu 5, 387-389 Hai Bà Trưng Quận 3 TP HCM</p>
                    <p>Fahasa.com nhận đặt hàng trực tuyến và giao hàng tận nơi. KHÔNG hỗ trợ đặt mua và nhận hàng trực tiếp tại văn phòng.</p>
                </div>
            </div>
            <div className="footer-right">
                <div className="links">
                    <div className="link-group">
                        <h6><b>DỊCH VỤ</b></h6>
                        <ul>
                            <li><a href="/">Điều khoản sử dụng</a></li>
                            <li><a href="/">Chính sách bảo mật thông tin cá nhân</a></li>
                            <li><a href="/">Chính sách bảo mật thanh toán</a></li>
                            <li><a href="/">Giới thiệu Fahasa</a></li>
                            <li><a href="/">Hệ thống trung tâm - nhà sách</a></li>
                        </ul>
                    </div>
                    <div className="link-group">
                        <h6><b>HỖ TRỢ</b></h6>
                        <ul>
                            <li><a href="/">Chính sách đổi - trả - hoàn tiền</a></li>
                            <li><a href="/">Chính sách bảo hành - bồi hoàn</a></li>
                            <li><a href="/">Chính sách vận chuyển</a></li>
                            <li><a href="/">Chính sách khách sỉ</a></li>
                            <li><a href="/">Phương thức thanh toán và xuất HĐ</a></li>
                        </ul>
                    </div>
                    <div className="link-group">
                        <h6><b>TÀI KHOẢN CỦA TÔI</b></h6>
                        <ul>
                            <li><a href="/">Đăng nhập/Tạo mới tài khoản</a></li>
                            <li><a href="/">Thay đổi địa chỉ khách hàng</a></li>
                            <li><a href="/">Chi tiết tài khoản</a></li>
                            <li><a href="/">Lịch sử mua hàng</a></li>
                        </ul>
                    </div>
                </div>
                <div className="contact">
                <ul>

                        <h6><b>LIÊN HỆ</b></h6>
                    <div className="adress">
                    60-62 Lê Lợi, Q.1, TP. HCM
                    </div>
                    <div className="email">
                        cskh@fahasa.com.vn
                    </div>
                    <div className="phone">
                        1900636467
                    </div>
                        </ul>
                </div>
            </div>
            <ul>Giấy chứng nhận Đăng ký Kinh doanh số 0304132047 do Sở Kế hoạch và Đầu tư Thành phố Hồ Chí Minh cấp ngày 20/12/2005, đăng ký thay đổi lần thứ 10, ngày 20/05/2022.</ul>
        </footer>
    );
};

export default Footer;
