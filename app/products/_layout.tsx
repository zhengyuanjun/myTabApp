import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import {View, Text, StyleSheet} from 'react-native';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import { Stack,Slot } from 'expo-router';
// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
      // flex: 1 makes the Gesture detection fill the screen
      <View style={styles.container}>
        <View><Text style={styles.header_footer}>Header</Text></View>
        <Slot/>
        <View><Text style={styles.header_footer}>Footer</Text></View>
      </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
  },
  header_footer: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
  },
});