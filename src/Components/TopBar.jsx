import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
  } from "react-native";
  import React from "react";
  import Icon from "react-native-vector-icons/FontAwesome";
  
  const TopBar = ({ input, setInput, onAddTask, clean }) => {
    return (
      <View style={styles.view1}>
        <TextInput
          placeholder="Asignar Tarea"
          style={styles.input}
          value={input}
          onChangeText={setInput}
        />
        <TouchableOpacity style={styles.button} onPress={onAddTask}>
          <Icon name="plus" size={16} color="white" />
          <Text style={styles.buttonText}>Agregar</Text>
        </TouchableOpacity>
  
        <TouchableOpacity style={styles.tacho} onPress={clean}>
          <Icon name="trash" size={16} color="gray" />
        </TouchableOpacity>
      </View>
    );
  };
  
  export default TopBar;
  
  const styles = StyleSheet.create({
    view1: {
      height: "25%",
      flexDirection: "row",
      paddingHorizontal: 10,
      paddingBottom: 10,
      justifyContent: "center",
      alignItems: "flex-end",
      backgroundColor: "white",
      width: "100%",
    },
    input: {
      flex: 1,
      height: 35,
      borderBottomColor: "rgb(74, 85, 162)",
      borderBottomWidth: 3,
      color: "gray",
      marginRight: 5,
      fontSize: 20,
    },
    button: {
      height: 35,
      width: 90,
      borderRadius: 5,
      backgroundColor: "rgb(74, 85, 162)",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
  
    tacho: {
      height: 35,
      width: 35,
      marginLeft: 10,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
    buttonText: {
      fontSize: 16,
      textAlign: "center",
      marginLeft: 5,
      color: "white",
    },
  });
  