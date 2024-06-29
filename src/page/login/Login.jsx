// src/components/Layout.js
import React, { useState } from "react";
import { Button, Card, Col, Container, FormControl, FormSelect, Image, InputGroup, Modal, ModalBody, Nav, NavDropdown, Navbar, Offcanvas, Row, Spinner } from "react-bootstrap";
import { Form, Link, useNavigate } from "react-router-dom";
import logo from "../../images/logo.png"
import "../Layout.css";
import Cookies from 'js-cookie';
import { useGlobalData } from "../../context";

const Login = () => {

    const {localidades}=useGlobalData();

    const navigate = useNavigate()


    const login = () => {
        
        setModalInicio(true)
        Cookies.set('token','t0k3nej3mpl0')
        const randomLocalidad = localidades[Math.floor(Math.random() * localidades.length)].id;
        Cookies.set('id_localidad',randomLocalidad)
        
        setTimeout(() => {
            navigate('/inicio', { replace: true });
        }, 3000);
        
        
    }

    const [modalInicio,setModalInicio] = useState(false);    
    
    return (
        <>
        <div style={{ minHeight: '100vh', backgroundColor: "#015CAA" }}>
        
            <Container style={{paddingTop:"10%"}}>
                <center>
                <Card className="text-center" bg="primary" text="white" style={{border:"2px solid rgba(230, 230, 230, 0.6)",width:"60%"}}>
                    <Card.Body>
                        <Card.Title>
                            <Image src={logo} width={170} height={170}></Image>
                        </Card.Title>
                        <Card.Text>
                            <center>
                            <br />
                            <FormControl type="text" value="usuarioTest" style={{ width: '40%' }} disabled readOnly/>
                            <br/>
                            <FormControl type="password" value="@12_pass" style={{ width: '40%' }} disabled readOnly/>
                            </center>
                        </Card.Text>
                        <Button onClick={login} variant="dark" style={{marginTop:"3%"}}>Iniciar sesion</Button>
                    </Card.Body>
                    <Card.Footer style={{color:"white",fontFamily: "Georgia",marginTop:"5%"}}><i>Version de prueba</i> - <i class="bi bi-laptop"></i>&nbsp;Desarrollo Gonzalo Cruzado</Card.Footer>
                </Card>
                </center>
            </Container>

            <Modal show={modalInicio} onHide={() => setModalInicio(false)} backdrop="static" centered>
                <ModalBody style={{backgroundColor:"#0d6efd"}}>
                    <Row>
                        <Col sm={2}>
                            <Image src={logo} width={100} height={100} />
                        </Col>
                        <Col>
                        <center>
                            <br />
                        <Spinner animation="border" variant="light" />
                        <h6 style={{color:"white",marginTop:"7px"}}>Iniciando sesion</h6>
                        </center>
                        </Col>
                    </Row>                    
                </ModalBody>
            </Modal>
        </div>
        </>
    );
};

export default Login;
