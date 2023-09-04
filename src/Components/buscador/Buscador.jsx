import React, { useState } from 'react'
import { Pressable, StyleSheet, Text, TextInput, View, useWindowDimensions } from 'react-native'
import { FontAwesome5, Feather } from '@expo/vector-icons';
import { colors } from '../../Global/Colors';

const Search = ({
    onSearch,
    error = "",
}) => {
    const [keyword, setKeyword] = useState('')
    const {width} = useWindowDimensions()

    const onErase = () => {
        setKeyword('')
        onSearch('')
    }

    return (
        <View style ={width > 320 ? styles.container : styles.containerSm}>
            <TextInput style ={styles.input} 
                placeholder='Buscar'
                color={colors.secondary}
                value={keyword}
                onChangeText={setKeyword}
            />
            <Pressable onPress={()=>onSearch(keyword)}>
                <FontAwesome5 name='search' size={24} color={colors.primary} />
            </Pressable>
            <Pressable onPress={onErase}>
                <Feather name='delete' size={24} color={colors.primary} />
            </Pressable>
            
            { error ?
                <Text>
                    {error}
                </Text>
                : null }
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: '10%',
        gap: 18,
    },
    containerSm: {
        flexDirection: 'column',
        justifyContent: 'center',
        height: '30%'
    },
    input: {
        width: 250,
        padding: 8,
        fontSize: 18, 
        backgroundColor: colors.gray,
        borderRadius: 10,
        color: colors.secondary
    }
})