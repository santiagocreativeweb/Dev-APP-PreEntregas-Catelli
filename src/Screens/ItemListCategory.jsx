import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { useSelector } from 'react-redux'
import { useGetProductsByCategoryQuery } from '../Services/shopServices'
import { colors } from '../Global/Colors'
import ProductItem from '../Components/items/ProductItem'
import Buscador from '../Components/buscador/Buscador'

const ItemListCategory = ({
  navigation,
  route
}) => {

  const {category} = route.params
  const categorySelected = useSelector (state => state.shopReducer.value.categorySelected)
  const {data: productsSelected, isError, isLoading} = useGetProductsByCategoryQuery(categorySelected)

  const [products, setProducts] = useState([])
  const [keyword, setKeyword] = useState("")
  const [keywordError, setKeywordError] = useState("")

  useEffect(()=> {
    //Lógica de manejo de categoria
    if (productsSelected) {
      const productsFiltered = productsSelected.filter(product => product.title.toLocaleLowerCase().includes(keyword.toLowerCase()))
      setProducts(productsFiltered)
    }

  }, [productsSelected, keyword])

  const onSearch = (input) => {
    const expression = /^[a-zA-Z0-9\ ]*$/
    const evaluation = expression.test(input)

    if (evaluation) {
      setKeyword(input)
      setKeywordError("")
    } else {
      setKeywordError("Solo letras y números")
    }

  }  

  return (
    <View style={styles.container}>
        <Buscador
          onSearch={onSearch}
          error={keywordError}
          goBack={()=> navigation.goBack()}
        />
        <FlatList
            data = {products}
            keyExtractor={product => product.id}
            renderItem={({item}) => <ProductItem 
              item={item}
              navigation={navigation}
            />}
            showsVerticalScrollIndicator={false}
        />
    </View>
  )
}

export default ItemListCategory

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: colors.terciary,
    alignItems: 'center'
}
})