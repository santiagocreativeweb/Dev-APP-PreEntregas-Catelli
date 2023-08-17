import {
    Image,
    Pressable,
    StyleSheet,
    Text,
    View,
    useWindowDimensions,
    TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import allProducts from "../Data/products.json";
import { colors } from '../Global/Colors'

const ItemDetail = ({ 
    navigation,
    route
}) => {

    const {productId: idSelected} = route.params

    const [product, setProduct] = useState(null);
    const [orientation, setOrientation] = useState("portrait");
    const { width, height } = useWindowDimensions();

    useEffect(() => {
        if (width > height) setOrientation("landscape");
        else setOrientation("portrait");
    }, [width, height]);

    useEffect(() => {
        //Encontrar el producto por su id
        const productSelected = allProducts.find(
            (product) => product.id === idSelected
            );
        setProduct(productSelected);
    }, [idSelected]);

    return (
        <View>
          <Pressable
            style={styles.volver}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.buttonText}>Volver atras</Text>
          </Pressable>
          {product ? (
            <View
              style={
                orientation === "portrait"
                  ? styles.mainContainer
                  : styles.mainContainerLandscape
              }
            >
                    <Image
                        source={{ uri: product.images[0] }}
                        style={styles.image}
                        resizeMode="cover"
                    />
                    <View style={styles.textContainer}>
                        <Text style = {styles.text}>{product.title}</Text>
                       {/* <Text style = {styles.text}>{product.description}</Text> */}
                        <Text style = {styles.precio}>Precio total:  ${product.price}</Text>
                        
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Añadir al carrito</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            ) : null}
        </View>
    );
};

export default ItemDetail;

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
    },
    mainContainerLandscape: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: 10,
    },
    image: {
        width: 300,
        height: 250,
    },
    textContainer: {
        padding: 10,
        flexDirection: "column",
    },
    text: {
        marginTop: 10,
        fontSize: 20,
    },
    precio: {
        fontSize: 20,
        backgroundColor: colors.header,
        padding: 15,
        borderWidth: 2, 
        borderStyle: 'solid', 
        borderColor: colors.black,
        color: colors.white,
        marginTop: 15,
        marginBottom: 15
    },
    volver: {
        padding: 10,
        backgroundColor: colors.red,
        marginBottom: 10,
    },  
    button: {
        padding: 15,
        borderRadius: 5,
        backgroundColor: colors.header,
        margin: 10,
    },
    buttonText: {
        color: 'white', 
        fontSize: 16,
        textAlign: "center"
    },  
});
