import { Badge, Col, Container, Navbar, Placeholder, ProgressBar, Row } from "react-bootstrap";
import { useGlobalData } from "../../context";
import Torta from "../../components/grafico/Torta";
import Porcentaje from "../../components/grafico/Porcentaje";
import SimpleRadarChart from "../../components/grafico/Spiderweb";
import CustomShapeBarChart from "../../components/CustomShapeBarChart";
import { Scatter } from "recharts";
import ScatterCustom from "../../components/grafico/ScatterCustom";
import PlantillaRecarga from "../../components/PlantillaRecarga";

const Estadistica = () =>{

    const {appData,rubros} = useGlobalData()

    return(
    <>
        {appData.comercios && appData.localidad ? (
        <>
            {appData.localidad ? (
                <Row>
                <Col xs={3}>
                    <h4 style={{marginBottom:"4%"}}>
                        <Badge pill bg="primary">
                            Localidad: {appData.localidad.descripcion}
                        </Badge>
                    </h4>
                </Col>
                </Row>):
                <>
                <Placeholder xs={12} bg="primary" />
                </>
            }
            
            <Row xs={12}>
                <Col lg={6} md={12}>
                    <SimpleRadarChart></SimpleRadarChart>
                </Col>
                <Col lg={6} md={12}>
                    <CustomShapeBarChart></CustomShapeBarChart>
                </Col>
            </Row>

            <Row xs={12}>
                <Col lg={6} md={12}>
                    <Torta></Torta>
                </Col>
                <Col lg={6} md={12}>
                    <ScatterCustom></ScatterCustom>
                </Col>
            </Row>

            <Row xs={12} style={{marginTop:"5%"}}>
            {rubros.map((rubro)=>
                <Col>
                <Porcentaje tipoLocal={rubro.descripcion} cantidad={appData.comercios.filter(comercio => comercio.rubros.includes(rubro.id)).length} total={appData.comercios.length}></Porcentaje>
                </Col>
            )}
            </Row>
            
        </>
        ):
        <>
            <Row>
                <Col sm={12}>
                    <PlantillaRecarga cantidad={1} tamanio={2} bg="primary"></PlantillaRecarga>
                </Col>
                <Col sm={6}>
                    <PlantillaRecarga cantidad={7} tamanio={10} bg="secondary"></PlantillaRecarga>
                </Col>
                <Col sm={6}>
                    <PlantillaRecarga cantidad={7} tamanio={10} bg="primary"></PlantillaRecarga>
                </Col>
            </Row>
            <Row style={{marginTop:"5%"}}>
                <Col sm={6}>
                    <PlantillaRecarga cantidad={7} tamanio={10} bg="primary"></PlantillaRecarga>
                </Col>
                <Col sm={6}>
                    <PlantillaRecarga cantidad={7} tamanio={10} bg="secondary"></PlantillaRecarga>
                </Col>
            </Row>

            <Row style={{marginTop:"5%"}}>
                <Col sm={12}>
                    <ProgressBar animated now={95} />
                </Col>
            </Row>
        </>
        }
        

    </>
    )
};

export default Estadistica;