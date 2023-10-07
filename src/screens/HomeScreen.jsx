import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Alert,
  TouchableOpacity,
} from "react-native";

function HomeScreen({ username, setView }) {
  return (
    <>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setView("profile")}
      >
        <Text style={styles.buttonText}>Profile</Text>
      </TouchableOpacity>
      <View style={styles.row}>
        <TouchableOpacity style={styles.iconButton}>
          <Text>🏠</Text>
          <Text>House</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Text>🚗</Text>
          <Text>Car</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Upcoming...</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => setView("login")}>
        <Text style={styles.buttonText}>Logout</Text>
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

export default HomeScreen;
