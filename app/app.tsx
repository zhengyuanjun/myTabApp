import {StyleSheet, Pressable, Text, View, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '@react-navigation/native';


type RootStackParamList = {
    'products/two': undefined;
};

export default function Home() {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const handlePress = () => {
        // here props :No route named "products/index" exists in nested children: ["+not-found", "app", "modal", "_sitemap", "products"]
        navigation.navigate('products/two');
    }
    return (
        <View style={styles.container}>
            <Pressable onPress={handlePress} style={styles.button}>
               {/*press here navigate to products/two*/}
                <Text style={styles.buttonText}>Press me</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    button: {
        backgroundColor: '#007bff',
        padding: 20,
        borderRadius: 5,
    },
    buttonText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff',
    },
});