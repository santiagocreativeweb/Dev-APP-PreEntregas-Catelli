import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Image, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useRoute } from '@react-navigation/native'; 
import { Feather } from '@expo/vector-icons';
import { useGetProfileImageQuery } from "../Services/shopServices";
import { signOut } from "../Features/User/userSlice";
import { deleteSession } from "../SQLite/index";
import { colors } from "../Global/Colors";
import Toast from 'react-native-toast-message';


const MyProfile = ({navigation}) => {
    // usuario
    const route = useRoute(); 
    const newUsername = route.params?.newUsername;
    const { localId, profileImage } = useSelector(state => state.userReducer.value);
    const nombreUsuario = async () => {
        navigation.navigate('Nombre de Usuario')
    };

    // camara
    const {data: image} = useGetProfileImageQuery(localId)
    const cameraImage = image?.image
    const launchCamera = async () => {
        navigation.navigate('Seleccionar Imagen')
    };

    // cerrar session
    const dispatch = useDispatch();

    const onSignout = async () => {
        try {
            const response = await deleteSession(localId)
            dispatch(signOut())
        } catch (error) {
            Toast.show({
                type: 'error',
                text1: `Ups..`,
                text2: 'Hubo un error, intente mas tarde',
                topOffset: 100,
            });
        }
    }

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
            <Text style={styles.nombre}>{newUsername || "Registra tu usuario!"}</Text>
            <View>
            <TouchableOpacity style={styles.button} onPress={nombreUsuario}>
                <Text style={styles.buttonText}>Nombre de usuario</Text>
            </TouchableOpacity> 
            <TouchableOpacity style={styles.button} onPress={launchCamera}>
                <Text style={styles.buttonText}>Imagen de perfil</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonCerrarSession} onPress={onSignout}>
                <Feather name="user-x" size={24} color="white" />
                <Text style={styles.buttonTextCerrarSession}>Cerrar sesion</Text>
            </TouchableOpacity>
                <Text style={styles.footer}>Created by Santiago Catelli</Text>
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
        backgroundColor: colors.primary,
        margin: 10,
    },
    buttonText: {
        color: 'white', 
        fontSize: 16,
    },  
    nombre: {
        fontSize: 24,
    },
    buttonCerrarSession: {
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: "center",
        padding: 15,
        borderRadius: 5,
        backgroundColor: colors.primary,
        textAlign: "center",
        marginTop: 195,
    },
    buttonTextCerrarSession: {
        color: colors.white,
        textAlign: "center",
        fontSize: 16,
        marginLeft: 10, 
    }, 
    footer: {
        textAlign: "center",
        marginRight: 15
    }
});
