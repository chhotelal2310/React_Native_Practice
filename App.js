import { useState } from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import UsereDetails from "./src/components/UsereDetails";
import InputField from "./src/components/InputField";
import SimpleForm from "./src/components/SimpleForm";
import ListWithFlatList from "./src/components/ListWithFlatList"
import CustomListWithMap from "./src/components/CustomListWithMap"
import GridWithDynamicData from "./src/components/GridWithDynamicData"
import LoopingComponentWithFlatList from "./src/components/LoopingComponentWithFlatList"
import ListWithSectionList from "./src/components/ListWithSectionList"
import ClassBasedComponent from "./src/components/ClassBasedComponent"
import Hook from "./src/components/Hook";
import ResponsiveLayout from "./src/components/ResponsiveLayout";
import ButtonComponent from "./src/components/ButtonComponent";
function App() {
  const [name, setName] = useState('Hello Chhotelal Patel');
  const [name2, setName2] = useState("Chhotelal Patel");

  return (
    <View style={styles.mainContainer}>

      {/* <View style={styles.container}>
        <View>
          <Text
            style={{
              fontSize: 30,
              fontWeight: 900,
            }}
          >
            {name} 
          </Text>
          <UsereDetails name={name2} />

          <View style={{
            display: "flex",
            flexDirection: "column",
            gap: 5
          }}>
            <Button
              title="Update Props"
              onPress={() => {
                setName2('Preeti Patel');
              }}
            />

            <Button
              title="Press here"
              onPress={() => {
                setName('Hello Vikas Patel');
              }}
            />
          </View>
        </View>
      </View></> */}



      {/********************************Input field *************************************/}
      {/* <InputField /> */}


      {/*********************************** Simple Form **********************************/}
      {/* <SimpleForm /> */}


      {/*********************************** List With Flat List Component ***************/}
      {/* <ListWithFlatList /> */}


      {/*********************************** List With Map Function ***********************/}
      {/* <CustomListWithMap /> */}


      {/*********************************** Grid With Dynamic Data ***********************/}
      {/* <GridWithDynamicData /> */}


      {/****************************Looping Component With Flate list *********************/}
      {/* <ScrollView>
        <LoopingComponentWithFlatList />
      </ScrollView> */}

      {/****************************Looping Component With Flate list *********************/}
      {/* <ScrollView>
        <ListWithSectionList />
      </ScrollView> */}


      {/****************************Looping Component With Flate list *********************/}
      {/* <ClassBasedComponent /> */}


      {/********************************************* Hooks*****************************/}
      {/* <Hook /> */}

      {/********************************************* Hooks*****************************/}
      {/* <ResponsiveLayout /> */}


      {/********************************************* Button*****************************/}
      <ButtonComponent />




    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 200,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
  mainContainer: {
    width: "100%",
    height: "100%",
    // backgroundColor: "green",
    // padding:10
  },

});

export default App;
