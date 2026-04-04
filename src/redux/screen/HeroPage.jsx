import { View, Text, Image, ScrollView, Button } from 'react-native';
import React from 'react';
import Header from '../components/Header';
import Product from '../components/Product';

const HeroPage = () => {
  const products = [
    {
      name: 'Chhotelal Patel',
      color: 'white',
      price: 3000,
      image:
        'https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Communication/Mobiles/Images/309693_0_ltbvx2.png?tr=w-600',
    },
    {
      name: 'Vikas Patel',
      color: 'green',
      price: 2000,
      image:
        'https://rukmini1.flixcart.com/image/1500/1500/kg8avm80/mobile/j/f/9/apple-iphone-12-dummyapplefsn-original-imafwg8dkyh2zgrh.jpeg?q=70',
    },
    {
      name: 'Ravi Patel',
      color: 'blue',
      price: 4000,
      image:
        'https://image.cdn.shpy.in/301826/1685623144178_1.jpeg?width=600&format=webp',
    },
    {
      name: 'Anupam Singh',
      color: 'blue',
      price: 4000,
      image: 'https://i.insider.com/5df10d81fd9db229ba736a77?width=700',
    },
  ];
  return (
    <View>
      <Header />
      <ScrollView style={{ marginVertical: 40 }}>
        {products?.map((item, index) => (
          <Product key={index} item={item} />
        ))}
      </ScrollView>
    </View>
  );
};

export default HeroPage;
