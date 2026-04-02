import { View, Text, Image, Button } from 'react-native';
import React from 'react';
import { AddToCard } from '../action.js';
import { useDispatch } from 'react-redux';

const Product = ({ item, index }) => {
  const dispatch = useDispatch();

  const handleAddToCard = item => {
    dispatch(AddToCard(item));
  };

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
        <Button title="Add to Card" onPress={() => handleAddToCard(item)} />
      </View>
    </View>
  );
};

export default Product;
