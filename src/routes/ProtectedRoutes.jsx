import { Route, Routes } from "react-router-dom";
import Main from "../page/main/Main";
import Estadistica from "../page/estadistica/Estadistica";
import Mapa from "../page/mapa/Mapa";
import React from "react";
import Layout from "../page/Layout";

function ProtectedRoutes() {
    return (
        <React.Fragment>
            
            <Routes>
                <Route path="/" element={<Layout><Main /></Layout>} />
                <Route path="/estadistica" element={<Layout><Estadistica /></Layout>} />
                <Route path="/mapa" element={<Layout><Mapa /></Layout>} />
            </Routes>
        </React.Fragment>
    );
}

export default ProtectedRoutes;
