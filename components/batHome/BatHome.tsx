import { Image, TouchableOpacity, View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import batHomeStyles from './batHomeStyles';
import BatForm from '../batForm/BatForm';

export default function BatHome() {
    const [showBatForm, setShowBatForm] = useState(false);

    const handlePress = () => {
        setShowBatForm(true);
    };

    return (
        <LinearGradient colors={['#979797', '#3c3c3c', '#000000']} style={batHomeStyles.container}>
            {showBatForm ? (
                <BatForm />
            ) : (
                <View style={batHomeStyles.container}>
                    <Image
                        style={batHomeStyles.image}
                        source={require('../../assets/logo-batman.png')}
                    />
                    <TouchableOpacity style={batHomeStyles.button} onPress={handlePress}>
                        <Text style={batHomeStyles.buttonText}>Ative o Bat Sinal</Text>
                    </TouchableOpacity>
                </View>
            )}
        </LinearGradient>
    );
}