// import React from 'react'
// import { View } from 'react-native'

// const ResponsiveLayout = () => {
//     return (
//         <View style={{ flex: 1 }}>
//             <View style={{ flex: 1, backgroundColor: "red" }}> Box-1 </View>
//             <View style={{ flex: 1, backgroundColor: "gree" }}> Box-1 </View>
//             <View style={{ flex: 1, backgroundColor: "blue" }}> Box-1 </View>
//         </View>
//     )
// }

// export default ResponsiveLayout

import React from 'react'
import { StyleSheet, View } from 'react-native'

const ResponsiveLayout = () => {
    return (
        <View style={styles.main}>
            <View style={styles.box1}> Box-1 </View>
            <View style={styles.box2}>
                <View style={styles.innerBox21}>Innerbox2-1</View>
                <View style={styles.innerBox22}>Innerbox2-2</View>
                <View style={styles.innerBox23}>Innerbox2-3</View>
            </View>
            <View style={styles.box3}> Box-2 </View>
        </View>
    )
}


const styles = StyleSheet.create({
    main: {
        flex: 1,
        // flexDirection: "row"
    },
    box1: {
        flex: 1,
        backgroundColor: "red"
    },
    box2: {
        flex: 2,
        backgroundColor: "gree",
        flexDirection: "row",
        padding: 20
    },
    box3: {
        flex: 1,
        backgroundColor: "blue"
    },
    innerBox21: {
        flex: 1,
        backgroundColor: "yellow",
        margin: 2

    }
    ,
    innerBox22: {
        flex: 1,
        backgroundColor: "pink",
        margin: 2

    }
    ,
    innerBox23: {
        flex: 1,
        backgroundColor: "gray",
        margin: 2

    }

})
export default ResponsiveLayout