import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CartData from '../Data/cart.json'
import CartItem from '../Components/CartItem';
import { colors } from "../Global/Colors"
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const Cart = () => {
    const Swall = withReactContent(Swal)

    const total = CartData.reduce((acumulador, currentItem) => acumulador += currentItem.price * currentItem.quantity, 0)
    
    const confirm = () => {
        Swall.fire({
            title: 'Estas seguro?',
            text: "Esto no se puede revertir",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, confirmar!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swall.fire(
                'Pago Confirmado!',
                'Haz pagado ', {total},
                'success'
              )
            }
          })
    }

    return (
    <View style={styles.container}>
        <FlatList
            data={CartData}
            keyExtractor={cartItem => cartItem.id}
            renderItem={({item})=> {
                return (
                    <CartItem
                        cartItem={item}
                    />
                )
            }}
        />
        <View style={styles.totalContainer}>
            <Pressable>
                <Text onPress={confirm} style={styles.confirmarbutton}>
                    Confirmar
                </Text>
            </Pressable>
            <Text style={styles.confirmarbutton}>Precio Total: ${total}</Text>
        </View>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        flex: 1,
    },
    confirmarbutton: {
        color: colors.white,
        backgroundColor: colors.header,
        borderRadius: 5, 
        padding: 10,

    },
    totalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingBottom: 20,
    }
})