import {StyleSheet, Pressable, Text, View, Button} from 'react-native';
import {Link, Stack, useRouter} from "expo-router";


export default function Home() {
    const router = useRouter();
    const handlePress = () => {
        // here props :No route named "products/index" exists in nested children: ["+not-found", "app", "modal", "_sitemap", "products"]
        router.navigate('/index');
    }
    return (
        <View style={styles.container}>
            <Pressable onPress={handlePress} style={styles.button}>
               {/*press here navigate to products/two*/}
                <Text style={styles.buttonText}>Press me nav by router.push</Text>
            </Pressable>
            <Link href="/products/two" style={styles.button}>
                <Text style={styles.buttonText}>Press me nav by Link component </Text>
            </Link>
        </View>
    )
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
        marginTop: 20,
    },
    buttonText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff',
    },
});