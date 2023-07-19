import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Card from './Card'

const ProductItem = ({ item }) => {
  return (
    <Card additionalStyle={styles.additionalStylesCard}>
      <View style={styles.contentContainer}>
        <Text style={styles.text}>{item.title}</Text>
      </View>
      <Image
        resizeMode='cover'
        style={styles.image}
        source={{ uri: item.images[0] }}
      />
    </Card>
  )
}

export default ProductItem

const styles = StyleSheet.create({
  image: {
    height: 120,
    width: 100,
    borderRadius: 8,
  },
  additionalStylesCard: {
    flexDirection: 'row',
    height: 120,
    alignItems: 'center', // Centrar verticalmente
  },
  contentContainer: {
    flex: 1,
  },
  text: {
    fontSize: 20,
  },
})
