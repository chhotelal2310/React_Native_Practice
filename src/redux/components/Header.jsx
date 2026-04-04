import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Header = () => {
  const cartData = useSelector(state => state.reducer);
  const [cartItems, setCartItems] = useState(0);

  useEffect(() => {
    setCartItems(cartData?.length);
  }, [cartData]);

  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: 'red',
      }}
    >
      <Text>Header</Text>
      <Text>{cartItems}</Text>
    </View>
  );
};

export default Header;
