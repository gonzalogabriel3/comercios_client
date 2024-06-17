import { createContext, useContext, useState } from "react";
import { Button, Col, Image, Modal, ModalBody, Row, Spinner } from "react-bootstrap";
import logo from "./images/logo.png"


const context = createContext();

export function useGlobalData(){
    return useContext(context);
}

export function DataProvider({children}){
    const ROL_USUARIO = 2;
    const [appData,setAppData] = useState({comercios:null});
    const [modalCarga,setModalCarga] = useState(false);
    const [mensajeCarga,setMensajeCarga] = useState('');

    
    
    const showModalCarga = ({mensaje}) =>{
        setMensajeCarga(mensaje)
        setModalCarga(true)
    }

    const hiddenModalCarga = () =>{
        setModalCarga(false);
    }

    const dataProvided ={
        ROL_USUARIO,
        appData,
        setAppData,
        showModalCarga,
        hiddenModalCarga
    }

    return(
        <context.Provider value={dataProvided}>
            {children}
            <Modal show={modalCarga} onHide={() => setModalCarga(false)} backdrop="static" centered>
                <ModalBody style={{backgroundColor:"#0d6efd"}}>
                    <Row>
                        <Col sm={2}>
                            <Image src={logo} width={100} height={100} />
                        </Col>
                        <Col>
                        <center>
                            <br />
                        <Spinner animation="border" variant="light" />
                        
                        <h6 style={{color:"white",marginTop:"7px"}}>{mensajeCarga}</h6>
                        </center>
                        </Col>
                    </Row>
                   
                    
                    
                </ModalBody>
            </Modal>
        </context.Provider>
    )

}