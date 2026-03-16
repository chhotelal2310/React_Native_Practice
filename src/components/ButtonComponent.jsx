import React from 'react'
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'

const ButtonComponent = () => {
    return (
        <View style={styles.main}>
            <TouchableHighlight>
                <Text style={[styles.button, styles.success]}>Success</Text>
            </TouchableHighlight>

            <TouchableHighlight>
                <Text style={[styles.button, styles.pending]}>Pending</Text>
            </TouchableHighlight>

            <TouchableHighlight>
                <Text style={[styles.button, styles.warning]}>Warning</Text>
            </TouchableHighlight>

            <TouchableHighlight>
                <Text style={[styles.button, styles.rejected]}>Rejected</Text>
            </TouchableHighlight>

        </View >
    )
}
const styles = StyleSheet.create({
    main: {
        flex: 1
    },
    button: {
        textAlign: "center",
        // backgroundColor: "blue",
        color: "yellow",
        fontSize: 20,
        padding: 10,
        margin: 10,
        borderRadius: 10,
        cursor: "auto",
        // shadowColor: "black",
        // elevation: 20
    },
    success: {
        backgroundColor: "green"
    },
    pending: {
        backgroundColor: "yellow",
        color: "white"
    },
    warning: {
        backgroundColor: "orange"
    },
    rejected: {
        backgroundColor: "red"
    }

})
export default ButtonComponent