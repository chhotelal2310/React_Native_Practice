// import { useState } from 'react';
// import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
// import UsereDetails from "./src/components/UsereDetails";
// import InputField from "./src/components/InputField";
// import SimpleForm from "./src/components/SimpleForm";
// import ListWithFlatList from "./src/components/ListWithFlatList"
// import CustomListWithMap from "./src/components/CustomListWithMap"
// import GridWithDynamicData from "./src/components/GridWithDynamicData"
// import LoopingComponentWithFlatList from "./src/components/LoopingComponentWithFlatList"
// import ListWithSectionList from "./src/components/ListWithSectionList"
// import ClassBasedComponent from "./src/components/ClassBasedComponent"
// import Hook from "./src/components/Hook";
// import ResponsiveLayout from "./src/components/ResponsiveLayout";
// import ButtonComponent from "./src/components/ButtonComponent";
// import RadioButton from "./src/components/RadioButton";
// import Loader from "./src/components/Loader";
// import Plateform from "./src/components/Plateform";
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Home from "./src/screens/Home";
// import KYC from "./src/screens/KYC";

// const Stack = createNativeStackNavigator();

// function App() {
//   const [name, setName] = useState('Hello Chhotelal Patel');
//   const [name2, setName2] = useState("Chhotelal Patel");

//   return (
//     <NavigationContainer>
//       <Stack.Navigator screenOptions={{
//         headerStyle: {
//           backgroundColor: 'pink'
//         },
//         headerTitleStyle: {
//           fontSize: 15,
//           fontWeight: 700
//         },
//         headerTintColor: "red"
//       }}>
//         <Stack.Screen name='Home' component={Home}
//           options={{
//             // headerTitle: () => <Button title='left' />,
//             headerRight: () => <Button title='Right' />,
//             headerLeft: () => <Button title='left' />,
//             title: "User Home Page",
//             headerStyle: {
//               backgroundColor: 'yellow'
//             },
//             headerTitleStyle: {
//               fontSize: 15,
//               fontWeight: 700
//             },
//             headerTintColor: "red"
//           }}

//         />
//         <Stack.Screen name='KYC' component={KYC} />
//       </Stack.Navigator>
//     </NavigationContainer>

//     // <View style={styles.mainContainer}>

//     //   {/* <View style={styles.container}>
//     //     <View>
//     //       <Text
//     //         style={{
//     //           fontSize: 30,
//     //           fontWeight: 900,
//     //         }}
//     //       >
//     //         {name}
//     //       </Text>
//     //       <UsereDetails name={name2} />

//     //       <View style={{
//     //         display: "flex",
//     //         flexDirection: "column",
//     //         gap: 5
//     //       }}>
//     //         <Button
//     //           title="Update Props"
//     //           onPress={() => {
//     //             setName2('Preeti Patel');
//     //           }}
//     //         />

//     //         <Button
//     //           title="Press here"
//     //           onPress={() => {
//     //             setName('Hello Vikas Patel');
//     //           }}
//     //         />
//     //       </View>
//     //     </View>
//     //   </View>
//     // */}

//     //   {/********************************Input field *************************************/}
//     //   {/* <InputField /> */}

//     //   {/*********************************** Simple Form **********************************/}
//     //   {/* <SimpleForm /> */}

//     //   {/*********************************** List With Flat List Component ***************/}
//     //   {/* <ListWithFlatList /> */}

//     //   {/*********************************** List With Map Function ***********************/}
//     //   {/* <CustomListWithMap /> */}

//     //   {/*********************************** Grid With Dynamic Data ***********************/}
//     //   {/* <GridWithDynamicData /> */}

//     //   {/****************************Looping Component With Flate list *********************/}
//     //   {/* <ScrollView>
//     //     <LoopingComponentWithFlatList />
//     //   </ScrollView> */}

//     //   {/****************************Looping Component With Flate list *********************/}
//     //   {/* <ScrollView>
//     //     <ListWithSectionList />
//     //   </ScrollView> */}

//     //   {/****************************Looping Component With Flate list *********************/}
//     //   {/* <ClassBasedComponent /> */}

//     //   {/********************************************* Hooks*****************************/}
//     //   {/* <Hook /> */}

//     //   {/********************************************* Hooks*****************************/}
//     //   {/* <ResponsiveLayout /> */}

//     //   {/********************************************* Button*****************************/}
//     //   {/* <ButtonComponent /> */}

//     //   {/*********************************************Radio Button*************************/}
//     //   {/* <RadioButton /> */}

//     //   {/*********************************************Loader*************************/}
//     //   {/* <Loader /> */}

//     //   {/*********************************************Loader*************************/}
//     //   {/* <Plateform /> */}

//     //   {/********************************************************************************/}
//     //   {/********************************************************************************/}
//     //   {/********************************************************************************/}
//     //   {/********************************************************************************/}
//     //   {/*********************************************Navigation*************************/}

