import { StyleSheet, View } from 'react-native'
import React from 'react'
import { colors } from '../Global/Colors'

const Card = ({children, additionalStyle = []}) => {
  return (
    <View style = {[styles.cardContainer, additionalStyle]}>
      {children}
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
  cardContainer: {
    width: 300,
    height: 80,
    paddingLeft: 15,
    borderRadius: 10,
    backgroundColor: colors.header,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
})