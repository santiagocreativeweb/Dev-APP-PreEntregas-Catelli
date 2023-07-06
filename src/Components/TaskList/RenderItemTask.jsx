import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const RenderItemTask = ({item, onPressTask}) => {

    return (
        <Pressable onPress={() => onPressTask(item)}>
            <View style={ 
                    item.completed ? 
                    styles.taskCompleted : 
                    styles.task
                } key={item.id}>
                <Text style={styles.taskText}>{item.task}</Text>
            </View>
        </Pressable>
    )
}

export default RenderItemTask

const styles = StyleSheet.create({
    task: {
        width: 200,
        height: 80,
        padding: 20,
        backgroundColor: "rgb(74, 85, 162)",
        marginBottom: 15,
        justifyContent: "center",
        borderRadius: 5
    },
    taskCompleted: {
        width: 200,
        height: 80,
        padding: 20,
        backgroundColor: "rgba(74, 84, 162, 0.521)",
        marginBottom: 15,
        justifyContent: "center",
        borderRadius: 5
    },
    taskText: {
        fontSize: 16,
        color: "white"
    },
})

