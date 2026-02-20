import { Component } from "react";
import { Alert, Button, Text, TextInput, View } from "react-native";

class ClassBasedComponent extends Component {
    fruit = () => {
        Alert.alert("Hello Class based Components");
    }
    render() {
        return (
            <View style={{ marginTop: 35 }}>
                <Text>Hello React Native Class Based Component</Text>
                <TextInput style={{ borderWidth: 1, borderRadius: 4, marginHorizontal: 4 }} placeholder="Enter the name.." />
                <View style={{ marginHorizontal: 4, marginTop: 10 }}><Button title="Press Button" onPress={this.fruit} /></View>
            </View>
        )
    }

}

export default ClassBasedComponent;




