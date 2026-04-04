import { View, Text, Image, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import { AddToCard, RemoveToCard } from '../action.js';
import { useDispatch, useSelector } from 'react-redux';

const Product = ({ item, index }) => {
  const cartItems = useSelector(state => state.reducer);
  const [isAdded, setIsAdded] = useState(false);

  const dispatch = useDispatch();
  const handleAddToCard = item => {
    dispatch(AddToCard(item));
  };

  const handleRemoveCard = item => {
    console.warn(item);
    dispatch(RemoveToCard(item.name));
  };

  useEffect(() => {
    if (cartItems && cartItems?.length) {
      const result = cartItems?.filter(element => element?.name == item?.name);
      if (result.length) {
        setIsAdded(true);
      } else {
        setIsAdded(false);
      }
    }
  }, [cartItems]);

  return (
    <View key={index} style={{ padding: 10 }}>
      <View style={{ borderWidth: 1, borderRadius: 5, padding: 10 }}>
        <Text style={{ fontSize: 20 }}>{item?.name}</Text>
        <Text style={{ fontSize: 20 }}>{item?.price}</Text>
        <Text style={{ fontSize: 20 }}>{item?.color}</Text>
        <Image
          style={{ width: 160, height: 200, borderRadius: 5 }}
          source={{ uri: item?.image }}
        />
        {isAdded ? (
          <Button
            title="Remove to Card"
            onPress={() => handleRemoveCard(item)}
          />
        ) : (
          <Button title="Add to Card" onPress={() => handleAddToCard(item)} />
        )}
      </View>
    </View>
  );
};

// export default Product;
export default React.memo(Product);
