import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const SimpleForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [isDisplay, setIsDisplay] = useState(false);

  console.log(formData, '>>>>>>>>>>>>>>>>>>>>>>>>');

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.heading}>Simple Form In React Native</Text>

      <View style={styles.inputBoxContainer}>
        <TextInput
          value={formData.name}
          onChangeText={text => setFormData(prev => ({ ...prev, name: text }))}
          style={styles.inputBox}
          placeholder="Enter the name"
        />

        <TextInput
          value={formData.email}
          onChangeText={text => setFormData(prev => ({ ...prev, email: text }))}
          style={styles.inputBox}
          placeholder="Enter the email"
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          value={formData.password}
          onChangeText={text =>
            setFormData(prev => ({ ...prev, password: text }))
          }
          style={styles.inputBox}
          placeholder="Enter the password"
          secureTextEntry={true}
        />
      </View>
      {isDisplay && (
        <View
          style={{
            width: '100%',
            flexDirection: 'column',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
          }}
        >
          <Text>Name: {formData?.name}</Text>
          <Text>Email: {formData?.email}</Text>
          <Text>Password: {formData?.password}</Text>
        </View>
      )}

      <View
        style={{
          width: '100%',
          flexDirection: 'column',
          display: 'flex',
          marginTop: 10,
          gap: 10,
        }}
      >
        <Button title="See Details" onPress={() => setIsDisplay(true)} />
        <Button
          title="Clear Details"
          onPress={() => {
            setIsDisplay(false);
            setFormData({
              name: '',
              email: '',
              password: '',
            });
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },

  heading: {
    fontSize: 20,
    marginBottom: 15,
    fontWeight: '600',
  },

  inputBoxContainer: {
    width: '100%',
  },

  inputBox: {
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 8,
    height: 45,
  },
});

export default SimpleForm;
