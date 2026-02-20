import React from 'react';
import { Text, View, FlatList } from 'react-native';

const ListWithFlatList = () => {
  const users = [
    {
      id: 1,
      name: 'Rahul Sharma',
      email: 'rahul@example.com',
      age: 25,
      phone: '9876543210',
      city: 'Delhi',
      isActive: true,
    },
    {
      id: 2,
      name: 'Priya Verma',
      email: 'priya@example.com',
      age: 22,
      phone: '9123456789',
      city: 'Mumbai',
      isActive: false,
    },
    {
      id: 3,
      name: 'Amit Patel',
      email: 'amit@example.com',
      age: 28,
      phone: '9988776655',
      city: 'Ahmedabad',
      isActive: true,
    },
    {
      id: 4,
      name: 'Neha Singh',
      email: 'neha@example.com',
      age: 26,
      phone: '9012345678',
      city: 'Lucknow',
      isActive: true,
    },
    {
      id: 5,
      name: 'Rohit Kumar',
      email: 'rohit@example.com',
      age: 30,
      phone: '8899776655',
      city: 'Patna',
      isActive: false,
    },
    {
      id: 6,
      name: 'Anjali Gupta',
      email: 'anjali@example.com',
      age: 24,
      phone: '7788990011',
      city: 'Jaipur',
      isActive: true,
    },
    {
      id: 7,
      name: 'Vikas Mehta',
      email: 'vikas@example.com',
      age: 32,
      phone: '9900112233',
      city: 'Chandigarh',
      isActive: true,
    },
    {
      id: 8,
      name: 'Sneha Iyer',
      email: 'sneha@example.com',
      age: 27,
      phone: '9345678901',
      city: 'Chennai',
      isActive: false,
    },
    {
      id: 9,
      name: 'Arjun Reddy',
      email: 'arjun@example.com',
      age: 29,
      phone: '9567890123',
      city: 'Hyderabad',
      isActive: true,
    },
    {
      id: 10,
      name: 'Kavita Joshi',
      email: 'kavita@example.com',
      age: 23,
      phone: '9678901234',
      city: 'Pune',
      isActive: true,
    },
  ];

  return (
    <View
      style={{
        paddingTop: 40,
        paddingBottom: 70,
      }}
    >
      <Text
        style={{
          fontSize: 18,
          fontWeight: 700,
          paddingLeft: 10,
        }}
      >
        Flat List With Component
      </Text>

      <View>
        <FlatList
          data={users}
          keyExtractor={item => item.id}
          renderItem={({ item }) => {
            return (
              <View
                style={{
                  borderWidth: 1,
                  borderRadius: 5,
                  padding: 5,
                  marginVertical: 5,
                  marginHorizontal: 10,
                }}
              >
                <Text style={{ fontSize: 16, fontWeight: 600, color: 'white' }}>
                  Name: {item?.name}
                </Text>
                <Text style={{ fontSize: 16, fontWeight: 600, color: 'blue' }}>
                  Email: {item?.name}
                </Text>
                <Text style={{ fontSize: 16, fontWeight: 600, color: 'red' }}>
                  Age: {item?.name}
                </Text>
                <Text
                  style={{ fontSize: 16, fontWeight: 600, color: 'yellow' }}
                >
                  Phone Number: {item?.name}
                </Text>
                <Text
                  style={{ fontSize: 16, fontWeight: 600, color: 'orange' }}
                >
                  City: {item?.name}
                </Text>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default ListWithFlatList;
