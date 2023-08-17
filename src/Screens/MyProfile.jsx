import { Image, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import AddButton from "../Components/AddButton";
import * as ImagePicker from 'expo-image-picker'
import { useSelector } from "react-redux";
import { useGetProfileImageQuery } from "../Services/shopServices";
import { colors } from "../Global/Colors";

const MyProfile = ({navigation}) => {
    // const {profileImage, imageCamera} = useSelector(state => state.authReducer.value);

    const {localId, profileImage} = useSelector(state => state.userReducer.value)

    const {data: image} = useGetProfileImageQuery(localId)

    console.log(image);

    const cameraImage = image?.image

    const launchCamera = async () => {
        navigation.navigate('Seleccionar Imagen')
    };

    const nombreUsuario = async () => {
        navigation.navigate('Nombre de Usuario')
    };


    console.log(profileImage);

    return (
        <View style={styles.container}>
            {profileImage || cameraImage  ? (
                <Image
                    source={{uri: profileImage || cameraImage}}
                    style={styles.image}
                    resizeMode="cover"
                />
            ) : (
                <Image
                    source={require("../Assets/Images/defaultProfile.png")}
                    style={styles.image}
                    resizeMode="cover"
                />
            )}
            <Text style={styles.nombre} >Santiago Catelli</Text>
            <View>
{/*             <TouchableOpacity style={styles.button} onPress={nombreUsuario}>
                <Text style={styles.buttonText}>Agregar Nombre de usuario</Text>
            </TouchableOpacity>  PROXIMA MENTE EN LA ENTREGA FINAL */} 
            <TouchableOpacity style={styles.button} onPress={launchCamera}>
                <Text style={styles.buttonText}>Agregar Imagen de perfil</Text>
            </TouchableOpacity>
        </View>
        </View>
    );
};

export default MyProfile;

const styles = StyleSheet.create({
    container: {
        padding: 10,
        gap: 15,
        alignItems: "center",
        justifyContent: "flex-start",
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    button: {
        padding: 15,
        borderRadius: 5,
        backgroundColor: colors.header,
        margin: 10,
    },
    buttonText: {
        color: 'white', 
        fontSize: 16,
    },  
    nombre: {
        fontSize: 24,
    }
});
