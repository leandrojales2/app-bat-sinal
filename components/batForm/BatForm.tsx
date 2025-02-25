import { Image, TextInput, TouchableOpacity, View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';

import batFormStyles from './batFormStyles';
import BatHomeComponent from '../batHome/BatHome';

export default function BatForm() {
    const [showBatHome, setShowBatHome] = useState(false);

    const handlePress = () => {
        setShowBatHome(true);
    };

    return (
        <LinearGradient colors={['#979797', '#3c3c3c', '#000000']} style={batFormStyles.container}>
            {showBatHome ? (
                <BatHomeComponent />
            ) : (
                <>
                    <View style={batFormStyles.containerImage}>
                        <Image
                            style={batFormStyles.image}
                            source={require('../../assets/logo-batman.png')}
                        />
                    </View>

                    <TextInput style={batFormStyles.textInput} placeholder='Nome'></TextInput>
                    <TextInput style={batFormStyles.textInput} placeholder='Telefone'></TextInput>
                    <textarea style={batFormStyles.textarea} placeholder='Localizacao'/>
                    <textarea style={batFormStyles.textarea} placeholder='Mensagem'/>
                    <TouchableOpacity style={batFormStyles.button} onPress={handlePress}>
                        <Text style={batFormStyles.buttonText}>Enviar</Text>
                    </TouchableOpacity>
                </>
            )}
        </LinearGradient>
    );
}