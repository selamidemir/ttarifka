import { StyleSheet, Dimensions } from "react-native";

const deviceSizes = Dimensions.get('window');
const cardWidth = deviceSizes.width - 30;
const cardHeight = deviceSizes.height / 5;

export default StyleSheet.create({
    container: {
        backgroundColor: 'orange',
        margin: 10,
        justifyContent: 'center',
    },
    image: {
        width: cardWidth,
        height: cardHeight,
        borderRadius: 5,
        backgroundColor: 'lightgray',
    },
    title: {
        width: cardWidth,
        height: 35,
        opacity: 0.7,
        color: 'white',
        backgroundColor: 'gray',
        fontSize: 27,
        textAlign: 'center',
        fontWeight: 'bold',
        position: 'absolute',
        top: cardHeight - 35,
        left: 0,
        right: 0,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
    }
})