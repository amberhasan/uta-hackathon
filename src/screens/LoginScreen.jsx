import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Alert,
  TouchableOpacity,
} from "react-native";

function LoginScreen({ setView, setUsername, setPassword }) {
  const handleLogin = () => {
    // In a real application, you'd authenticate against a backend
    setView("home");
  };

  return (
    <>
      <Text style={styles.header}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setView("register")}>
        <Text style={styles.linkText}>Register</Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: "#F3F4F6",
  },
  header: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#333",
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 12,
    paddingHorizontal: 15,
    fontSize: 18,
    backgroundColor: "#fff",
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#667EEA",
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 25,
    alignItems: "center",
    marginBottom: 15,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
  },
  linkText: {
    textAlign: "center",
    fontSize: 16,
    color: "#555",
    textDecorationLine: "underline",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  iconButton: {
    width: "45%",
    padding: 15,
    backgroundColor: "#ddd",
    alignItems: "center",
    borderRadius: 12,
  },
});

export default LoginScreen;
