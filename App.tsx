import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View, Image } from 'react-native';

import BatHome from './components/batHome/BatHome';
import BatForm from './components/batForm/BatForm';

export default function App() {
  return (
    <View style={styles.container}>
        <BatHome />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 60,
    height: 60,
  },
});
