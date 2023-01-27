import { StyleSheet, Dimensions, DynamicColorIOS } from "react-native";

const deviceSize = Dimensions.get('window');
const width = deviceSize.width;
const height = deviceSize.height / 5;

export default StyleSheet.create({
    container: {
        backgroundColor: 'lightgray',
    },
    image: {
        width: width,
        height: height,
    },
    title: {
        padding: 10,
        color: '#C70039',
        fontSize: 29,
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
    },
    description: {
        fontSize: 19,
        padding: 10,
        color: 'black',
    }
});