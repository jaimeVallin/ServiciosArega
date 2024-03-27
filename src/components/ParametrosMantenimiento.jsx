import React, { useState } from "react";
import { StyleSheet, ScrollView, Text, View } from "react-native";
import { CheckBox } from "react-native-elements";
import { Link, useNavigate } from "react-router-native";

const ParametrosMantenimiento = () => {
  const [selectedValues, setSelectedValues] = useState({});

  const styles = StyleSheet.create({
    formContainer: {
      paddingHorizontal: 20,
      paddingVertical: 40,
      backgroundColor: "#fff",
    },
    title: {
      marginBottom: 15,
      fontWeight: "bold",
      fontSize: 25,
      textAlign: "center",
      fontFamily: "Roboto",
    },
    label: {
      fontFamily: "Roboto",
      marginVertical: 10,
      fontWeight: "bold",
      textAlign: "center",
      fontSize: 20,
    },
    button: {
      backgroundColor: "#F3C016",
      padding: 10,
      alignItems: "center",
      borderRadius: 5,
      marginVertical:15,
      width: 150,
      alignSelf: "center",
    },
    buttonText: {
      color: "black",
      fontWeight: "bold",
      alignContent: "center",
      textAlign: "center",
      fontSize: 20,
    },
    checkboxContainer: {
      marginVertical: 15,
      paddingHorizontal: 20,
      paddingVertical: 15,
      backgroundColor: "#fff",
      borderRadius: 5,
      borderWidth: 1,
      borderColor: "#ccc",
      marginBottom: 20,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.0,

        elevation: 24,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    checkbox: {
      marginVertical: 5,
      paddingVertical: 5,
      alignSelf: "center",
    },
  });

  const checkboxItems = [
    {
      title: "EVIDENCIA AL INICIAR LA INSTALACIÓN.",
      label: "Verificar encendido de la unidad",
      checkboxValues: [
        { label: "ENCIENDE", value: 1 },
        { label: "NO ENCIENDE", value: 2 },
      ],
    },
    {
      label: "Con la unidad encendida verificación de testigos del tablero",
      checkboxValues: [
        { label: "SIN TESTIGOS", value: 3 },
        { label: "SEÑALAR TESTIGOS", value: 4 },
      ],
    },
    {
      title: "PRUEBAS DE VOLTAJE",
      label: "Verificar voltaje en apagado",
      checkboxValues: [
        { label: "12.6V - 14.6V", value: 5 },
        { label: "FUERA DE LOS PARAMETROS", value: 6 },
      ],
    },
    {
      label: "Verificar voltaje en encendido",
      checkboxValues: [
        { label: "12.6V - 14.6V", value: 7 },
        { label: "FUERA DE LOS PARAMETROS", value: 8 },
      ],
    },
    {
      label: "Voltaje con todos los accesorios encendidos",
      checkboxValues: [
        { label: "13V - 15V", value: 9 },
        { label: "FUERA DE LOS PARAMETROS", value: 10 },
      ],
    },
    {
      label: "Prueba de resistencia de relevador",
      checkboxValues: [
        { label: "CORRECTO", value: 11 },
        { label: "INCORRECTO", value: 12 },
      ],
    },
    {
      label: "Prueba de continuidad de botón de pánico",
      checkboxValues: [
        { label: "CORRECTO", value: 13 },
        { label: "INCORRECTO", value: 14 },
      ],
    },
    {
      title: "PRUEBAS SIN GPS",
      label: "Retiro de GPS",
      checkboxValues: [
        { label: "REALIZADO", value: 15 },
        { label: "NO REALIZADO", value: 16 },
      ],
    },
    {
      label: "Pruebas de encendido sin GPS",
      checkboxValues: [
        { label: "REALIZADO", value: 17 },
        { label: "NO REALIZADO", value: 18 },
      ],
    },
    {
      title: "REINSTALACION CON MODIFICACIONES",
      label: "Retiro de cinta antigua",
      checkboxValues: [
        { label: "REALIZADO", value: 19 },
        { label: "NO REALIZADO", value: 20 },
      ],
    },
    {
      label: "Ponchado de conexiones",
      checkboxValues: [
        { label: "REALIZADO", value: 21 },
        { label: "NO REALIZADO", value: 22 },
      ],
    },
    {
      label: "Prueba de encendido de la unidad",
      checkboxValues: [
        { label: "ENCIENDE", value: 23 },
        { label: "NO ENCIENDE", value: 24 },
      ],
    },
    {
      label: "Prueba de volumen de buzzer",
      checkboxValues: [
        { label: "VOLUMEN A 80 DECIBELES", value: 25 },
        { label: "NO REALIZADO", value: 26 },
      ],
    },
    {
      label: "Prueba de llave dallas",
      checkboxValues: [
        { label: "ENCIENDE, REGISTRO CORRECTO", value: 27 },
        { label: "NO ENCIENDE", value: 28 },
      ],
    },
    {
      label: "Prueba de apago de motor (neutral)",
      checkboxValues: [
        { label: "SE APAGA LA UNIDAD", value: 29 },
        { label: "NO SE APAGA LA UNIDAD", value: 30 },
      ],
    },
    {
      label: "Prueba de botón de pánico",
      checkboxValues: [
        { label: "SE RECIBE EL CORREO DE BOTON DE PANICO", value: 31 },
        { label: "NO RECIBE EL CORREO DE BOTON DE PANICO", value: 32 },
      ],
    },
    {
      label: "Manguera corrugada colocada",
      checkboxValues: [
        { label: "CORRECTO", value: 33 },
        { label: "INCORRECTO", value: 34 },
      ],
    },
    {
      label: "El GPS es visible",
      checkboxValues: [
        { label: "OCULTO", value: 35 },
        { label: "ES ACCESIBLE", value: 36 },
      ],
    },
    {
      label: "Existen alteraciones estéticas",
      checkboxValues: [
        { label: "SIN ALTERACIÓN", value: 37 },
        { label: "CON ALTERACIÓN", value: 38 },
      ],
    },
    {
      title: "PRUEBAS DEL SUPERVISOR",
      label: "Prueba de encendido de la unidad",
      checkboxValues: [
        { label: "ENCIENDE", value: 39 },
        { label: "NO ENCIENDE", value: 40 },
      ],
    },
    {
      label: "Con la unidad encendida verificación de testigos del tablero",
      checkboxValues: [
        { label: "SE ENCIENDE ALGUN TESTIGO", value: 41 },
        { label: "NO ENCIENDE NINGÚN TESTIGO", value: 42 },
      ],
    },
    {
      label: "Entrega de unidad",
      checkboxValues: [
        { label: "REALIZADA", value: 43 },
        { label: "NO REALIZADA", value: 44 },
      ],
    },
    {
      title: "PRUEBAS POR EL DRIVER",
      label: "Prueba de llave dallas por driver",
      checkboxValues: [
        { label: "ENCIENDE", value: 45 },
        { label: "NO ENCIENDE", value: 46 },
      ],
    },
    {
      label: "Prueba de encendido de la unidad por driver",
      checkboxValues: [
        { label: "ENCIENDE", value: 47 },
        { label: "NO ENCIENDE", value: 48 },
      ],
    },
    {
      label: "Prueba de botón de pánico por driver",
      checkboxValues: [
        { label: "SE RECIBE EL CORREO DE BOTÓN DE PÁNICO", value: 49 },
        { label: "NO ENCIENDE", value: 50 },
      ],
    },
  ];

  const handleCheckboxPress = (containerId, value) => {
    setSelectedValues({ ...selectedValues, [containerId]: value });
    console.log(
      "Checkbox value:",
      value,
      "Label:",
      checkboxItems.find((item) =>
        item.checkboxValues.find((val) => val.value === value)
      ).label
    );
  };

  return (
    <>
      <ScrollView style={styles.formContainer}>
        <Text style={styles.title}>PARAMETROS DE MANTENIMIENTO</Text>

        {checkboxItems.map((item, index) => (
          <View style={styles.checkboxContainer} key={index}>
            {item.title ? (
              <>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.label}>{item.label}</Text>
              </>
            ) : (
              <Text style={styles.label}>{item.label}</Text>
            )}
            {item.checkboxValues.map((value, subIndex) => (
              <CheckBox
                key={subIndex}
                style={styles.checkbox}
                title={value.label}
                checked={selectedValues[item.label] === value.value}
                onPress={() => handleCheckboxPress(item.label, value.value)}
              />
            ))}
            <Text> </Text>
          </View>
        ))}
      </ScrollView>
      <Link to="/estadoCarro" style={styles.button}>
        <Text style={styles.buttonText}>Siguiente</Text>
      </Link>
    </>
  );
};

export default ParametrosMantenimiento;
