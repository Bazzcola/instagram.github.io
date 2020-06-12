import React, { Component } from 'react'
import { Container, Button, Navbar, Nav, Form, FormControl } from 'react-bootstrap'
import logo from './logo.png'
import compass from './compass.png'
import heart from './heart.png'
import man from './man.png'
import instagram from './instagram.png'
export default class Header extends Component {
    render() {
        return (
            <>
                <Navbar fixed="top" collapseOnSelect expand="md" bg="light" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">
                            <img
                                src={logo}
                                height="30"
                                width="30"
                                className="d-inline-block align-top"
                                alt="Logo"
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav" className="d-flex justify-content-between">
                            <Nav className="">
                            <img
                                src={instagram}
                                height="30"
                                width="30"
                                className="instagram d-inline-block align-top"
                                alt="Logo"
                            /> 
                            </Nav>
                            <Form inline className="input">
                                <input type="text" placeholder="Поиск" className="search_input"></input>
                            </Form>
                            <Nav className="icons">
                                <div className="insta_icon">
                                    <img
                                        src={compass}
                                        height="30"
                                        width="30"
                                        className=""
                                        alt=""
                                    />    
                                </div>
                                <div className="insta_icon">
                                    <img
                                        src={heart}
                                        height="30"
                                        width="30"
                                        className=""
                                        alt=""
                                    />    
                                </div>
                                <div className="insta_icon">
                                    <img
                                        src={man}
                                        height="30"
                                        width="30"
                                        className=""
                                        alt=""
                                    />    
                                </div>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        );
    }
}