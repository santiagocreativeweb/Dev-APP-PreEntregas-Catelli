import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { colors } from "../Global/Colors";
import { Entypo } from "@expo/vector-icons";


const CartItem = ({ cartItem }) => {
  return (
    <View style={styles.card}>
      <View style={styles.itemContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{cartItem.title} x{cartItem.quantity}</Text>
          <Text style={styles.text2}>Marca: {cartItem.brand}</Text>
          <Text style={styles.text2}>Precio: ${cartItem.price}</Text>
        </View>
        <Image
          resizeMode="cover"
          style={styles.image}
          source={{ uri: cartItem.images[0] }}
        />
      </View>
      <TouchableOpacity onPress={() => {}} style={styles.trash}>
        <Entypo name="trash" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 100,
    backgroundColor: colors.header,
    padding: 10,
    margin: 10,
    borderWidth: 2,
    borderRadius: 10,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  textContainer: {
    width: "70%",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  text: {
    fontFamily: "Poppins-Medium",
    fontSize: 19,
    color: colors.white,
  },
  text2: {
    fontFamily: "Poppins-Medium",
    fontSize: 14,
    color: colors.white,
  },
  trash: {
    justifyContent: "center", 
  },
  image: {
    height: 64,
    width: 64,
    borderRadius: 8,
  },
});
