import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
export default function Sobre() {
  const router = useRouter();
  return (
    <View style={styles.container}>
        <Text style={styles.titulo}>"CC - 2026"</Text>
        <Text style={styles.descricao}>3 tecnologias favoritas:</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 16 }}>
        <View style={{ flex: 1, height: 100, backgroundColor: '#1DB954', margin: 4, borderRadius: 8, justifyContent: 'center', alignItems: 'center' }} >
        <Text style={styles.txtbox}>PYTHON</Text>
        </View>
        <View style={{ flex: 1, height: 100, backgroundColor: '#1DB954', margin: 4, borderRadius: 8, justifyContent: 'center', alignItems: 'center' }} >
        <Text style={styles.txtbox}>REACT NATIVE</Text>
        </View>
        <View style={{ flex: 1, height: 100, backgroundColor: '#1DB954', margin: 4, borderRadius: 8, justifyContent: 'center', alignItems: 'center' }} >
        <Text style={styles.txtbox}>JAVA</Text>
        </View>
    </View>
        <TouchableOpacity style={styles.botao} onPress={() => router.back('/index')}>
            <Text style={styles.botaoTexto}>Voltar</Text>
        </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container:  { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#0f172a' },
  titulo:     { fontSize: 28, fontWeight: 'bold', marginBottom: 12, color: '#ffffff' },
  descricao:  { fontSize: 16, color: '#f2dfdf', marginBottom: 24, fontStyle: 'italic' },
  botao:      { backgroundColor: '#c51e1e', padding: 16, borderRadius: 12 },
  botaoTexto: { color: '#fff', fontSize: 16, fontWeight: '600' },
  txtbox:     { fontSize: 14, fontWeight: 'bold', color: '#ffffff' },
});