import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../../Global/Colors";
import { AntDesign } from "@expo/vector-icons";

const Header = ({ route, navigation }) => {
    let title
    if (route.name === 'Home') title = 'Inicio'
    else if (route.name === 'ItemListCategory') title = route.params.category
    else if (route.name === 'Ingresarse') title = "Ingresarse"
    else if (route.name === 'Registrase') title = "Registrase"
    else if (route.name === 'Detail') title = route.params.title
    else if (route.name === 'CartScreen') title = "Tu Carrito"
    else if (route.name === 'ProductScreen') title = "Productos de tienda";
    else if (route.name === 'Mi Perfil') title = "Mi Perfil"
    else if (route.name === 'Seleccionar Imagen') title = "Seleccionar Imagen"
    else title = route.name

    return (
        <View style={styles.containerHeader}>
          <View style={styles.iconHeader}>
            {route.name !== 'Registrase' && route.name !== 'Ingresarse' && route.name !== 'Inicio' && route.name !== 'ProductScreen' && route.name !== 'Mi Perfil' && route.name !== 'CartScreen' && route.name !== 'OrderScreen' ? (
              <Pressable
                style={styles.pressable}
                onPress={() => navigation.goBack()}
              >
                <AntDesign name="arrowleft" size={24} color={colors.primary} />
              </Pressable>
            ) : null}
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{title}</Text>
          </View>
        </View>
      );
    };
    
    export default Header;
    
    const styles = StyleSheet.create({
      containerHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 15,
        backgroundColor: colors.white,
      },
      title: {
        fontSize: 18,
        color: colors.black,
        fontFamily: 'Poppins-Bold',
      },
      iconHeader: {
        padding: 15,
        marginRight: 10,
      },
      pressable: {
        position: 'absolute',
        left: 0, 
      },
    });