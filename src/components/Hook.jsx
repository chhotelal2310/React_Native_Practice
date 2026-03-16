import React, { useEffect, useState } from 'react';
import { Alert, Button, Text, View } from 'react-native';

const Hook = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        Alert.alert("Hello Hooks", String(count));
    }, [count]);

    return (
        <View>
            <Text>Hello Chhotelal Patel</Text>

            <Button
                title="Click"
                onPress={() => setCount(count + 1)}
            />
        </View>
    );
};

export default Hook;