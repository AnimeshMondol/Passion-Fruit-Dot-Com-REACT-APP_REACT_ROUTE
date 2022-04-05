import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'
import logo from '../Images/2.png'

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="" variant="dark" className='navbar-bg-color container fixed-top'>
            <Container>
                <Navbar.Brand href="/home">
                    <img
                        src={logo}
                        width="130"
                        height="70"
                        alt='PASSIONFRUIT'
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="m-2 p-2 ms-5 ps-5">
                        <CustomLink to="/home">Home</CustomLink>
                        <CustomLink to="/review">Review</CustomLink>
                        <CustomLink to="/dashboard">Dashboard</CustomLink>
                        <CustomLink to="/blog">Blog</CustomLink>
                        <CustomLink to="/aboutus">About Us</CustomLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;