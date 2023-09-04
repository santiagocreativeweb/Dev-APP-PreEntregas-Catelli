import React from 'react';
import { StyleSheet, Text, View, Pressable, Image, ScrollView } from 'react-native';
import { colors } from '../Global/Colors';
import CarouselSliders from '../Components/carousel/carouselsliders';

const HomeScreen = ({ navigation }) => {

  return (
    <ScrollView horizontal style={styles.scrollView}>
      <View style={styles.viewContainer}>
        <Text style={styles.promo}>Envíos Gratis en compras con Mercado Envíos</Text>
        <CarouselSliders />
        <Text style={styles.productosDestacadosText}>Productos Destacados</Text>

        <View style={styles.productsContainer}>
          {/* PRODUCTO 1 // DESTACADO */}
          <Pressable
            onPress={() => navigation.navigate('Detail', { productId: 4, title: 'iPhone 14' })}
            style={styles.Popular}
          >
            <View>
              <Image
                source={{ uri: 'https://cdn.discordapp.com/attachments/730435854555807845/1130925864817791068/14.png' }}
                style={styles.image}
                resizeMode="contain"
              />
              <View style={styles.textContainer}>
                <Text style={styles.textPopular}>iPhone 14</Text>
                <Text style={styles.textPopularPrice}>$1099</Text>
              </View>
            </View>
          </Pressable>

          {/* PRODUCTO 2 // DESTACADO */}
          <Pressable
            onPress={() => navigation.navigate('Detail', { productId: 5, title: 'Macbook Air' })}
            style={styles.Popular}
          >
            <View>
              <Image
                source={{ uri: 'https://cdn.discordapp.com/attachments/730435854555807845/1131021088177016912/1637778873_sdgf256sd.png' }}
                style={styles.image}
                resizeMode="contain"
              />
              <View style={styles.textContainer}>
                <Text style={styles.textPopular}>Macbook Air</Text>
                <Text style={styles.textPopularPrice}>$999</Text>
              </View>
            </View>
          </Pressable>
          
        </View>
      </View>
    </ScrollView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    flexDirection: 'row',
  },
  viewContainer: {
    backgroundColor: colors.gray,
  },
  promo: {
    backgroundColor: colors.red,
    color: colors.white,
    textAlign: 'center',
    fontSize: 16,
    padding: 5,
  },
  productosDestacadosText: {
    marginTop: 15,
    marginLeft: 5,
    fontSize: 20,
    fontWeight: 'bold',
  },
  productsContainer: {
    flexDirection: 'row', 
  },
  Popular: {
    backgroundColor: colors.primary,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '40%',
    borderRadius: 15,
    height: 240,
    margin: 20
  },
  textContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  textPopular: {
    padding: 5,
    fontSize: 13,
    color: colors.white,
    fontFamily: 'Poppins-Medium',
  },
  textPopularPrice: {
    padding: 5,
    fontSize: 18,
    color: colors.white,
    fontFamily: 'Poppins-Bold',
  },
  image: {
    height: 150,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
