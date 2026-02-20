import { StyleSheet, Text, View } from "react-native"


const GridDetails = ({ item }) => {
  return (
    <View style={styles.girdContainer}>
      <Text style={styles.gridText}>{item?.age}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
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
export default GridDetails