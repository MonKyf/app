import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Cate.scss';

//Nhap cac tai nguyen hinh anh
import Euro2024 from '../../img/Cate/Euro2024.png';
import Dammy from '../../img/Cate/Dammy.png';
import Dochoilaprap from '../../img/Cate/Dochoilaprap.png';
import Ngoaivan from '../../img/Cate/Ngoaivan.png';
import Sachhocngoaingu from '../../img/Cate/Sachhocngoaingu.png';
import StemSteam from '../../img/Cate/StemSteam.png';
import Tamlikinang from '../../img/Cate/Tamlykinang.png';
import Thieunhi from '../../img/Cate/Thieunhi.png';
import Vanhoc from '../../img/Cate/Vanhoc.png';
import BekhoeBamethanhthoi from '../../img/Cate/BekhoeBamethanhthoi.png';


const categories = [
  { name: 'Euro 2024', img:Euro2024, link: 'Euro-2024' },
  { name: 'Stem - Steam', img: StemSteam , link: 'do-choi-luu-niem' },
  { name: 'Đồ Chơi Lắp Ráp', img: Dochoilaprap , link: 'do-choi-lap-rap' },
  { name: 'Bé Khỏe - Ba Mẹ Thành Thơi', img:BekhoeBamethanhthoi, link: 'nuoi-day-con-trang-chinh' },
  { name: 'Đam Mỹ', img:Dammy, link: 'dam-y.' },
  { name: 'Văn Học', img:Vanhoc, link: 'trang-van-hoc' },
  { name: 'Tâm Lý Kỹ Năng', img:Tamlikinang, link: 'trang-tam-ly' },
  { name: 'Thiếu Nhi', img:Thieunhi, link: '/trang-thieu-nhi' },
  { name: 'Sách Học Ngoại Ngữ', img:Sachhocngoaingu, link: 'sach-hoc-ngoai-ngu' },
  { name: 'Ngoại Văn', img:Ngoaivan, link: 'multilingual-bookshelf' }
];

const CategorySection = () => {
  return (
    <Container className="category-section mt-4">
      <h5>Danh mục sản phẩm</h5>
      <hr style={{ borderTop: '2px solid #ccc', margin: '10px 0' }} />
      <Row>
        {categories.map((category, index) => (
          <Col key={index} xs={6} md={3} lg={2} className="text-center">
              <a href={category.link} className="category-link">
            <img src={category.img} alt={category.name} className="img-fluid" />
            <p>{category.name}</p>
            </a>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default CategorySection;
