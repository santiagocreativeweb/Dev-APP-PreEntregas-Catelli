import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../Global/Colors";
import { AntDesign } from "@expo/vector-icons";

const Header = ({ route, navigation }) => {
    let title
    if (route.name === 'Home') title = 'PUNTO DIGITAL'
    else if (route.name === 'ItemListCategory') title = route.params.category
    else if (route.name === 'Detail') title = route.params.title
    else title = route.name
    return (
        <View style={styles.containerHeader}>
            <Text style={styles.text}>{title}</Text>
            {route.name !== "Home" ? (
                <Pressable
                    style={styles.pressable}
                    onPress={() => navigation.goBack()}
                >
                    <AntDesign name="back" size={24} color="white" />
                </Pressable>
            ) : null}
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    containerHeader: {
        paddingVertical: 40,
        backgroundColor: colors.header,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 25,
        fontFamily: 'Josefin',
        color: colors.white
    },
    pressable: {
        position: "absolute",
        right: 30,
        top: "140%",
    },
});
