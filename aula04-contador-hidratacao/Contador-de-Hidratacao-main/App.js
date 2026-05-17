import { useState, useEffect } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);
  const [msg, setMsg] = useState('Toque para começar a contar!');
  const [emoji, setEmoji] = useState('');
  const [corFundo, setCorFundo] = useState('transparent');

  useEffect(() => {
    if (count === 0) setMsg('Toque para começar a contar');
    if (count === 0) setCorFundo('transparent');  
    if (count === 5) setMsg('🔥 Você é incrível!');
    if (count === 8) setMsg('🏆 Meta do dia atingida!');
    if (count === 8) setCorFundo('#000000');
    if (count === 10) setMsg('🚀 Nível pro desbloqueado!');
    if (count === 50) setMsg('🥇 Você já tomou 50 copos de água, parabéns! Continue assim');
  }, [count]);

  return (
    <ImageBackground
      source={{ uri: 'https://i.pinimg.com/236x/f1/d0/f9/f1d0f92c2c1a03e844ee959595fb55f3.jpg' }}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={[styles.container, {backgroundColor: corFundo}]}>
        <Text style={styles.titulo}>CONTADOR DE HIDRATAÇÃO</Text>
        <Text style={styles.msg}>{msg}</Text>
        <Text style={styles.counter}>{count}</Text>
        <Text style={styles.emoji}>{emoji}</Text>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => {setCount(count + 1); setEmoji(emoji + '🥤');
          }}
        >
          <Text style={styles.btnText}>CLIQUE AQUI +</Text>

        </TouchableOpacity>

        <TouchableOpacity
          style={styles.resetBtn}
          onPress={() => {setCount(0); setMsg('Toque para começar a contar'); setEmoji(''); setCorFundo('transparent');
          }}
        >
          <Text style={styles.btnText}>ZERAR</Text>

        </TouchableOpacity>


      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1},
  container:  { flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 20 },
  titulo:     { color: '#000000', fontSize: 25, fontWeight: 'bold', marginBottom: 12, backgroundColor: '#3c42ea', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 6 },
  msg:        { color: '#000000', fontSize: 20, fontWeight: 'bold', marginBottom: 12, backgroundColor: '#fff', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 6 },
  counter:    { color: '#000000', fontSize: 84, fontWeight: 'bold', borderRadius: 12, backgroundColor: '#fff', borderWidth: 3, paddingHorizontal: 25, paddingVertical: 10 },
  btn:        { marginTop: 24, backgroundColor: '#148748', paddingHorizontal: 40, paddingVertical: 16, borderRadius: 50 },
  btnText:    { color: '#fff', fontSize: 20, fontWeight: 'bold' },
  resetBtn:   { marginTop: 12, backgroundColor: '#ff4d4d', paddingHorizontal: 30, paddingVertical: 12, borderRadius: 30, alignItems: 'center', minWidth: 180 },
  emoji:      { fontSize: 30 },
});