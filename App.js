import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import {useState} from 'react'

export default function App() {
  
  const [count, setCount] = useState(0)
  
  return (
    <View style={styles.container}>
        <View style={styles.countContainer}>
          <Text style={styles.count}>
            {count}
          </Text>
        </View>
        <TouchableOpacity 
          style={styles.btn}
          onPress={() => setCount(prev => prev + 1)}          
        >
          <Text style={styles.btntext}>
            👃
          </Text>
        </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    backgroundColor: 'cornflowerblue',
    padding: 50,
    borderRadius: 70,
  },
  btntext: {
    color: '#fff'
  },
  countContainer: {
    position: 'absolute',
    top: '25%',
  },
  count: {
    fontSize: 50
  }
});
