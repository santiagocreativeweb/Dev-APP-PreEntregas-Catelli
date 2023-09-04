import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import { insertSession } from "../SQLite";
import { colors } from "../Global/Colors";
import { useSignInMutation } from "../Services/authServices";
import { isAtLeastSixCharacters, isValidEmail } from "../Validations/auth";
import { setUser } from "../Features/User/userSlice";
import InputForm from "../Components/inputs/input-login/InputForm";
import SubmitButton from "../Components/buttons/SubmitButton";
import Toast from 'react-native-toast-message';


const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [errorEmail, setErrorEmail] = useState('')
    const [errorPassword, setErrorPassword] = useState('')

    const dispatch = useDispatch()

    const [triggerSignIn, resultSignIn] = useSignInMutation();
    const onSubmit = () => {

        //Logica con validaciones
        const isValidVariableEmail = isValidEmail(email)
        const isCorrectPassword = isAtLeastSixCharacters(password)

        if (isValidVariableEmail && isCorrectPassword) {
            triggerSignIn({
                email,
                password,
                returnSecureToken: true,
            });
        }

        if (!isValidVariableEmail) setErrorEmail ('El email no es correcto')
        else setErrorEmail('')
        if (!isCorrectPassword) setErrorPassword ('La contraseña debe tener mas de 6 caracteres')
        else setErrorPassword('')
    };

    useEffect(()=> {
        (async ()=> {
            try {
                if(resultSignIn.isSuccess) {

                    //Insertamos sessiones a la database con SQLITE
                    const response = await insertSession({
                        idToken: resultSignIn.data.idToken,
                        localId: resultSignIn.data.localId,
                        email: resultSignIn.data.email,
                    })

                    dispatch(setUser({
                        email: resultSignIn.data.email,
                        idToken: resultSignIn.data.idToken,
                        localId: resultSignIn.data.localId,
                        profileImage: "",
                    }))
                }
            } catch (error) {
                Toast.show({
                    type: 'error',
                    text1: `Ups..`,
                    text2: 'Hubo un error, intente mas tarde',
                    topOffset: 100,
                });
            }
        })()
    }, [resultSignIn])

    return (
        <View style={styles.main}>
            <View style={styles.container}>
                <Text style={styles.title}>Iniciar Sesion</Text>
                <InputForm
                    label={"Email"}
                    onChange={(email) => setEmail(email)}
                    error={errorEmail}
                />
                <InputForm
                    label={"Contraseña"}
                    onChange={(password) => setPassword(password)}
                    error={errorPassword}
                    isSecure={true}
                />
                <SubmitButton onPress={onSubmit} title="Confirmar" />
                <Text style={styles.sub}>¿Aun no tienes una cuenta?</Text>
                <Pressable onPress={() => navigation.navigate("Registrase")}>
                    <Text style={styles.subLink}>Registrate</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default LoginScreen;

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
    },
    sub: {
        fontSize: 14,
        fontFamily: "Poppins-Medium", 
        color: "black",
    },
    subLink: {
        padding: 7, 
        borderColor: colors.red, 
        borderRadius: 25,
        borderStyle: "solid",
        borderWidth: 1,
        fontSize: 14,
        fontFamily: "Poppins-Medium",
        color: "red",
    },
});
