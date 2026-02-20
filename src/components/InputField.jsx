import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const InputField = () => {
  const [name, setName] = useState('');
  return (
    <>
      <View style={styles.InputView}>
        <Text style={styles.title}>This is the text input filed</Text>
        <View>
          <TextInput
            value={name}
            style={styles.InputBox}
            onChangeText={text => setName(text)}
            placeholder="Enter your name..."
          />
        </View>
        <Button title="Clear Input" onPress={() => setName('')} />
        <Text style={styles.tile2}>Your name is: {name}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  InputBox: {
    borderWidth: 1,
    borderColor: 'red',
    width: '100%',
    padding: 10,
    borderRadius: 6,
  },
  title: {
    fontSize: 20,
    fontWeight: 700,
    marginBottom: 5,
  },
  tile2: {
    fontSize: 20,
    fontWeight: 700,
    marginTop: 5,
  },
  InputView: {
    flex: 1,
    justifyContent: 'center',
    margin: 20,
  },
});

export default InputField;
