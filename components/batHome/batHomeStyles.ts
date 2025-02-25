import { StyleSheet } from 'react-native';

const batHomeStyles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        width: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    image: {
        width: '70%',
        height: 150,
    },
    button: {
        backgroundColor: '#e5e96b',
        padding: 10,
        borderRadius: 5,
        width: '60%',
        height: 40,
        color: '#000000',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },
    text: {
        color: '#000000',
        textAlign: 'center',
    },
    buttonText:{
        color: '#000000',
        textAlign: 'center',
    }
});

export default batHomeStyles;