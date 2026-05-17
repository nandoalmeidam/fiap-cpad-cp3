import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { useCarrinho } from '../context/CarrinhoContext';

export default function CarrinhoScreen({ voltar }) {
  const { carrinho, limparCarrinho } = useCarrinho();

  const total = carrinho.reduce((acc, item) => acc + item.preco, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>🛒 Meu Carrinho</Text>

      {carrinho.length === 0 ? (
        <Text>Seu carrinho está vazio</Text>
      ) : (
        carrinho.map((item, index) => (
          <Text key={index}>
            {item.nome} - R$ {item.preco.toFixed(2)}
          </Text>
        ))
      )}

      <Text style={styles.total}>Total: R$ {total.toFixed(2)}</Text>

      <TouchableOpacity
          style={styles.resetBtn}
          onPress={limparCarrinho}
        >
          <Text style={styles.btnText}>ZERAR</Text>

        </TouchableOpacity>

      <Button title="Voltar" onPress={voltar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, paddingTop: 60 },
  titulo: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  total: { fontSize: 18, fontWeight: 'bold', marginTop: 20 },
  resetBtn:   { marginTop: 12, backgroundColor: '#ff4d4d', paddingHorizontal: 30, paddingVertical: 12, alignItems: 'center', minWidth: 180 },
});