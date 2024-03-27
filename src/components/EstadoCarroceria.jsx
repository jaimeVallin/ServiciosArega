import React, { useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { Link } from "react-router-native";

const CheckboxWithComment = ({ title, imageSource, onCommentChange }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [comment, setComment] = useState('');

  const handleCheck = () => {
    setIsChecked(!isChecked);
  };

  const handleCommentChange = (text) => {
    setComment(text);
    onCommentChange(title, text);
  };

  return (
    <TouchableOpacity onPress={handleCheck} style={styles.checkboxContainer}>
      <CheckBox checked={isChecked} onPress={handleCheck} />
      <Text>{title}</Text>
      <ImageBackground source={imageSource} style={styles.image} resizeMode="contain" />
      {isChecked && (
        <TextInput
          placeholder="Comentarios"
          onChangeText={handleCommentChange}
          value={comment}
          style={styles.commentInput}
        />
      )}
    </TouchableOpacity>
  );
};

const EstadoCarroceria = () => {
  const [comments, setComments] = useState({});

  const handleCommentChange = (title, comment) => {
    setComments({ ...comments, [title]: comment });
  };

  const handleButtonPress = () => {
    if (Object.keys(comments).length === 0) {
      console.log("Estado de la carrocería óptimo");
    } else {
      console.log("Comentarios:");
      Object.entries(comments).forEach(([title, comment]) => {
        console.log(`${title}: ${comment}`);
      });
    }
  };

  return (
    <>
      
      <ScrollView contentContainerStyle={styles.scrollView}>
      <Text style={styles.title}>Datos del Vehículo</Text>
        <CheckboxWithComment title="Frente del vehículo" imageSource={require('../assets/carroceria1.png')} onCommentChange={handleCommentChange} />
        <CheckboxWithComment title="Parte superiror del vehículo" imageSource={require('../assets/carroceria2.png')} onCommentChange={handleCommentChange} />
        <CheckboxWithComment title="Lateral derecho del vehículo" imageSource={require('../assets/carroceria3.png')} onCommentChange={handleCommentChange} />
        <CheckboxWithComment title="Lateral izquierdo del vehículo" imageSource={require('../assets/carroceria5.png')} onCommentChange={handleCommentChange} />
        <CheckboxWithComment title="Parte trasera del vehículo" imageSource={require('../assets/carroceria4.png')} onCommentChange={handleCommentChange} />
      </ScrollView>
      <Link to="/firmas"  style={styles.button} onPress={handleButtonPress}>
        <Text style={styles.buttonText}>Siguiente</Text>
      </Link>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
  },
  title: {
    marginBottom: 5,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 25,
    fontFamily: 'Roboto',
  },
  checkboxContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginLeft: 25,
  },
  commentInput: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    marginTop: 5,
    width: 200,
    padding: 5,
  },
  button: {
    backgroundColor: "#F3C016",
    padding: 10,
    alignItems: "center",
    borderRadius: 5,
    marginVertical: 20,
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
});

export default EstadoCarroceria;
