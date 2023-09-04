import React from 'react'
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { colors } from '../Global/Colors'
import { removeCartItem } from '../Features/Cart/cartSlice'
import CartItem from '../Components/items/CartItem'
import Toast from 'react-native-toast-message';


const Cart = () => {
    const dispatch = useDispatch();
    const {items: CartData, total} = useSelector(state => state.cartReducer.value);

    onConfirm = () => {
        CartData.forEach(item => {
            dispatch(removeCartItem(item.id));
        });
    
        if (total) {
            Toast.show({
                type: 'success',
                text1: `Compra realizada exitosamente`,
                text2: 'Muchas gracias por confiar con nosotros',
                topOffset: 100,
            });
        } else {
            Toast.show({
                type: 'success',
                text1: `No hay nada para comprar`,
                text2: 'Agregue productos!',
                topOffset: 100,
            });
        }
    }
    

  return (
    <View style={styles.cartContainer}>
        <FlatList 
            data={CartData}
            keyExtractor={cardItem => cardItem.id}
            renderItem={({item}) => (
                 (
                    <CartItem 
                        cartItem={item}
                    />
                )
            )}
        
        />
        <View style={styles.totalContainer}>
            <View>
                <Pressable
                    style={styles.totalButton}
                    onPress={onConfirm}
                >
                    <Text style={styles.textButton}>
                        Comprar
                    </Text>
                </Pressable>
            </View>
            <View>
                <Text style={styles.titleButtonTotal}>
                        Total
                </Text>
                <Text style={styles.textButtonTotal}>
                        $ { 0 || total}
                </Text>
            </View>
        </View>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
    cartContainer: {
        justifyContent: 'space-between',
        flex: 1,
        marginBottom: 20
    },
    totalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 20
    },
    totalButton: {
        backgroundColor: colors.primary,
        borderRadius: 10,
        width: 160,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textButton: {
        color: colors.white,
        fontSize: 14,
        fontFamily: 'Poppins-Bold'
    },
    titleButtonTotal: {
        color: colors.primary,
        fontFamily: 'Poppins-Medium',
        fontSize: 14
    },
    textButtonTotal: {
        color: colors.primary,
        fontFamily: 'Poppins-Bold',
        fontSize: 26
    }
})