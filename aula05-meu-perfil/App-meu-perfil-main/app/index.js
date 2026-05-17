import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
export default function Home() {
  const router = useRouter();
  return (
    <View style={styles.container}>
        <Text style={styles.titulo}>Fernando de Almeida</Text>
        <Image
            source={require('../assets/FA_logo.png')}
            style={styles.foto}
        />
        <TouchableOpacity style={styles.botao} onPress={() => router.push('/perfil')}>
            <Text style={styles.botaoTexto}>Ver meu perfil</Text>
        </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container:  { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#0f172a' },
  titulo:     { fontSize: 36, fontWeight: 'bold', marginBottom: 24, color: '#ffffff' },
  botao:      { backgroundColor: '#1DB954', padding: 16, borderRadius: 12 },
  botaoTexto: { color: '#fff', fontSize: 16, fontWeight: '600' },
  foto:       { width: 140, height: 140, borderRadius: 70, marginBottom: 24 },
});