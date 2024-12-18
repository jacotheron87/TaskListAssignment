import React from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet, ColorSchemeName } from 'react-native';

/*
For rendering an AppBar with dynamic styling
based on the device's color scheme (light or dark mode).
*/

interface AppBarProps {
  colorScheme: ColorSchemeName; // Accept 'light', 'dark', or undefined
}

const AppBar = ({ colorScheme }: AppBarProps): JSX.Element => {
  const backgroundColor =
    colorScheme === 'dark' ? styles.darkAppBar.backgroundColor : styles.lightAppBar.backgroundColor;

  const textColor = colorScheme === 'dark' ? '#FFFFFF' : '#000000'; // White in dark mode, black otherwise

  return (
    <Appbar.Header style={[styles.appBar, { backgroundColor }]}>
      <Appbar.Content title="Task List" titleStyle={{ color: textColor }} />
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  appBar: {
    elevation: 4,
  },
  lightAppBar: {
    backgroundColor: '#d3d3d3', // Light gray for light mode
  },
  darkAppBar: {
    backgroundColor: '#1f1f1f', // Dark gray/black for dark mode
  },
});

export default AppBar;
