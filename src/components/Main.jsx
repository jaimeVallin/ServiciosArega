import React, { useState } from "react";
import { View } from "react-native";
import { Routes, Route, useNavigate } from "react-router-native";
import NuevaOrden from "./NuevaOrden.jsx";
import ParametrosMantenimiento from "./ParametrosMantenimiento.jsx";
import AppBar from "./AppBar.jsx";
import LogInPage from "../pages/Login.jsx";
import EstadoCarroceria from "./EstadoCarroceria.jsx";
import Firmas from "./Firmas.jsx";

const Main = () => {
  
  const navigate = useNavigate();


  return (
    <View style={{ flex: 1 }}>
      <AppBar />
      <Routes>
        <Route path="/" element={<LogInPage  />} />
        <Route path="/nuevaOrden" element={<NuevaOrden />} />
        <Route path="/paramMante" element={<ParametrosMantenimiento />} />
        <Route path="/estadoCarro" element={<EstadoCarroceria />} />
        <Route path="/firmas" element={<Firmas />} />

      </Routes>
    </View>
  );
};

export default Main;