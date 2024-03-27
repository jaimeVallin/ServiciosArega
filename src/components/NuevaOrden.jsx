import React, { useState, createContext } from "react";
import { StyleSheet, ScrollView, Pressable, Text } from "react-native";
import { useNavigate } from "react-router-native";
import { Link } from "react-router-native";
import ClientFormFields from "../data/ClientFormFields";

const FormContext = createContext();

const initialValues = {
  orderNumber: "",
  date: "",
  arrivalTime: "",
  departureTime: "",
  company: "",
  name: "",
  address: "",
  phone: "",
  contact: "",
  position: "",
  email: "",
  // Vehículo
  numEco: "",
  plate: "",
  operator: "",
  carModel: "",
  odometer: "",
  // GPS
  model: "",
  imei: "",
  simNumber: "",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  button: {
    backgroundColor: "#F3C016",
    padding: 10,
    alignItems: "center",
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 20,
  },
});

const ClientFormsWithStyles = () => {
  const [formValues, setFormValues] = useState(initialValues);

  const navigate = useNavigate();
  
  const handleChange = (name) => (text) => {
    setFormValues({ ...formValues, [name]: text });
  };

  const handleSubmit = () => {
    console.log("Form submitted with values:", formValues);
    // Aquí puedes hacer lo que necesites con los valores del formulario
    navigate("/paramMante"); // Navegar a la pantalla "paramMante"
  };

  const handleBlur = (name) => () => {
    // Puedes agregar aquí la lógica para validar el campo
  };

  return (
    <FormContext.Provider
      value={{ values: formValues, handleChange, handleBlur }}
    >
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >
        <ClientFormFields
          values={formValues}
          handleChange={handleChange}
          handleBlur={handleBlur}
          styles={styles}
        />

        <Pressable
          onPress={handleSubmit}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Siguiente</Text>
        </Pressable>
      </ScrollView>
    </FormContext.Provider>
  );
};

export default ClientFormsWithStyles;
