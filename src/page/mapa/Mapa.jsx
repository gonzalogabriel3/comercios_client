import { Badge, Col, Nav, Placeholder, Row, Spinner } from "react-bootstrap";
import { useGlobalData } from "../../context";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet';
import logo from "../../images/logo.png"
import { useEffect, useState } from "react";
import '../Layout.css'
import L from 'leaflet';
import PlantillaRecarga from "../../components/PlantillaRecarga";


const Marcador = ({comercio,tipo_rubro}) =>{
    const {
        logo_alimentos,
        logo_carniceria,
        logo_farmacia,
        logo_fiambres,
        logo_panaderia,
        logo_verduleria
    } = useGlobalData()

    const logo_marker = new L.Icon({
        iconUrl: logo,
        iconSize: [35, 35], // Tamaño del ícono
        iconAnchor: [15, 30], // Punto del ícono que corresponde a la ubicación del marcador
        popupAnchor: [0, -30] // Punto desde el cual se abrirá el popup, relativo al iconoAnchor
    });
    const logo_alimentos_marker = new L.Icon({
        iconUrl: logo_alimentos,
        iconSize: [35, 35], // Tamaño del ícono
        iconAnchor: [15, 30], // Punto del ícono que corresponde a la ubicación del marcador
        popupAnchor: [0, -30] // Punto desde el cual se abrirá el popup, relativo al iconoAnchor
    });
    const logo_carniceria_marker = new L.Icon({
        iconUrl: logo_carniceria,
        iconSize: [35, 35], // Tamaño del ícono
        iconAnchor: [15, 30], // Punto del ícono que corresponde a la ubicación del marcador
        popupAnchor: [0, -30] // Punto desde el cual se abrirá el popup, relativo al iconoAnchor
    });
    const logo_verduleria_marker = new L.Icon({
        iconUrl: logo_verduleria,
        iconSize: [35, 35], // Tamaño del ícono
        iconAnchor: [15, 30], // Punto del ícono que corresponde a la ubicación del marcador
        popupAnchor: [0, -30] // Punto desde el cual se abrirá el popup, relativo al iconoAnchor
    });
    const logo_farmacia_marker = new L.Icon({
        iconUrl: logo_farmacia,
        iconSize: [35, 35], // Tamaño del ícono
        iconAnchor: [15, 30], // Punto del ícono que corresponde a la ubicación del marcador
        popupAnchor: [0, -30] // Punto desde el cual se abrirá el popup, relativo al iconoAnchor
    });
    const logo_panaderia_marker = new L.Icon({
        iconUrl: logo_panaderia,
        iconSize: [35, 35], // Tamaño del ícono
        iconAnchor: [15, 30], // Punto del ícono que corresponde a la ubicación del marcador
        popupAnchor: [0, -30] // Punto desde el cual se abrirá el popup, relativo al iconoAnchor
    });
    const logo_fiambres_marker = new L.Icon({
        iconUrl: logo_fiambres,
        iconSize: [35, 35], // Tamaño del ícono
        iconAnchor: [15, 30], // Punto del ícono que corresponde a la ubicación del marcador
        popupAnchor: [0, -30] // Punto desde el cual se abrirá el popup, relativo al iconoAnchor
    });

    const iconoMapping = {
        0: logo_marker,
        1: logo_alimentos_marker,
        2: logo_carniceria_marker,
        3: logo_verduleria_marker,
        4: logo_farmacia_marker,
        5: logo_panaderia_marker,
        6: logo_fiambres_marker
    };

    // Selecciona el ícono basado en tipo_rubro
    const icono= iconoMapping[tipo_rubro] || logo;

    return (
        <Marker icon={icono} position={[comercio.latitud, comercio.longitud]}>
            <Popup>
                <p style={{color:"grey",fontWeight:"900"}}><u>{comercio.nombre}</u></p>
                <div>
                    <p style={{color:"grey",fontFamily:'Georgia',fontWeight:"900"}}>Rubros comerciales:</p>
                    {comercio.rubros.map((rubro) => (
                        rubro === 1 ? (
                            <div key={rubro} style={{ display: 'flex', alignItems: 'center' }}>
                                <img src={logo_alimentos} alt="Alimentos" style={{ width: '30px', height: 'auto', marginRight: '8px', opacity:0.8 }} />
                                <p style={{color:"grey"}}>Alimentos</p>
                            </div>
                        ) : rubro === 2 ? (
                            <div key={rubro} style={{ display: 'flex', alignItems: 'center' }}>
                                <img src={logo_carniceria} alt="Carniceria" style={{ width: '30px', height: 'auto', marginRight: '8px', opacity:0.8 }} />
                                <p style={{color:"grey"}}>Carniceria</p>
                            </div>
                        ) : rubro === 3 ? (
                            <div key={rubro} style={{ display: 'flex', alignItems: 'center' }}>
                                <img src={logo_verduleria} alt="Verduleria" style={{ width: '30px', height: 'auto', marginRight: '8px', opacity:0.8 }} />
                                <p style={{color:"grey"}}>Verduleria</p>
                            </div>
                        ) : rubro === 4 ? (
                            <div key={rubro} style={{ display: 'flex', alignItems: 'center' }}>
                                <img src={logo_farmacia} alt="Farmacia" style={{ width: '30px', height: 'auto', marginRight: '8px', opacity:0.8 }} />
                                <p style={{color:"grey"}}>Farmacia</p>
                            </div>
                        ) : rubro === 5 ? (
                            <div key={rubro} style={{ display: 'flex', alignItems: 'center' }}>
                                <img src={logo_panaderia} alt="Panaderia" style={{ width: '30px', height: 'auto', marginRight: '8px', opacity:0.8 }} />
                                <p style={{color:"grey"}}>Panaderia</p>
                            </div>
                        ) : rubro === 6 ? (
                            <div key={rubro} style={{ display: 'flex', alignItems: 'center' }}>
                                <img src={logo_fiambres} alt="Carniceria" style={{ width: '30px', height: 'auto', marginRight: '8px', opacity:0.8}} />
                                <p style={{color:"grey"}}>Fiambreria</p>
                            </div>
                        ) : null
                    ))}
                    
                </div>
            </Popup>
        </Marker>
    );

} 


