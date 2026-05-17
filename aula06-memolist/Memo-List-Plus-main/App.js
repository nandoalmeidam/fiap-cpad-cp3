import { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TarefaItem from './components/TarefaItem';

export default function App() {
  const [tarefas, setTarefas] = useState([]);
  const [texto, setTexto] = useState('');

  useEffect(() => {
    carregarTarefas();
  }, []);

  const carregarTarefas = async () => {
    try {
      const dados = await AsyncStorage.getItem('tarefas');
      if (dados) {
        setTarefas(JSON.parse(dados));
      }
    } catch (erro) {
      console.log('Erro ao carregar tarefas:', erro);
    }
  };

  const salvarTarefas = async (lista) => {
    try {
      await AsyncStorage.setItem('tarefas', JSON.stringify(lista));
    } catch (erro) {
      console.log('Erro ao salvar tarefas:', erro);
    }
  };

  const adicionarTarefa = () => {
    if (!texto.trim()) return;

    const nova = {
      id: Date.now().toString(),
      texto: texto,
      concluida: false,
    };

    const novaLista = [...tarefas, nova];
    setTarefas(novaLista);
    salvarTarefas(novaLista);
    setTexto('');
  };

  const removerTarefa = (id) => {
    const novaLista = tarefas.filter((t) => t.id !== id);
    setTarefas(novaLista);
    salvarTarefas(novaLista);
  };

  const alternarConclusao = (id) => {
    const novaLista = tarefas.map((t) =>
      t.id === id ? { ...t, concluida: !t.concluida } : t
    );

    setTarefas(novaLista);
    salvarTarefas(novaLista);
  };

  const limparTudo = async () => {
    try {
      setTarefas([]);
      await AsyncStorage.removeItem('tarefas');
    } catch (erro) {
      console.log('Erro ao limpar tarefas:', erro);
    }
  };

  const tarefasPendentes = tarefas.filter((t) => !t.concluida).length;

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>MemoList Plus</Text>
      <Text style={styles.subtitulo}>Organize suas tarefas do dia</Text>

      <View style={styles.boxContador}>
        <Text style={styles.contadorTexto}>
          Pendentes: <Text style={styles.contadorNumero}>{tarefasPendentes}</Text>
        </Text>
      </View>

      <TextInput
        value={texto}
        onChangeText={setTexto}
        placeholder="Digite uma nova tarefa..."
        style={styles.input}
      />

      <TouchableOpacity style={styles.botaoAdicionar} onPress={adicionarTarefa}>
        <Text style={styles.textoBotaoAdicionar}>Adicionar tarefa</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botaoLimpar} onPress={limparTudo}>
        <Text style={styles.textoBotaoLimpar}>Limpar tudo</Text>
      </TouchableOpacity>

      <FlatList
        data={tarefas}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TarefaItem
            tarefa={item}
            onRemover={removerTarefa}
            onAlternar={alternarConclusao}
          />
        )}
        ListEmptyComponent={
          <Text style={styles.listaVazia}>Nenhuma tarefa cadastrada ainda.</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    paddingTop: 60,
    backgroundColor: '#f8f9fb',
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#222',
  },
  subtitulo: {
    fontSize: 15,
    color: '#666',
    marginTop: 4,
    marginBottom: 18,
  },
  boxContador: {
    backgroundColor: '#e9f2ff',
    padding: 12,
    borderRadius: 10,
    marginBottom: 15,
  },
  contadorTexto: {
    fontSize: 16,
    color: '#333',
  },
  contadorNumero: {
    fontWeight: 'bold',
    color: '#2f6fed',
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#dcdcdc',
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
    marginBottom: 12,
  },
  botaoAdicionar: {
    backgroundColor: '#2f6fed',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  textoBotaoAdicionar: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  botaoLimpar: {
    backgroundColor: '#e74c3c',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 18,
  },
  textoBotaoLimpar: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  listaVazia: {
    textAlign: 'center',
    marginTop: 30,
    fontSize: 15,
    color: '#777',
  },
});