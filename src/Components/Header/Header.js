import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../images/logo-removebg-preview.png'
import './Header.css'
//get import font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    const searchIcon = <FontAwesomeIcon icon={faSearch} />
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Virtual Programs</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Courses</Nav.Link>
                    </Nav>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search instructor" aria-label="Search" />
                        <button className="btn btn-outline-light d-flex align-items-center justify-content-around" type="submit">{searchIcon}  Search</button>

                    </form>
                </Container>
            </Navbar>
            <div className="container-fluid d-flex align-items-center justify-content-evenly header-bg p-5">
                <div>
                    <img src={logo} alt="" />
                </div>
                <div className="w-50 text-center">
                    <h3 className="text-center">Are you thinking about studying Abroad...???</h3>
                    <h2 className="text-center"> Join Our <span className="caption-color fw-bolder fs-2">"Virtual Education Fair"</span></h2>
                    <p> To excel in your life hear from the professor about faculty, scholarship, facilities, living cost, tuition fees and so many things that you want to know</p>
                    <h6> Total Budget : $ 7340 </h6>
                </div>
            </div>
        </div>
    );

};

export default Header;