import { View, Text, Image, StyleSheet } from 'react-native';

export default function App() {
  const usuario = {
    nome: "Fernando",
    cursoSemestre: "Ciência da Computação - 3º semestre",
    bio: "Desenvolvedor Back-End 💻",
    frase: "Pode parecer pânico. É só eu programando.",
    seguidores: "1.1M",
    avatar: "https://static.wixstatic.com/media/894d3e_5b35b4311510410fbe9403dc85f46845~mv2.jpg/v1/fill/w_1000,h_563,al_c,q_85,usm_0.66_1.00_0.01/894d3e_5b35b4311510410fbe9403dc85f46845~mv2.jpg",
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: usuario.avatar }}
        style={styles.avatar}
      />

      <Text style={styles.nome}>{usuario.nome}</Text>
      <Text style={styles.curso}>{usuario.cursoSemestre}</Text>
      <Text style={styles.bio}>{usuario.bio}</Text>
      <Text style={styles.frase}>{usuario.frase}</Text>

      {/* Links */}
      <View style={styles.links}>
        <View style={styles.botaoLink}>
          <Text style={styles.textoLink}>GitHub</Text>
        </View>

        <View style={styles.botaoLink}>
          <Text style={styles.textoLink}>LinkedIn</Text>
        </View>
      </View>

      {/* Stats */}
      <View style={styles.stats}>
        <Text style={styles.stat}>👥 {usuario.seguidores} seguidores</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1a0f2e',
    padding: 20,
  },

  avatar: {
    width: 200,
    height: 200,
    borderRadius: 999,
    borderWidth: 3,
    borderColor: '#E1306C',
    marginBottom: 16,
  },

  nome: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 6,
  },

  curso: {
    fontSize: 14,
    color: '#ddd',
    marginBottom: 6,
  },

  bio: {
    fontSize: 14,
    color: '#aaa',
    textAlign: 'center',
    marginBottom: 16,
  },

  frase: {
    fontSize: 13,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 16,
    fontStyle: 'italic',
  },

  links: {
    width: '100%',
    marginBottom: 16,
  },

  botaoLink: {
    backgroundColor: '#E1306C',
    paddingVertical: 12,
    alignItems: 'center',
    marginBottom: 10,
  },

  textoLink: {
    color: '#fff',
    fontWeight: 'bold',
  },

  stats: {
    backgroundColor: 'rgba(255,255,255,0.08)',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  stat: {
    color: '#fff',
    fontSize: 14,
  },
});