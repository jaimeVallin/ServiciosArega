import React from "react";
import { Text, View, TextInput, StyleSheet, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const ClientFormFields = ({ values, handleChange, handleBlur }) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: "#CDCDCD",
      flex: 1,
      alignItems: "center",
      paddingHorizontal: 20,
      paddingVertical: 40,
      fontFamily: "Roboto",

    },
    icon: {
      position: "absolute",
      top: 12,
      left: 5,
      zIndex: 1,
      paddingRight: 10,
    },
    formContainer: {
      width: "100%",
      marginBottom: 10,
      marginTop: -15,
      borderBlockColor: "#000",
      backgroundColor: "#fff",
      borderRadius: 10,
      fontFamily: "Roboto",
      BoxShadowColor: "#000",
      BoxShadowOffset: {
        width: 0,
        height: 5,
      },
      BoxShadowOpacity: 0.34,
      BoxShadowRadius: 6.27,
      elevation: 10,
    },
    input: {
      borderWidth: 1,
      borderColor: "#ccc",
      borderRadius: 5,
      paddingVertical: 10,
      width: "82%",
      alignSelf: "center",
      paddingHorizontal: 10,
      marginBottom: 10,
      textAlign: "center",
      fontFamily: "Roboto",
      marginHorizontal: 20,
    },
    inputContainer: {
      marginBottom: 20,
      position: "relative",
      alignContent: "space-between",
    },
    title: {
      marginBottom: 5,
      fontWeight: "bold",
      textAlign: "center",
      fontSize: 25,
      fontFamily: "Roboto",
    },
    label: {
      marginBottom: 5,
      fontWeight: "bold",
      textAlign: "center",
      fontSize: 15,
      fontFamily: "Roboto",
    },
    button: {
      backgroundColor: "#F3C016",
      padding: 10,
      alignItems: "center",
      borderRadius: 5,
      marginTop: 20,
      BoxShadowColor: "#000",
      BoxShadowOffset: {
        width: 0,
        height: 12,
      },
      BoxShadowOpacity: 0.58,
      BoxShadowRadius: 16.0,
      elevation: 24,
    },
    buttonText: {
      color: "black",
      fontWeight: "bold",
      fontSize: 20,
      fontFamily: "Roboto",
    },
  });

  const getFormInput = (name, icon, label, keyboardType = "default") => (
    <View style={styles.inputContainer} key={name}>
      <Icon name={icon} size={20} style={styles.icon} />
      <TextInput
        style={styles.input}
        onChangeText={handleChange(name)}
        onBlur={handleBlur(name)}
        value={values[name]}
        placeholder={label}
        
      />
    </View>
  );

  return (
    <ScrollView nestedScrollEnabled={true} style={styles.formContainer}>
      <Text style={styles.title}>Orden de servicio</Text>
      {getFormInput("orderNumber", "hashtag", "No. de orden")}

      {getFormInput("date", "calendar", "Fecha", )}

      {getFormInput("arrivalTime", "mail-forward", "Hora de llegada", )}

      {getFormInput("departureTime", "reply", "Hora de Salida", )}

      <Text style={styles.title}>Datos del Cliente</Text>

      {getFormInput("company", "building", "Empresa",  )}

      {getFormInput("name", "user", "Nombre", )}

      {getFormInput("address", "map-marker", "Dirección", )}

      {getFormInput("phone", "phone", "Teléfono",)}

      {getFormInput("contact", "user", "Contacto", )}

      {getFormInput("position", "vcard", "Puesto", )}

      {getFormInput("email", "envelope", "Email", "email")}

      <Text style={styles.title}>Datos del Vehículo</Text>

      {getFormInput("numEco", "tags", "No. Económico",)}

      {getFormInput("plate", "table", "Placas",)}

      {getFormInput("operator", "male", "Operador",)}

      {getFormInput("carModel", "car", "Modelo",)}

      {getFormInput("odometer", "dashboard", "Odómetro",)}

      <Text style={styles.title}>Datos del GPS</Text>

      {getFormInput("model", "map", "Modelo de GPS",)}

      {getFormInput("imei", "barcode", "Imei",)}

      {getFormInput("simNumber", "phone", "No. Sim",)}
    </ScrollView>
  );
};

export default ClientFormFields;
