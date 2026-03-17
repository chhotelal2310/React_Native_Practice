import React from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'

const Loader = () => {
    return (
        <View style={styles.main}>
            <ActivityIndicator size={80} color="green" />
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})

export default Loader;