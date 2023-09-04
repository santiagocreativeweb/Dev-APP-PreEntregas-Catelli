import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Feather } from '@expo/vector-icons';
import { colors } from "../../Global/Colors";
import { useDispatch } from "react-redux";
import { removeCartItem } from "../../Features/Cart/cartSlice";

const CartItem = ({ cartItem }) => {

    const dispatch = useDispatch();

    return (
        <View style={styles.card} onPress={() => {}}>
            <View style={styles.containerImages}>
                <View style={styles.imagesCard}>
                    <Image
                        source={{ uri: cartItem.images[0] }}
                        style={styles.image}
                        resizeMode="contain"
                    />
                </View>
                <View style={styles.iconsCart}>
                    <Pressable onPress={() => dispatch(removeCartItem(cartItem.id))}>
                        <Feather name="x-circle" size={20} color={colors.primary} />
                    </Pressable>
                </View>
                <View style={styles.containerQuantity}>
                    <Text style={styles.textQuantity}>x {cartItem.quantity}</Text>
                </View>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>{cartItem.title}</Text>
                <Text style={styles.text2}>${cartItem.price}</Text>
            </View>
        </View>
    );
};

export default CartItem;

const styles = StyleSheet.create({
    card: {
        padding: 20,
        margin: 10,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    containerImages: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.gray,
        borderRadius: 15,
        padding: 10
    },
    textContainer: {
        flexDirection: "column",
        backgroundColor: colors.gray,
        padding: 15,
        borderRadius: 5
    },
    text: {
        fontFamily: "Poppins-Medium",
        fontSize: 16,
        color: colors.primary,
    },
    text2: {
        fontFamily: "Poppins-Bold",
        fontSize: 26,
        marginTop: 5,
        color: colors.primary
    },
    containerQuantity: {
        backgroundColor: colors.gray,
        position: 'absolute',
        borderRadius: 20,
        left: 180,
        top: 70,
        padding: 10,
        height: 40
        
    },
    textQuantity: {
        fontFamily: "Poppins-Bold",
        fontSize: 14,
        color: colors.primary
    },
    image: {
        width: 150,
        height: 150
    },
    iconsCart: {
        position: 'absolute',
        left: 5,
        top: 5,
        padding: 10,
        borderRadius: 20
    }
});