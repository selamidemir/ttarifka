import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'white',
        margin: 10,
        padding: 10,
        borderTopLeftRadius: 55,
        borderBottomLeftRadius: 55,
        alignItems: 'center',
    },
    thumb: {
        marginLeft: 10,
        width: 100,
        height: 100,
    },
    title: {
        flex: 1,
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: 10,
    }
});