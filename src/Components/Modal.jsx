import { StyleSheet, Text, View, Modal, Pressable, } from "react-native";
import React from "react";

const ModalTask = ({
    modalVisible,
    setModalVisible,
    taskActive,
    onPressStatus
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
                            <Text style={styles.textStyle}>Completada</Text>
                        </Pressable>
                        <Pressable
                            style={[styles.button, styles.buttonEnProceso]}
                            onPress={() => onPressStatus(false)}
                        >
                            <Text style={styles.textStyle}>En Proceso</Text>
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
        flexDirection: "column",
        alignItems: "center",
    },
    button: {
        borderRadius: 5,
        padding: 10,
        elevation: 2,
        marginBottom: 10,
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonCompletado: {
        backgroundColor: "green",
    },
    buttonEnProceso: {
        backgroundColor: "rgba(242, 191, 52, 1)",
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
