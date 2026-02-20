import { Alert, Button, Text, View, StyleSheet, FlatList, SectionList } from 'react-native';
import GridDetails from "./GridDetails"

const ListWithSectionList = () => {
    const users = [
        {
            id: 1,
            name: 'Rahul Sharma',
            email: 'rahul@example.com',
            age: 25,
            phone: '9876543210',
            city: 'Delhi',
            isActive: true,
            data: ['C++', 'Java', 'React'],
        },
        {
            id: 2,
            name: 'Priya Verma',
            email: 'priya@example.com',
            age: 22,
            phone: '9123456789',
            city: 'Mumbai',
            isActive: false,
            data: ['Python', 'Django'],
        },
        {
            id: 3,
            name: 'Amit Patel',
            email: 'amit@example.com',
            age: 28,
            phone: '9988776655',
            city: 'Ahmedabad',
            isActive: true,
            data: ['JavaScript', 'Node.js'],
        },
        {
            id: 4,
            name: 'Neha Singh',
            email: 'neha@example.com',
            age: 26,
            phone: '9012345678',
            city: 'Lucknow',
            isActive: true,
            data: ['C', 'C++'],
        },
        {
            id: 5,
            name: 'Rohit Kumar',
            email: 'rohit@example.com',
            age: 30,
            phone: '8899776655',
            city: 'Patna',
            isActive: false,
            data: ['PHP', 'Laravel'],
        },
        {
            id: 6,
            name: 'Anjali Gupta',
            email: 'anjali@example.com',
            age: 24,
            phone: '7788990011',
            city: 'Jaipur',
            isActive: true,
            data: ['Flutter', 'Dart'],
        },
        {
            id: 7,
            name: 'Vikas Mehta',
            email: 'vikas@example.com',
            age: 32,
            phone: '9900112233',
            city: 'Chandigarh',
            isActive: true,
            data: ['React Native', 'Redux'],
        },
        {
            id: 8,
            name: 'Sneha Iyer',
            email: 'sneha@example.com',
            age: 27,
            phone: '9345678901',
            city: 'Chennai',
            isActive: false,
            data: ['Angular', 'TypeScript'],
        },
        {
            id: 9,
            name: 'Arjun Reddy',
            email: 'arjun@example.com',
            age: 29,
            phone: '9567890123',
            city: 'Hyderabad',
            isActive: true,
            data: ['Kotlin', 'Android'],
        },
        {
            id: 10,
            name: 'Kavita Joshi',
            email: 'kavita@example.com',
            age: 23,
            phone: '9678901234',
            city: 'Pune',
            isActive: true,
            data: ['Swift', 'iOS'],
        },
    ];



    return (
        <View style={styles.mainContainer}>
            <View style={{
                display: "flex"
            }}>
                <SectionList
                    sections={users}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.girdContainer}>
                                <Text style={styles.gridText}>{item}</Text>
                            </View>
                        );
                    }}
                    renderSectionHeader={({ section: { name, city } }) => {
                        return (<View><Text>Name: {name}</Text>
                            <Text>City: {city}</Text></View>)

                    }}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        padding: 10,
        borderWidth: 1,
        marginTop: 30,
        marginHorizontal: 5,
        borderRadius: 5,
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 5,
    },
    textBox: {
        color: 'white',
        fontSize: 20,
        fontWeight: 600,
        backgroundColor: 'maroon',
        padding: 20,
        borderRadius: 15,
        marginVertical: 10,
    },
    girdContainer: {
        borderWidth: 1,
        width: 90,
        height: 90,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        backgroundColor: 'yellow',
    },
    gridText: {
        color: 'red',
        fontSize: 16,
        fontWeight: '600',
    },

});

export default ListWithSectionList;