const Mapa = () =>{
    
        const {
            appData,
            logo_alimentos,
            logo_carniceria,
            logo_farmacia,
            logo_fiambres,
            logo_panaderia,
            logo_verduleria
        } = useGlobalData()

        const [tipoRubro,setTipoRubro] = useState(0)

        const [activeKey, setActiveKey] = useState('0');

        const handleSelect = (eventKey) => {
            setActiveKey(eventKey);
           
        };

        return(
        <>
            {appData.comercios && appData.localidad ? (
        <>
            <Row>
            <Col sm={3}>
                <h4>
                <Badge pill bg="primary">
                   Localidad: {appData.localidad.descripcion}
                </Badge>
                </h4>
            </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <Nav justify variant="tabs" activeKey={activeKey} onSelect={handleSelect} style={{marginTop:"2%"}}>
                        <Nav.Item>
                            <Nav.Link className={activeKey === "0" ? 'selected-nav' : ''} eventKey="0" onClick={()=>setTipoRubro(0)}><img src={logo} width={'30px'}  /> Todos</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className={activeKey === "1" ? 'selected-nav' : ''} eventKey="1" onClick={()=>setTipoRubro(1)}><img src={logo_alimentos} width={'30px'}  /> Alimentos</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className={activeKey === "2" ? 'selected-nav' : ''} eventKey="2" onClick={()=>setTipoRubro(2)}><img src={logo_carniceria} width={'30px'}  /> Carniceria</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className={activeKey === "3" ? 'selected-nav' : ''} eventKey="3" onClick={()=>setTipoRubro(3)}><img src={logo_verduleria} width={'30px'}  /> Verduleria</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className={activeKey === "4" ? 'selected-nav' : ''} eventKey="4" onClick={()=>setTipoRubro(4)}><img src={logo_farmacia} width={'30px'}  /> Farmacia</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className={activeKey === "5" ? 'selected-nav' : ''} eventKey="5" onClick={()=>setTipoRubro(5)}><img src={logo_panaderia} width={'30px'}  /> Panaderia</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className={activeKey === "6" ? 'selected-nav' : ''} eventKey="6" onClick={()=>setTipoRubro(6)}><img src={logo_fiambres} width={'30px'}  /> Fiambreria</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <MapContainer center={[appData.localidad.latitud,appData.localidad.longitud]} zoom={13} style={{ height: "60vh", width: "100%" ,border: "4px solid rgba(234,237,237,0.8)"}}>
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution=''
                        />
                        {tipoRubro === 0 ? (
                            appData.comercios.map((comercio, index) => (
                                <Marcador key={index} comercio={comercio} tipo_rubro={tipoRubro} />
                            ))
                        ) : (
                            appData.comercios
                                .filter(comercio => comercio.rubros.some(rubro => rubro === tipoRubro))
                                .map((comercio, index) => {
                                    
                                    return (
                                        <Marcador key={index} comercio={comercio} tipo_rubro={tipoRubro} />
                                    );
                                })
                        )
                    }
                        
                    </MapContainer>
                </Col>
            </Row>
            
        
        </>
            ):
            <>
                <Row>
                    <Col sm={12}>
                        <PlantillaRecarga cantidad={1} tamanio={2} bg="primary"></PlantillaRecarga>
                    </Col>
                </Row>
                <Row style={{marginTop:"4%"}}>
                    <PlantillaRecarga cantidad={6} tamanio={10} bg="primary"></PlantillaRecarga>
                </Row>
                <Row>
                    <PlantillaRecarga cantidad={6} tamanio={10} bg="secondary"></PlantillaRecarga>
                </Row>
                
            </>
            }
            
    
        </>
        )
};

export default Mapa;