import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Row from './components/Row';
import Button from './components/Button';

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text style={styles.value}>75</Text>
        <Row>
          <Button text="C" theme="secondary" onPress={() => alert('TBD')} />
          <Button text="+/-" theme="secondary" onPress={() => alert('TBD')} />
          <Button text="%" theme="secondary" onPress={() => alert('TBD')} />
          <Button text="/" theme="accent" onPress={() => alert('TBD')} />
        </Row>
        <Row>
          <Button text="7" onPress={() => alert('TBD')} />
          <Button text="8" onPress={() => alert('TBD')} />
          <Button text="9" onPress={() => alert('TBD')} />
          <Button text="X" theme="accent" onPress={() => alert('TBD')} />
        </Row>
        <Row>
          <Button text="4" onPress={() => alert('TBD')} />
          <Button text="5" onPress={() => alert('TBD')} />
          <Button text="6" onPress={() => alert('TBD')} />
          <Button text="-" theme="accent" onPress={() => alert('TBD')} />
        </Row>
        <Row>
          <Button text="1" onPress={() => alert('TBD')} />
          <Button text="2" onPress={() => alert('TBD')} />
          <Button text="3" onPress={() => alert('TBD')} />
          <Button text="+" theme="accent" onPress={() => alert('TBD')} />
        </Row>
        <Row>
          <Button text="0" size="double" onPress={() => alert('TBD')} />
          <Button text="." onPress={() => alert('TBD')} />
          <Button text="=" theme="accent" onPress={() => alert('TBD')} />
        </Row>
      </SafeAreaView>
      <StatusBar barStyle="light-content" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202020',
    justifyContent: 'flex-end',
  },
  value: {
    color: '#fff',
    textAlign: 'right',
    fontSize: 40,
    marginRight: 20
  }
});
