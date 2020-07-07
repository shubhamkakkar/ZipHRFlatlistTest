import React from 'react';
import { Linking, Platform, TouchableOpacity } from 'react-native';
import styles from './styleSheetPhoneCallUI';

type TPhoneCallUI = {
  number: string;
  children: React.ReactElement;
};

export default function PhoneCallUI({ number, children }: TPhoneCallUI) {
  async function onPressPhoneCall() {
    let phoneNumber = '';
    if (Platform.OS === 'android') {
      phoneNumber = `tel:${number}`;
    } else {
      phoneNumber = `telprompt:${number}`;
    }
    await Linking.openURL(phoneNumber);
  }

  return (
    <TouchableOpacity onPress={onPressPhoneCall} style={styles.container}>
      {children}
    </TouchableOpacity>
  );
}
