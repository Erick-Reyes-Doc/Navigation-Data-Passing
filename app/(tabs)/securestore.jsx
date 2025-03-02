import * as SecureStore from 'expo-secure-store';
import { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function SecureStoreScreen() {
    const [key, setKey] = useState('');
    const [value, setValue] = useState('');
    const [storedValue, setStoredValue] = useState('');

    const saveData = async () => {
        await SecureStore.setItemAsync(key, value);
        alert('Dato guardado ✅');
    };

    const getData = async () => {
        const result = await SecureStore.getItemAsync(key);
        setStoredValue(result || 'No encontrado');
    };

    const deleteData = async () => {
        await SecureStore.deleteItemAsync(key);
        alert('Dato eliminado 🗑️');
        setStoredValue('');
    };

    return (
        <View style={{ padding: 20 }}>
            <Text>🔑 Llave:</Text>
            <TextInput style={{ borderWidth: 1, marginBottom: 10 }} onChangeText={setKey} value={key} />
            
            <Text>📦 Valor:</Text>
            <TextInput style={{ borderWidth: 1, marginBottom: 10 }} onChangeText={setValue} value={value} />
            
            <Button title="Guardar" onPress={saveData} />
            <Button title="Recuperar" onPress={getData} />
            <Button title="Eliminar" onPress={deleteData} />

            <Text>📌 Valor recuperado: {storedValue}</Text>
        </View>
    );
}
