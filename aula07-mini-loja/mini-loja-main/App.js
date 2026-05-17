import { View } from 'react-native';
import { CarrinhoProvider } from './context/CarrinhoContext';
import ProdutosScreen from './screens/ProdutosScreen';
import CarrinhoScreen from './screens/CarrinhoScreen';
import { useState } from 'react';
export default function App() {
  const [tela, setTela] = useState('produtos');

  return (
    <CarrinhoProvider>
      <View style={{ flex: 1 }}>
        {tela === 'produtos' ? (
          <ProdutosScreen irCarrinho={() => setTela('carrinho')} />
        ) : (
          <CarrinhoScreen voltar={() => setTela('produtos')} />
        )}
      </View>
    </CarrinhoProvider>
  );
}