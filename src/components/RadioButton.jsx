// import React, { useState } from 'react'
// import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

// const RadioButton = () => {
//     const [radio, setRadio] = useState(1)
//     return (
//         <View style={styles.main}>
//             <TouchableOpacity onPress={() => setRadio(1)}>
//                 <View style={styles.radioWarrper}>
//                     <View style={styles.radio}>
//                         {radio == 1 ? <View style={styles.radiobg}></View> : null}
//                     </View>
//                     <Text style={styles.radioText}>Radio-1</Text>
//                 </View>
//             </TouchableOpacity>

//             <TouchableOpacity onPress={() => setRadio(2)}>
//                 <View style={styles.radioWarrper}>
//                     <View style={styles.radio}>
//                         {radio == 2 ? <View style={styles.radiobg}></View> : null}
//                     </View>
//                     <Text style={styles.radioText}>Radio-2</Text>
//                 </View>
//             </TouchableOpacity>

//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     main: {
//         flex: 1,
//         // backgroundColor: "green",
//         alignItems: "center",
//         justifyContent: "center"
//     },

//     radioText: {
//         fontSize: 20,
//         fontWeight: 600
//     },

//     radio: {
//         height: 28,
//         width: 28,
//         borderColor: "green",
//         borderRadius: "50%",
//         borderWidth: 1,
//         // alignItems: "center",
//         // flexDirection: 'row',
//         // justifyContent: 'center'


//     },
//     radioWarrper: {
//         flexDirection: "row",
//         justifyContent: "center",
//         alignItems: "center",
//         gap: 10,

//     },
//     radiobg: {
//         width: 20,
//         height: 20,
//         backgroundColor: "blue",
//         borderRadius: "50%",
//         margin: 2.8

//     }
// })

// export default RadioButton



import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const RadioButton = () => {
    const skills = [
        {
            id: 1,
            name: "Java"
        },
        {
            id: 2,
            name: "C++"
        },
        {
            id: 3,
            name: "Python"
        },
        {
            id: 4,
            name: "SQL"
        },
        {
            id: 5,
            name: "C#"
        },

    ]


    const [radio, setRadio] = useState(1);
    return (
        <View style={styles.main}>
            {skills?.map((item, index) => {
                return <><TouchableOpacity key={index} onPress={() => setRadio(item?.id)}>
                    <View style={styles.radioWarrper}>
                        <View style={styles.radio}>
                            {radio == item?.id ? <View style={styles.radiobg}></View> : null}
                        </View>
                        <Text style={styles.radioText}>{item?.name}</Text>
                    </View>
                </TouchableOpacity></>
            })}


        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        // backgroundColor: "green",
        alignItems: "center",
        justifyContent: "center"
    },

    radioText: {
        fontSize: 20,
        fontWeight: 600
    },

    radio: {
        height: 28,
        width: 28,
        borderColor: "green",
        borderRadius: "50%",
        borderWidth: 1,
        // alignItems: "center",
        // flexDirection: 'row',
        // justifyContent: 'center'


    },
    radioWarrper: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        margin: 4,
        gap: 30,
        // backgroundColor: "red",
        minWidth: "50%"

    },
    radiobg: {
        width: 20,
        height: 20,
        backgroundColor: "blue",
        borderRadius: "50%",
        margin: 2.8

    }
})

export default RadioButton