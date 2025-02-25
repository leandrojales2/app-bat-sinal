import { StyleSheet } from 'react-native';

const batFormStyles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    containerImage: {
        width: '100%',
        height: 100,
        margin: 40,
    },
    image: {
        width: '30%',
        height: 100,
        marginLeft: 50,
    },
    button: {
        backgroundColor: '#e5e96b',
        padding: 10,
        borderRadius: 5,
        width: '70%',
        height: 40,
        color: '#000000',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
        boxShadow: '0px 2px 2px 0px #000000',
    },
    textInput: {
        color: '#000000',
        backgroundColor: '#e5e96b',
        width: '70%',
        height: 40,
        marginBottom: 20,
        padding: 10,
        fontSize: 20,
        borderRadius: 5,
        boxShadow: '0px 2px 2px 0px #000000',
    },
    textarea: {
        color: '#000000',
        backgroundColor: '#e5e96b',
        width: '65%',
        height: 100,
        marginBottom: 20,
        fontSize: 20,
        borderRadius: 5,
        padding: 10,
        boxShadow: '0px 2px 2px 0px #000000',
    },
    buttonText:{
        color: '#000000',
        textAlign: 'center',
    },
    text: {
        color: '#000000',
        textAlign: 'center',
    },
});

export default batFormStyles;