//     // </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     height: 200,
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'green',
//   },
//   mainContainer: {
//     width: "100%",
//     height: "100%",
//     // backgroundColor: "green",
//     // padding:10
//   },

// });

// export default App;

/*******************************************************************************************************/
/*******************************************************************************************************/
/*******************************************************************************************************/
/******************************************** Passing data between screen ******************************/

// import { useState } from 'react';
// import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
// import UsereDetails from "./src/components/UsereDetails";
// import InputField from "./src/components/InputField";
// import SimpleForm from "./src/components/SimpleForm";
// import ListWithFlatList from "./src/components/ListWithFlatList"
// import CustomListWithMap from "./src/components/CustomListWithMap"
// import GridWithDynamicData from "./src/components/GridWithDynamicData"
// import LoopingComponentWithFlatList from "./src/components/LoopingComponentWithFlatList"
// import ListWithSectionList from "./src/components/ListWithSectionList"
// import ClassBasedComponent from "./src/components/ClassBasedComponent"
// import Hook from "./src/components/Hook";
// import ResponsiveLayout from "./src/components/ResponsiveLayout";
// import ButtonComponent from "./src/components/ButtonComponent";
// import RadioButton from "./src/components/RadioButton";
// import Loader from "./src/components/Loader";
// import Plateform from "./src/components/Plateform";
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Home from "./src/screens/Home";
// import KYC from "./src/screens/KYC";

// const Stack = createNativeStackNavigator();

// function App() {

//   return (
//     <NavigationContainer>
//       <Stack.Navigator screenOptions={{
//         headerStyle: {
//           backgroundColor: 'pink'
//         },
//         headerTitleStyle: {
//           fontSize: 15,
//           fontWeight: 700
//         },
//         headerTintColor: "red"
//       }}>
//         <Stack.Screen name='Home' component={Home}
//           options={{
//             title: "User Home Page",
//             headerStyle: {
//               backgroundColor: 'yellow'
//             },
//             headerTitleStyle: {
//               fontSize: 15,
//               fontWeight: 700
//             },
//             headerTintColor: "red"
//           }}

//         />
//         <Stack.Screen name='KYC' component={KYC} />
//       </Stack.Navigator>
//     </NavigationContainer>

//   );
// }

// export default App;

// /*******************************************************************************************************/
// /*******************************************************************************************************/
// /*******************************************************************************************************/
// /******************************************** Bottom Tab Navigations ******************************/

// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Text, View } from 'react-native';

// const Tab = createBottomTabNavigator();

// function App() {

//   return (
//     <NavigationContainer>
//       <Tab.Navigator>
//         <Tab.Screen name='Login' component={Login}
//         // options={{
//         //   title: "User Home Page",
//         //   headerStyle: {
//         //     backgroundColor: 'yellow'
//         //   },
//         //   headerTitleStyle: {
//         //     fontSize: 15,
//         //     fontWeight: 700
//         //   },
//         //   headerTintColor: "red"
//         // }}

//         />
//         <Tab.Screen name='Signup' component={Signup} />
//       </Tab.Navigator>
//     </NavigationContainer>

//   );
// }

// const Login = () => {
//   return <View>
//     <Text>Hello Native Login Tab</Text>
//   </View>
// }

// const Signup = () => {
//   return <View>
//     <Text>Hello Native Signup Tab</Text>
//   </View>
// }

// export default App;

// /*******************************************************************************************************/
// /*******************************************************************************************************/
// /*******************************************************************************************************/
// /******************************************** Top Tab Navigations ******************************/

// import { NavigationContainer } from '@react-navigation/native';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import { Text, View } from 'react-native';
// const Tab = createMaterialTopTabNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator>
//         <Tab.Screen name="Login" component={Login} />
//         <Tab.Screen name="Signup" component={Signup} />
//         <Tab.Screen name="Profile" component={Profile} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

// const Login = () => {
//   return (
//     <View>
//       <Text>Hello Native Login Tab</Text>
//     </View>
//   );
// };

// const Signup = () => {
//   return (
//     <View>
//       <Text>Hello Native Signup Tab</Text>
//     </View>
//   );
// };

// const Profile = () => {
//   return (
//     <View>
//       <Text>Hello Native Profile Tab</Text>
//     </View>
//   );
// };

// export default App;

/*******************************************************************************************************/
/*******************************************************************************************************/
/*******************************************************************************************************/
/******************************************** API Call ******************************/

import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
function App() {
  const [data, setData] = useState({});

  const getAPIData = async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts/1';
    let result = await fetch(url);
    result = await result.json();
    setData(result);
  };

  useEffect(() => {
    getAPIData();
  }, []);


  return data && Object.keys(data).length > 0 ? (
    <View>
      <Text>ID:{data?.id}</Text>
      <Text>User ID: {data?.userId}</Text>
      <Text>Title: {data?.title}</Text>
    </View>
  ) : (
    <Text>Data Not Found</Text>
  );
}

export default App;
