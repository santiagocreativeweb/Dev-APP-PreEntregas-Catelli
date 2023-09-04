import React from 'react';
import Toast, { BaseToast } from 'react-native-toast-message';
import { colors } from '../../Global/Colors';

const toastConfig = {
    success: (props) => (
      <BaseToast
        {...props}
        style={{ borderLeftColor: colors.primary }}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        text1Style={{
          fontSize: 15, 
          fontWeight: '500' 
        }}
        text2Style={{
          fontSize: 13,
          fontWeight: '500'
        }}
      />
    )
  };

export const CustomToast = () => {
  return (
    <Toast config={toastConfig} />  //retonarmos config del toast 
  )
}
