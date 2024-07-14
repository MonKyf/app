import React from 'react';
import { Nav, Navbar, Container, NavDropdown, Image, Form, FormControl, Button  } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavLink } from 'react-router-dom';
import headeri from '../../img/headerImg/header.png'; 
import logo from '../../img/headerImg/logo.png'; 
import './Nav.scss';
const Header = ({ isLoggedIn, userInfo, handleLogout }) => {
    return (
        // <Navbar style={{ backgroundColor: '#FF3333' }} variant="dark" expand="md" sticky="top">
        //     <Container>
        //         <Navbar.Brand href="/">
        //             Fahasa
        //         </Navbar.Brand>
        //         <Navbar.Toggle aria-controls="basic-navbar-nav" />
        //         <Navbar.Collapse id="basic-navbar-nav">
        //             <Nav className="me-auto">
        //                 <Nav.Link as={NavLink} to="/" exact activeClassName="active">
        //                     Home
        //                 </Nav.Link>
        //                 <Nav.Link as={NavLink} to="/rooms/phongs" activeClassName="active">
        //                     Phòng
        //                 </Nav.Link>
        //                 <Nav.Link as={NavLink} to="/users" activeClassName="active">
        //                     User
        //                 </Nav.Link>
        //                 <Nav.Link as={NavLink} to="/chat" activeClassName="active">
        //                     Chat
        //                 </Nav.Link>
        //             </Nav>
        //             <Nav>
        //                 {isLoggedIn ? (
        //                     <NavDropdown title={userInfo?.first_name || 'User'}>
        //                         <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
        //                     </NavDropdown>
        //                 ) : (
        //                     <NavDropdown title="Setting">
        //                         <NavDropdown.Item href="/logins">Login</NavDropdown.Item>
        //                     </NavDropdown>
        //                 )}
        //             </Nav>
        //         </Navbar.Collapse>
        //     </Container>
        // </Navbar>

        <>
        <div>
            <img src={headeri} className="header-img" />
        </div>

        <Navbar expand="lg" className="bg-body-tertiary">

        <Container>
            <Navbar.Brand href="/">
                <img width="216px" src={logo}/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">

            <NavDropdown title="Danh muc san pham" id="basic-nav-dropdown">
                <NavDropdown.Item href="#sach-trong-nuoc">Sach trong nuoc</NavDropdown.Item>
                <NavDropdown.Item href="#do-choi">Do choi</NavDropdown.Item>
                <NavDropdown.Item href="#lam-dep-suc-khoe">Lam dep - Suc khoe</NavDropdown.Item>
                <NavDropdown.Item href="#foreigncategory">FOREIGN BOOKS</NavDropdown.Item>
                <NavDropdown.Item href="#van-phong-pham">VPP - Dung cu hoc sinh</NavDropdown.Item>
                <NavDropdown.Item href="#back-to-school">Hanh trang den truong</NavDropdown.Item>

            </NavDropdown>

            <Form inline>
            <Row>
            <Col xs="auto">
                <Form.Control
                type="text"
                placeholder="Sach giao khoa 2024"
                className=" mr-sm-2"
                />
            </Col>
            <Col xs="auto">
                <Button type="submit" variant="danger">Submit</Button>
                </Col>

            </Row>
        </Form>

            <Nav className="me-auto">
                <Nav.Link href="#Thong bao">Thong bao</Nav.Link>
                <Nav.Link href="#Checkout/cart">Gio hang</Nav.Link>
                <Nav.Link as={NavLink} to="/users" activeClassName="active">
                     Người dùng
                </Nav.Link>
                <Nav>
                        {isLoggedIn ? (
                            <NavDropdown title={userInfo?.first_name || 'User'}>
                                <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
                            </NavDropdown>
                        ) : (
                            <NavDropdown title="Setting">
                                <NavDropdown.Item href="/logins">Login</NavDropdown.Item>
                             </NavDropdown>
                        )}
                </Nav>


            </Nav>
            </Navbar.Collapse>
            
      </Container>
    </Navbar>
    </>
    );
};

export default Header;
