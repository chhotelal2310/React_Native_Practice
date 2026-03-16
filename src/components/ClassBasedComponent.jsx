import { Component } from "react";
import { Alert, Button, Text, TextInput, View } from "react-native";

class ClassBasedComponent extends Component {

    constructor() {
        super();
        this.state = {
            name: "Anil",
            age: 20

        }

    }
    fruit = () => {
        Alert.alert("Hello Class based Components");
    }

    UpdateName(val) {
        this.setState({name:val})
    }

    render() {
        return (
            <View style={{ marginTop: 35 }}>
                <Text>Hello React Native Class Based Component</Text>
                <TextInput style={{ borderWidth: 1, borderRadius: 4, marginHorizontal: 4 }} placeholder="Enter the name.." />
                <View style={{ marginHorizontal: 4, marginTop: 10 }}><Button title="Press Button" onPress={this.fruit} /></View>
                <Text>Name:{this.state.name}</Text>
                <Text>Age:{this.state.age}</Text>
            </View>
        )
    }

}

export default ClassBasedComponent;




