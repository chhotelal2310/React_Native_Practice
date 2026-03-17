import React from 'react'
import { Platform, Text, View } from 'react-native'

const Plateform = () => {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontSize: 30 }}>Plateform:{Platform.OS}</Text>
        </View>
    )
}

export default Plateform