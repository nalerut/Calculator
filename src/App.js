// App.js
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Provider as PaperProvider, Button } from 'react-native-paper';

const App = () => {
  const [display, setDisplay] = useState('');

  const handlePress = (value) => {
    if (value === '=') {
      try {
        setDisplay(eval(display).toString());
      } catch (e) {
        setDisplay('Error');
      }
    } else if (value === 'C') {
      setDisplay('');
    } else {
      setDisplay(display + value);
    }
  };

  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.displayContainer}>
          <Text style={styles.displayText}>{display}</Text>
        </View>
        <View style={styles.buttonContainer}>
          {['7', '8', '9', '/'].map((value) => (
            <Button key={value} style={styles.button} mode="contained" onPress={() => handlePress(value)}>
              {value}
            </Button>
          ))}
          {['4', '5', '6', '*'].map((value) => (
            <Button key={value} style={styles.button} mode="contained" onPress={() => handlePress(value)}>
              {value}
            </Button>
          ))}
          {['1', '2', '3', '-'].map((value) => (
            <Button key={value} style={styles.button} mode="contained" onPress={() => handlePress(value)}>
              {value}
            </Button>
          ))}
          {['0', '.', '=', '+'].map((value) => (
            <Button
              key={value}
              style={[styles.button, value === '=' && styles.equalsButton]}
              mode="contained"
              onPress={() => handlePress(value)}
            >
              {value}
            </Button>
          ))}
          <Button style={styles.button} mode="contained" onPress={() => handlePress('C')}>
            C
          </Button>
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>Calc by Meenal</Text>
        </View>
      </SafeAreaView>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#f5f5f5',
  },
  displayContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: 20,
    backgroundColor: '#fff',
  },
  displayText: {
    fontSize: 48,
    color: '#000',
  },
  buttonContainer: {
    flex: 2,
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '500px',
    alignSelf: 'center',
    padding: 10,
  },
  button: {
    width: '22%',
    margin: 5,
  },
  equalsButton: {
    backgroundColor: 'green',
  },
  footer: {
    padding: 10,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 16,
    color: '#888',
  },
});

export default App;