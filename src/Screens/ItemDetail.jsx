import React, { useEffect, useState } from "react";
import { Image, Pressable, ScrollView, StyleSheet, Text, View, useWindowDimensions } from "react-native";
import { useDispatch } from "react-redux";
import { colors } from "../Global/Colors";
import { addCartItem } from "../Features/Cart/cartSlice";
import allProducts from "../Data/products.json";
import Toast from 'react-native-toast-message';


const ItemDetail = ({ route }) => {

    const {productId: idSelected} = route.params;

    const dispatch = useDispatch()
    
    const [product, setProduct] = useState(null);
    const [orientation, setOrientation] = useState("portrait");
    const {width, height} = useWindowDimensions();
    
    useEffect(()=> {
      if (width > height) setOrientation("landscape")
      else setOrientation("portrait")
  }, [width, height])
  
  useEffect(() => {
    const productSelected = allProducts.find(
      (product) => product.id === idSelected
      );
      setProduct(productSelected);
    }, [idSelected]);
    
    const onAddCart = () => {
      dispatch(addCartItem({
        ...product, 
        quantity: 1
      }))
      // react-native-toast
      Toast.show({
        type: 'success',
        text1: `${product.title}`,
        text2: 'Ha sido agregado al carrito',
        topOffset: 100,
        visibilityTime: 3000
      });
    }

    return (
      <ScrollView style = {styles.containerDetail}>
            {product ? (
            <>
              <View style={orientation === "portrait" ? styles.mainContainer : styles.mainContainerLandscape} >
                    
                  
                    <Image
                        source={{ uri: product.images[0] }}
                        style={styles.image}
                        resizeMode="contain"
                    />

                    <View style = {styles.textContainer}>
                      <Text style = {styles.productTitle}>{product.title}</Text>
                      <Text style = {styles.productText} >{product.description}</Text>
                    </View>
                </View>
            
            

                <Pressable 
                    style={styles.buttonAddProductContainer}
                    onPress={onAddCart}
                  >
                    
                    <Text style= {styles.productPrice}>${product.price}</Text>
                    <View style={styles.buttonAddProduct}>
                        <Text style={styles.textButton}>
                          Añadir al carrito
                        </Text>
                     </View>
              </Pressable>
              </>
              ) : null}
        
      </ScrollView>
    );
};

export default ItemDetail;

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'flex-end'
  },
  mainContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    margin: 30,
    padding: 15,
    backgroundColor: colors.primary
  },
  mainContainerLandscape: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: 15
  },
  textContainer: {
    paddingHorizontal: 30
  },
  productTitle: {
    fontSize: 30,
    fontFamily: 'Poppins-Bold',
    color: colors.white,
    marginBottom: 15
  },
  productText: {
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
    color: colors.white,
    letterSpacing: 1,
    marginBottom: 15
  },

  buttonAddProductContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20
  },
  productPrice: {
    width: 150,
    fontSize: 25,
    marginLeft: 20,
    fontFamily: 'Poppins-Bold',
    color: colors.primary
  },
  buttonAddProduct: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: 180,
    padding: 20,
    borderRadius: 10,
    textAlign: 'center',
    backgroundColor: colors.primary,
    color: colors.white,
  },
  textButton: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    marginRight: 10,
    width: 140,
    textAlign: "center",
    color: colors.white
  }
})