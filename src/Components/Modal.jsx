import { StyleSheet, Text, View, Modal, Pressable, } from "react-native";
import React from "react";

const ModalTask = ({
    modalVisible,
    setModalVisible,
    taskActive,
    onPressStatus,
    onPressBorrar
}) => {

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>{taskActive.task}</Text>
                    <View style={styles.buttonContainer}>
                        <Pressable
                            style={[styles.button, styles.buttonCompletado]}
                            onPress={() => onPressStatus(true)}
                        >
                            <Text style={styles.textStyle}>Completar</Text>
                        </Pressable>
                        <Pressable
                        style={[styles.button, styles.buttonBorrar]}
                        onPress={onPressBorrar}
                        >
                            
                        <Text style={styles.textStyle}>Borrar</Text>
                        </Pressable>

                        <Pressable
                            style={[styles.button, styles.buttonCerrar]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.textStyle}>Cancelar</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default ModalTask;

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },
    modalView: {
        margin: 40,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    buttonContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    button: {
        borderRadius: 5,
        padding: 10,
        elevation: 2,
        marginRight: 10,
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonCompletado: {
        backgroundColor: "green",
    },
    buttonBorrar: {
        backgroundColor: "rgba(255, 0, 0, 1)",
    },
    buttonCerrar: {
        backgroundColor: "gray",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
    },
});
