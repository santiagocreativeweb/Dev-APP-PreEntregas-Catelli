import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Header from '../Components/header/Header'
import ItemListCategory from '../Screens/ItemListCategory'
import ItemDetail from '../Screens/ItemDetail'
import ProductsScreen from '../Screens/ProductsScreen'


const Stack = createNativeStackNavigator()

const ShopStack = () => {
    return (
            <Stack.Navigator
                initialRouteName="ProductScreen"
                screenOptions={({ route, navigation }) => ({
                    animation: "fade",
                    header: () => {
                        return <Header route={route} navigation={navigation} />;
                    },
                })}
            >

            <Stack.Screen name="ProductScreen" component={ProductsScreen} />
            <Stack.Screen name="ItemListCategory" component={ItemListCategory} />
            <Stack.Screen name="Detail" component={ItemDetail} />
        </Stack.Navigator>
    );
};

export default ShopStack;