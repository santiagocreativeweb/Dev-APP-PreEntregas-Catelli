import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Header from '../Components/header/Header'
import SignupScreen from "../Screens/SignupScreen";
import LoginScreen from "../Screens/LoginScreen";

const Stack = createNativeStackNavigator()

const AuthStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="Ingresarse"
            screenOptions={({ route, navigation }) => ({
                header: () => {
                    return <Header route={route} navigation={navigation} />;
                },
            })}
        >
            <Stack.Screen name="Registrase" component={SignupScreen} />
            <Stack.Screen name="Ingresarse" component={LoginScreen} />
        </Stack.Navigator>
    );
};

export default AuthStack;
