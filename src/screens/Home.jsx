import { Button, Text, View } from 'react-native';

const Home = ({ navigation }) => {
  const info = {
    name: 'Chhotelal Patel',
    age: 25,
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
      }}
    >
      <Text>Hello Home Screen</Text>
      <Button
        title="Go to KYC Screen"
        onPress={() => navigation.navigate('KYC', { info })}
      />
    </View>
  );
};

export default Home;
