import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { useFonts } from 'expo-font';
import { init } from './src/SQLite';
import { CustomToast } from './src/Components/alertas/Toast';
import store from './src/Store/store';
import fonts from './src/Assets';
import Navigator from './src/Navigation/Navigator';
import Toast from 'react-native-toast-message';


export default function App() {
  useEffect(()=> {
    init()
      .then((result)=> {
      })
      .catch(err => {
        Toast.show({
          type: 'error',
          text1: `Ups..`,
          text2: 'Hubo un error, intente mas tarde',
          topOffset: 100,
      });
    })
  }, [])
  
  const [fontsLoaded] = useFonts(fonts);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <Navigator/>
      <CustomToast /> 
    </Provider>
  );
}
