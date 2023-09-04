import React from "react";
import { StyleSheet, View } from "react-native";
import {
    Fontisto,
    Ionicons,
    FontAwesome5,
} from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { colors } from "../Global/Colors";
import ShopStack from "./ShopStack";
import CartStack from "./CartStack";
import MyProfileStack from "./MyProfileStack";
import HomeStack from "./HomeStack";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
        screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: styles.tabBar,
        }}
    >
        <Tab.Screen
            name="Home"
            component={HomeStack}
            options={{
                tabBarIcon: ({ focused }) => {
                    return (
                        <View>
                            <Fontisto name="home" size={24} color={ focused ? "white" : "gray" } />
                        </View>
                    );
                },
            }}
        />
        <Tab.Screen
            name="Shop"
            component={ShopStack}
            options={{
                tabBarIcon: ({ focused }) => {
                    return (
                        <View>
                            <FontAwesome5 name="tag" size={24} color={  focused ? "white" : "gray" } />
                        </View>
                    );
                },
            }}
        />
        <Tab.Screen
            name="Cart"
            component={CartStack}
            options={{
                tabBarIcon: ({ focused }) => {
                    return (
                        <View>
                            <FontAwesome5 name="shopping-cart"  size={24}  color={ focused ? "white" : "gray" } />
                        </View>
                    );
                },
            }}
        />
        <Tab.Screen
            name="MyProfile"
            component={MyProfileStack}
            options={{
                tabBarIcon: ({ focused }) => {
                    return (
                        <View style={styles.item}>
                            <Ionicons name="person-circle-outline"  size={30} color={ focused ? "white" : "gray"  } />
                        </View>
                    );
                },
            }}
        />
    </Tab.Navigator>
  )
}

export default TabNavigator

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: colors.primary,
        shadowColor: "black",
        height: 60,
    },
});