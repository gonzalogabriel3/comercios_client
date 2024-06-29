import React from 'react';
import { Placeholder } from "react-bootstrap";

const PlantillaRecarga = (props) => {
    return (
        <>
            {Array.from({ length: props.cantidad }).map((_, index) => (
                <Placeholder as="p" animation="glow" key={index}>
                    <Placeholder xs={props.tamanio} bg={props.bg} size="lg" />
                </Placeholder>
            ))}
        </>
    );
};

export default PlantillaRecarga;
