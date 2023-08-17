import React, { useState } from 'react';
import { StyleSheet, Text, View } from "react-native";
import InputForm from "../Components/InputForm";
import SubmitButton from "../Components/SubmitButton";
import { colors } from "../Global/Colors";

const User = () => {
    const [user, setUser] = useState['']

    return (
        <View style={styles.main}>
            <View style={styles.container}>
                <Text style={styles.title}>Ingresar nombre de Usuario</Text>
                 <InputForm
                    label={"Nombre:"}
                />
                 <SubmitButton title="Confirmar" />
                {/*<SubmitButton onPress={onSubmit} title="Confirmar" />     */}       
            </View>
        </View>
    );
};

export default User;

const styles = StyleSheet.create({
    main: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#d6d6d6"
    },
    container: {
        width: "90%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.white,
        gap: 15,
        paddingVertical: 20,
        borderRadius: 10,
    },
    title: {
        fontSize: 22,
        fontFamily: "Poppins-Bold",
    }
});
