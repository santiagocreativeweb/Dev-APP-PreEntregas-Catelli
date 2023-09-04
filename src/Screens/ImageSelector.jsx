import React, { useState } from "react";
import { Image, View, StyleSheet, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import * as ImagePicker from "expo-image-picker";
import * as MediaLibrary from "expo-media-library";
import { colors } from "../Global/Colors";
import { usePostProfileImageMutation } from "../Services/shopServices";
import { saveImage } from "../Features/User/userSlice";
import AddButton from "../Components/buttons/AddButton";
import Toast from 'react-native-toast-message';


const ImageSelector = ({ navigation }) => {
    const [image, setImage] = useState(null);

    const [triggerSaveImage, resultSaveImage] = usePostProfileImageMutation();
    const dispatch = useDispatch();
    const { localId } = useSelector((state) => state.userReducer.value);

    const verifyCameraPermissions = async () => {
        const { granted } = await ImagePicker.requestCameraPermissionsAsync();
        if (!granted) {
            return false;
        }
        return true;
    };

    const pickImage = async () => {

        //Permisos de la camara
        const isCameraOk = await verifyCameraPermissions();

        if (isCameraOk) {

            // No es necesario ninguna request para iniciar la biblioteca de imágenes
            let result = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [1, 1],
                quality: 1,
            });


            if (!result.canceled) {
                setImage(result.assets[0].uri);
            }
        }
    };

    const confirmImage = async () => {
        try {
            const { status } = await MediaLibrary.requestPermissionsAsync();
            if (status === "granted") {
                const response = await MediaLibrary.createAssetAsync(image);
                triggerSaveImage({
                    image: response.uri,
                    localId: localId,
                });
                dispatch(saveImage(response.uri));
            }
        } catch (error) {
            Toast.show({
                type: 'error',
                text1: `Ups..`,
                text2: 'Hubo un error, intente mas tarde',
                topOffset: 100,
              });
        }
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            {image ? (
                <>
                    <Image source={{ uri: image }} style={styles.image} />
                    <AddButton title="Tomar otra foto" onPress={pickImage} />
                    <AddButton title="Confirmar foto" onPress={confirmImage} />
                </>
            ) : (
                <>
                    <View style={styles.noPhotoContainer}>
                        <Text>No hay foto para mostrar</Text>
                    </View>
                    <AddButton title="Tomar Foto" onPress={pickImage} />
                </>
            )}
        </View>
    );
};

export default ImageSelector;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        gap: 20,
        marginTop: 20,
    },
    image: {
        width: 200,
        height: 200,
    },
    noPhotoContainer: {
        width: 200,
        height: 200,
        borderWidth: 2,
        borderColor: colors.primary,
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
    },
});
