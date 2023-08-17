import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../Global/Colors";
import { AntDesign } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../Features/User/userSlice";
import { deleteSession } from "../SQLite";

const Header = ({ route, navigation }) => {
    let title
    if (route.name === 'Home') title = 'PUNTO DIGITAL'
    else if (route.name === 'ItemListCategory') title = route.params.category
    else if (route.name === 'Ingresarse') title = "Ingresarse"
    else if (route.name === 'Registrase') title = "Registrase"
    else if (route.name === 'ItemDetail') title = route.params.title
    else if (route.name === 'CartScreen') title = "Tu Carrito"
    else if (route.name === 'OrderScreen') title = "Ordenes de Compra";
    else if (route.name === 'Mi Perfil') title = "Mi Perfil"
    else if (route.name === 'Seleccionar Imagen') title = "Seleccionar Imagen"
    else if (route.name === 'Detail') title = route.params.title
    else title = route.name

    const dispatch = useDispatch();
    const { email, localId } = useSelector((state) => state.userReducer.value);

    const onSignout = async () => {
        try {
            console.log("Deleting session...");
            const response = await deleteSession(localId)
            console.log("Session deleted: ")
            console.log(response)
            dispatch(signOut())
        } catch (error) {
            console.log('Error while sign out:')
            console.log(error.message);
        }
    }

    return (
        <View style={styles.containerHeader}>
          <Text style={styles.text}>{title}</Text>
            <View style={styles.iconsHeaderContainer}>
                <View style={styles.iconHeader}>
                    {
                      route.name !== 'Registrase' && route.name !== 'Ingresarse' && route.name !== 'Home' && route.name !== 'Mi Perfil' && route.name !== 'CartScreen' && route.name !== 'OrderScreen' ?
                      <Pressable 
                          style={styles.pressable}
                          onPress={() => navigation.goBack()}>
                          <AntDesign style={styles.back} name="back" size={24} color="white" />
                      </Pressable> : null
                    }
                    
                </View>
                <View style={styles.iconHeader}>
                      { route.name !== 'Registrase' && route.name !== 'Ingresarse' && route.name !== 'Home' && route.name !== 'ItemDetail' && route.name !== 'Seleccionar Imagen' && route.name !== 'Nombre de Usuario' && route.name !== 'ItemListCategory' && route.name !== 'CartScreen' && route.name !== 'OrderScreen' ?
                        <Pressable 
                          style={styles.pressable}
                          onPress={onSignout}>
                          <SimpleLineIcons style={styles.signOut} name="logout" size={24} color="white" />
                      </Pressable> : null
                      }
                </View>
            </View>
        </View>
      )
};

export default Header;

const styles = StyleSheet.create({
    containerHeader: {
        paddingVertical: 40,
        backgroundColor: colors.header,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconsHeaderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 60
    },
    iconHeader: {
        padding: 15,
        marginRight: 10
    },
    back: {
        position: "absolute",
        left: 170,
        bottom: 0
    },
    text: {
        fontSize: 25,
        fontFamily: 'Poppins-Medium',
        color: colors.white,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    pressable: {
        position: "absolute",
        right: 30,
    },
    signOut: {
        position: "relative",
        right: 150,
        top: "-115%",
    },
});
