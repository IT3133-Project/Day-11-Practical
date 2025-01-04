import { StyleSheet, View } from 'react-native';
import { Text, Divider, TextInput, Button } from 'react-native-paper';
import Home from './Home';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';


export default function ContactUs() {
    const [name, setName] = useState('');
    const navigation = useNavigation();

    return (
        <>
            <View style={styles.header}>
                <Text variant="headlineLarge">Contact Us</Text>
                <Divider />
            </View>
            <View style={styles.body}>
                <View style={styles.input}>
                    <TextInput label="Name" mode='outlined' value={name} onChangeText={setName} />
                </View>
                <View style={styles.input}>
                    <TextInput label="Email" mode='outlined' keyboardType='email-address' />
                </View>
                <View style={styles.input}>
                    <TextInput label="Phone Number" mode='outlined' keyboardType='phone-pad' />
                </View>
                <View style={styles.input}>
                    <TextInput label="Message" mode='outlined' multiline={false} numberOfLines={5} />
                </View>
                <View style={styles.input}>
                    <Button mode="contained" >Contact</Button>
                </View>
                <View style={styles.input}>
                    <Button mode="contained" onPress={()=>navigation.navigate('AboutUs')}>Go to About Us</Button>
                </View>

                <Text>{name}</Text>
            </View>
            <View style={styles.footer}>
                <Text>MyApp © 2024</Text>
            </View>
        </>
    );
}


const styles = StyleSheet.create({
    header: {
        flex: 3,
        width: "100%",
        alignItems: "center",
        padding: 10,
        marginBottom: 10,
    },
    body: {
        flex: 5,
        width: "100%",
    },
    footer: {
        flex: 2,
        width: "100%",
        alignItems: "center",
        marginTop: 10,
    },
    input: {
        padding: 5,
        marginBottom: 5,

    }


});