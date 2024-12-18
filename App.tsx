import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet, View, useColorScheme } from 'react-native';
import AppBar from './src/components/AppBar/AppBar';
import TaskListScreen from './src/screens/TaskListScreen/TaskListScreen';

/*
Root component of the app, responsible for setting up the main layout
and applying color scheme-based theming.
Wraps the app with `SafeAreaProvider` to for proper handling of safe areas
Retrieves the system's color scheme
Applies different background styles based on the color scheme.
Renders the AppBar
Displays the main content of the app (task list screen).
*/

const App = (): JSX.Element => {
  const colorScheme = useColorScheme() || 'light'; // Default to 'light' if undefined

  return (
    <SafeAreaProvider>
      <View
        style={[
          styles.container,
          colorScheme === 'dark' ? styles.darkContainer : styles.lightContainer,
        ]}
      >
        {/* AppBar */}
        <AppBar colorScheme={colorScheme} />

        {/* Task List Screen */}
        <TaskListScreen />
      </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  lightContainer: {
    backgroundColor: '#f5f5f5', // Light mode background (light gray)
  },
  darkContainer: {
    backgroundColor: '#121212', // Dark mode background (dark gray/black)
  },
});

export default App;
