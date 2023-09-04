import { Image, Pressable, StyleSheet, Text, useWindowDimensions } from "react-native";
import React from "react";
import Card from "./Card";

const ProductItem = ({ 
    item,
    navigation
}) => {
    const { height, width } = useWindowDimensions();

    const onSelect = (id) => {
        navigation.navigate('Detail', {productId: item.id, title: item.title})
    }

    return (
        <Pressable onPress={() => onSelect(item.id)}>
            <Card additionalStyle={styles.additionalStylesCard}>
                <Text
                    style={
                        width > 350 ? styles.textCategory : 
                        styles.textCategorySm
                    }
                >
                    {item.title}
                </Text>
                <Image
                    resizeMode="cover"
                    style={styles.image}
                    source={{ uri: item.images[0] }}
                />
            </Card>
        </Pressable>
    );
};

export default ProductItem;

const styles = StyleSheet.create({
    image: {
        height: 120,
        width: 100,
        borderRadius: 8,
    },
    additionalStylesCard: {
        flexDirection: 'row',
        height: 120,
        alignItems: 'center', 
    },
    textCategory: {
        width: "50%",
        fontSize: 19,
        color: 'white'
    },
    textCategorySm: {
        width: "50%",
        fontSize: 15,
        color: 'white'
    },
});
