// src/components/Layout.js
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Dropdown, FormSelect, Image, InputGroup, Nav, NavDropdown, NavLink, Navbar, Offcanvas, Row } from "react-bootstrap";
import { Form, Link, redirect, useLocation, useNavigate } from "react-router-dom";
import './Layout.css'; 
import logo from "../images/logo.png"
import { useGlobalData } from "../context";
import Cookies from 'js-cookie';

const Layout = ({ children }) => {

    const {buscarComercios,buscarLocalidad,appData,setAppData,localidades} = useGlobalData()

    const logout = () => {
        Cookies.remove('id_localidad');
        Cookies.remove('token');
        window.location.href = '/';
    };

    const location = useLocation();
    
    const getNavLinkStyle = (path) => {
        return location.pathname === path 
            ? { fontWeight: 'bold', borderLeft: '2px solid white', backgroundColor: 'rgba(255, 255, 255, 0.1)' }
            : { color: 'white' };
    };

    const getNavLinkStyle2 = (path) => {
        return location.pathname === path 
            ? { fontWeight: 'bold', borderBottom: '2px solid white', backgroundColor: 'rgba(255, 255, 255, 0.1)' }
            : { color: 'white' };
    };
    
    const [localidadElegida,setLocalidadElegida] = useState(parseInt(Cookies.get('id_localidad'), 10))

    useEffect(() => {
        if (!appData.localidad ) {
            const loc = buscarLocalidad(parseInt(Cookies.get('id_localidad'), 10))
            setTimeout(() => {
                setAppData((prevData) => ({
                    ...prevData,
                    localidad: loc,
                }));
            }, 4000);
        }

        if (!appData.comercios) {
            const comer = buscarComercios(parseInt(Cookies.get('id_localidad'), 10))
            setTimeout(() => {
                setAppData((prevData) => ({
                    ...prevData,
                    comercios:comer,
                }));
            }, 4000);
        }

    }, []);

    const handleLocalidadChange = (e) => {
        const selectedId = parseInt(e.target.value);
        setLocalidadElegida(localidades.find(loc => loc.id === selectedId).id);
    };

    const cambiarLocalidad = () =>{
        setAppData((prevData) => ({
            ...prevData,
            comercios:null,
            localidad:null
        }));
        const loc = buscarLocalidad(localidadElegida)
        Cookies.set('id_localidad',localidadElegida)
        const comer = buscarComercios(parseInt(Cookies.get('id_localidad'), 10))
            setTimeout(() => {
                setAppData((prevData) => ({
                    ...prevData,
                    comercios:comer,
                    localidad:loc
                }));
            }, 3000);
        setOffCanvasLateral(false)
        
    }

    const [offcanvasLateral,setOffCanvasLateral] = useState(false)

    return (
        
            <>
            {/* Header Nabvar Responsive*/}
            <Row xs={12}>
            <Navbar fixed="top" key='sm' expand="true" className="mb-3" bg="primary" data-bs-theme="dark">
                <Container fluid>
                    <Navbar.Brand><Image src={logo} alt="Logo" width={30} height={30} className="d-inline-block align-top" />&nbsp;Locales Chubut</Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-sm`} onClick={()=>setOffCanvasLateral(true)} />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-sm`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
                        placement="end"
                        className="offcanvas-custom"
                        show={offcanvasLateral}
                        onHide={()=>setOffCanvasLateral(false)}
                    >
                        <Offcanvas.Header closeButton>
                        <Dropdown>
                            <Dropdown.Toggle variant="light" id="dropdown-basic" style={{color:"grey"}}>
                                <i class="bi bi-person-fill" style={{color:"grey"}}></i>&nbsp;usuarioTest
                            </Dropdown.Toggle>

                            <Dropdown.Menu style={{backgroundColor:"white"}}>
                                <Dropdown.Item><NavLink onClick={()=>logout()}><i class="bi bi-box-arrow-in-right"></i>&nbsp;Cerrar sesion</NavLink></Dropdown.Item>
                            </Dropdown.Menu>
                            </Dropdown>
                        
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                        <br />
                        
                        <InputGroup className="mb-3">
                        
                        {localidadElegida && appData.localidad ? (<>
                        <FormSelect value={localidadElegida} onChange={handleLocalidadChange} style={{fontFamily:"Georgia",color:"grey"}}>
                                
                                {localidades.map((ciudad)=>
                                    <option value={ciudad.id}>{ciudad.descripcion}</option>
                                )}
                               
                            </FormSelect>
                            <Button variant="secondary" id="button-addon1" onClick={cambiarLocalidad}>
                            <i class="bi bi-search"></i>
                            </Button>
                        </>
                        ):null}
                        </InputGroup>
                            
                        </Offcanvas.Body>
                        <div className="offcanvas-footer mt-auto">
                                <p className="text-white text-center" >&nbsp;&nbsp;<i className="bi bi-laptop"></i>&nbsp;<i>v0.1</i> Desarrollo - Gonzalo Cruzado</p>
                        </div>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
            </Row>

            {/* Sidebar */}
            <Container fluid style={{ marginTop: "58px"}}>
            <Row xs={12} >
                <Col lg={2} md={12} className="d-none d-lg-block">
                <Nav defaultActiveKey="/" className="flex-column bg-primary" style={{fontFamily: "Georgia",paddingBottom: "20%",paddingTop: "5%",borderRadius: "5%",borderBottom: "solid 9px rgba(230, 230, 230, 0.6)"}}>
                    <Nav.Link as={Link} to="/inicio" style={getNavLinkStyle("/inicio")} className={"text-white"}><i className="bi bi-house"></i>&nbsp;Inicio</Nav.Link>
                    <Nav.Link as={Link} to="/estadistica" style={getNavLinkStyle("/estadistica")} className="text-white"><i className="bi bi-pie-chart"></i>&nbsp;Estadistica</Nav.Link>
                    <Nav.Link as={Link} to="/mapa" className="text-white" style={getNavLinkStyle("/mapa")}><i className="bi bi-geo-alt"></i>&nbsp;Mapa</Nav.Link>
                </Nav>
                </Col>
                <Col sm={12} className="d-lg-none">
                <Navbar bg="primary" data-bs-theme="dark">
                    <Container>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/inicio" style={getNavLinkStyle2("/inicio")} className={"text-white"}><i className="bi bi-house"></i>&nbsp;Inicio</Nav.Link>
                        <Nav.Link as={Link} to="/estadistica" style={getNavLinkStyle2("/estadistica")} className="text-white"><i className="bi bi-pie-chart"></i>&nbsp;Estadistica</Nav.Link>
                        <Nav.Link as={Link} to="/mapa" className="text-white" style={getNavLinkStyle2("/mapa")}><i className="bi bi-geo-alt"></i>&nbsp;Mapa</Nav.Link>
                    </Nav>
                    </Container>
                </Navbar>
                </Col>
                <Col lg={10} md={12}>
                    {children}
                </Col>

            </Row>
            </Container>
            </>
        
    );
};

export default Layout;
