import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect, useSelector } from 'react-redux'; 
import { setUsername } from '../Features/User/userReducer';
import { colors } from '../Global/Colors';
import InputForm from '../Components/inputs/input-user/InputForm';
import SubmitButton from '../Components/buttons/SubmitButton';

const UserScreen = ({ setReduxUsername, navigation }) => {
    const [newUsername, setNewUsername] = useState('');
    const [editingUsername, setEditingUsername] = useState(false);

    const handleUsernameSubmit = () => {
      setReduxUsername(newUsername);
      setEditingUsername(false);
      navigation.navigate('Mi Perfil', { newUsername });
  };
  
      
    const reduxUsername = useSelector(state => state.userReducer.username);

    return (
      <View style={styles.main}>
          <View style={styles.container}>
              <Text style={styles.title}>Editar perfil</Text>
              {editingUsername ? (
                  <View>

                  </View>
              ) : (
                  <View>
                      <InputForm
                          label={'Nuevo nombre de usuario:'}
                          value={newUsername || reduxUsername} 
                          onChange={setNewUsername}
                          style={styles.input}
                      />
                      <SubmitButton title="Confirmar" onPress={handleUsernameSubmit} />
                  </View>
              )}
          </View>
      </View>
  );
};

const mapStateToProps = (state) => ({
  username: state.userReducer.username,
});

const mapDispatchToProps = {
    setReduxUsername: setUsername,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserScreen);

const styles = StyleSheet.create({
    main: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#d6d6d6",
    },
    container: {
        width: "90%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.white,
        gap: 15,
        paddingVertical: 20,
        borderRadius: 10,
    },
    input: {
      width: 100,
      marginBottom: 10
    },  
    title: {
        fontSize: 22,
        fontFamily: "Poppins-Bold",
    },
});
