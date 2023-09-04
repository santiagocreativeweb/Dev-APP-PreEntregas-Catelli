import React, { useEffect } from "react";
import {
    Platform,
    SafeAreaView,
    StyleSheet,
    StatusBar,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack";
import { useDispatch, useSelector } from "react-redux";
import { getSession } from "../SQLite";
import { setUser } from "../Features/User/userSlice";
import TabNavigator from "./TabNavigator";
import Toast from 'react-native-toast-message';


const Navigator = () => {
    const { email } = useSelector((state) => state.userReducer.value);
    
    const dispatch = useDispatch()

    //Obtenemos sessiones guardadas
    useEffect(()=> {
        (async ()=> {
            try {
                const session = await getSession()
                if (session?.rows.length) {
                    const user = session.rows._array[0]
                    dispatch(setUser(user))
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
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <NavigationContainer>
                {email ? (
                    <TabNavigator />
                ) : (
                    <AuthStack />
                )}
            </NavigationContainer>
        </SafeAreaView>
    );
};

export default Navigator;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0, // comentar para hacer la apk y no tenes problemas con el estilo 
    }
});
