import { Alert, Button, Text, View, StyleSheet } from 'react-native';

const UsereDetails = ({ name }) => {
  // Alert.alert(name);
  const fun = () => {
    Alert.alert('Hello React Native. This is the function called.');
  };
  return (
    <View
      style={{
        borderWidth: 1,
        padding: 8,
        margin: 8,
        borderRadius: 4,
      }}
    >
      <Text
        style={{
          fontSize: 20,
          fontWeight: 600,
          color: 'yellow',
        }}
      >
        This the child component
      </Text>
      <Text style={styles.textBox}>Name1:Chhotelal Patel</Text>
      <Text>Email:Chhotelal@tarality.com</Text>

      <Text>Name2:{name}</Text>
      <Text style={styles.textBox}>Age: 25</Text>
      {/* // The below function is called when is clicked on the On Press1 */}
      <Button title="On Press1" onPress={fun} color={'red'} />

      {/* // The below function is called when is referesh or reload the app on the On Press1 */}
      {/* <Button title="On Press2" onPress={fun()} color={'blue'} /> */}

      <Button title="On Press3" onPress={() => fun()} color={'blue'} />
    </View>
  );
};

const styles = StyleSheet.create({
  textBox: {
    color: 'white',
    fontSize: 20,
    fontWeight: 600,
    backgroundColor: 'maroon',
    padding: 20,
    borderRadius: 15,
    marginVertical: 10,
  },
});

export default UsereDetails;
