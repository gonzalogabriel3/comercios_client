import { Navigate, Route, Routes } from "react-router-dom";
import Main from "../page/main/Main";
import Estadistica from "../page/estadistica/Estadistica";
import Mapa from "../page/mapa/Mapa";
import React, { useState } from "react";
import Layout from "../page/Layout";
import Login from "../page/login/Login";
import Cookies from "js-cookie";
import ProtectedRoute from "./ProtectedRoute";

function ProtectedRoutes() {

    return (
        <React.Fragment>
            
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/inicio" element={<ProtectedRoute><Layout><Main /></Layout></ProtectedRoute>} />
                <Route path="/estadistica" element={<ProtectedRoute><Layout><Estadistica /></Layout></ProtectedRoute>} />
                <Route path="/mapa" element={<ProtectedRoute><Layout><Mapa /></Layout></ProtectedRoute>} />
                <Route path="/" element={<Navigate to="/inicio" replace />} />
                <Route path="*" element={<Navigate to="/inicio" replace />} />
            </Routes>
        </React.Fragment>
    );
}

export default ProtectedRoutes;
