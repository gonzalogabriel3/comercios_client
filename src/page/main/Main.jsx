import React, { useEffect, useState } from "react";
import { Button, Col, FloatingLabel, Form, InputGroup, Modal, Offcanvas, Placeholder, Row } from "react-bootstrap";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import logo from "../../images/logo.png";
import { useGlobalData } from "../../context";
import DataTable from 'react-data-table-component';
import '../Layout.css'
import data from "../../dataExample/Comercios";


const Main = () => {
    const { showModalCarga, hiddenModalCarga,appData,setAppData } = useGlobalData();
    const [comercioSel,setComercioSel] = useState(null);
    const [descripcion,setDescripcion] = useState(false);
    
    useEffect(() => {
        if(!appData.comercios){
            
            setTimeout(() => {
                setAppData((prevData) => ({
                    ...prevData,
                    comercios: data,
                }));
            }, 4000);
            
        }

    }, [])
    
    const newComercio = () => {
        const status=300
        setModalNuevo(false)
        showModalCarga({ mensaje: "Guardando Informacion" });
        nuevoComercio.id=99
        nuevoComercio.ciudad_id=6
        console.log(nuevoComercio)
        setTimeout(() => {
            if(status==200){
                setAppData((prevData) => ({
                    ...prevData,
                    comercios: [nuevoComercio,...prevData.comercios],
                }));
                // Notificación al usuario
                iziToast.show({
                    backgroundColor: '#0d6efd',
                    messageColor: '#ffffff',
                    image: logo,
                    title: '',
                    message: `Se ha cargado '${nuevoComercio.nombre}' al listado de comercios`,
                    position: 'topCenter',
                    progressBarColor: 'rgb(0, 255, 184)',
                    onOpening: function (instance, toast) {
                        console.info('callback abriu!');
                    },
                    onClosing: function (instance, toast, closedBy) {
                        console.info('closedBy: ' + closedBy); // tells if it was closed by 'drag' or 'button'
                    }
                });
            }else{
                // Notificación de error
                iziToast.show({
                    backgroundColor: '#F12F29',
                    messageColor: '#ffffff',
                    image: logo,
                    title: '',
                    message: `No se pudo agregar comercio`,
                    position: 'topCenter',
                    progressBarColor: 'rgb(0, 255, 184)',
                    onOpening: function (instance, toast) {
                        console.info('callback abriu!');
                    },
                    onClosing: function (instance, toast, closedBy) {
                        console.info('closedBy: ' + closedBy); // tells if it was closed by 'drag' or 'button'
                    }
                });

            }
            
            hiddenModalCarga();
            
            setNuevoComercio({nombre:'',direccion:'',latitud:'',longitud:'',rubros:[]})
        }, 4000);
    };

    const customStyles = {
        pagination: {
            style: {
                display: 'flex',
                justifyContent: 'flex-start', // Esto mueve la paginación a la izquierda
                padding: '10px 0', // Puedes ajustar el padding según tus necesidades
            },
        },
    };

    function showDescription(id_comercio){
        setComercioSel(appData.comercios.find(item => item.id === id_comercio));
        setDescripcion(true)
    }

    const columns = [
        {
            name: 'Ver',
            selector: row => <Button onClick={()=>showDescription(row.id)} size="sm" variant="outline-primary" ><i class="bi bi-eye"></i></Button>,
        },
        {
            name: 'Comercio',
            selector: row => row.nombre,
            sortable:true
            
        },
        {
            name: 'Ubicacion',
            selector: row => <><i class="bi bi-geo-alt"></i>&nbsp;{row.latitud},{row.longitud}</>,
            
        },
        {
            name: 'Acciones',
            selector: row => <>
                                <Button size="sm" variant="outline-secondary" onClick={()=>showEdit(row.id)}><i class="bi bi-pencil-square"></i></Button>
                                <Button size="sm" variant="outline-secondary" style={{marginLeft:"2px"}} onClick={()=>showDelete(row.id)}><i class="bi bi-trash"></i></Button>
                            </>,
            
        },
    ];

    const handleSearch = event => {
        const value = event.target.value.toLowerCase();
        setSearchTerm(value);

        const filtered = appData.comercios.filter(item => 
            item.nombre.toLowerCase().includes(value)
        );
        setFilteredData(filtered);
    };

    const [searchTerm, setSearchTerm] = useState("");
    const [filteredData, setFilteredData] = useState([]);

    //Nuevo comercio
    const [modalNuevo,setModalNuevo] = useState(false);
    const [nuevoComercio,setNuevoComercio] = useState({nombre:'',direccion:'',latitud:'',longitud:'',rubros:[]})
    
    
    const handleChangeNew = (event) => {
        const { name, value } = event.target;
        setNuevoComercio(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleCheckboxChange = (event) => {
        const { value, checked } = event.target;
        const intValue = parseInt(value); // Convertir el valor a entero
        setNuevoComercio(prevState => {
            let newRubros;
            if (checked) {
                newRubros = [...prevState.rubros, intValue];
            } else {
                newRubros = prevState.rubros.filter(rubro => rubro !== intValue);
            }
            return { ...prevState, rubros: newRubros };
        });
    };


    //Editar comercio
    const [modalEditar,setModalEditar] = useState(false);
    const handleChangeEdit = (event) => {
        const { name, value } = event.target;
        setComercioSel(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleCheckboxChangeEdit = (event) => {
        const { value, checked } = event.target;
        const intValue = parseInt(value);
        setComercioSel(prevState => {
            let newRubros;
            if (checked) {
                newRubros = [...prevState.rubros, intValue];
            } else {
                newRubros = prevState.rubros.filter(rubro => rubro !== intValue);
            }
            return { ...prevState, rubros: newRubros };
        });
    };

    function showEdit(id_comercio){
        setComercioSel(appData.comercios.find(item => item.id === id_comercio));
        setModalEditar(true)
    }

    const editComercio = () => {
        setModalEditar(false)
        showModalCarga({ mensaje: "Guardando cambios" });
        console.log(comercioSel)
        setTimeout(() => {
            setAppData((prevData) => {
                // Encuentra el índice del comercio que deseas reemplazar
                const index = prevData.comercios.findIndex(comercio => comercio.id === comercioSel.id);
        
                // Si el comercio existe en el array
                if (index !== -1) {
                    // Crea una nueva lista de comercios con el comercio reemplazado
                    const updatedComercios = [
                        ...prevData.comercios.slice(0, index), // Comercios antes del reemplazo
                        comercioSel, // El comercio actualizado
                        ...prevData.comercios.slice(index + 1) // Comercios después del reemplazo
                    ];
        
                    // Retorna el nuevo estado
                    return {
                        ...prevData,
                        comercios: updatedComercios
                    };
                }
        
                // Si el comercio no existe, retorna el estado sin cambios
                return prevData;
            });
            hiddenModalCarga();
            // Notificación al usuario
            iziToast.show({
                backgroundColor: '#0d6efd',
                messageColor: '#ffffff',
                image: logo,
                title: '',
                message: `Se han guardado los cambios correctamente!`,
                position: 'topCenter',
                progressBarColor: 'rgb(0, 255, 184)',
                onOpening: function (instance, toast) {
                    console.info('callback abriu!');
                },
                onClosing: function (instance, toast, closedBy) {
                    console.info('closedBy: ' + closedBy); // tells if it was closed by 'drag' or 'button'
                }
            });
            setComercioSel(null)
        }, 4000);
    };

    //Eliminar comercio
    const [modalEliminar,setModalEliminar] = useState(false)

    function showDelete(id_comercio){
        setComercioSel(appData.comercios.find(item => item.id === id_comercio));
        setModalEliminar(true)
    }

    const deleteComercio = () => {
        setModalEliminar(false)
        showModalCarga({ mensaje: "Eliminando local" });
        setTimeout(() => {
            setAppData((prevData) => {
                // Filtra el array para excluir el comercio con el id especificado
                const updatedComercios = prevData.comercios.filter(comercio => comercio.id !== comercioSel.id);
                
                return {
                    ...prevData,
                    comercios: updatedComercios
                };
            });
            hiddenModalCarga();
            // Notificación al usuario
            iziToast.show({
                backgroundColor: '#EEF129',
                messageColor: '#565655',
                image: logo,
                title: '',
                message: `Se ha eliminado el local  '${comercioSel.nombre}'  del sistema`,
                position: 'topCenter',
                progressBarColor: 'rgb(0, 255, 184)',
                onOpening: function (instance, toast) {
                    console.info('callback abriu!');
                },
                onClosing: function (instance, toast, closedBy) {
                    console.info('closedBy: ' + closedBy); // tells if it was closed by 'drag' or 'button'
                }
            });
            setComercioSel(null)
        }, 4000);
    }

    return (
        <>
           {appData.comercios ? (
            <>
            <Row>
                <Col sm={3}>
                    <input
                        type="text" 
                        placeholder="Buscar comercio..." 
                        value={searchTerm}
                        onChange={handleSearch}
                        className="form-control search-input"
                        style={{ marginBottom: "10px", padding: "5px"}}
                    />
                </Col>
                <Col sm={6}></Col>
                <Col sm={3}>
                    {/* Modal para nuevo comercio */}
                    <Modal
                        show={modalNuevo}
                        onHide={()=>setModalNuevo(false)}
                        backdrop="static"
                        keyboard={false}
                    >
                        <Modal.Body closeButton>
                        {/*Nombre */}
                        <FloatingLabel
                            style={{color:"lightgray"}}
                            controlId="floatingInput"
                            label="Nombre del local"
                        >
                        <Form.Control size="sm" name="nombre" type="text" onChange={handleChangeNew} value={nuevoComercio.nombre} placeholder="Nombre del local" style={{marginBottom:"2%"}}/>
                        </FloatingLabel>
                        {nuevoComercio.nombre.length <= 3 ? (
                            <>
                            <p style={{color:"grey",fontStyle:"italic",fontSize:"12px",marginLeft:"1%"}}><i class="bi bi-exclamation-triangle"></i>&nbsp;El nombre del local debe contener 3 caracteres como minimo </p>
                            </>
                            
                        ):null}

                        {/*Direccion */}
                        <FloatingLabel
                            style={{color:"lightgray"}}
                            controlId="floatingInput"
                            label="Direccion"
                        >
                        <Form.Control size="sm" name="direccion" type="text" onChange={handleChangeNew} value={nuevoComercio.direccion} placeholder="Direccion del local" style={{marginBottom:"2%"}}/>
                        </FloatingLabel>
                        {nuevoComercio.direccion.length <= 3 ? (
                            <p style={{color:"grey",fontStyle:"italic",fontSize:"12px",marginLeft:"1%"}}><i class="bi bi-exclamation-triangle"></i>&nbsp;Ingrese direccion del local </p>
                        ):null}
                        
                            
                        <label style={{marginBottom:"2%",color:"grey"}}><i class="bi bi-geo-alt"></i>&nbsp;Ubicacion</label>
                        <InputGroup size="sm">
                            {/*Latitud */}
                        <FloatingLabel
                            style={{color:"lightgray"}}
                            controlId="floatingInput"
                            label="Latitud"
                        >
                        <Form.Control size="sm" name="latitud" type="text" onChange={handleChangeNew} value={nuevoComercio.latitud} placeholder="L" style={{marginBottom:"2%"}}/>
                        </FloatingLabel>
                        
                        {/*Longitud */}
                        <FloatingLabel
                            style={{color:"lightgray"}}
                            controlId="floatingInput"
                            label="Longitud"
                        >
                        <Form.Control size="sm" name="longitud" type="text" onChange={handleChangeNew} value={nuevoComercio.longitud} placeholder="Longitud del local" style={{marginBottom:"2%"}}/>
                        </FloatingLabel>
                        
                            
                        </InputGroup>
                        {nuevoComercio.latitud.length <= 3 || nuevoComercio.longitud.length <= 3 ? (
                            <p style={{color:"grey",fontStyle:"italic",fontSize:"12px",marginLeft:"1%"}}><i class="bi bi-exclamation-triangle"></i>&nbsp;Ingrese las coordenadas del local </p>
                        ):null}

                        <label style={{marginBottom:"2%",color:"grey"}}>Rubros</label>
                        <Form.Check
                            style={{color:"grey"}}
                            label="Alimentos basicos(incluye arroz,harina,azucar,etc)"
                            value={1}
                            type="checkbox"
                            id="1"
                            onChange={handleCheckboxChange}
                        />
                        <Form.Check
                            style={{color:"grey"}}
                            label="Carniceria"
                            value={2}
                            type="checkbox"
                            id="2"
                            onChange={handleCheckboxChange}
                        />
                        <Form.Check
                            style={{color:"grey"}}
                            label="Verduleria"
                            value={3}
                            type="checkbox"
                            id="3"
                            onChange={handleCheckboxChange}
                        />
                        <Form.Check
                            style={{color:"grey"}}
                            label="Farmacia"
                            value={4}
                            type="checkbox"
                            id="4"
                            onChange={handleCheckboxChange}
                        />
                        <Form.Check
                            style={{color:"grey"}}
                            label="Panaderia"
                            value={5}
                            type="checkbox"
                            id="5"
                            onChange={handleCheckboxChange}
                        />
                        <Form.Check
                            style={{color:"grey"}}
                            label="Fiambreria"
                            value={6}
                            type="checkbox"
                            id="6"
                            onChange={handleCheckboxChange}
                        />
                        
                        {nuevoComercio.rubros.length <= 0 ? (
                            <p style={{color:"grey",fontStyle:"italic",fontSize:"12px",marginLeft:"1%",marginTop:"4%"}}><i class="bi bi-exclamation-triangle"></i>&nbsp;Debe seleccionar al menos un rubro </p>
                        ):null}
                        </Modal.Body>
                        <Modal.Footer>
                        <Button size="sm" variant="outline-secondary" onClick={()=>{setModalNuevo(false);setNuevoComercio({nombre:'',direccion:'',latitud:'',longitud:'',rubros:[]})}}>
                            Cancelar
                        </Button>
                        {nuevoComercio.rubros.length <= 0 || nuevoComercio.nombre.length <= 3 || nuevoComercio.direccion.length <= 3 || nuevoComercio.latitud.length <= 3 || nuevoComercio.longitud.length <= 3 ? (
                            <Placeholder xs={2} size="lg"/>
                        ):(
                        <Button size="sm" variant="primary" onClick={()=>newComercio()}>Agregar</Button>
                        )}
                        </Modal.Footer>
                    </Modal>
                    
            <Button size="sm" variant="outline-primary" onClick={() => setModalNuevo(true)}>
                <i className="bi bi-plus-circle"></i>&nbsp;Cargar Comercio
            </Button>
        
                </Col>
            </Row>
            <Row>
                <Col sm={12}>
                    
                    <DataTable
                        pagination
                        columns={columns}
                        data={filteredData.length ? filteredData : appData.comercios}
                        customStyles={customStyles}
                    />
                    {/*Modal para editar*/}
                    {comercioSel && modalEditar ? (<>
                        <Modal
                        show={modalEditar}
                        onHide={()=>setModalEditar(false)}
                        backdrop="static"
                        keyboard={false}
                    >
                        <Modal.Body closeButton>
                        {/*Nombre */}
                        <FloatingLabel
                            style={{color:"lightgray"}}
                            controlId="floatingInput"
                            label="Nombre del local"
                        >
                        <Form.Control size="sm" name="nombre" type="text" onChange={handleChangeEdit} value={comercioSel.nombre} placeholder="Nombre del local" style={{marginBottom:"2%"}}/>
                        </FloatingLabel>
                        {comercioSel.nombre.length <= 3 ? (
                            <>
                            <p style={{color:"grey",fontStyle:"italic",fontSize:"12px",marginLeft:"1%"}}><i class="bi bi-exclamation-triangle"></i>&nbsp;El nombre del local debe contener 3 caracteres como minimo </p>
                            </>
                            
                        ):null}

                        {/*Direccion */}
                        <FloatingLabel
                            style={{color:"lightgray"}}
                            controlId="floatingInput"
                            label="Direccion"
                        >
                        <Form.Control size="sm" name="direccion" type="text" onChange={handleChangeEdit} value={comercioSel.direccion} placeholder="Direccion del local" style={{marginBottom:"2%"}}/>
                        </FloatingLabel>
                        {comercioSel.direccion.length <= 3 ? (
                            <p style={{color:"grey",fontStyle:"italic",fontSize:"12px",marginLeft:"1%"}}><i class="bi bi-exclamation-triangle"></i>&nbsp;Ingrese direccion del local </p>
                        ):null}
                        
                            
                        <label style={{marginBottom:"2%",color:"grey"}}><i class="bi bi-geo-alt"></i>&nbsp;Ubicacion</label>
                        <InputGroup size="sm">
                            {/*Latitud */}
                        <FloatingLabel
                            style={{color:"lightgray"}}
                            controlId="floatingInput"
                            label="Latitud"
                        >
                        <Form.Control size="sm" name="latitud" type="text" onChange={handleChangeEdit} value={comercioSel.latitud} placeholder="L" style={{marginBottom:"2%"}}/>
                        </FloatingLabel>
                        
                        {/*Longitud */}
                        <FloatingLabel
                            style={{color:"lightgray"}}
                            controlId="floatingInput"
                            label="Longitud"
                        >
                        <Form.Control size="sm" name="longitud" type="text" onChange={handleChangeEdit} value={comercioSel.longitud} placeholder="Longitud del local" style={{marginBottom:"2%"}}/>
                        </FloatingLabel>
                        
                            
                        </InputGroup>
                        {comercioSel.latitud.length <= 3 || comercioSel.longitud.length <= 3 ? (
                            <p style={{color:"grey",fontStyle:"italic",fontSize:"12px",marginLeft:"1%"}}><i class="bi bi-exclamation-triangle"></i>&nbsp;Ingrese las coordenadas del local </p>
                        ):null}

                        <label style={{marginBottom:"2%",color:"grey"}}>Rubros</label>
                        <Form.Check
                            style={{color:"grey"}}
                            label="Alimentos basicos(incluye arroz,harina,azucar,etc)"
                            value={1}
                            name="alimentos"
                            type="checkbox"
                            id="1"
                            checked={comercioSel.rubros.includes(1)}
                            onChange={handleCheckboxChangeEdit}
                        />
                        <Form.Check
                            style={{color:"grey"}}
                            label="Carniceria"
                            value={2}
                            name="carniceria"
                            type="checkbox"
                            id="2"
                            checked={comercioSel.rubros.includes(2)}
                            onChange={handleCheckboxChangeEdit}
                        />
                        <Form.Check
                            style={{color:"grey"}}
                            label="Verduleria"
                            value={3}
                            name="verduleria"
                            type="checkbox"
                            id="3"
                            checked={comercioSel.rubros.includes(3)}
                            onChange={handleCheckboxChangeEdit}
                        />
                        <Form.Check
                            style={{color:"grey"}}
                            label="Farmacia"
                            value={4}
                            name="farmacia"
                            type="checkbox"
                            id="4"
                            checked={comercioSel.rubros.includes(4)}
                            onChange={handleCheckboxChangeEdit}
                        />
                        <Form.Check
                            style={{color:"grey"}}
                            label="Panaderia"
                            value={5}
                            name="panaderia"
                            type="checkbox"
                            id="5"
                            checked={comercioSel.rubros.includes(5)}
                            onChange={handleCheckboxChangeEdit}
                        />
                        <Form.Check
                            style={{color:"grey"}}
                            label="Fiambreria"
                            value={6}
                            name="fiambreria"
                            type="checkbox"
                            id="6"
                            checked={comercioSel.rubros.includes(6)}
                            onChange={handleCheckboxChangeEdit}
                        />
                        
                        {comercioSel.rubros.length <= 0 ? (
                            <p style={{color:"grey",fontStyle:"italic",fontSize:"12px",marginLeft:"1%",marginTop:"4%"}}><i class="bi bi-exclamation-triangle"></i>&nbsp;Debe seleccionar al menos un rubro </p>
                        ):null}
                        </Modal.Body>
                        <Modal.Footer>
                        <Button size="sm" variant="outline-secondary" onClick={()=>{setModalEditar(false);setComercioSel(null)}}>
                            Cancelar
                        </Button>
                        {comercioSel.rubros.length <= 0 || comercioSel.nombre.length <= 3 || comercioSel.direccion.length <= 3 || comercioSel.latitud.length <= 3 || comercioSel.longitud.length <= 3 ? (
                            <Placeholder xs={2} size="lg"/>
                        ):(
                        <Button size="sm" variant="primary" onClick={()=>editComercio()}>Guardar cambios</Button>
                        )}
                        </Modal.Footer>
                    </Modal>
                    </>):null}
                    
                    {/*Modal para eliminar*/}
                    {comercioSel && modalEliminar ?(
                    <>
                        <Modal
                            show={modalEliminar}
                            onHide={()=>setModalEliminar(false)}
                            backdrop="static"
                            keyboard={false}
                        >
                            
                            <Modal.Body closeButton>
                            ¿Realmente desea eliminar el local '{comercioSel.nombre}' del sistema?
                            </Modal.Body>
                            <Modal.Footer>
                            <Button size="sm" variant="outline-secondary" onClick={()=>{setModalEliminar(false);setComercioSel(null)}}>
                                Cancelar
                            </Button>
                            <Button size="sm" variant="outline-danger" onClick={()=>deleteComercio()}>Confirmar</Button>
                            </Modal.Footer>
                        </Modal>

                    </>):null}


                 </Col>
                 </Row>
                 </>   
                    ):(
                    <>
                        <Row>
                            <Col sm={12}>
                            <Placeholder as="p" animation="wave">
                                <Placeholder xs={4} />
                            </Placeholder>
                            {Array.from({ length: 11 }, (_, i) => (
                                <Placeholder as="p" animation="glow">
                                    <Placeholder xs={8} />
                                </Placeholder>
                            ))}
                            </Col>
                        </Row>
                    </>
                    )}
               
            {comercioSel ? (
            <Offcanvas show={descripcion} onHide={()=>setDescripcion(false)} placement="bottom" className="offcanvas-custom">
                <Offcanvas.Header closeButton>
                <Offcanvas.Title>{comercioSel.nombre}</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <p><i class="bi bi-map"></i>&nbsp;Direccion: {comercioSel.direccion}</p>
                    <p><i class="bi bi-geo-alt"></i>&nbsp;Ubicacion: {comercioSel.latitud},{comercioSel.longitud}</p>
                    <p>Rubro comercial:</p>
                    <ul>
                    {comercioSel.rubros.map((rubro, index) => (
                        <li key={index}>{rubro}</li>
                    ))}
                    </ul>
                    
                
                </Offcanvas.Body>
            </Offcanvas>
            ):null}
            
        </>
    );
};

export default Main;
