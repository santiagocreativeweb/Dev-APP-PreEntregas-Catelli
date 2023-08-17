import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "../Components/Header";
import MyProfile from "../Screens/MyProfile";
import ImageSelector from "../Screens/ImageSelector";
import User  from "../Screens/UserScreen";

const Stack = createNativeStackNavigator();

const MyProfileStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="Mi Perfil"
            screenOptions={({ route, navigation }) => ({
                header: () => {
                    return <Header route={route} navigation={navigation} />;
                },
            })}
        >
            <Stack.Screen name="Mi Perfil" component={MyProfile} />
            <Stack.Screen name="Nombre de Usuario" component={User} />
            <Stack.Screen name="Seleccionar Imagen" component={ImageSelector} />
        </Stack.Navigator>
    );
};

export default MyProfileStack;