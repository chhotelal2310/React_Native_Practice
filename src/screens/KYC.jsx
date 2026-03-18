import { Text, View } from 'react-native'

const KYC = (props) => {
    const { info } = props.route.params;
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: "blue"
        }}>
            <View style={{
                minWidth: 100
            }}>
                <Text style={{ fontSize: 20, textAlign: "left" }}>Hello KYC Page</Text>
                <Text style={{ fontSize: 20, textAlign: "left" }}>Name:{info.name}</Text>
                <Text style={{ fontSize: 20, textAlign: "left" }}>Age:{info.age}</Text>
            </View>
        </View>
    )
}

export default KYC

