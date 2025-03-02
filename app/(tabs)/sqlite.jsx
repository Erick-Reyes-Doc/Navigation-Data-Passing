import * as SQLite from 'expo-sqlite';
import { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';

const db = SQLite.openDatabase('mydatabase.db');

export default function SQLiteScreen() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [users, setUsers] = useState([]);

    useEffect(() => {
        db.transaction(tx => {
            tx.executeSql(
                `CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, age INTEGER);`
            );
        });
        fetchUsers();
    }, []);

    const insertUser = () => {
        db.transaction(tx => {
            tx.executeSql(`INSERT INTO users (name, age) VALUES (?, ?)`, [name, age], () => {
                alert('Usuario agregado ✅');
                fetchUsers();
            });
        });
    };

    const fetchUsers = () => {
        db.transaction(tx => {
            tx.executeSql(`SELECT * FROM users`, [], (_, { rows }) => {
                setUsers(rows._array);
            });
        });
    };

    return (
        <View style={{ padding: 20 }}>
            <Text>👤 Nombre:</Text>
            <TextInput style={{ borderWidth: 1, marginBottom: 10 }} onChangeText={setName} value={name} />

            <Text>🎂 Edad:</Text>
            <TextInput style={{ borderWidth: 1, marginBottom: 10 }} onChangeText={setAge} value={age} keyboardType="numeric" />

            <Button title="Agregar Usuario" onPress={insertUser} />
            <Button title="Cargar Usuarios" onPress={fetchUsers} />

            <FlatList
                data={users}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <Text>{item.name} - {item.age} años</Text>}
            />
        </View>
    );
}
