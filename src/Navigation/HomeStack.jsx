import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "../Components/header/Header";
import HomeScreen from "../Screens/HomeScreen";

const Stack = createNativeStackNavigator();

const HomeStack = () => {
    return (
            <Stack.Navigator
                initialRouteName="HomeScreen"
                screenOptions={({ route, navigation }) => ({
                    animation: "fade",
                    header: () => {
                        return <Header route={route} navigation={navigation} />;
                    },
                })}
            >
            <Stack.Screen name="Inicio" component={HomeScreen} />
        </Stack.Navigator>
    );
};

export default HomeStack;