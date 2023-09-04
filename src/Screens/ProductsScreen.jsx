import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { useGetCategoriesQuery } from '../Services/shopServices'
import CategoryItem from '../Components/items/CategoryItem'

const ProductScreen = ({
  navigation
}) => {
  const {data: categories} = useGetCategoriesQuery()
  
  return (
    <View style={styles.padre}>
      <View style={styles.container}>
          <FlatList
              data = {categories}
              keyExtractor={category => category}
              renderItem={({item}) => <CategoryItem item={item} navigation = {navigation}/>}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.wrapper}
              horizontal={false}
          />
      </View>
    </View>
  )
}

export default ProductScreen

const styles = StyleSheet.create({
    wrapper: {
      gap: 5,
    },
    container: {
        display: "flex",
        alignItems: 'center',
      },
    padre: {
      width: 400,
      height: 600
    }
})