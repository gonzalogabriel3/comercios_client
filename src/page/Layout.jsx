// src/components/Layout.js
import React from "react";
import { Button, Col, Container, FormSelect, Image, InputGroup, Nav, NavDropdown, Navbar, Offcanvas, Row } from "react-bootstrap";
import { Form, Link } from "react-router-dom";
import './Layout.css'; 
import logo from "../images/logo.png"

const Layout = ({ children }) => {
    return (
        <div className="layout-container">
            {/*------------ Navbar -----------------*/}
            <Navbar fixed="top" key='sm' expand="true" className="mb-3" bg="primary" data-bs-theme="dark">
                <Container fluid>
                    <Navbar.Brand><Image src={logo} alt="Logo" width={30} height={30} className="d-inline-block align-top" />&nbsp;Locales Chubut</Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-sm`} />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-sm`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
                        placement="end"
                        className="offcanvas-custom"
                        
                    >
                        <Offcanvas.Header closeButton>
                        <NavDropdown
                        title={<><i class="bi bi-person-fill" style={{color:"#ff0534"}}></i>&nbsp;username</>}
                        id={`offcanvasNavbarDropdown-expand`}
                      >
                      <NavDropdown.Item onClick={console.log("Cerrar sesion")} style={{paddingTop:"0px",fontWeight:"600"}}>
                        <i class="bi bi-box-arrow-right" ></i>&nbsp;Cerrar sesion
                      </NavDropdown.Item>
                      </NavDropdown>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                        <br />
                        
                        <InputGroup className="mb-3">
                        <FormSelect>
                                <option>Seleccione Localidad</option>
                                <option>Trelew</option>
                                <option>Rawson</option>
                                <option>Gaiman</option>
                                <option>Puerto Madryn</option>
                            </FormSelect>
                            <Button variant="secondary" id="button-addon1">
                            <i class="bi bi-search"></i>
                            </Button>
                            
                        </InputGroup>
                            
                        </Offcanvas.Body>
                        <div className="offcanvas-footer mt-auto">
                                <p className="text-white text-center" >&nbsp;&nbsp;<i className="bi bi-laptop"></i>&nbsp;<i>v0.1</i> Desarrollo - Gonzalo Cruzado</p>
                        </div>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>

            {/*------------ Sidebar -----------------*/}
            <Container fluid>
                <Row>
                    <Col sm={2} className="bg-light sidebar">
                    <Nav defaultActiveKey="/" className="flex-column bg-primary" style={{paddingBottom: "20%",paddingTop: "5%",borderRadius: "5%",borderBottom: "solid 9px lightgrey"}}>
                        <Nav.Link as={Link} to="/" className="text-white"><i className="bi bi-house"></i>&nbsp;Inicio</Nav.Link>
                        <Nav.Link as={Link} to="/estadistica" className="text-white"><i className="bi bi-pie-chart"></i>&nbsp;Estadistica</Nav.Link>
                        <Nav.Link as={Link} to="/mapa" className="text-white"><i className="bi bi-geo-alt"></i>&nbsp;Mapa</Nav.Link>
                    </Nav>
                    </Col>
                    <Col sm={10} className="content">
                        {children}
                    </Col>
                </Row>
            </Container>
            
        </div>
    );
};

export default Layout;
