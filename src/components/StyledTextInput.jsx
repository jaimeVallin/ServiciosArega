import React from "react";
import { StyleSheet, TextInput } from "react-native";

const styles = StyleSheet.create({
  textInput: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#999",
    paddingHorizontal: 10, // Cambiado a un valor más pequeño
    paddingVertical: 10,
    marginBottom: 10,
    marginTop: 10,
    width: '90%', // Cambiado a un ancho relativo
    textAlign: 'center',
  },
  error: {
    borderColor: "red",
  },
});

const StyledTextInput = ({ style = {}, error, ...props }) => {
  const inputStyle = [
    styles.textInput,
    style,
    error && styles.error
  ];

  return <TextInput style={inputStyle} {...props} />;
};

export default StyledTextInput;
