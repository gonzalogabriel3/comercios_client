import { createContext, useContext, useEffect, useState } from "react";
import { Col, Image, Modal, ModalBody, Row, Spinner } from "react-bootstrap";
import logo from "./images/logo.png"
import logo_alimentos from "./images/iconos_rubros/alimentos.png"
import logo_carniceria from "./images/iconos_rubros/carniceria.png"
import logo_verduleria from "./images/iconos_rubros/verduleria.png"
import logo_farmacia from "./images/iconos_rubros/farmacia.png"
import logo_panaderia from "./images/iconos_rubros/panaderia.png"
import logo_fiambres from "./images/iconos_rubros/fiambreria.png"
import {data,rubros} from "./dataExample/Comercios"


const context = createContext();

export function useGlobalData(){
    return useContext(context);
}

export function DataProvider({children}){
    
    const [appData,setAppData] = useState({comercios:null,localidad:null,rubros:rubros});
    const [modalCarga,setModalCarga] = useState(false);
    const [mensajeCarga,setMensajeCarga] = useState('');
    
    const showModalCarga = ({mensaje}) =>{
        setMensajeCarga(mensaje)
        setModalCarga(true)
    }

    const hiddenModalCarga = () =>{
        setModalCarga(false);
    }

    const localidades = [
        {id:1,descripcion:"Trelew",latitud:"-43.25000617310668",longitud:"-65.30543487918679"},
        {id:2,descripcion:"Rawson",latitud:"-43.29982637467559",longitud:"-65.09962261622626"},
        {id:3,descripcion:"Gaiman",latitud:"-43.28972211427535",longitud:"-65.49198939932599"},
        {id:4,descripcion:"Puerto Madryn",latitud:"-42.771598703850884",longitud:"-65.04431055033919"},
    ]

   const buscarLocalidad = (id_localidad) => {
        const localidad = localidades.find(loc => loc.id === id_localidad)
        return localidad
   }

    const buscarComercios = (id_localidad) => {
        const comerciosFiltrados = data.filter(comercio => comercio.ciudad_id === id_localidad);
        return comerciosFiltrados;
    }

    const dataProvided ={
        appData,
        setAppData,
        showModalCarga,
        hiddenModalCarga,
        logo_alimentos,
        logo_carniceria,
        logo_farmacia,
        logo_fiambres,
        logo_panaderia,
        logo_verduleria,
        buscarComercios,
        buscarLocalidad,
        localidades,
        rubros
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