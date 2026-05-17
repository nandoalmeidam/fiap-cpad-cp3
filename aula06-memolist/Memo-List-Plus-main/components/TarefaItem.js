import { View, Text, TouchableOpacity, StyleSheet, Switch } from 'react-native';

export default function TarefaItem({ tarefa, onRemover, onAlternar }) {
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Text style={[styles.texto, tarefa.concluida && styles.textoConcluido]}>
          {tarefa.texto}
        </Text>

        {tarefa.concluida ? (
          <Text style={styles.statusConcluida}>Tarefa concluída com sucesso!</Text>
        ) : (
          <Text style={styles.statusPendente}>Tarefa pendente</Text>
        )}
      </View>

      <View style={styles.acoes}>
        <Switch
          value={tarefa.concluida}
          onValueChange={() => onAlternar(tarefa.id)}
        />

        <TouchableOpacity style={styles.botaoRemover} onPress={() => onRemover(tarefa.id)}>
          <Text style={styles.remover}>Excluir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 14,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ececec',
  },
  info: {
    marginBottom: 12,
  },
  texto: {
    fontSize: 16,
    color: '#222',
    fontWeight: '500',
  },
  textoConcluido: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
  statusConcluida: {
    marginTop: 6,
    fontSize: 13,
    color: 'green',
    fontWeight: '600',
  },
  statusPendente: {
    marginTop: 6,
    fontSize: 13,
    color: '#e67e22',
    fontWeight: '600',
  },
  acoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  botaoRemover: {
    backgroundColor: '#fbe9e7',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  remover: {
    color: '#c0392b',
    fontWeight: 'bold',
  },
});