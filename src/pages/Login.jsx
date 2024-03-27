import React, { useState } from "react";
import { View, Text, ImageBackground, StyleSheet, Pressable, TextInput, Alert } from "react-native";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebase-config";
import { useNavigate } from "react-router-native";

function LoginScreen() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleCreateAccount = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Usuario creado");
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => { 
        console.log("Usuario logueado");
        const user = userCredential.user;
        console.log(user);
        navigate("/nuevaOrden"); // Navegar a la siguiente pantalla después de iniciar sesión
      })
      .catch((error) => {
        console.log(error);
        Alert.alert(error.message);
      });
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/logo.png")}
        style={styles.backgroundImage}
      >
        <View style={styles.form}>
          <TextInput
            placeholder="Email"
            onChangeText={(text) => setEmail(text)}
            value={email}
            style={styles.input}
          />
          <TextInput
            placeholder="Password"
            onChangeText={(text) => setPassword(text)}
            value={password}
            secureTextEntry
            style={styles.input}
          />
          <Pressable onPress={handleLogin} style={styles.button}>
            <Text style={styles.buttonText}>Iniciar Sesión</Text>
          </Pressable>
   
          <Pressable onPress={handleCreateAccount} style={styles.button}>
            <Text style={styles.buttonText}>Crear cuenta</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#f0f0f0",
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    resizeMode: "cover",
    justifyContent: "center",
  },
  form: {
    width: "100%",
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#fff",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
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
  },
});

export default LoginScreen;
