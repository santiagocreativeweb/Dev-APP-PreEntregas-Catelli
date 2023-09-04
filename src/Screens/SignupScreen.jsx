import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import { colors } from "../Global/Colors";
import { useSignUpMutation } from "../Services/authServices";
import { setUser } from "../Features/User/userSlice";
import { isAtLeastSixCharacters, isValidEmail } from "../Validations/auth";
import SubmitButton from "../Components/buttons/SubmitButton";
import InputForm from "../Components/inputs/input-login/InputForm";
import Toast from 'react-native-toast-message';


const SignupScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [errorMail, setErrorMail] = useState("");
    const [password, setPassword] = useState("");
    const [errorPassword, setErrorPassword] = useState("")
    const [confirmPassword, setconfirmPassword] = useState("");
    const [errorConfirmPassword, setErrorConfirmPassword] = useState("");

    const [triggerSignUp, result] = useSignUpMutation()
    const dispatch = useDispatch()

    useEffect(()=> {
        if (result.isSuccess) {
            dispatch(
                setUser({
                    email: result.data.email,
                    idToken: result.data.idToken,
                    localId: result.data.localId,
                    profileImage: "",
                })
            )
        }
    }, [result])

    const onSubmit = () => {
        try {
            //Logica con validaciones
            const isValidVariableEmail = isValidEmail(email)
            const isCorrectPassword = isAtLeastSixCharacters(password)
            const isRepeatedPasswordCorrect = password === confirmPassword

            if (isValidVariableEmail && isCorrectPassword && isRepeatedPasswordCorrect) {
                const request = {
                    email,
                    password,
                    returnSecureToken: true
                }
                triggerSignUp(request)
            }

            if (!isValidVariableEmail) setErrorEmail ('El email no es correcto')
            else setErrorMail('')
            if (!isCorrectPassword) setErrorPassword ('La contraseña debe tener mas de 6 caracteres')
            else setErrorPassword('')
            if (!isRepeatedPasswordCorrect) setErrorConfirmPassword ('Las contraseñas no coiciden')
            else setErrorConfirmPassword('')

        } catch (err) {
            Toast.show({
                type: 'error',
                text1: `Ups..`,
                text2: 'Hubo un error, intente mas tarde',
                topOffset: 100,
            });
        }
    };

    return (
    <View style={styles.main}>
                <View style={styles.container}>
                    <Text style={styles.title}>Registro</Text>
                    <InputForm 
                        label={"Email"} 
                        onChange={setEmail} 
                        error={errorMail} />
                    <InputForm
                        label={"Contraseña"}
                        onChange={setPassword}
                        error={errorPassword}
                        isSecure={true}
                    />
                    <InputForm
                        label={"Confirmar Contraseña"}
                        onChange={setconfirmPassword}
                        error={errorConfirmPassword}
                        isSecure={true}
                    />
                    <SubmitButton onPress={onSubmit} title="Confirmar" />
                    <Text style={styles.sub}>¿Ya tienes una cuenta?</Text>
                    <Pressable onPress={() => navigation.navigate("Ingresarse")}>
                        <Text style={styles.subLink}>Loguearse</Text>
                    </Pressable>
                </View>
            </View>
    );
};

export default SignupScreen;

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
    input: {
        color: "black"
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
