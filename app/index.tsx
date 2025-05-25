import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Index() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const handleButtonPress = () => {
    Alert.alert('Login', `Usuário: ${user}\nSenha: ${password}`);
  };

  return (
    <LinearGradient
      colors={['#F8F7FF', '#FFEBD6', '#FFDBC2']}
      style={styles.gradient}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Troca Fácil</Text>

        <Text style={styles.label}>Digite seu usuário:</Text>
        <TextInput
          style={styles.input}
          onChangeText={setUser}
          value={user}
          placeholder="Usuário"
          placeholderTextColor="#999"
        />

        <Text style={styles.label}>Digite sua senha:</Text>
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder="Senha"
          secureTextEntry
          placeholderTextColor="#999"
        />

        <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
          <Text style={styles.buttonText}>ENVIAR</Text>
        </TouchableOpacity>

        <StatusBar style="auto" />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  label: {
    alignSelf: 'flex-start',
    marginBottom: 5,
    fontSize: 14,
    color: '#333',
  },
  input: {
    height: 44,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 12,
    borderRadius: 10,
    width: '100%',
    fontSize: 16,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#A899FF',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
    elevation: 2,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
